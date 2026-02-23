import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import React from "react";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});

export const metadata: Metadata = {
    title: "Espera's Website",
    description: "Built with Puck and Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        <Toaster/>
        </html>
    );
}
