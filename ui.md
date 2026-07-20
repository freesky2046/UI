## 字体

| 层级 | Class | rem | px | 默认行高 | 标准使用场景                     | 推荐字重            | 标准文字色                     | 色值含义                   |
|------|-------|-----|-----|----------|----------------------------------|---------------------|-------------------------------|----------------------------|
| 1    | `text-xs`   | `0.75rem`   | 12  | `1rem`      | 备注、提示、版权、标签、脚注     | `font-normal`       | `text-gray-500`               | 最弱辅助信息               |
| 2    | `text-sm`   | `0.875rem`  | 14  | `1.25rem`   | 表格文字、次要说明、输入框辅助文案 | `font-normal`       | `text-gray-600`               | 次要说明文本               |
| 3    | `text-base` | `1rem`      | 16  | `1.5rem`    | 全局正文、Listing 五点、表单默认文字 | `font-normal`       | `text-gray-800`               | 页面主体阅读文字           |
| 4    | `text-lg`   | `1.125rem`  | 18  | `1.75rem`   | 卡片摘要、重点提示、加粗正文     | `font-medium`       | `text-gray-800` / `text-blue-600` | 普通深灰；高亮卖点品牌蓝 |
| 5    | `text-xl`   | `1.25rem`   | 20  | `1.75rem`   | 小模块标题、H4、弹窗小标题       | `font-medium`       | `text-gray-800`               | 次级标题                   |
| 6    | `text-2xl`  | `1.5rem`    | 24  | `2rem`      | 卡片主标题、分区标题、H3         | `font-semibold`     | `text-gray-900`               | 分区强标题，更深突出       |
| 7    | `text-3xl`  | `1.875rem`  | 30  | `2.25rem`   | 页面大标题、页面主区块 H2        | `font-bold`         | `text-gray-900`               | 页面顶级标题               |

---

## 颜色系统

### 品牌主色

| 用途 | Class | 色值 | 适用场景 |
|------|-------|------|----------|
| Primary | `bg-primary` / `text-primary` | `#18181B`（zinc-900） | 主按钮、CTA 背景、强调元素 |
| Primary 浅底 | `bg-primary/10` | 10% 透明度 | 图标容器底色、选中态、标签底 |

### 中性灰阶（文字层级）

| 阶 | Class | 色值 | 用途 |
|----|-------|------|------|
| 900 | `text-gray-900` | `#111827` | 页面标题、卡片主标题、最深强调 |
| 800 | `text-gray-800` | `#1F2937` | 正文、H4 小标题、表单标签 |
| 600 | `text-gray-600` | `#4B5563` | 次要说明、表格文字、链接 |
| 500 | `text-gray-500` | `#6B7280` | 备注、脚注、占位符、辅助信息 |
| 400 | `text-gray-400` | `#9CA3AF` | 禁用态文字、极弱辅助 |

### 背景层级（由浅到深）

| 层级 | Class | 色值 | 适用场景 |
|------|-------|------|----------|
| 页面底色 | `bg-white` | `#FFFFFF` | 默认页面背景 |
| 次级背景 | `bg-gray-50` | `#F9FAFB` | 交替区块、卡片容器、侧边栏 |
| 悬浮态 | `hover:bg-gray-100` | `#F3F4F6` | 导航项 hover、表格行 hover |
| 边框线 | `border-gray-200` | `#E5E7EB` | 卡片边框、分割线、输入框边框 |

### 语义色（最少化）

| 用途 | Class | 色值 | 场景 |
|------|-------|------|------|
| 成功 | `text-green-600` / `bg-green-50` | `#16A34A` | 已支付、已完成、通过 |
| 警告 | `text-amber-600` / `bg-amber-50` | `#D97706` | 处理中、待审核 |
| 错误 | `text-red-600` / `bg-red-50` | `#DC2626` | 未支付、失败、删除 |

### 深色模式适配

