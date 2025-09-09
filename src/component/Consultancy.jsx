'use client'

import { Button } from "@/components/ui/button"

export default function ConsultancySection() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">💼 Consultancy / Advisory Services</h2>
      <div className="bg-green-50 p-6 rounded-2xl shadow-md space-y-4">
        <p className="text-gray-700 leading-relaxed">
          আমাদের বিশেষজ্ঞ টিম থেকে <span className="font-semibold">VAT, Customs & Income Tax</span> 
          বিষয়ক Consultancy Service পেতে এখনই বুক করুন। 
          পরীক্ষার প্রস্তুতি কিংবা অফিসিয়াল কনসালটেন্সি – সব এক জায়গায়।
        </p>
        <Button className="bg-green-600 hover:bg-green-700">Book Consultancy</Button>
      </div>
    </section>
  )
}
