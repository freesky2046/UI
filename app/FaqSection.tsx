"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Base UI 与 shadcn/ui 有什么区别？",
    answer: "Base UI 是无样式的无障碍组件库，提供完整的交互逻辑和 ARIA 支持。shadcn/ui 则是基于 Radix 的预设计组件集合。两者可以互补使用，Base UI 负责底层行为，shadcn/ui 提供开箱即用的视觉风格。",
  },
  {
    question: "是否支持自定义主题？",
    answer: "完全支持。项目基于 Tailwind CSS 构建，你可以通过修改 CSS 变量或 Tailwind 配置来调整品牌色、字体、间距等一切视觉参数。ui.md 中定义了完整的主题规范供参考。",
  },
  {
    question: "支持哪些框架？",
    answer: "当前主要支持 Next.js（App Router），React 19+。组件库的核心逻辑与框架无关，可以迁移至 Vite、Remix 等其他 React 框架。",
  },
  {
    question: "可以用于生产环境吗？",
    answer: "可以。所有组件均经过无障碍测试，支持键盘导航和屏幕阅读器。目前已有多家企业在生产环境中稳定运行，配套了完整的 TypeScript 类型定义。",
  },
  {
    question: "如何获取技术支持？",
    answer: "你可以查阅在线文档获取详细的使用指南和 API 参考。遇到具体问题时，欢迎通过 GitHub Issues 提交反馈，或加入 Discord 社区与其他开发者交流。",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16 dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* 标题区 */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal text-gray-500 dark:text-gray-400">
            常见问题
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            还有疑问？这里有你想要的答案
          </h2>
          <p className="max-w-[600px] text-lg font-medium text-gray-800 dark:text-gray-200">
            找不到你想问的？欢迎联系我们，团队会在 24 小时内回复。
          </p>
        </div>

        {/* FAQ 列表 */}
        <div className="mx-auto max-w-3xl divide-y divide-gray-200 dark:divide-neutral-800">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-white"
                >
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ease-out dark:text-gray-400",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-base font-normal leading-relaxed text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
