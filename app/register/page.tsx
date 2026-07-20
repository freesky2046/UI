"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
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

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => router.push("/listing"), 1500)
      return () => clearTimeout(timer)
    }
  }, [success, router])

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
              Account created!
            </CardTitle>
            <CardDescription>
              Your account is ready. Redirecting to your listing generator...
            </CardDescription>
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
            Create your account
          </CardTitle>
          <CardDescription>
            Start generating Amazon listings in seconds
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
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  required
                  disabled={loading}
                />
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Must be at least 8 characters
                </p>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>
          </CardContent>
        </form>
        <CardFooter>
          <p className="text-sm text-center w-full text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary underline-offset-4 transition-colors duration-150 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
