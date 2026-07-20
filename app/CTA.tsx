import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      {/* 背景渐变装饰 */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-center">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-normal gap-1 bg-white/10 hover:bg-white/20 text-primary-foreground border-none">
            <Sparkles className="w-3.5 h-3.5" />
            限时免费试用 14 天
          </Badge>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            准备好提升你的开发效率了吗？
          </h2>

          <p className="text-primary-foreground/80 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            立即加入上万名开发者和团队的行列，用现代化 UI 模块快速构建高质量产品。无需信用卡。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold gap-2 shadow-md">
              免费开始使用 <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-primary-foreground bg-transparent">
              联系销售团队
            </Button>
          </div>

          <p className="text-xs text-primary-foreground/60 pt-2">
            无需安装，开箱即用 • 随时可取消订阅
          </p>
        </div>
      </div>
    </section>
  )
}
