export default function DemoColorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 标题 */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">颜色系统演示</h1>
          <p className="text-muted-foreground">
            浅色模式下，L 越大越亮；深色模式下，L 越大越亮（层级越高）
          </p>
        </div>

        {/* 1. 背景层级 — L 递减，视觉"下沉" */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            背景层级 — L 越小越暗，层次越深
          </h2>
          <div className="space-y-2">
            <div className="p-4 rounded-lg bg-background border">
              <span className="text-xs text-muted-foreground">background</span>
              <p className="text-sm text-foreground">L=1.00 页面底色 — 最亮</p>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <span className="text-xs text-muted-foreground">card</span>
              <p className="text-sm text-card-foreground">L=1.00 卡片背景 — 和页面同色，靠边框区分</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <span className="text-xs text-muted-foreground">muted</span>
              <p className="text-sm text-foreground">L=0.97 悬浮态 / 交替区块 — 稍暗</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
              <span className="text-xs opacity-70">secondary</span>
              <p className="text-sm">L=0.967 二级按钮背景 — 与 muted 近似</p>
            </div>
          </div>
        </section>

        {/* 2. 文字层级 — L 递增，视觉"变弱" */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            文字层级 — L 越小越深（越重要）
          </h2>
          <div className="p-6 rounded-lg bg-card border space-y-4">
            <div>
              <span className="text-xs bg-muted px-2 py-0.5 rounded">foreground</span>
              <p className="text-foreground text-lg mt-1">
                L=0.145 标题正文 — 最深，最重要
              </p>
            </div>
            <div>
              <span className="text-xs bg-muted px-2 py-0.5 rounded">card-foreground</span>
              <p className="text-card-foreground text-lg mt-1">
                L=0.145 卡片内文字 — 与 foreground 相同
              </p>
            </div>
            <div>
              <span className="text-xs bg-muted px-2 py-0.5 rounded">secondary-foreground</span>
              <p className="text-secondary-foreground text-lg mt-1">
                L=0.21 二级按钮文字 — 稍浅
              </p>
            </div>
            <div>
              <span className="text-xs bg-muted px-2 py-0.5 rounded">accent-foreground</span>
              <p className="text-accent-foreground text-lg mt-1">
                L=0.205 强调态文字 — 与 secondary-foreground 接近
              </p>
            </div>
            <div className="border-t pt-4">
              <span className="text-xs bg-muted px-2 py-0.5 rounded">muted-foreground</span>
              <p className="text-muted-foreground text-lg mt-1">
                L=0.556 辅助说明、占位符 — 明显变浅
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                这段话是次要信息，不需要用户第一眼看清。
              </p>
            </div>
            <div className="bg-primary rounded-lg p-4 mt-4">
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-primary-foreground">primary-foreground</span>
              <p className="text-primary-foreground text-lg mt-1">
                L=0.97 深色底上的文字 — 不是文字层级，是对比保证
              </p>
            </div>
          </div>
        </section>

        {/* 3. 品牌色 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            品牌色 — 独立色彩线
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-lg bg-primary text-primary-foreground">
              <p className="text-sm opacity-80">primary L=0.488</p>
              <p className="text-lg font-semibold mt-1">品牌按钮背景</p>
            </div>
            <div className="p-6 rounded-lg bg-primary/10 text-foreground border border-primary/20">
              <p className="text-sm text-muted-foreground">primary/10</p>
              <p className="text-lg font-semibold mt-1">品牌浅底色</p>
            </div>
          </div>
        </section>

        {/* 4. 语义色 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            语义色
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/10">
              <p className="text-xs text-destructive/70 mb-1">destructive L=0.577</p>
              <p className="text-destructive font-medium">错误 / 删除</p>
            </div>
            <div className="p-4 rounded-lg border">
              <p className="text-xs text-muted-foreground mb-1">border L=0.922</p>
              <p className="text-foreground font-medium">边框线</p>
            </div>
            <div className="p-4 rounded-lg border ring-2 ring-ring">
              <p className="text-xs text-muted-foreground mb-1">ring L=0.708</p>
              <p className="text-foreground font-medium">聚焦光环</p>
            </div>
          </div>
        </section>

        {/* 5. Chart 颜色 — L 递进 */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Chart 颜色 — L 从浅到深
          </h2>
          <div className="flex gap-2 h-12">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className={`flex-1 rounded-md bg-chart-${n} flex items-center justify-center`}
              >
                <span className={`text-xs font-medium ${n >= 3 ? 'text-white' : 'text-gray-800'}`}>
                  chart-{n}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 提示 */}
        <div className="p-4 rounded-lg border bg-muted/50">
          <p className="text-sm text-muted-foreground">
            切换到深色模式查看效果：所有 L 值不变，但背景和文字的角色互换（暗底亮字）
          </p>
        </div>
      </div>
    </div>
  )
}
