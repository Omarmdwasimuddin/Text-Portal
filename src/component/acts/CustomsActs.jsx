"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const lawsData = [
  { 
    id: 1, 
    title: "অথেনটিক ইংলিশ টেক্সট (কাস্টমস আইন, ২০২৩)", 
    slug: "authentic-english-text-customs-act-2023",
    pdfUrl: "/pdfs/Customs_Act_23_English.pdf"
  },
  { 
    id: 2, 
    title: "শুল্ক আইন-১৯৬৯ (সংশোধিত)", 
    slug: "customs-act-1969-amended",
    pdfUrl: "/pdfs/Customs-act-amend-2022-20231.pdf"
  },
  { 
    id: 3, 
    title: "শুল্ক আইন-২০২৩ (সংশোধিত)", 
    slug: "customs-act-2023-amended",
    pdfUrl: "/pdfs/Act_Amendment_FY_2024-2025.pdf"
  },
  { 
    id: 4, 
    title: "শুল্ক আইন-২০২৩", 
    slug: "customs-act-2023",
    // PDF নেই, তাই slug এ নিবে
  },
  { 
    id: 5, 
    title: "শুল্ক আইন-১৯৬৯ (ইংরেজি)", 
    slug: "customs-act-1969-english",
    pdfUrl: "/pdfs/ACT No. IV OF 1969.pdf"
  },
  { 
    id: 6, 
    title: "শুল্ক আইন-১৯৬৯ (বাংলা)", 
    slug: "customs-act-1969-bengali",
  },
  { 
    id: 7, 
    title: "শুল্ক আইন-২০১৪", 
    slug: "customs-act-2014", // এটা আলাদা করুন
    pdfUrl: "/pdfs/19.pdf"
  },
];

// PDF ভিউয়ার কম্পোনেন্ট
function PdfViewer({ pdfUrl, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75">
      <button
        onClick={onClose}
        className="absolute z-10 p-2 text-white transition-colors duration-200 bg-red-600 rounded-full top-2 right-40 hover:bg-red-700"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <iframe
        src={`${pdfUrl}#view=FitH&toolbar=1&navpanes=1`}
        className="w-full h-full border-0"
        title="PDF Viewer"
        allow="fullscreen"
      />
    </div>
  );
}

export default function LawsPage() {
  const router = useRouter();
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleLawClick = (law) => {
    // যদি PDF থাকে
    if (law.pdfUrl) {
      setSelectedPdf(law.pdfUrl);
    } 
    // যদি PDF না থাকে কিন্তু slug আছে
    else if (law.slug) {
      // নিচের পাথে রিডাইরেক্ট করুন
      router.push(`/regulations/acts/customs-acts/${law.slug}`);
    }
  };

  const handleViewClick = (law, e) => {
    e.stopPropagation(); // টেবিল রো ক্লিক প্রতিরোধ
    handleLawClick(law);
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-2xl">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-green-600">
            <div className="flex items-center justify-between">
              <h2 className="text-lg text-white">কাস্টম আইন</h2>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-blue-100">
                  Last updated: {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-xs tracking-wider text-left text-gray-700 uppercase">
                    <div className="flex items-center space-x-1">
                      <span>#</span>
                    </div>
                  </th>
                  <th className="p-4 text-xs tracking-wider text-left text-gray-700 uppercase">
                    Acts Title
                  </th>
                  <th className="p-4 text-xs tracking-wider text-left text-gray-700 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {lawsData.map((law, index) => (
                  <tr 
                    key={law.id}
                    className="transition-all duration-200 hover:bg-blue-50 group"
                    onClick={() => handleLawClick(law)}
                  >
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                          <span className="text-sm font-medium text-green-600">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <button 
                          className="text-left text-black transition-colors duration-200 transform cursor-pointer text-md group-hover:translate-x-1 hover:text-green-700"
                        >
                          {law.title}
                          {!law.pdfUrl && (
                            <span className="ml-2 text-xs text-blue-500">
                              (Click for details)
                            </span>
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={(e) => handleViewClick(law, e)}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* PDF ভিউয়ার মোডাল */}
      {selectedPdf && (
        <PdfViewer 
          pdfUrl={selectedPdf} 
          onClose={() => setSelectedPdf(null)} 
        />
      )}
    </div>
  );
}