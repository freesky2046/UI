import * as React from "react";
import { NavigationMenu } from "@base-ui/react/navigation-menu";

export default function HomeNavigationMenu() {
  return (
    <div className="container mx-auto flex items-center justify-between py-6">
      {/* Brand Logo */}
      <a href="/" className="flex items-center gap-2 text-xl font-semibold text-neutral-950 dark:text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
          UI
        </div>
        UI Kit
      </a>

      <NavigationMenu.Root className="min-w-max text-neutral-950 dark:text-white">
        <NavigationMenu.List className="relative flex gap-4">
          <NavigationMenu.Item>
            <Link
              className={triggerClassName}
              href="https://github.com/mui/base-ui"
            >
              Feature
            </Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <Link
              className={triggerClassName}
              href="https://github.com/mui/base-ui"
            >
              GitHub
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}

function Link(props: NavigationMenu.Link.Props) {
  return (
    <NavigationMenu.Link
      render={
        // Use the `render` prop to render your framework's Link component
        // for client-side routing.
        // e.g. `<NextLink href={props.href} />` instead of `<a />`.
        <a />
      }
      {...props}
    />
  );
}

function CaretDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      {...props}
      style={{ display: "block", ...props.style }}
    >
      <path d="M12 6H4l4 4.5z" />
    </svg>
  );
}

const triggerClassName =
  "flex h-8 items-center justify-center gap-2 bg-transparent px-2 text-base font-normal text-gray-800 no-underline select-none transition-colors duration-200 min-[501px]:px-3 hover:bg-neutral-100 data-popup-open:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950 dark:focus-visible:outline-white dark:text-gray-200 dark:hover:bg-neutral-800 dark:data-popup-open:bg-neutral-800";

const contentClassName =
  "h-full w-[calc(100vw-40px)] p-2 min-[500px]:w-max min-[500px]:max-w-[400px] " +
  "transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] " +
  "data-starting-style:opacity-0 data-ending-style:opacity-0 " +
  "data-starting-style:data-[activation-direction=left]:translate-x-[-50%] " +
  "data-starting-style:data-[activation-direction=right]:translate-x-[50%] " +
  "data-ending-style:data-[activation-direction=left]:translate-x-[50%] " +
  "data-ending-style:data-[activation-direction=right]:translate-x-[-50%]";

const linkCardClassName =
  "relative block h-full w-full border-0 bg-transparent p-2 text-left text-inherit no-underline hover:bg-neutral-100 data-popup-open:bg-neutral-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950 dark:focus-visible:outline-white dark:hover:bg-neutral-800 dark:data-popup-open:bg-neutral-800";

const overviewLinks = [
  {
    href: "/react/overview/quick-start",
    title: "Quick Start",
    description: "Install and assemble your first component.",
  },
  {
    href: "/react/overview/accessibility",
    title: "Accessibility",
    description: "Learn how we build accessible components.",
  },
  {
    href: "/react/overview/releases",
    title: "Releases",
    description: "See what’s new in the latest Base UI versions.",
  },
  {
    href: "/react/overview/about",
    title: "About",
    description: "Learn more about Base UI and our mission.",
  },
] as const;

const handbookLinks = [
  {
    href: "/react/handbook/styling",
    title: "Styling",
    description:
      "Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.",
  },
  {
    href: "/react/handbook/animation",
    title: "Animation",
    description:
      "Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.",
  },
  {
    href: "/react/handbook/composition",
    title: "Composition",
    description:
      "Base UI components can be replaced and composed with your own existing components.",
  },
] as const;
