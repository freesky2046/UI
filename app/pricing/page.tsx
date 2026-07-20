import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"
import HomeNavigationMenu from "../HomeNavigation"
import Footer from "../Footer"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    description: "For sellers just getting started",
    price: "$0",
    period: "/month",
    features: [
      "3 listing generations per day",
      "Title + Bullet Points",
      "Backend search terms",
      "Basic keyword suggestions",
      "Community support",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious Amazon sellers",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited listing generations",
      "Everything in Free, plus",
      "A+ Content generation",
      "Brand story builder",
      "Priority keyword optimization",
      "Save & export history",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    variant: "default" as const,
    popular: true,
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted dark:bg-neutral-900">
      <HomeNavigationMenu />
      <div className="flex-1 container mx-auto max-w-3xl px-4 py-16 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Choose the plan that fits your Amazon business. Upgrade anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.popular && (
                    <Badge variant="default" className="text-xs">
                      Most Popular
                    </Badge>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {plan.price}
                  </span>
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="mt-0.5 size-4 shrink-0 text-green-600 dark:text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/register" className="w-full">
                  <Button variant={plan.variant} className="w-full">
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
