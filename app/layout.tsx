import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./components/theme-toggle";

export const metadata: Metadata = {
  title: "AI Tools Showcase - 探索最好的AI工具",
  description: "发现和探索最新、最实用的AI工具，提升你的工作效率",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      <html lang="zh-CN" className="dark">
        <body className="min-h-screen bg-bg text-primary">
          <nav className="sticky top-0 z-50 border-b border-subtle bg-panel/95 backdrop-blur supports-[backdrop-filter]:bg-panel/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-brand-violet" />
                  <Link href="/" className="text-xl font-semibold text-linear">
                    AI Tools
                  </Link>
                </div>
                <div className="hidden items-center gap-6 md:flex">
                  <Link
                    href="/"
                    className="text-sm font-medium text-secondaryText hover:text-primary transition-colors"
                  >
                    首页
                  </Link>
                  <Link
                    href="/tools"
                    className="text-sm font-medium text-secondaryText hover:text-primary transition-colors"
                  >
                    工具列表
                  </Link>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-secondaryText hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <button className="button-ghost text-sm">提交工具</button>
                </div>
              </div>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}