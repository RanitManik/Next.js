import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
    const snippets = await db.snippet.findMany();

    return (
        <div>
            <div
                className={`mb-6 flex w-full items-center justify-between border-b border-b-gray-400 pb-2`}
            >
                <h1 className={`text-4xl font-bold`}>Snippets</h1>
                <Link
                    className={`rounded-md bg-blue-600 px-4 py-2 text-white ring-blue-600 transition hover:bg-blue-400 focus-visible:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                    href={`/snippets/new`}
                >
                    New Snippet
                </Link>
            </div>
            <div className={`grid max-h-[70vh] gap-2 overflow-y-scroll`}>
                {snippets.map((snippet) => {
                    return (
                        <Link
                            key={snippet.id}
                            className={`flex items-center justify-between gap-10 rounded border bg-gray-100 p-2 text-xl ring-blue-600 transition hover:bg-gray-200 focus-visible:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                            href={`/snippets/${snippet.id}`}
                        >
                            <p className={`text-2xl`}>{snippet.title}</p>
                            <span
                                className={`border-l-2 border-blue-500 bg-blue-200 px-4 font-semibold text-blue-600 hover:underline`}
                            >
                                View
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
