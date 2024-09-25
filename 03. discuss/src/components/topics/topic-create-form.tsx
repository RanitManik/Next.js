"use client";

import { useFormState } from "react-dom";
import {
    Button,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Textarea,
    Input,
} from "@nextui-org/react";
import * as actions from "@/actions";

function TopicCreateForm() {
    const [formState, action] = useFormState(actions.CreateTopic, {
        errors: {},
    });
    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button className="bg-blue-600 text-white">
                    Create a Topic
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4">
                        <h1 className="text-lg">Create a Topic</h1>
                        <Input
                            label="Name"
                            name="name"
                            labelPlacement="outside"
                            placeholder="Enter Name of the Topic"
                            isInvalid={!!formState.errors.name}
                            errorMessage={formState.errors.name?.join(", ")}
                        />
                        <Textarea
                            label="Description"
                            name="description"
                            labelPlacement="outside"
                            placeholder="Describe your topic"
                            isInvalid={!!formState.errors.description}
                            errorMessage={formState.errors.description?.join(
                                ", ",
                            )}
                        />
                        {formState.errors._form && (
                            <div className="rounded border border-red-400 bg-red-200 p-2">
                                <span className="text-red-600">
                                    {formState.errors._form.join(", ")}
                                </span>
                            </div>
                        )}
                        <Button type="submit">Create Topic</Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}

export default TopicCreateForm;
