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
                  <sup className='text-blue-500' title='Section 3AA was substituted by section 3 of অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) (With effect from 1st July 2020).'>1</sup>[<span className='text-sm font-bold leading-tight text-black md:text-sm'>3AA. Determination of duty</span>--- (1) The Commissioner of Excise may, after giving a person an opportunity of being heard, determine the amount of duty of excise payable by such person, if the Commissioner reasonably believes that the person has made false or untrue statement in respect of payable duty of excises or if such person fails to pay the payable duty within the prescribed time.
                </p>
                
                <div className="pl-4 space-y-3 text-sm">
                  <p>
                    (2) In the cases specified in sub-section (1), the Commissioner of Excise shall, within 45 (forty five) working days from the date of hearing, serve a notice of the determination of duty upon such person, which shall, along with other necessary particulars, contain the following matters, namely—
                  </p>
                  
                  <div className="pl-8 space-y-1">
                    <p>(a) the reason for such determination, the amount of duty payable as a result of such determination and a description of the basis on or before such amount of duty is determined;</p>
                    <p>(b) the date by which such duty shall be payable, but such date shall be at least 15 (fifteen) working days after the date on which the notice is served; and</p>
                    <p>(c) the time and place of filing appeal against such determination of duty.</p>
                  </div>
                  
                  <p>
                    (3) The Commissioner of Excise shall not make a determination of duty for a duty period at the expiry of 5 (five) years after such tax period, unless a person willfully neglects or commits a fraud in order to evade payment of duty, conceals or distorts any information, and any other offences under Value Added Tax and Supplementary Duty Act, 2012 (Act No. 47 of 2012).
                  </p>
                  
                  <p>
                    (4) If a person fails to pay a payable duty on or before the due date of payment, he shall be liable to pay an interest at a simple rate of 2% (two percent) per month on the amount of payable duty, from the next day, after the date such payment becomes due until the date the payment is made.
                  </p>
                  
                  <p>
                    (5) Nothing in this section shall prevent a Commissioner of Excise from imposing a fine mentioned in section 9.]
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
              1. Section 3AA was substituted by section 3 of অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) (With effect from 1st July 2020). <br/><br/>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}