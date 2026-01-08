import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nguyen Truong Gia - .NET Developer",
    description:
        "Portfolio of Nguyen Truong Gia, a .NET Developer based in Ho Chi Minh City, Vietnam",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-gray-50`}>{children}</body>
        </html>
    );
}
