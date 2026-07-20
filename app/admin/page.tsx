import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV-2024-001",
    paymentStatus: "已支付",
    totalAmount: "¥2,500.00",
    paymentMethod: "信用卡",
  },
  {
    invoice: "INV-2024-002",
    paymentStatus: "处理中",
    totalAmount: "¥1,500.00",
    paymentMethod: "支付宝",
  },
  {
    invoice: "INV-2024-003",
    paymentStatus: "未支付",
    totalAmount: "¥3,500.00",
    paymentMethod: "银行转账",
  },
  {
    invoice: "INV-2024-004",
    paymentStatus: "已支付",
    totalAmount: "¥4,500.00",
    paymentMethod: "信用卡",
  },
  {
    invoice: "INV-2024-005",
    paymentStatus: "已支付",
    totalAmount: "¥5,500.00",
    paymentMethod: "微信支付",
  },
  {
    invoice: "INV-2024-006",
    paymentStatus: "处理中",
    totalAmount: "¥2,000.00",
    paymentMethod: "银行转账",
  },
  {
    invoice: "INV-2024-007",
    paymentStatus: "未支付",
    totalAmount: "¥3,000.00",
    paymentMethod: "信用卡",
  },
]

export default function AdminPage() {
  return (
    <div className="max-w-md mx-auto py-8">
      <h1 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        发票管理
      </h1>
      <Table>
        <TableCaption className="font-normal text-gray-500 dark:text-gray-400">
          共 {invoices.length} 条发票记录
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px] text-sm font-normal text-gray-600 dark:text-gray-400">
              发票编号
            </TableHead>
            <TableHead className="text-sm font-normal text-gray-600 dark:text-gray-400">
              支付状态
            </TableHead>
            <TableHead className="text-sm font-normal text-gray-600 dark:text-gray-400">
              支付方式
            </TableHead>
            <TableHead className="text-right text-sm font-normal text-gray-600 dark:text-gray-400">
              金额
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium text-gray-800 dark:text-gray-200">
                {invoice.invoice}
              </TableCell>
              <TableCell className="font-normal text-gray-600 dark:text-gray-400">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="font-normal text-gray-600 dark:text-gray-400">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="text-right font-normal text-gray-600 dark:text-gray-400">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>合计</TableCell>
            <TableCell className="text-right">¥20,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