| 浅色 | 深色 | 用途 |
|------|------|------|
| `text-gray-900` | `dark:text-gray-100` | 最深文字 |
| `text-gray-800` | `dark:text-gray-200` | 正文文字 |
| `text-gray-600` | `dark:text-gray-400` | 次要文字 |
| `text-gray-500` | `dark:text-gray-500` | 辅助文字（不变） |
| `bg-white` | `dark:bg-neutral-950` | 页面底色 |
| `bg-gray-50` | `dark:bg-neutral-900` | 次级背景 |
| `border-gray-200` | `dark:border-neutral-800` | 边框线 |

### 常用搭配速查

| 场景 | 背景 | 文字 | 示例 |
|------|------|------|------|
| 白色区块 | `bg-white` | `text-gray-900/800/600` | Hero、CTA 卡片 |
| 灰色区块 | `bg-gray-50` | 同上 | Feature、Footer |
| 品牌色区块 | `bg-primary` | `text-primary-foreground` | 全宽 CTA |
| 标签/徽标 | `bg-gray-100` | `text-gray-600` | Badge secondary |
| 信息提示 | `bg-blue-50` | `text-blue-700` | Info callout |

---

## 标准间距对照表

| 类名后缀 | rem | px | 适用场景 |
|---------|------|-----|----------|
| `0.5` | `0.125rem` | 2 | 极细分隔、线条微调 |
| `1`   | `0.25rem`  | 4 | 图标与文字间距、标签微调 |
| `2`   | `0.5rem`   | 8 | 小内边距、行内元素间距 |
| `3`   | `0.75rem`  | 12 | 输入框、按钮、小模块间距 |
| `4`   | `1rem`     | 16 | 正文段落、卡片基础内边距 |
| `5`   | `1.25rem`  | 20 | 标题与内容间距、模块间距 |
| `6`   | `1.5rem`   | 24 | 区块内边距、常规分区间距 |
| `8`   | `2rem`     | 32 | 卡片间间距、大分区间距 |
| `12`  | `3rem`     | 48 | 页面级大区块、顶部大留白 |
| `16`  | `4rem`     | 64 | 超大板块间距、页面首尾留白 |

## 场景化使用规范

| 场景 | 推荐类名 | 说明 |
|------|---------|------|
| 标签 / 徽标 | `px-2 py-1` | 紧凑样式，视觉整洁 |
| 按钮 / 输入框 | `px-3 py-2` / `p-3` | 标准可点击区域尺寸 |
| 移动端卡片 | `p-4` | 适配小屏，不拥挤 |
| 桌面端卡片 / 弹窗 | `p-6` | 内容呼吸感更强 |
| 段落间距 | `mb-4` | 正文标准行距 |
| 表单元素间距 | `space-y-4` | 表单项统一垂直间距 |
| 模块与模块之间 | `mb-8` / `mt-8` | 页面常规区块分隔 |
| 页面大区域分隔 | `mb-12` | 强层级、大留白 |
| 栅格 / 弹性布局 | `gap-4` / `gap-6` | 列与列、项与项间距 |

---

## 圆角

| 标识 | Class | 数值 | 适用场景 |
|------|-------|------|----------|
| sm | `rounded-sm` | 2px | 表格单元格、紧凑分组 |
| md | `rounded-md` | 6px | 按钮、输入框、卡片（默认） |
| lg | `rounded-lg` | 8px | 弹窗、大卡片、图片容器 |
| full | `rounded-full` | 9999px | 药丸按钮、头像、徽标 |

> 默认规则：交互元素用 `rounded-md`，容器用 `rounded-lg`，人物/图标用 `rounded-full`。

---

## 阴影

| 层级 | Class | 效果 | 适用场景 |
|------|-------|------|----------|
| 无 | `shadow-none` | 扁平 | 默认卡片、无交互元素 |
| sm | `shadow-sm` | 微弱抬高 | 输入框聚焦、表格 |
| md | `shadow-md` | 明显浮起 | 卡片 hover、下拉菜单 |
| lg | `shadow-lg` | 深度浮层 | 弹窗、Popover |
| xl | `shadow-xl` | 最高层级 | 模态框、抽屉 |

