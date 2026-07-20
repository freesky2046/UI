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

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted dark:bg-neutral-900 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight">
            登录您的账户
          </CardTitle>
          <CardDescription>
            请输入您的邮箱地址登录
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">邮箱</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">密码</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm text-muted-foreground underline-offset-4 transition-colors duration-150 hover:underline"
                >
                  忘记密码？
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" size="lg" className="w-full">
              登录
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-3">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">或</span>
            </div>
          </div>
          <Button variant="outline" className="w-full gap-2">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z" fill="currentColor"/>
              <path d="M5 12H1M23 12H19M12 5V1M12 23V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            使用 Google 登录
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
