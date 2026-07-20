import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ticket, Check, Tag } from "lucide-react"

const availableCoupons = [
  {
    code: "WELCOME2026",
    discount: "首单 8 折",
    description: "新用户首次下单享 20% 折扣",
    minAmount: "适用满 ¥100 的订单",
    expires: "2026-12-31",
  },
  {
    code: "SAVE50",
    discount: "立减 ¥50",
    description: "全场通用优惠券",
    minAmount: "适用满 ¥200 的订单",
    expires: "2026-09-15",
  },
  {
    code: "FREESHIP",
    discount: "免运费",
    description: "全国包邮，无门槛使用",
    minAmount: "无最低消费限制",
    expires: "2026-08-30",
  },
]

export default function CouponPage() {
  return (
    <div className="min-h-screen bg-muted dark:bg-neutral-900">
      <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6">
        <div className="flex flex-col gap-8">
          {/* 兑换卡片 */}
          <Card>
            <CardHeader>
              <CardTitle>输入优惠券码</CardTitle>
              <CardDescription>
                输入您的优惠券码以获得折扣
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="couponCode">优惠券码</Label>
                  <div className="flex gap-3">
                    <Input
                      id="couponCode"
                      placeholder="请输入优惠券码"
                      className="flex-1"
                    />
                    <Button type="button">
                      兑换
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    优惠券码不区分大小写
                  </p>
                </div>

                {/* 已使用优惠券 */}
                <div className="rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <Check className="size-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        SAVE50
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        立减 ¥50 · 本单已使用
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      移除
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 可用优惠券列表 */}
          <div>
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-4">
              可用优惠券
            </h2>
            <div className="flex flex-col gap-3">
              {availableCoupons.map((coupon) => (
                <Card key={coupon.code} className="overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    {/* 左侧折扣标识 */}
                    <div className="flex shrink-0 items-center justify-center border-b border-dashed border-border bg-primary/[0.03] px-6 py-4 sm:w-40 sm:border-b-0 sm:border-r dark:bg-primary/[0.05]">
                      <div className="text-center">
                        <Ticket className="mx-auto mb-1 size-5 text-primary" />
                        <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                          {coupon.discount}
                        </p>
                      </div>
                    </div>
                    {/* 右侧详情 */}
                    <div className="flex flex-1 items-center justify-between gap-4 p-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {coupon.description}
                          </p>
                          <Badge variant="secondary" className="shrink-0">
                            {coupon.code}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {coupon.minAmount} · 有效期至 {coupon.expires}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="shrink-0 gap-1.5">
                        <Tag className="size-3.5" />
                        立即领取
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
