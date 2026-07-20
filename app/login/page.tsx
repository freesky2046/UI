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
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-neutral-900">
      <Card className="w-full max-w-sm p-4 sm:p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            登录您的账户
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            请输入您的邮箱地址登录
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-800 dark:text-gray-200">
                邮箱
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="请输入邮箱"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-gray-800 dark:text-gray-200">
                  密码
                </Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm font-normal text-gray-600 underline-offset-4 transition-colors duration-150 hover:underline dark:text-gray-400"
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
        <CardFooter>
          <Button variant="outline" className="w-full h-10">
            使用 Google 登录
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
