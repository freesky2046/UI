import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="container mx-auto flex flex-col items-center gap-4 py-8 px-4 md:px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} AI Listing. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-gray-600 underline-offset-4 transition-colors duration-150 hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-600 underline-offset-4 transition-colors duration-150 hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-gray-600 underline-offset-4 transition-colors duration-150 hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-600 underline-offset-4 transition-colors duration-150 hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
