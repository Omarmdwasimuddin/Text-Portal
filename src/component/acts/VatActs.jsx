"use client";

import { useRouter } from "next/navigation";

const lawsData = [
  { id: 1, title: "ব্যাখ্যা পত্র নং-০৭/মুসক/২০২০, (মুসক ৪.৩) দাখিল সংক্রান্ত বিষয়ে স্পষ্টীকরণ ও দিক নির্দেশনা প্রদান ", slug: "value-added-bekhapotro" },
  { id: 2, title: "মূল্য সংযোজন কর আইন, ১৯৯১", slug: "value-added-tax-act" },
  { id: 3, title: "মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২", slug: "value-added-tax-and-supplementary-duty-act" },
  { id: 4, title: "উন্নয়ন সারচার্জ ও লেভি (আরোপ ও আদায়) আইন, ২০১৫", slug: "Income-tax-ordinance" },
];

export default function LawsPage() {
  const router = useRouter(); 

  const handleLawClick = (law) => {
    router.push(`/regulations/acts/vat-acts/${law.slug}`);
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">

        {/* Enhanced Laws Table */}
        <div className="overflow-hidden bg-white border border-gray-200 shadow-lg rounded-2xl">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-green-600">
            <div className="flex items-center justify-between">
              <h2 className="text-lg text-white">ভ্যাট আইন</h2>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-blue-100">Last updated: {new Date().toLocaleDateString()}</span>
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
                    Acts Title & Description
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
                  >
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                          <span className="text-sm font-medium text-green-600">{index + 1}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <button 
                          onClick={() => handleLawClick(law)}
                          className="text-sm text-left text-black transition-colors duration-200 transform cursor-pointer group-hover:translate-x-1"
                        >
                          {law.title}
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleLawClick(law)}
                          className="inline-flex items-center px-4 py-2 text-xs font-medium text-white transition-colors duration-200 bg-green-500 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
  );
}