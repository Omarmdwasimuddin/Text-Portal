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
                  <span className='text-sm font-bold leading-tight text-black md:text-sm'>6. Certain operations to be subject to licence---</span> The <sup className='text-blue-500' title='The word “Board” was substituted for the words “National Board of Revenue” by section 5 of the Finance Act, 1979 (Act No. V of 1979)'>1</sup>[Board] may, by notification in the official Gazette, provide that, from such date as may be specified in the notification, no person shall, except under the authority and in accordance with the terms and conditions of a licence granted under this Act, engage in-
                  <br /><br />
                  (a) the production or manufacture or any process of the production or manufacture of any specified excisable goods or of saltpetre or of any specified component parts or ingredients of such goods or of specified containers of such goods,
                  <br /><br />
                  (b) the wholesale purchase or sale (whether on his own account or as a broker or commission agent) or the storage of any excisable goods specified in this behalf in Part A of the Second Schedule, or
                  <br /><br />
                  (c) providing or rendering any excisable services.
                </p>
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
              1. The word “Board” was substituted for the words “National Board of Revenue” by section 5 of the Finance Act, 1979 (Act No. V of 1979) <br/><br/>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}