"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Loader2, CheckCircle } from "lucide-react"
import AppNavigation from "../AppNavigation"

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      <AppNavigation />
      <div className="container mx-auto max-w-2xl px-4 py-8 md:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
          Account Settings
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Manage your account details and billing
        </p>

        {success && (
          <div className="mb-6 flex items-center gap-2 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
            <CheckCircle className="size-4 shrink-0" />
            Changes saved successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Account info */}
            <Card>
              <CardHeader>
                <CardTitle>Account Info</CardTitle>
                <CardDescription>Manage your email and login credentials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="john.doe@example.com"
                      placeholder="you@example.com"
                      disabled={loading}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      This email is used for login and important notifications
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="Enter current password"
                      disabled={loading}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      disabled={loading}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Re-enter new password"
                      disabled={loading}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Billing info */}
            <Card>
              <CardHeader>
                <CardTitle>Billing</CardTitle>
                <CardDescription>Manage your subscription and payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="plan">Current Plan</Label>
                    <div className="flex items-center gap-4 rounded-lg border border-border p-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          Pro Plan
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          $29.99 / month · Next billing: Aug 20, 2026
                        </p>
                      </div>
                      <Button variant="outline" size="sm" type="button">
                        Upgrade
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="payment">Payment Method</Label>
                    <div className="flex items-center gap-4 rounded-lg border border-border p-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          Visa ending in 4242
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Expires 12/2027
                        </p>
                      </div>
                      <Button variant="outline" size="sm" type="button">
                        Change
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  )
}
