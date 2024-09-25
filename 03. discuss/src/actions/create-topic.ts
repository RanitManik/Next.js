"use server";

import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/path";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
    name: z
        .string()
        .min(3)
        .regex(/^[a-z-]+$/, {
            message:
                "Must contain only lowercase letters or dashes, without spaces",
        }),
    description: z.string().min(10).max(100),
});

interface createTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[]; // errors occurred on the form level.
        // e.g.,If the user is not authenticated
        // then the form should not be submitted and though an error
    };
}

export async function CreateTopic(
    formState: createTopicFormState,
    formData: FormData,
): Promise<createTopicFormState> {
    const result = createTopicSchema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
    });

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    const session = await auth();

    if (!session || !session.user) {
        return {
            errors: {
                _form: ["You must be signed in to perform this action."],
            },
        };
    }

    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description,
            },
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message],
                },
            };
        } else {
            return {
                errors: {
                    _form: ["something went wrong!"],
                },
            };
        }
    }

    revalidatePath("/");

    redirect(paths.topicShow(topic.slug));
}
