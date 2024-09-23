import React from "react";
import Link from "next/link";

export const HeaderComponent = () => {
    return (
        <div className={`fixed z-10 w-full text-white`}>
            <nav className={`mx-auto flex items-center justify-between p-8`}>
                <Link className={`text-3xl font-bold`} href="/">
                    Home
                </Link>
                <div className={`space-x-8 text-xl`}>
                    <Link href="/performance">Performance</Link>
                    <Link href="/reliability">Reliability</Link>
                    <Link href="/scale">Scale</Link>
                </div>
            </nav>
        </div>
    );
};
