import Link from "next/link"

const footerLinks = {
  product: {
    title: "产品",
    links: [
      { label: "组件库", href: "#" },
      { label: "模板", href: "#" },
      { label: "定价", href: "#" },
      { label: "更新日志", href: "#" },
    ],
  },
  company: {
    title: "公司",
    links: [
      { label: "关于我们", href: "#" },
      { label: "博客", href: "#" },
      { label: "加入我们", href: "#" },
      { label: "联系我们", href: "#" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { label: "文档", href: "#" },
      { label: "帮助中心", href: "#" },
      { label: "API", href: "#" },
      { label: "社区", href: "#" },
    ],
  },
  legal: {
    title: "法律",
    links: [
      { label: "隐私政策", href: "#" },
      { label: "服务条款", href: "#" },
      { label: "Cookie 设置", href: "#" },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              Base UI
            </h3>
            <p className="mt-3 text-sm font-normal text-gray-600 dark:text-gray-400 text-balance">
              精美设计的 UI 组件库，灵活配合 Tailwind CSS，助你快速构建高质量产品。
            </p>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-normal text-gray-600 dark:text-gray-400">
                {section.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-normal text-gray-600 underline-offset-4 hover:text-gray-800 hover:underline dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 dark:border-neutral-800">
          <p className="text-xs font-normal text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Base UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
