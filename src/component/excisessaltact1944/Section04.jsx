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
                  <span className='text-sm font-bold leading-tight text-black md:text-sm'>
                    4. Determination of value for the purposes of duty---
                  </span>
                  (1) Where under this Act any article is chargeable with duty at a rate dependent on the value of the article, such value shall be deemed to be the wholesale cash price for which an article of the like kind and quality is sold or is capable of being sold to the general body of retail traders or, if there is no general body of retail traders, the general body of consumers on the day on which the article which is being assessed to duty is removed from the factory or warehouse, as the case may be, without any abatement or deduction whatever except the amounts of duty and sales tax then payable.
                </p>

                <p className="mb-4 text-sm">
                  (2) Where under this Act any article is chargeable with duty at a rate dependent on the retail price of the article, the retail price shall be the price fixed by the manufacturer, inclusive of all charges and taxes, at which any particular brand or variety of such article should be sold to the general body of consumers or, if more than one such price is so fixed for the same brand or variety, the highest such price.
                </p>

                <p className="mb-4 text-sm">
                  (3) Where under this Act any services, facilities and utilities are subject to duty at a rate dependent on the charges therefore and—
                </p>

                <p className="mb-4 text-sm">
                  (a) any such services, facilities or utilities are, in any case, rendered or provided free of charge or at a concessional rate, the duty shall be levied and collected on the amount which would have been charged for such services, facilities and utilities had they not been rendered or provided free of charge or at a concessional rate; and
                </p>

                <p className="mb-4 text-sm">
                  (b) the amount with reference to which the duty shall be levied shall be the total amount charged for all services, facilities, utilities, catering, supplies and merchandise provided or rendered, which the recipient pays or would have to pay but for any special relationship between the parties in question.
                </p>

                <p className="mb-4 text-sm">
                  (4) Where under this Act any entertainment is subject to a duty dependent on the charge for admission to such entertainment and—
                </p>

                <p className="mb-4 text-sm">
                  (a) the proprietor or enterprise of an entertainment admits any person to any place of entertainment as a spectator or as an audience for the purpose of amusement by taking part in it without any payment or on payment of an amount less than the amount normally charged for admission thereto, the duty shall nevertheless be levied and collected on the amount which would have been charged for such entertainment had it not been provided free of charge or at a concessional rate; and
                </p>

                <p className="mb-4 text-sm">
                  (b) the amount with reference to which the duty shall be payable shall be the amount charged for admission to an entertainment, exclusive of the duty and any other tax, which a spectator or an audience pays or would have to pay but for any special relationship between the parties in question.
                </p>

                <p className="mb-4 text-sm">
                  Explanation.— For the purpose of clause (a)—
                </p>

                <p className="mb-4 text-sm">
                  (i) “proprietor”, in relation to any entertainment, includes any person responsible for the management thereof; and
                </p>

                <p className="mb-4 text-sm">
                  (ii) in case there are different classes of seats in the entertainment, ‘place of entertainment’ means the class to which such person is admitted.
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
              1. Clause (b) was substituted by section 6 of the Finance Ordinance, 1978 (Ordinance No. XXI of 1978 ) <br/><br/>
              2. The words and comma “inclusive of the duty,” were omitted by section 5 of the Finance Ordinance, 1982 (Ordinance No. XVI of 1982) <br/><br/>
              3. Sub-section (4) was inserted by section 5 of the Finance Act, 1979 (Act No. V of 1979.) <br/><br/>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}