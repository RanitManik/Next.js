"use client";

import { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
    snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = "") => {
        setCode(value);
    };

    const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

    return (
        <div>
            <Editor
                height={`80vh`}
                theme={`vs-dark`}
                language={`javascript`}
                defaultValue={code}
                options={{
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    mouseWheelZoom: true,
                }}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button
                    className={`rounded-md bg-blue-600 px-4 py-2 text-white ring-blue-600 transition hover:bg-blue-400 focus-visible:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                >
                    Save
                </button>
            </form>
        </div>
    );
}
