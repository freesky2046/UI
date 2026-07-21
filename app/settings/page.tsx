import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AppNavigation from "../AppNavigation"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      <AppNavigation />
      <div className="container mx-auto max-w-2xl px-4 py-8 md:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
          Account Settings
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          View your account information
        </p>

        <div className="space-y-8">
          {/* Email */}
          <Card>
            <CardHeader>
              <CardTitle>Email Address</CardTitle>
              <CardDescription>
                Used for login and important notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-base font-normal text-gray-800 dark:text-gray-200">
                john.doe@example.com
              </div>
            </CardContent>
          </Card>

          {/* Subscription */}
          <Card>
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>
                Your plan and billing details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Pro Plan
                    </p>
                    <Badge variant="secondary" className="text-xs font-normal text-gray-500">
                      Current
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    $29.99 / month · Next billing: Aug 20, 2026
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
