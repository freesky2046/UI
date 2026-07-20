import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-primary/[0.06] via-transparent to-transparent dark:from-primary/[0.08] dark:bg-neutral-950">
      {/* Background glow ornaments */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[120px] pointer-events-none dark:bg-primary/18" />
      <div className="absolute -top-20 -right-40 w-[500px] h-[500px] bg-primary/12 rounded-full blur-[100px] pointer-events-none dark:bg-primary/18" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/8 rounded-full blur-[80px] pointer-events-none dark:bg-primary/12" />

      <div className="container mx-auto relative flex flex-col items-center justify-center gap-6 pt-16 pb-16 text-center">
        {/* Announcement badge */}
        <Badge variant="outline" className="gap-2 px-3 py-1 text-xs font-normal text-gray-500 dark:text-gray-400">
          🎉 AI-Powered · Generate Listings Instantly <ArrowRight className="w-4 h-4" />
        </Badge>

        {/* Main heading */}
        <h1 className="font-bold tracking-tight text-3xl text-gray-900 dark:text-gray-100">
          Create Amazon Listings with AI in Minutes
        </h1>
        <p className="max-w-[42rem] text-gray-800 dark:text-gray-200 text-lg font-medium">
          Enter your product details and AI instantly generates titles, bullet points, A+ Content, and backend search terms — all optimized for higher conversion.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/listing">
            <Button size="lg" className="gap-2">
              Generate Your Listing <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="gap-2">
            <Play className="w-4 h-4" /> Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}