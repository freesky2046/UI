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
import { User, Bell, Shield, CreditCard } from "lucide-react"

const tabs = [
  { id: "profile", label: "个人资料", icon: User },
  { id: "account", label: "账户安全", icon: Shield },
  { id: "notifications", label: "通知设置", icon: Bell },
  { id: "billing", label: "账单信息", icon: CreditCard },
]

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      {/* 页面头部 */}
      <div className="border-b bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            账户设置
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            管理个人资料、安全设置与账单信息
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* 左侧导航 */}
          <nav className="w-full shrink-0 lg:w-56">
            <ul className="flex gap-1 lg:flex-col">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <a
                    href={`#${tab.id}`}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors duration-150 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-100"
                  >
                    <tab.icon className="size-4" />
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 右侧主内容 */}
          <div className="flex-1 space-y-8">
            {/* 个人资料 */}
            <Card id="profile">
              <CardHeader>
                <CardTitle>个人资料</CardTitle>
                <CardDescription>更新您的个人公开信息</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="displayName">显示名称</Label>
                    <Input
                      id="displayName"
                      defaultValue="张三"
                      placeholder="请输入显示名称"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      此名称会在您的个人主页和评论中公开显示
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">用户名</Label>
                    <Input
                      id="username"
                      defaultValue="zhangsan"
                      placeholder="请输入用户名"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      唯一标识，用于个人主页链接
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">个人简介</Label>
                    <Input
                      id="bio"
                      defaultValue="前端开发工程师，热爱开源"
                      placeholder="介绍一下你自己"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      简短描述，最多 160 个字符
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">个人网站</Label>
                    <Input
                      id="website"
                      defaultValue="https://zhangsan.dev"
                      placeholder="https://your-site.com"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="button">保存修改</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 账户安全 */}
            <Card id="account">
              <CardHeader>
                <CardTitle>账户安全</CardTitle>
                <CardDescription>管理密码与账户安全设置</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">邮箱地址</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="zhangsan@example.com"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="currentPassword">当前密码</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      placeholder="输入当前密码"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="newPassword">新密码</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="输入新密码"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">确认新密码</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="再次输入新密码"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="button">更新密码</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 通知设置 */}
            <Card id="notifications">
              <CardHeader>
                <CardTitle>通知设置</CardTitle>
                <CardDescription>选择你希望接收的通知类型</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  {[
                    { id: "email-news", label: "产品更新", description: "接收新功能发布与产品动态通知" },
                    { id: "email-marketing", label: "营销邮件", description: "接收促销活动与优惠信息" },
                    { id: "email-security", label: "安全提醒", description: "接收账户安全相关的重要通知" },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 rounded-lg border border-border p-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked="true"
                        className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-primary transition-colors duration-200"
                      >
                        <span className="translate-x-4.5 inline-block h-4 w-4 rounded-full bg-white transition-transform duration-200" />
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 账单信息 */}
            <Card id="billing">
              <CardHeader>
                <CardTitle>账单信息</CardTitle>
                <CardDescription>管理订阅与付款方式</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="plan">当前套餐</Label>
                    <div className="flex items-center gap-4 rounded-lg border border-border p-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          专业版
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          ¥29.99 / 月 · 下次续费 2026-08-20
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        升级套餐
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="payment">付款方式</Label>
                    <div className="flex items-center gap-4 rounded-lg border border-border p-4">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          Visa 尾号 4242
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          到期日 2027-12
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        更换
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
