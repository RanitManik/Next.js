"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";

export default function SnippetCreatePage() {
    const [formState, action] = useFormState(actions.createSnippet, {
        message: "",
    });

    return (
        <form action={action} className={``}>
            <div className={`mb-6 border-b border-b-gray-400 pb-2`}>
                <h1 className={`text-4xl font-bold`}>Create a Snippet</h1>
            </div>
            <div className={`flex flex-col gap-4`}>
                <div className={`flex flex-col gap-4`}>
                    <label className={`w-12`} htmlFor="title">
                        Title
                    </label>
                    <input
                        className={`w-full rounded border p-2`}
                        name={`title`}
                        id={`title`}
                        type="text"
                    />
                </div>
                <div className={`flex flex-col gap-4`}>
                    <label className={`w-12`} htmlFor="code">
                        Code
                    </label>
                    <textarea
                        rows={4}
                        className={`w-full rounded border p-2`}
                        name={`code`}
                        id={`code`}
                    />
                </div>
                <div>
                    {formState.message && (
                        <p
                            className={`my-2 rounded border border-red-400 bg-red-200 p-2`}
                        >
                            {formState.message}
                        </p>
                    )}
                </div>
                <button
                    className={`rounded bg-blue-600 px-4 py-2 text-white ring-blue-600 transition hover:bg-blue-400 focus-visible:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                    type={`submit`}
                >
                    Create
                </button>
            </div>
        </form>
    );
}
