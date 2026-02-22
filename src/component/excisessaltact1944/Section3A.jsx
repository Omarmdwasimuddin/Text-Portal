import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-800 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-xl font-bold md:text-xl">
              The Excises and Salt Act, 1944
            </h1>
            <p className="text-sm md:text-sm opacity-90">
              ( ACT NO. I OF 1944 )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-700 rounded-full shadow-md">
              <p className="text-xs font-medium md:text-xs">[ 24th February, 1944 ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/excises&saltact/excise-and-salt-act-1944"
            className="absolute flex items-center gap-2 px-3 py-2 text-green-700 transition-all bg-white rounded-full shadow top-4 left-4 hover:bg-green-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>


        {/* Header Section */}
        <div className="py-5">

          <div className="px-6 py-2 bg-green-300">
            <h2 className="font-bold text-center text-black text-md">CHAPTER II</h2>
            <p className='text-xs font-bold text-center'>LEVY AND COLLECTION OF DUTY</p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="p-6">
              <div className="space-y-6 text-justify text-black">
                
                {/* Section */}
                <div>
                <p className="mb-4 text-sm">
                  <sup className='text-blue-500' title='Section 3A was added by section 4 of the Finance Act , 1964 (Act No. V of 1964)and sub-section (1) was ubstituted by section 3 of the Finance Ordinance, 1970(Ordinance No. XI of 1970)'>1</sup>[<span className='text-sm font-bold leading-tight text-black md:text-sm'>3A. Regulatory duty of Excise</span>--- (1) The Government may, by notification in the official Gazette, levy, subject to such conditions, limitations and restrictions as it may deem fit to impose, a regulatory duty-
                </p>
                
                <div className="pl-4 space-y-3 text-sm">
                  <p>
                    (a) on any excisable goods or excisable services, in addition to the duty leviable under section 3, at a rate not exceeding <sup className='text-blue-500' title='The figure “100” was substituted for the figure “40” by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976)'>2</sup>[100] per cent of the rate of duty leviable thereon under the said section, or, in the case of excisable goods, at a rate not exceeding <sup className='text-blue-500' title='The figure “30” was substituted for the figure “10” by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976)'>3</sup>[30] per cent ad valorem or <sup className='text-blue-500' title='The figure “25” was substituted for the figure “10” by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976)'>4</sup>[25] per cent of the retail price and, in the case of excisable services, <sup className='text-blue-500' title='The figure “25” was substituted for the figure “10” by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976)'>5</sup>[25] per cent of the charges for such services; and
                  </p>
                  
                  <p>
                    (b) on any other goods or services, at a rate, in the case of goods, not exceeding <sup className='text-blue-500' title='The figure “50” was substituted for the figure “20” by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976)'>6</sup>[50] per cent ad valorem or <sup className='text-blue-500' title='The figure “35” was substituted for the figure “20” by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976)'>7</sup>[35]
                  </p>
                  
                  <p>
                    per cent of the retail price and, in the case of services, not exceeding <sup className='text-blue-500' title='The figure “35” was substituted for the figure “20” by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976)'>8</sup>[35] per cent of the charges for the services] <sup className='text-blue-500' title='The colon (:) was substituted for the full stop (.) at the end of sub-section (1) and thereafter the proviso was inserted by section 3 of the Finance Ordinance, 1985 (Ordinance No. XXXII of 1985)'>9</sup>[:
                  </p>
                  
                  <p className="pl-4">
                    Provided that, if the assessed amount has a fraction of less than five poisha, the assessment shall be rounded off to the next higher five poisha.]
                  </p>
                  
                  <p>
                    (2) Any notification issued under sub-section (1) shall, if not earlier rescinded, stand rescinded on the expiry of the financial year during which it was issued.]
                  </p>
                </div>
              </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="">
          <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-900">
              {/* Horizontal line */}
            </div>
            <p className="text-xs italic text-black">
              1. Section 3A was added by section 4 of the Finance Act, 1964 (Act No. V of 1964) and sub-section (1) was substituted by section 3 of the Finance Ordinance, 1970 (Ordinance No. XI of 1970) <br/><br/>
              2. The figure "100" was substituted for the figure "40" by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976) <br/><br/>
              3. The figure "30" was substituted for the figure "10" by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976) <br/><br/>
              4. The figure "25" was substituted for the figure "10" by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976) <br/><br/>
              5. The figure "25" was substituted for the figure "10" by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976) <br/><br/>
              6. The figure "50" was substituted for the figure "20" by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976) <br/><br/>
              7. The figure "35" was substituted for the figure "20" by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976) <br/><br/>
              8. The figure "35" was substituted for the figure "20" by section 4 of the Finance Ordinance, 1976 (Ordinance No. XLV of 1976) <br/><br/>
              9. The colon (:) was substituted for the full stop (.) at the end of sub-section (1) and thereafter the proviso was inserted by section 3 of the Finance Ordinance, 1985 (Ordinance No. XXXII of 1985) <br/><br/>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}