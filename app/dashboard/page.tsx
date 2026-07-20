import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, FileText, BarChart3, Clock, ArrowRight, Plus } from "lucide-react"
import Link from "next/link"
import AppNavigation from "../AppNavigation"

const recentListings = [
  { id: "1", name: "Stainless Steel Water Bottle 500ml", date: "Jul 20, 2026", status: "Ready" },
  { id: "2", name: "Bamboo Cutting Board Set", date: "Jul 19, 2026", status: "Draft" },
  { id: "3", name: "Memory Foam Travel Pillow", date: "Jul 18, 2026", status: "Ready" },
  { id: "4", name: "Bluetooth Shower Speaker", date: "Jul 17, 2026", status: "Ready" },
  { id: "5", name: "Waterproof Dry Bag 20L", date: "Jul 16, 2026", status: "Draft" },
]

const stats = [
  { label: "Listings Generated", value: "127", icon: FileText },
  { label: "This Month", value: "42", icon: BarChart3 },
  { label: "Credits Left", value: "Unlimited", icon: Sparkles },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      <AppNavigation />
      <div className="container mx-auto px-4 py-8 md:px-6 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Welcome back, John
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Here&apos;s what&apos;s happening with your listings today.
            </p>
          </div>
          <Link href="/listing">
            <Button className="gap-2">
              <Plus className="size-4" />
              New Listing
            </Button>
          </Link>
        </div>
        {/* Stats cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {stat.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent listings */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Listings</CardTitle>
              <CardDescription>Your most recently generated Amazon listings</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentListings.map((listing) => (
                <div
                  key={listing.id}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border p-3 transition-colors duration-150 hover:bg-gray-50 dark:hover:bg-neutral-800"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <FileText className="size-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                        {listing.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <Clock className="size-3 text-gray-500 dark:text-gray-500" />
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {listing.date}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <Badge
                      variant={listing.status === "Ready" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {listing.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="gap-1">
                      View <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
