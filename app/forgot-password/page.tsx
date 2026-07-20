"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Loader2, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1500)
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted dark:bg-neutral-900 px-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center text-center gap-4 py-12">
            <CheckCircle className="size-12 text-green-600 dark:text-green-400" />
            <CardTitle className="text-2xl font-bold tracking-tight">
              Reset link sent!
            </CardTitle>
            <CardDescription>
              If an account exists for that email, we've sent a password reset link. Check your inbox.
            </CardDescription>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Back to sign in
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted dark:bg-neutral-900 px-4">
      <Card className="w-full max-w-md">
        {/* Brand Logo */}
        <div className="flex flex-col items-center gap-3 pt-6">
          <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground text-lg font-bold">
            AI
          </Link>
          <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">AI Listing</p>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Forgot your password?
          </CardTitle>
          <CardDescription>
            Enter your email and we'll send you a reset link
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  disabled={loading}
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </div>
          </CardContent>
        </form>
        <CardFooter>
          <p className="text-sm text-center w-full text-gray-600 dark:text-gray-400">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-primary underline-offset-4 transition-colors duration-150 hover:underline"
            >
              Back to sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