> 默认规则：卡片 `shadow-none`，hover 加 `shadow-md`，弹窗用 `shadow-lg`。

---

## 表单元素尺寸

| 尺寸 | 高度 | 水平内边距 | 字号 | 适用场景 |
|------|------|-----------|------|----------|
| sm | `h-8`（32px） | `px-2` | `text-xs` | 紧凑表单、内联输入 |
| default | `h-10`（40px） | `px-3` | `text-sm` | 标准输入框、按钮 |
| lg | `h-12`（48px） | `px-4` | `text-base` | 登录页按钮、CTA 大按钮 |

> 垂直内边距统一 `py-2`（8px），确保文字垂直居中。对齐间距规范中「按钮/输入框：`px-3 py-2`」默认标准。

---

## 动画过渡

### Duration（时长）

| 标识 | Class | 时长 | 适用 |
|------|-------|------|------|
| fast | `duration-150` | 150ms | 链接 hover 颜色、图标旋转 |
| default | `duration-200` | 200ms | 按钮 hover、输入框聚焦、背景色切换 |
| slow | `duration-300` | 300ms | 卡片 hover 阴影、弹窗展开 |
| entrance | `duration-500` | 500ms | 页面入场、大区块渐显 |

### Easing（缓动）

| 标识 | Class | 曲线 | 适用 |
|------|-------|------|------|
| exit | `ease-in` | 加速 | 元素消失、弹窗关闭 |
| default | `ease-out` | 减速 | 元素出现、弹窗展开（默认） |
| morph | `ease-in-out` | 先加速后减速 | 尺寸变化、位置移动 |

### 常用组合速查

| 场景 | 推荐 Class |
|------|-----------|
| 链接 hover | `transition-colors duration-150` |
| 按钮 hover | `transition-colors duration-200` |
| 卡片 hover 阴影 | `transition-shadow duration-300` |
| 弹窗展开 | `transition-all duration-300 ease-out` |
| 弹窗关闭 | `transition-all duration-200 ease-in` |
| 页面入场 | `transition-opacity duration-500 ease-out` |

> 默认规则：只对变化的属性加 transition，避免 `transition-all`（性能开销大）。hover 用 `ease-out`，消失用 `ease-in`。

---

## 常见组件规范

### 按钮 Button

**变体 `variant`**

| 变体 | 说明 | 背景/边框 | 文字色 | hover |
|------|------|-----------|--------|-------|
| `default` | 主按钮，用于核心 CTA | `bg-primary` | `text-primary-foreground` | `bg-primary/80` |
| `outline` | 描边按钮，次要操作 | `border-border bg-background` | 继承 | `bg-muted` |
| `secondary` | 二级按钮，同组辅助操作 | `bg-secondary` | `text-secondary-foreground` | 混合前景色 5% |
| `ghost` | 幽灵按钮，工具栏/列表行操作 | 透明 | 继承 | `bg-muted` |
| `destructive` | 危险操作按钮 | `bg-destructive/10` | `text-destructive` | `bg-destructive/20` |
| `link` | 链接样式按钮 | 无 | `text-primary underline-offset-4` | `underline` |

**尺寸 `size`**

| 尺寸 | 高度 | padding | 字号 | 图标间距 | 适用场景 |
|------|------|---------|------|----------|----------|
| `sm` | `h-8` (32px) | `px-2` | `text-xs` | `gap-1.5` | 表格行内操作、紧凑工具栏 |
| `default` | `h-10` (40px) | `px-3` | `text-sm` | `gap-2` | 标准按钮、表单提交 |
| `lg` | `h-12` (48px) | `px-4` | `text-base` | `gap-2` | 登录页、Hero CTA、大按钮 |
| `icon` | `size-10` (40px) | — | — | — | 纯图标按钮 |
| `icon-sm` | `size-8` (32px) | — | — | — | 小图标按钮 |

**使用示例**

