"use client";

import { useRouter } from "next/navigation";

const lawsData = [
  { id: 1, title: "Value Added Tax Act 1991", slug: "value-added-tax-act" },
  { id: 2, title: "Value Added Tax and Supplementary Duty Act 2012", slug: "value-added-tax-and-supplementary-duty-act" },
  { id: 3, title: "Development Surcharge and Levy (Imposition and Collection) Act, 2015", slug: "Income-tax-ordinance" },
];

export default function LawsPage() {
  const router = useRouter(); 

  const handleLawClick = (law) => {
    router.push(`/regulations/acts/vat-acts/${law.slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Laws Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-green-600">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl text-white">Vat Acts</h2>
              <div className="flex items-center space-x-2">
                <span className="text-blue-100 text-sm">Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center space-x-1">
                      <span>#</span>
                    </div>
                  </th>
                  <th className="p-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Acts Title & Description
                  </th>
                  <th className="p-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-400">
                {lawsData.map((law, index) => (
                  <tr 
                    key={law.id}
                    className="hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-green-600">{index + 1}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <button 
                          onClick={() => handleLawClick(law)}
                          className="text-md font-semibold text-black hover:text-green-600 text-left transition-colors duration-200 group-hover:translate-x-1 transform"
                        >
                          {law.title}
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleLawClick(law)}
                          className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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