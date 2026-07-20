import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export  default function HeroSection() {
  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-primary/[0.06] via-transparent to-transparent dark:from-primary/[0.08] dark:bg-neutral-950">
      {/* 背景光晕装饰 */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none dark:bg-primary/[0.06]" />
      <div className="absolute -top-20 -right-40 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none dark:bg-primary/[0.06]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/[0.02] rounded-full blur-[80px] pointer-events-none dark:bg-primary/[0.04]" />

      <div className="container mx-auto relative flex flex-col items-center justify-center gap-6 pt-16 pb-16 text-center">
      {/* 1. 顶部公告栏 */}
      <Badge variant="outline" className="gap-2 px-2 py-3 text-xs font-normal text-gray-500 dark:text-gray-400">
        🎉 v2.0 版本已上线 <ArrowRight className="w-4 h-4" />
      </Badge>

      {/* 2. 主副标题 */}
      <h1 className="font-bold tracking-tight text-3xl text-gray-900 dark:text-gray-100">
        打造现代化网页, 只需几分钟
      </h1>
      <p className="max-w-[42rem] text-gray-800 dark:text-gray-200 text-lg font-medium">
        精美设计的 UI 组件库，灵活配合 Tailwind CSS，助你快速构建高质量产品。
      </p>

      {/* 3. CTA 操作按钮 */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" className="gap-2">
          立即免费体验 <ArrowRight className="w-4 h-4" />
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          <Play className="w-4 h-4" /> 观看演示视频
        </Button>
      </div>
      </div>
    </section>
  )
}