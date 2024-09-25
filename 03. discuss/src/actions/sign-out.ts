"use server";

import * as auth from "@/auth";

export async function SignOut() {
    // @ts-ignore
    return auth.signOut("github");
}
