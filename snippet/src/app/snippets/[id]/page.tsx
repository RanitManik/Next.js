import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";
import SnippetViewComponent from "@/components/SnippetViewComponent";

interface SnippetShowPageProps {
    params: {
        id: string;
    };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id),
        },
    });

    if (!snippet) {
        return notFound();
    }

    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

    return (
        <div className="rounded-lg bg-gray-100 px-6 py-4 shadow-md">
            <div
                className={`mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-b-gray-400 pb-2`}
            >
                <h1 className="text-2xl font-bold">{snippet.title}</h1>
                <div className="flex items-center gap-4">
                    <Link
                        className={`rounded-md bg-blue-600 px-4 py-2 text-white ring-blue-600 transition hover:bg-blue-400 focus-visible:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                        href={`/snippets/${snippet.id}/edit`}
                    >
                        Edit
                    </Link>
                    <form action={deleteSnippetAction}>
                        <button
                            className={`rounded-md bg-blue-600 px-4 py-2 text-white ring-blue-600 transition hover:bg-blue-400 focus-visible:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
            <SnippetViewComponent code={snippet.code} />
        </div>
    );
}

export async function generateStaticParams() {
    const snippets = await db.snippet.findMany();

    return snippets.map((snippet) => {
        return {
            id: snippet.id.toString(),
        };
    });
}
