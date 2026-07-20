import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Languages, Search, Zap, ShieldCheck, Sparkles } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Smart Title Generator",
    description: "Auto-generates conversion-optimized titles that follow Amazon SEO best practices and boost your search rankings.",
  },
  {
    icon: Languages,
    title: "Bullet Points That Sell",
    description: "AI turns your product features into compelling, native-sounding English bullet points that highlight key differentiators.",
  },
  {
    icon: Sparkles,
    title: "A+ Content Creator",
    description: "Generate brand story and detailed product descriptions with structured paragraphs that elevate your listing's professionalism.",
  },
  {
    icon: Search,
    title: "Backend Search Terms",
    description: "Intelligently extracts long-tail keywords and fills hidden search term fields to maximize discoverability.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Results",
    description: "Get a complete, ready-to-publish listing within seconds of entering your product details.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built-In",
    description: "All generated content follows Amazon's latest policies — no restricted claims, no trademark issues.",
  },
]

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-900 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal text-gray-500 dark:text-gray-400">
            Core Features
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl sm:font-bold text-gray-900 dark:text-gray-100">
            An AI Listing Engine Built for Sellers
          </h2>
          <p className="max-w-[700px] text-gray-800 dark:text-gray-200 text-lg font-medium">
            From title and bullets to A+ Content and search terms — one platform, one click, your entire Amazon listing ready to publish.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="transition-shadow duration-300 hover:shadow-md border-muted">
                <CardHeader>
                  <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-200">{feature.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}