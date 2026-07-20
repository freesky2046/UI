import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import Link from "next/link";

export default function HomeNavigationMenu() {
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
        <NavigationMenu.Root className="min-w-max text-neutral-950 dark:text-white">
          <NavigationMenu.List className="relative flex gap-4">
            <NavigationMenu.Item>
              <NavLink href="/">Home</NavLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavLink href="/#how-it-works">How It Works</NavLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavLink href="/pricing">Pricing</NavLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavLink href="/about">About</NavLink>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-normal text-gray-600 underline-offset-4 transition-colors duration-150 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            Sign In
          </Link>
          <Link href="/register">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink(props: NavigationMenu.Link.Props) {
  return (
    <NavigationMenu.Link
      className="flex h-9 items-center rounded-lg px-3 py-1 text-sm font-normal text-gray-600 no-underline select-none transition-colors duration-200 hover:bg-neutral-100 hover:text-gray-900 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-100 dark:focus-visible:outline-white"
      render={<a />}
      {...props}
    />
  );
}