```tsx
// 主 CTA 大按钮
<Button size="lg">立即体验</Button>

// 带图标的描边按钮
<Button variant="outline" className="gap-2">
  <Play /> 观看视频
</Button>

// 表内小按钮
<Button size="sm" variant="ghost">编辑</Button>
```

---

### 徽章 Badge

| 变体 | 说明 | 背景 | 文字色 | 边框 |
|------|------|------|--------|------|
| `default` | 默认标签 | `bg-primary` | `text-primary-foreground` | 透明 |
| `secondary` | 灰色标签，分类/状态 | `bg-secondary` | `text-secondary-foreground` | 透明 |
| `outline` | 描边标签，版本号/公告 | 透明 | `text-foreground` | `border-border` |
| `destructive` | 危险/错误标签 | `bg-destructive/10` | `text-destructive` | 透明 |
| `ghost` | 弱化标签 | 透明 | 继承 | 透明(hover 显底) |
| `link` | 链接标签 | 无 | `text-primary` | 无 |

**基础样式**：`inline-flex h-5 px-2 py-1 text-xs font-normal rounded-full`，图标 `size-3`

**使用示例**

```tsx
// 版本公告
<Badge variant="outline">v2.0 已发布</Badge>

// 状态标签
<Badge variant="secondary">进行中</Badge>

// 数量角标
<Badge variant="default">99+</Badge>
```

---

### 表单 Form

#### 输入框 Input

**基础样式**：`h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm`

| 状态 | 边框 | 说明 |
|------|------|------|
| `default` | `border-input` | 默认未聚焦 |
| `focus` | `border-ring ring-3 ring-ring/50` | 聚焦高亮 |
| `disabled` | — `opacity-50 cursor-not-allowed bg-input/50` | 禁用态 |
| `invalid` | `border-destructive ring-3 ring-destructive/20` | 校验错误 |
| `placeholder` | `text-muted-foreground` | 占位文字 |

#### 标签 Label

**基础样式**：`flex items-center gap-2 text-base font-medium select-none`

- 与输入框联动：通过 `htmlFor` + Input `id` 绑定
- 禁用联动：`peer-disabled:opacity-50 peer-disabled:cursor-not-allowed`

#### 表单布局

**垂直排列（推荐）**

```tsx
<div className="space-y-6">
  <div className="space-y-2">
    <Label htmlFor="email">邮箱地址</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">密码</Label>
    <Input id="password" type="password" placeholder="请输入密码" />
  </div>
  <Button type="submit" size="lg" className="w-full">提交</Button>
</div>
```

**水平排列（标签行内）**

```tsx
<div className="flex items-center gap-4">
  <Label htmlFor="name">姓名</Label>
  <Input id="name" placeholder="请输入" className="flex-1" />
</div>
```

#### 常用尺寸

| 高度与 padding | 适用场景 |
|---------------|----------|
| `h-8 px-2 text-xs` | 紧凑内联输入 | 
| `h-10 px-3 text-sm` | **标准输入框（默认）** |
| `h-12 px-4 text-base` | 大号输入框、登录页 |

> 默认使用标准 `h-10`，与 Button 默认尺寸对齐。

---

### 卡片 Card

**子组件**

| 组件 | 说明 |
|------|------|
| `<Card>` | 容器，支持 `size="default" \| "sm"` |
| `<CardHeader>` | 头部，内置 grid 布局，可容纳 Title + Description + Action |
| `<CardTitle>` | 标题，`font-heading text-base font-medium`（sm 下 `text-sm`） |
| `<CardDescription>` | 描述，`text-sm text-muted-foreground` |
| `<CardContent>` | 正文区域，带 `px-(--card-spacing)` 内边距 |
| `<CardFooter>` | 底部，带 `border-t bg-muted/50` 分隔条 |
| `<CardAction>` | 头部操作按钮区，定位在右上角 |

**基础样式**：`flex flex-col rounded-lg bg-card ring-1 ring-foreground/10`

**尺寸**

