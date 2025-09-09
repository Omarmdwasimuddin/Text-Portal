'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SubscriptionSection() {
  const subscriptions = [
    { id: 1, plan: "Yearly Subscription", price: "৳1200", features: ["Unlimited Reading", "Softcopy Access", "All Guides Included"] },
    { id: 2, plan: "Monthly Subscription", price: "৳150", features: ["Unlimited Reading", "Softcopy Access"] },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">🔑 Subscription Plans</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {subscriptions.map((sub) => (
          <Card key={sub.id} className="p-6 shadow-lg rounded-2xl border hover:border-green-500 transition">
            <h3 className="text-xl font-semibold mb-2">{sub.plan}</h3>
            <p className="text-2xl font-bold text-green-600 mb-4">{sub.price}</p>
            <ul className="text-gray-600 mb-4 space-y-2">
              {sub.features.map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
            </ul>
            <Button className="w-full bg-green-600 hover:bg-green-700">Subscribe Now</Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
