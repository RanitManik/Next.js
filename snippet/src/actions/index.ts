"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code },
    });

    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    });

    revalidatePath("/");
    redirect(`/`);
}

export async function createSnippet(
    formState: { message: string },
    formData: FormData,
) {
    try {
        const title = formData.get("title");
        const code = formData.get("code");

        if (typeof title !== "string" || title.length < 3) {
            return {
                message: `Title must be at least 3 characters long`,
            };
        }

        if (typeof code !== "string" || code.length < 10) {
            return {
                message: `Code must be at least 10 characters long`,
            };
        }

        if (code.length > 5000) {
            return {
                message: `Code must be less than 5000 characters`,
            };
        }

        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            },
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                message: `Error: ${error.message}`,
            };
        } else {
            return {
                message: "Something went wrong",
            };
        }
    }

    revalidatePath("/");
    redirect("/");
}
