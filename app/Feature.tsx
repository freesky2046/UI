import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, ShieldCheck, Sparkles, LayoutGrid, Cpu, Rocket } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "极速性能",
    description: "基于 Next.js App Router 打造，具备毫秒级响应速度与极致加载体验。",
  },
  {
    icon: ShieldCheck,
    title: "企业级安全",
    description: "内置严格的权限管控与加密传输，保障你的应用和数据万无一失。",
  },
  {
    icon: Sparkles,
    title: "智能 AI 赋能",
    description: "无缝对接主流 LLM 接口，一键为你的业务注入人工智能创作力。",
  },
  {
    icon: LayoutGrid,
    title: "灵活组件库",
    description: "基于 Tailwind CSS 与 shadcn/ui 构建，100% 自由定制 UI 细节。",
  },
  {
    icon: Cpu,
    title: "高扩展架构",
    description: "模块化代码结构，支持轻松集成各类第三方服务与数据库。",
  },
  {
    icon: Rocket,
    title: "开箱即用",
    description: "预设最佳实践配置，让你从零到上线只需几分钟时间。",
  },
]

export default function FeatureSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-900 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        {/* 头部标题与副标题 */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal text-gray-500 dark:text-gray-400">
            核心特性
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-gray-100">
            为高效开发而生
          </h2>
          <p className="max-w-[700px] text-gray-800 dark:text-gray-200 text-lg font-medium">
            极速性能、企业安全、智能 AI，覆盖现代产品构建的每一个关键环节。
          </p>
        </div>

        {/* 特性卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="transition-shadow duration-300 hover:shadow-md border-muted">
                <CardHeader>
                  <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-200">{feature.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}