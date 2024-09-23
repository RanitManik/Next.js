import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

console.log(actions);

export default async function Home() {
    const session = await auth();

    return (
        <div className="flex min-h-svh flex-col items-center justify-center">
            <form action={actions.signIn}>
                <Button type="submit">Sign In</Button>
            </form>
            <form action={actions.signOut}>
                <Button type="submit">Sign out</Button>
            </form>

            {session?.user ? (
                <div>{JSON.stringify(session.user)}</div>
            ) : (
                <div>Singed Out</div>
            )}

            <Profile />
        </div>
    );
}
