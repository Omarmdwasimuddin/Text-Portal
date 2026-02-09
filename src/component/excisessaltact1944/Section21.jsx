import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
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
        <div className="">
          <div className="flex flex-col md:flex-row">
            <div className="p-6">
              <div className="space-y-6 text-justify text-black">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                     <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">২১৷ ক্ষমতা---</span>(১) ধারা ২০ এর অধীন নিযুক্ত কোন মূল্য সংযোজন কর কর্মকর্তা এই আইনের দ্বারা বা অধীনে তাহাকে প্রদত্ত ক্ষমতা প্রয়োগ এবং তাহার উপর অর্পিত কর্তব্য পালন করিবেন; এবং তিনি তাহার অধস্তন যে কোন কর্মকর্তাকে প্রদত্ত বা তাহার উপর অর্পিত সকল ক্ষমতা প্রয়োগ ও কর্তব্য সম্পাদন করিতে পারিবেন:
                  </p>

                  <p className="pl-4 mb-4">
                    তবে শর্ত থাকে যে, এই আইনের বা তদধীনে প্রণীত বিধিমালায় যাহা কিছুই থাকুক না কেন, বোর্ড, সাধারণ বা বিশেষ আদেশ দ্বারা উক্ত ক্ষমতা প্রয়োগ ও কর্তব্য পালনের উপর উহা যেরূপ উপযুক্ত বিবেচনা করে, সেইরূপ পরিসীমা নির্ধারণ ও শর্ত আরোপ করিতে পারিবে৷
                  </p>

                  <p className="mb-4">
                    (২) মূল্য সংযোজন কর কর্মকর্তাগণ মূল্য সংযোজন কর, সম্পূরক শুল্ক ও টার্ণওভার করের পরিমাণ নির্ধারণ ও উহা আদায়সহ তত্সংক্রান্ত যাবতীয় কার্যাবলী সম্পাদন করিবেন৷
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="">
          <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
              {/* Horizontal line */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}