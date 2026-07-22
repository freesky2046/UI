import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      {/* Background gradient decoration */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-center">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal gap-1 bg-white/10 hover:bg-white/20 text-primary-foreground border-none">
            <Sparkles className="w-3.5 h-3.5" />
            Free to start · No credit card required
          </Badge>

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl sm:font-bold">
            Ready to Level Up Your Amazon Sales?
          </h2>

          <p className="text-primary-foreground/80 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Generate your first AI-powered listing today. Professional titles, bullet points, and A+ Content that make your products stand out from the competition.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/listing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold gap-2 shadow-md bg-white text-primary hover:bg-white/90 border-white">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-primary-foreground bg-transparent">
              Talk to Sales
            </Button>
          </div>

          <p className="text-xs text-primary-foreground/60 pt-2">
            All categories supported · Native English · Amazon compliant · Available 24/7
          </p>
        </div>
      </div>
    </section>
  )
}
