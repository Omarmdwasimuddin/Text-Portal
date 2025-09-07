'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScaleIcon, BookOpenIcon, DocumentTextIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

const popularLaws = [
  {
    title: "VAT Act & Rules",
    description: "সর্বশেষ ভ্যাট আইন ও বিধিমালা একসাথে দেখুন",
    icon: <ScaleIcon className="h-8 w-8 text-indigo-600" />,
    href: "/vat",
  },
  {
    title: "Customs Act",
    description: "কাস্টমস আইন, শিডিউল, এসআরও",
    icon: <GlobeAltIcon className="h-8 w-8 text-green-600" />,
    href: "/customs",
  },
  {
    title: "Income Tax Act",
    description: "আয়কর আইন ও ফাইন্যান্স অ্যাক্ট",
    icon: <DocumentTextIcon className="h-8 w-8 text-amber-600" />,
    href: "/income-tax",
  },
  {
    title: "Import & Export Policy",
    description: "আমদানি ও রপ্তানি নীতি নির্দেশিকা",
    icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
    href: "/import-export",
  },
  {
    title: "Excise Duty & Surcharge",
    description: "এক্সসাইজ শুল্ক ও সারচার্জ আইন",
    icon: <ScaleIcon className="h-8 w-8 text-red-600" />,
    href: "/excise",
  },
  {
    title: "অন্যান্য আইন",
    description: "বন্ড, মানি লন্ডারিং, দুর্নীতি দমন আইন",
    icon: <BookOpenIcon className="h-8 w-8 text-gray-600" />,
    href: "/others",
  },
]

export default function QuickAccess() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#E6ECEA] to-[#F9E6D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1F2A44] mb-12 text-center">
          Quick Access / Popular Laws
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {popularLaws.map((law) => (
            <a
              key={law.title}
              href={law.href}
              className="transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Card className="rounded-2xl border border-gray-200 bg-white h-full p-6 shadow-lg hover:bg-gray-50">
                <CardContent className="flex flex-col items-center gap-6">
                  <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center">
                    {law.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2A44] text-center">{law.title}</h3>
                  <p className="text-base text-[#4A5568] text-center">{law.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}