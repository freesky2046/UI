"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Clock, Loader2, CheckCircle } from "lucide-react"
import HomeNavigationMenu from "../HomeNavigation"
import Footer from "../Footer"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Reach us anytime, we will respond within 24 hours.",
    detail: "support@ailisting.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available Monday through Friday, 9AM – 6PM EST.",
    detail: "Chat with our team",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "Typical first response time for all inquiries.",
    detail: "Under 24 hours",
  },
]

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      <HomeNavigationMenu />
      <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Have a question or need help? We'd love to hear from you.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-12">
          {contactMethods.map((method) => (
            <Card key={method.title}>
              <CardContent className="flex flex-col items-center text-center gap-2 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mb-1">
                  <method.icon className="size-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {method.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {method.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact form */}
        <Card>
          {success ? (
            <CardContent className="flex flex-col items-center text-center gap-4 py-12">
              <CheckCircle className="size-12 text-green-600 dark:text-green-400" />
              <CardTitle>Message sent!</CardTitle>
              <CardDescription>
                Thanks for reaching out. We'll get back to you within 24 hours.
              </CardDescription>
              <Button variant="outline" size="sm" onClick={() => setSuccess(false)}>
                Send another message
              </Button>
            </CardContent>
          ) : (
            <>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we will get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent>
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
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
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this about?"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question..."
                        rows={5}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit" disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </form>
            </>
          )}
        </Card>
      </div>
      <Footer />
    </div>
  )
}