| size | 内边距 | 适用 |
|------|--------|------|
| `default` | `--card-spacing: spacing(4)` (16px) | 标准卡片 |
| `sm` | `--card-spacing: spacing(3)` (12px) | 紧凑卡片、列表项 |

**使用示例**

```tsx
// 标准卡片
<Card>
  <CardHeader>
    <CardTitle>基础版</CardTitle>
    <CardDescription>适合个人开发者和小型项目</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-3xl font-bold">$9.99< span className="text-base font-normal text-muted-foreground">/月</span></p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">开始使用</Button>
  </CardFooter>
</Card>

// 带图片卡片
<Card>
  <img src="/hero.jpg" alt="封面" />
  <CardHeader>
    <CardTitle>产品名称</CardTitle>
    <CardDescription>一句话描述</CardDescription>
  </CardHeader>
</Card>

// 小卡片
<Card size="sm">
  <CardContent>紧凑内容</CardContent>
</Card>
```

---

### 表格 Table

**子组件**

| 组件 | 说明 | 基础样式 |
|------|------|----------|
| `<Table>` | 外层容器，自动 `overflow-x-auto` | `w-full caption-bottom text-sm` |
| `<TableHeader>` | 表头区域 | `[&_tr]:border-b` |
| `<TableBody>` | 表体区域 | `[&_tr:last-child]:border-0` |
| `<TableFooter>` | 表尾区域 | `border-t bg-muted/50 font-medium` |
| `<TableRow>` | 行 | `border-b hover:bg-muted/50` |
| `<TableHead>` | 表头单元格 | `h-10 px-2 text-left font-medium whitespace-nowrap` |
| `<TableCell>` | 数据单元格 | `p-2 align-middle whitespace-nowrap` |
| `<TableCaption>` | 表格标题/说明 | `mt-4 text-sm text-muted-foreground` |

**使用示例**

```tsx
<Table>
  <TableCaption>最近 5 笔交易记录</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>订单号</TableHead>
      <TableHead>金额</TableHead>
      <TableHead>状态</TableHead>
      <TableHead className="text-right">操作</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {orders.map((order) => (
      <TableRow key={order.id}>
        <TableCell className="font-medium">{order.id}</TableCell>
        <TableCell>¥{order.amount}</TableCell>
        <TableCell><Badge variant="secondary">{order.status}</Badge></TableCell>
        <TableCell className="text-right">
          <Button variant="ghost" size="sm">查看</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

---

### 导航 NavigationMenu

**子组件**

| 组件 | 说明 |
|------|------|
| `<NavigationMenu>` | 根容器，支持 `align="start"` |
| `<NavigationMenuList>` | 菜单项列表，`flex gap-0` |
| `<NavigationMenuItem>` | 单个菜单项容器 |
| `<NavigationMenuTrigger>` | 触发器（带下拉箭头），`inline-flex h-9 rounded-lg px-3 py-1 text-base` |
| `<NavigationMenuContent>` | 下拉内容面板 |
| `<NavigationMenuLink>` | 菜单链接，`flex gap-2 rounded-lg p-2 text-base` |

**导航链接基础样式**：`inline-flex h-9 items-center rounded-lg px-3 py-1 text-base hover:bg-muted focus:bg-muted`

**使用示例**

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/features">功能</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/pricing">价格</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>产品</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-4 w-[400px]">
          <NavigationMenuLink href="/product-a">产品 A</NavigationMenuLink>
          <NavigationMenuLink href="/product-b">产品 B</NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

---

## 响应式断点

| 前缀 | 最小宽度 | 典型设备 |
|------|----------|----------|
| `(无前缀)` | 0px | 手机竖屏 |
| `sm` | 640px | 手机横屏 |
| `md` | 768px | 平板 |
| `lg` | 1024px | 笔记本 |
| `xl` | 1280px | 桌面显示器 |
| `2xl` | 1536px | 大屏桌面 |

**使用模式**

```tsx
// 移动端堆叠，桌面端并排
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 移动端全宽，桌面端限宽居中
<div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">

