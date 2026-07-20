"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

const appLinks = [
  { href: "/listing", label: "Generate Listing" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings", label: "Settings" },
]

export default function AppNavigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 py-4 backdrop-blur supports-backdrop-filter:bg-white/60 dark:bg-neutral-950/95 dark:supports-backdrop-filter:bg-neutral-950/60">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-neutral-950 dark:text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            AI
          </div>
          AI Listing
        </Link>

        {/* Center Navigation */}
        <nav className="flex items-center gap-4">
          {appLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex h-9 items-center rounded-lg px-3 py-1 text-sm font-normal no-underline select-none transition-colors duration-200",
                pathname === link.href
                  ? "bg-neutral-100 text-gray-900 dark:bg-neutral-800 dark:text-gray-100"
                  : "text-gray-600 hover:bg-neutral-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: User */}
        <Link
          href="/login"
          className="text-sm font-normal text-gray-600 underline-offset-4 transition-colors duration-150 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          Sign Out
        </Link>
      </div>
    </header>
  )
}
