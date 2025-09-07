'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { BellIcon, DocumentTextIcon, CalendarIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function LatestUpdates() {
  const [updates, setUpdates] = useState([])

  // Dummy data (replace later with backend fetch)
  useEffect(() => {
    const dummyData = [
      { id: 1, title: "SRO 123: VAT Rules Update", date: "2025-09-08", link: "/files/sro-123.pdf", type: "SRO" },
      { id: 2, title: "Circular 45: Income Tax Amendment", date: "2025-09-07", link: "/files/circular-45.pdf", type: "Circular" },
      { id: 3, title: "Order 89: Customs Regulation", date: "2025-09-06", link: "/files/order-89.pdf", type: "Order" },
      { id: 4, title: "SRO 120: Customs Duty Changes", date: "2025-09-05", link: "/files/sro-120.pdf", type: "SRO" },
    ]

    // sort by date (latest first)
    const sorted = dummyData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )

    // only keep 3 latest
    setUpdates(sorted.slice(0, 3))
  }, [])

  // Badge color by type
  const getBadgeColor = (type) => {
    switch(type) {
      case 'SRO':
        return 'bg-blue-100 text-blue-800'
      case 'Circular':
        return 'bg-purple-100 text-purple-800'
      case 'Order':
        return 'bg-amber-100 text-amber-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-[#E6ECEA] to-[#F9E6D7] rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mt-10">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <BellIcon className="h-6 w-6 text-indigo-600" />
          </div>
          Latest Updates & Notifications
        </h2>
        <Link
          href="/updates"
          className="text-sm text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1"
        >
          View all
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid gap-5">
        {updates.map((item) => (
          <Card 
            key={item.id} 
            className="transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 rounded-lg overflow-hidden group 
                       hover:shadow-lg hover:border-green-300 hover:bg-green-50"
          >
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                
                {/* Left-side date box with hover animation */}
                <div className="md:w-24 flex items-center justify-center p-4">
                  <div className="text-center w-16 h-16 flex flex-col items-center justify-center border rounded-lg bg-gray-50 text-gray-700 
                                  transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white shadow-sm group-hover:shadow-md">
                    <span className="text-lg font-bold">
                      {new Date(item.date).getDate()}
                    </span>
                    <span className="text-xs font-medium">
                      {new Date(item.date).toLocaleString('default', { month: 'short' })}
                    </span>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getBadgeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <h3 className="font-semibold text-gray-800 mt-2 mb-1">{item.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-2">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        Published on {new Date(item.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                    
                    <Link
                      href={item.link}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors ml-4 flex-shrink-0"
                      title="Read/Download"
                      target="_blank"
                    >
                      <DocumentTextIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* See all updates button for mobile */}
      <div className="text-center mt-8 md:hidden">
        <Link
          href="/updates"
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
        >
          See all updates
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}