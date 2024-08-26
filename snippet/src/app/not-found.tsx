export default function SnippetNotFound() {
    return (
        <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center`}
        >
            <h1 className={`text-2xl font-bold`}>
                Sorry, but we could not find the page!
            </h1>
            <p>it may be moved or deleted or never ever existed</p>
        </div>
    );
}
