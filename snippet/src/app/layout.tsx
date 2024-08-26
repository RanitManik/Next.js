import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Snippet",
    description: "Create a new snippet",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-svh`}>
                <main
                    className={`container mx-auto h-full px-4 pt-12 sm:px-6 md:px-8 lg:px-12`}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
