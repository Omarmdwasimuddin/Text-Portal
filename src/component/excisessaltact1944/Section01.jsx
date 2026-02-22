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


        {/* New Heading and Paragraph Section */}
        <div className="border-b border-gray-300 bg-blue-25">
          <div className="p-6 text-center">
            <h1 className="mb-6 text-sm font-bold text-black md:text-sm">
              <sup className='text-xs text-blue-500' title='Throughout this Act, the words “Government” and “Taka” were substituted for the words “Central Government” and “rupees” respectively by section 3 and the Second Schedule of the Bangladesh Laws (Revision and Declaration) Act, 1973 (Act No. VIII of 1973).'>1</sup>[<sup className='text-xs text-blue-500' title='Throughout this Act, the word “Bangladesh” was substituted for the word “Pakistan” by Article 3 of the Finance Order, 1972 (President’s Order No. 77 of 1972).'>2</sup>[ An Act to consolidate and amend the law relating to <sup className='text-xs text-blue-500' title='The word “Central” was omitted by section 3 and the Second Schedule of the Bangladesh Laws (Revision and Declaration) Act, 1973 (Act No. VIII of 1973)'>3</sup>[* * *] duties of excise and to salt.
            </h1>
            <div className="max-w-4xl mx-auto text-sm leading-relaxed text-left text-black md:text-sm">
              <p className="mb-3">WHEREAS it is expedient to consolidate and amend the law relating to 4[* * *] duties of excise on goods manufactured or produced, and services provided or rendered, in Bangladesh and to salt;</p>
              <p>It is hereby enacted as follows:-</p>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="">

          <div className="px-6 py-2 bg-green-300">
            <h2 className="font-bold text-center text-black text-md">CHAPTER I</h2>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="p-6">
              <div className="space-y-6 text-justify text-black">
                
                {/* Section 1 */}
                <div>
                  <p className="mb-4 text-sm">
                    <span className='text-sm font-bold leading-tight text-black md:text-sm'>1.Short title, extent and commencement</span>---(1) This Act may be called the <sup className='text-blue-500' title='The word “Central” was omitted by section 3 and the Second Schedule of the Bangladesh Laws (Revision and Declaration) Act, 1973 (Act No. VIII of 1973)'>5</sup>[* * *] <a href='/regulations/acts/excises&saltact/excise-and-salt-act-1944' className='text-blue-500'>Excises and Salt Act, 1944.</a>
                  </p>
                  
                  <p className="mb-4 text-sm">
                    (2) It extends to the whole of Bangladesh <sup className='text-blue-500' title='The words, figures, comma and brackets “except the areas of Export Processing Zones declared under section 10 of the Bangladesh Export Processing Zones Authority Act, 1980 (XXXVI of 1980)” were inserted by section 5 of the Finance Ordinance, 1986 (Ordinance No. XLV of 1986)'>6</sup>[except the areas of Export Processing Zones declared under section 10 of the Bangladesh Export Processing Zones Authority Act, 1980 (XXXVI of 1980)].
                  </p>

                  <p className="text-sm ">
                    (3) It shall come into force on such date as the Government may, by notification in the official Gazette, appoint in this behalf.
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
              1. Throughout this Act, the words “Government” and “Taka” were substituted for the words “Central Government” and “rupees” respectively by section 3 and the Second Schedule of the Bangladesh Laws (Revision And Declaration) Act, 1973 (Act No. VIII of 1973). <br/>
              2. Throughout this Act, the word “Bangladesh” was substituted for the word “Pakistan” by Article 3 of the Finance Order, 1972 (President’s Order No. 77 of 1972). <br/>
              3. The word “Central” was omitted by section 3 and the Second Schedule of the Bangladesh Laws (Revision And Declaration) Act, 1973 (Act No. VIII of 1973) <br/>
              4. The word “Central” was omitted by section 3 and the Second Schedule of the Bangladesh Laws (Revision And Declaration) Act, 1973 (Act No. VIII of 1973) <br/>
              5. The word “Central” was omitted by section 3 and the Second Schedule of the Bangladesh Laws (Revision And Declaration) Act, 1973 (Act No. VIII of 1973) <br/>
              6. The words, figures, comma and brackets “except the areas of Export Processing Zones declared under section 10 of the Bangladesh Export Processing Zones Authority Act, 1980 (XXXVI of 1980)” were inserted by section 5 of the Finance Ordinance, 1986 (Ordinance No. XLV of 1986) <br/>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}