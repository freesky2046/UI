"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Does the AI-generated content comply with Amazon's policies?",
    answer: "Yes. Our AI follows Amazon's latest content guidelines, avoiding prohibited claims, trademarked terms, and exaggerated statements. We recommend a quick human review before publishing to ensure the description matches your actual product.",
  },
  {
    question: "Which product categories are supported?",
    answer: "All of them — Home & Kitchen, Electronics, Sports & Outdoors, Beauty & Personal Care, Clothing & Accessories, and more. Just enter your product details and the AI tailors the copy to your specific category.",
  },
  {
    question: "How good is the English quality?",
    answer: "The AI produces natural, native-sounding American English that aligns with how real Amazon shoppers read and buy. No stiff translations — just clean, persuasive copy that builds trust with your customers.",
  },
  {
    question: "What are the limits on the free plan?",
    answer: "The free plan includes 3 full listing generations per day — each with title, bullet points, A+ Content, and backend search terms. Upgrade to Pro for unlimited usage.",
  },
  {
    question: "Can I save and edit the generated content?",
    answer: "Absolutely. You can copy everything in one click, or edit and refine the output right on the page before exporting. All your history is saved automatically so you can revisit anytime.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-16 dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal text-gray-500 dark:text-gray-400">
            FAQ
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Got Questions? We've Got Answers
          </h2>
          <p className="max-w-[600px] text-lg font-medium text-gray-800 dark:text-gray-200">
            Don't see what you're looking for? Reach out to our team — we respond within 24 hours.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto max-w-3xl divide-y divide-gray-200 dark:divide-neutral-800">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-white"
                >
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ease-out dark:text-gray-400",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
