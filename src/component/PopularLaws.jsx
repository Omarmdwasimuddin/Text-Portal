'use client'

import { Card, CardContent } from "@/components/ui/card"
import { ScaleIcon, BookOpenIcon, DocumentTextIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

const popularLaws = [
  {
    title: "VAT Act & Rules",
    description: "Latest VAT laws and regulations",
    icon: <ScaleIcon className="h-7 w-7 text-indigo-600" />,
    href: "/vat",
  },
  {
    title: "Customs Act",
    description: "Customs laws, schedules, SROs",
    icon: <GlobeAltIcon className="h-7 w-7 text-green-600" />,
    href: "/customs",
  },
  {
    title: "Income Tax Act",
    description: "Income tax and finance acts",
    icon: <DocumentTextIcon className="h-7 w-7 text-amber-600" />,
    href: "/income-tax",
  },
  {
    title: "Import & Export",
    description: "Import-export policy guidelines",
    icon: <BookOpenIcon className="h-7 w-7 text-blue-600" />,
    href: "/import-export",
  },
  {
    title: "Excise Duty",
    description: "Excise duty & surcharge laws",
    icon: <ScaleIcon className="h-7 w-7 text-red-600" />,
    href: "/excise",
  },
  {
    title: "Other Laws",
    description: "Bond, money laundering, anti-corruption",
    icon: <BookOpenIcon className="h-7 w-7 text-gray-600" />,
    href: "/others",
  },
]

export default function QuickAccess() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#E6ECEA] to-[#F9E6D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A44] mb-8 text-center">
          Quick Access / Popular Laws
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularLaws.map((law) => (
            <a
              key={law.title}
              href={law.href}
              className="transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Card className="rounded-xl border border-gray-200 bg-white h-full p-3 shadow-md hover:bg-gray-50">
                <CardContent className="flex flex-col items-center gap-3 p-2">
                  <div className="bg-gray-100 p-2 rounded-full flex items-center justify-center">
                    {law.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[#1F2A44] text-center leading-tight">
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