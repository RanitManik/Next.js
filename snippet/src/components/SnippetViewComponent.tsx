"use client";

import { Editor } from "@monaco-editor/react";

function SnippetViewComponent({ code }: { code: string }) {
    return (
        <Editor
            height="70vh"
            theme="vs-dark"
            language="javascript"
            value={code}
            options={{
                minimap: { enabled: false },
                readOnly: true,
                scrollBeyondLastLine: false,
                mouseWheelZoom: true,
            }}
        />
    );
}

export default SnippetViewComponent;
