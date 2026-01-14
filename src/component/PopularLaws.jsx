'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScaleIcon, BookOpenIcon, DocumentTextIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

const popularLaws = [
  {
    title: "VAT Act & Rules",
    description: "সর্বশেষ ভ্যাট আইন ও বিধিমালা একসাথে দেখুন",
    icon: <ScaleIcon className="text-indigo-600 h-7 w-7" />,
    href: "/vat",
  },
  {
    title: "Customs Act",
    description: "কাস্টমস আইন, শিডিউল, এসআরও",
    icon: <GlobeAltIcon className="text-green-600 h-7 w-7" />,
    href: "/customs",
  },
  {
    title: "Income Tax Act",
    description: "আয়কর আইন ও ফাইন্যান্স অ্যাক্ট",
    icon: <DocumentTextIcon className="h-7 w-7 text-amber-600" />,
    href: "/income-tax",
  },
  {
    title: "Import & Export",
    description: "আমদানি ও রপ্তানি নীতি নির্দেশিকা",
    icon: <BookOpenIcon className="text-blue-600 h-7 w-7" />,
    href: "/import-export",
  },
  {
    title: "Excise Duty",
    description: "এক্সসাইজ শুল্ক ও সারচার্জ আইন",
    icon: <ScaleIcon className="text-red-600 h-7 w-7" />,
    href: "/excise",
  },
  {
    title: "Other Laws",
    description: "বন্ড, মানি লন্ডারিং, দুর্নীতি দমন আইন",
    icon: <BookOpenIcon className="text-gray-600 h-7 w-7" />,
    href: "/others",
  },
]

export default function QuickAccess() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#E6ECEA] to-[#F9E6D7]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-xl font-bold text-[#1F2A44] mb-8 text-center">
          জনপ্রিয় আইনসমূহ
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {popularLaws.map((law) => (
            <a
              key={law.title}
              href={law.href}
              className="transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Card className="h-full p-3 bg-white border border-gray-200 shadow-2xl rounded-xl hover:bg-gray-50">
                <CardContent className="flex flex-col items-center gap-3 p-2">
                  <div className="flex items-center justify-center p-2 bg-gray-100 rounded-full">
                    {law.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[#1F2A44] text-center leading-tight">
                    {law.title}
                  </h3>
                  <p className="text-xs text-[#4A5568] text-center leading-tight">
                    {law.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}