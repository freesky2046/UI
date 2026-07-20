import { Badge } from "@/components/ui/badge"
import { ClipboardList, Wand2, Rocket } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Fill In Your Product Info",
    description: "Enter your product name, key features, and target keywords. Just tell the AI what you're selling.",
  },
  {
    step: "02",
    icon: Wand2,
    title: "AI Does the Heavy Lifting",
    description: "Hit generate and the AI writes your title, bullet points, A+ Content, and backend search terms in seconds.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Copy, Paste, Publish",
    description: "Review the output, copy everything in one click, and paste it directly into Amazon Seller Central. Done.",
  },
]

export default function HowToUseSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal text-gray-500 dark:text-gray-400">
            How It Works
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl sm:font-bold text-gray-900 dark:text-gray-100">
            From Product Idea to Published Listing in 3 Steps
          </h2>
          <p className="max-w-[700px] text-gray-800 dark:text-gray-200 text-lg font-medium">
            No copywriting experience needed. Just describe what you sell and let AI handle the rest.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-border" />
              )}

              {/* Step number + icon */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <item.icon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Step title */}
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">
                {item.title}
              </h3>

              {/* Step description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[280px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
