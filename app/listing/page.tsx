"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Copy, Check, Loader2 } from "lucide-react"
import AppNavigation from "../AppNavigation"

export default function ListingPage() {
  const [loading, setLoading] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setGenerated(true)
    }, 1500)
  }

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      <AppNavigation />

      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: User input */}
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
              <CardDescription>Fill in your product details to generate listing content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    placeholder="e.g. Stainless Steel Water Bottle 500ml"
                    defaultValue="Stainless Steel Vacuum Insulated Water Bottle 500ml"
                    disabled={loading}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      placeholder="Home & Kitchen"
                      defaultValue="Home & Kitchen"
                    disabled={loading}
                  />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price (USD)</Label>
                    <Input
                      id="price"
                      placeholder="29.99"
                      defaultValue="29.99"
                    disabled={loading}
                  />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="keywords">Target Keywords</Label>
                  <Input
                    id="keywords"
                    placeholder="Separate keywords with commas"
                    defaultValue="insulated water bottle, stainless steel, thermal flask, BPA free"
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Separate keywords with commas
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="features">Product Features (Bullet Points)</Label>
                  <Textarea
                    id="features"
                    placeholder="One feature per line"
                    rows={5}
                    defaultValue={
                      "Double-wall vacuum insulation — keeps drinks cold 24hrs, hot 12hrs\nFood-grade 304 stainless steel, 100% BPA free\nLeak-proof lid with silicone seal, fits most cup holders\nErgonomic design with comfortable grip, 500ml capacity\nAvailable in 6 colors, includes cleaning brush"
                    }
                    disabled={loading}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    One feature per line — AI will convert to Amazon bullet format
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tone">Brand Tone</Label>
                  <Input
                    id="tone"
                    placeholder="Professional / Casual / Warm"
                    defaultValue="Professional"
                    disabled={loading}
                  />
                </div>
                <Button onClick={handleGenerate} className="gap-2" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-4" />
                      Generate Listing
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right: Generated result */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>A+ Content Preview</span>
                {generated && (
                  <Button variant="outline" size="sm" className="gap-1.5" onClick={handleCopy}>
                    {copied ? (
                      <>
                        <Check className="size-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" />
                        Copy All
                      </>
                    )}
                  </Button>
                )}
              </CardTitle>
              <CardDescription>
                {generated
                  ? "Review your AI-generated content — ready to publish on Amazon"
                  : "Fill in your product details on the left and click Generate Listing"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {generated ? (
                <div className="flex flex-col gap-6">
                  {/* Product Title */}
                  <div>
                    <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-500">
                      Product Title
                    </p>
                    <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                      Stainless Steel Vacuum Insulated Water Bottle 500ml - 24H Cold &amp; 12H Hot, BPA Free Leak-Proof Thermal Flask for Sports, Travel &amp; Outdoor
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div>
                    <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-500">
                      Bullet Points
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex gap-2">
                        <span className="shrink-0 text-primary font-bold">&#8226;</span>
                        DOUBLE-WALL VACUUM INSULATION: Keeps beverages cold for up to 24 hours and hot for up to 12 hours. Perfect for ice water during summer hikes or hot coffee on winter commutes.
                      </li>
                      <li className="flex gap-2">
                        <span className="shrink-0 text-primary font-bold">&#8226;</span>
                        FOOD-GRADE 304 STAINLESS STEEL: 100% BPA-free, rust-resistant, and odor-free. Every sip is clean and safe for you and your family.
                      </li>
                      <li className="flex gap-2">
                        <span className="shrink-0 text-primary font-bold">&#8226;</span>
                        LEAK-PROOF &amp; TRAVEL-FRIENDLY: Secure screw-on lid with silicone seal prevents spills. Fits most car cup holders, ideal for gym, office, camping or school.
                      </li>
                      <li className="flex gap-2">
                        <span className="shrink-0 text-primary font-bold">&#8226;</span>
                        ERGONOMIC DESIGN WITH 500ML CAPACITY: Slim grip handle and lightweight build make it comfortable to carry. Large enough to keep you hydrated without constant refills.
                      </li>
                      <li className="flex gap-2">
                        <span className="shrink-0 text-primary font-bold">&#8226;</span>
                        MULTIPLE COLORS + FREE CLEANING BRUSH: Available in 6 stylish matte colors. Includes a long-handle cleaning brush to easily reach the bottom of your bottle.
                      </li>
                    </ul>
                  </div>

                  {/* Product Description */}
                  <div>
                    <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-500">
                      Product Description (A+ Content)
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          Premium Hydration, Engineered for Your Lifestyle
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          Whether you&apos;re conquering mountain trails or powering through back-to-back meetings, our 500ml insulated water bottle delivers the perfect temperature with every sip. Crafted from food-grade 304 stainless steel, it combines durability with clean, pure taste.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          All-Day Temperature Control
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          Advanced double-wall vacuum technology keeps ice water refreshing for 24 hours and coffee steaming hot for 12. Say goodbye to lukewarm drinks and hello to all-day satisfaction.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                          Built to Last, Designed to Impress
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          The powder-coated matte finish resists scratches and fingerprints, while the leak-proof lid gives you confidence on the go. Available in 6 colors, there&apos;s one for every personality.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Search Terms */}
                  <div>
                    <p className="mb-2 text-xs font-medium text-gray-500 dark:text-gray-500">
                      Backend Search Terms (Hidden Keywords)
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "insulated water bottle", "stainless steel flask", "thermal cup",
                        "reusable sports bottle", "BPA free bottle", "travel mug",
                        "cold drink container", "hot beverage flask", "office water bottle",
                        "gym hydration", "vacuum insulated tumbler", "metal water bottle",
                      ].map((kw) => (
                        <Badge key={kw} variant="secondary">
                          {kw}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Sparkles className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Ready to Generate
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                      Enter your product details on the left and hit Generate
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
