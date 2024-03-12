import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cats",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <p className="flex justify-center w-[100%] p-4 shadow-lg shadow-cyan-500/10 ">
          고양이에 대한 모든 것
        </p>
        <nav className="flex justify-center">
          <div className="flex">
            <Link href="/" className="p-4">
              HOME
            </Link>
            <Link href="/ssg" className="p-4">
              SSG
            </Link>
            <Link href="/isr" className="p-4">
              ISR
            </Link>
            <Link href="/ssr" className="p-4">
              SSR
            </Link>
            <Link href="/csr" className="p-4">
              CSR
            </Link>
          </div>
        </nav>
      </body>
    </html>
  );
}
