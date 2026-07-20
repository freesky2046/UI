import { Badge } from "@/components/ui/badge"
import { Download, Palette, Rocket } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: Download,
    title: "安装组件库",
    description: "通过 CLI 一键安装，自动配置 Tailwind CSS 与 shadcn/ui，无需手动调整依赖。",
  },
  {
    step: "02",
    icon: Palette,
    title: "选择组件并定制",
    description: "从丰富组件库中挑选所需模块，自由调整颜色、间距与主题风格。",
  },
  {
    step: "03",
    icon: Rocket,
    title: "一键部署上线",
    description: "代码就绪后推送到 Vercel 或自建服务，几分钟即可让产品面向用户。",
  },
]

export default function HowToUseSection() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        {/* 头部 */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal text-gray-500 dark:text-gray-400">
            如何使用
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-gray-100">
            三步开始，快速交付
          </h2>
          <p className="max-w-[700px] text-gray-800 dark:text-gray-200 text-lg font-medium">
            无需复杂配置，从安装到上线只需三个步骤。
          </p>
        </div>

        {/* 步骤列表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              {/* 连接线（桌面端） */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-border" />
              )}

              {/* 步骤编号 + 图标 */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <item.icon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {index + 1}
                </span>
              </div>

              {/* 标题 */}
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">
                {item.title}
              </h3>

              {/* 描述 */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-[280px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