// 移动端显示/隐藏
<div className="hidden md:block">桌面端可见</div>
<div className="block md:hidden">移动端可见</div>
```

---

## 布局系统

### 页面容器

| 模式 | Class | 说明 |
|------|-------|------|
| 全宽 | `w-full` | 通栏布局，适合 Hero / Banner |
| 标准限宽 | `max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8` | 内容区默认容器 |
| 窄限宽 | `max-w-3xl mx-auto px-4` | 文章/博客/表单页 |
| 超窄限宽 | `max-w-md mx-auto px-4` | 登录/注册卡片 |

### 栅格系统

| 列数 | Class | 常用场景 |
|------|-------|----------|
| 1 | `grid-cols-1` | 移动端默认 |
| 2 | `grid-cols-2` / `md:grid-cols-2` | 对比卡片、Feature 双栏 |
| 3 | `grid-cols-3` / `lg:grid-cols-3` | 定价卡片、Feature 三栏 |
| 4 | `grid-cols-4` / `lg:grid-cols-4` | 统计数字、图标网格 |

> 推荐搭配 `gap-6`（24px）或 `gap-8`（32px）作为栅格间距。

### Flex 常用布局

| 需求 | Class |
|------|-------|
| 水平居中（单行） | `flex items-center justify-center` |
| 水平两端对齐 | `flex items-center justify-between` |
| 垂直堆叠居中 | `flex flex-col items-center justify-center` |
| 自适应均分 | `flex flex-wrap gap-4 *:flex-1 *:min-w-0` |

---

## 图标规范

| 场景 | 图标尺寸 | Class |
|------|---------|-------|
| 按钮内图标 | 16px | `size-4` |
| 导航/Badge 内图标 | 12px | `size-3` |
| 独立图标按钮 | 20px | `size-5` |
| 页面装饰大图标 | 24px | `size-6` |

| 图标与文字对齐 | 规则 |
|---------------|------|
| 图标在文字左侧 | 容器加 `inline-flex items-center gap-2`（推荐） |
| 图标单独使用 | 自动继承父容器对齐 |

> 图标库使用 `lucide-react`，Button 默认样式自动处理 `[&_svg]:pointer-events-none [&_svg]:shrink-0`。

---

## 状态指示

### 加载状态

| 场景 | 处理方式 |
|------|----------|
| 按钮提交中 | `disabled` + 图标动画替换（如 Spinner） |
| 页面/区块加载 | 骨架屏占位（灰色脉冲动画区块） |
| 数据获取中 | `animate-pulse bg-muted rounded` 作为骨架屏 |

```tsx
// 按钮加载态
<Button disabled>
  <Loader2 className="size-4 animate-spin" />
  提交中...
</Button>

// 骨架屏
<div className="space-y-3">
  <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
  <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
</div>
```

### 空状态

空状态统一使用居中布局 + 图标 + 文字 + 操作按钮：

```tsx
<div className="flex flex-col items-center justify-center py-12 text-center">
  <div className="text-muted-foreground mb-4">
    <Inbox className="size-12" />
  </div>
  <h3 className="text-lg font-medium text-foreground">暂无数据</h3>
  <p className="mt-1 text-sm text-muted-foreground">当前还没有任何记录</p>
  <Button variant="outline" className="mt-4">创建第一条</Button>
</div>
```

---

## 可访问性

| 需求 | 实现方式 |
|------|----------|
| 屏幕阅读器专用文字 | `sr-only` |
| 键盘聚焦可见 | `focus-visible:ring-3 focus-visible:ring-ring/50` |
| 禁用元素 | `disabled:pointer-events-none disabled:opacity-50` |
| 图标隐藏于屏幕阅读器 | `aria-hidden="true"` |
| Form label 绑定 | `htmlFor` + `id` 关联 |

**快捷键**

| 场景 | Class/属性 |
|------|-----------|
| 禁用鼠标事件 | `pointer-events-none` |
| 禁用文本选择 | `select-none` |
| 禁用换行 | `whitespace-nowrap` |