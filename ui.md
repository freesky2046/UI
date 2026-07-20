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