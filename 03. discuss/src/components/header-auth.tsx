"use client";

import React from "react";
import {
    Avatar,
    Button,
    NavbarItem,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Spinner,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";

function HeaderAuth() {
    const session = useSession();

    let authContent: React.ReactNode;

    if (session.status === "loading") {
        authContent = <Spinner />;
    } else if (session.data?.user) {
        authContent = (
            <Popover placement="left">
                <PopoverTrigger>
                    <Avatar src={session.data.user.image || ""} />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-4">
                        <form action={actions.SignOut}>
                            <Button type="submit">Sign Out</Button>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        );
    } else {
        authContent = (
            <>
                <NavbarItem>
                    <form action={actions.SignIn}>
                        <Button
                            type="submit"
                            variant="bordered"
                            color="secondary"
                        >
                            Sign In
                        </Button>
                    </form>
                </NavbarItem>
                <NavbarItem>
                    <form action={actions.SignIn}>
                        <Button type="submit" variant="flat" color="primary">
                            Sign Up
                        </Button>
                    </form>
                </NavbarItem>
            </>
        );
    }

    return authContent;
}

export default HeaderAuth;
