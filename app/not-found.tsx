import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted dark:bg-neutral-900 px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <p className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          404
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
          Page Not Found
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="gap-2">
            <ArrowLeft className="size-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
