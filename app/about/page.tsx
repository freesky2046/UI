import { Badge } from "@/components/ui/badge"
import { Users, Zap, Globe } from "lucide-react"
import HomeNavigationMenu from "../HomeNavigation"
import Footer from "../Footer"

const values = [
  {
    icon: Zap,
    title: "Speed First",
    description: "We believe Amazon sellers should spend their time selling — not writing copy. Our AI generates complete listings in seconds so you can focus on what matters most: growing your business.",
  },
  {
    icon: Users,
    title: "Built for Sellers",
    description: "Every feature is designed with real Amazon sellers in mind. From keyword optimization to A+ Content, we speak the language of Amazon so you don't have to guess what works.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Whether you sell on Amazon.com in the US or across international marketplaces, our AI generates native-quality English content tailored for American consumers.",
  },
]

const stats = [
  { label: "Sellers Trust Us", value: "2,500+" },
  { label: "Listings Generated", value: "50,000+" },
  { label: "Countries", value: "30+" },
  { label: "Team Members", value: "12" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      <HomeNavigationMenu />
      <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6 space-y-12">
        {/* Mission */}
        <section className="flex flex-col items-center text-center space-y-4">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal text-gray-500 dark:text-gray-400">
            Our Mission
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl sm:font-bold text-gray-900 dark:text-gray-100">
            Making Amazon Content Creation Effortless
          </h2>
          <p className="max-w-2xl text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
            We started AI Listing because we saw sellers spending hours writing and optimizing their product pages — time that could be spent growing their business. Our AI handles the heavy lifting so you can focus on selling.
          </p>
        </section>

        {/* Values */}
        <section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center rounded-lg border border-border p-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            Our Story
          </h2>
          <div className="space-y-4 text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            <p>
              In 2024, a group of e-commerce professionals and AI engineers noticed a frustrating pattern: Amazon sellers — talented entrepreneurs with amazing products — were spending 4 to 6 hours writing and polishing a single product listing. Keywords, bullet points, A+ Content, backend search terms — the barrier to entry was unnecessarily high.
            </p>
            <p>
              So we built AI Listing. Our platform takes the product knowledge that sellers already have and turns it into polished, SEO-optimized content that converts. No copywriting degree required. No guessing what Amazon's algorithm wants.
            </p>
            <p>
              Today, over 2,500 sellers trust AI Listing to generate listings that look professional, rank higher, and sell more. And we're just getting started.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
