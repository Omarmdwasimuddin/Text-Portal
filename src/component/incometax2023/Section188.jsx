import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-xl">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-700 to-green-700 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-xl md:text-2xl">
              কাস্টমস আইন, ২০২৩
            </h1>
            <p className="text-sm md:text-sm opacity-90">
              ( ২০২৩ সনের ৫৭ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-sm">[ ১৩ নভেম্বর, ২০২৩ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/customs-acts/customs-act-2023"
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
                

              <div className="py-2 text-black bg-gradient-to-r from-green-300 to-green-300 md:px-8">
                <div className="text-center">
                  <h1 className="text-lg font-bold">
                    চতুর্বিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস কর্মকর্তা কর্তৃক ক্ষমতা প্রয়োগ (enforcement)
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৮৮। দলিল সম্পর্কিত অতিরিক্ত ক্ষমতা---</span> বিষয় বা প্রসঙ্গের পরিপন্থি কোনো কিছু না থাকিলে, এই আইনে-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (১) জয়েন্ট কমিশনার অব কাস্টমস পদমর্যাদার নিম্নে নহেন এইরূপ কাস্টমস কর্মকর্তা, নোটিশ দ্বারা, কোনো সরকারি, আধা- সরকারি, স্বায়ত্বশাসিত, স্থানীয় সংস্থা, ব্যাংক অথবা বাংলাদেশ টেলিযোগাযোগ নিয়ন্ত্রণ আইন, ২০০১ এর ধারা ২(১৯) এ সংজ্ঞায়িত পরিচালনাকারী বা যে কোনো সংবিধিবদ্ধ কর্তৃপক্ষ কর্তৃক নিযুক্ত কোনো কর্মকর্তাসহ কোনো ব্যক্তিকে-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) টেলিযোগাযোগ বা বেতার যন্ত্রপাতি ব্যবহারের মাধ্যমে যে কোনো ধরনের যোগাযোগ ব্যবস্থাসহ কোনো দলিলপত্র বা নথিপত্র, যাহা জয়েন্ট কমিশনার অব কাস্টমস কোনো তদন্ত বা নিরীক্ষার জন্য আবশ্যক বা প্রাসঙ্গিক বলিয়া মনে করেন, তাহা একজন কাস্টমস কর্মকর্তার পরিদর্শনের জন্য উপস্থাপন করিতে নির্দেশ দিতে পারিবেন;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) উক্ত দলিলপত্র বা রেকর্ডপত্রের কপি বা অংশবিশেষের উদ্ধৃতি লইবার জন্য কাস্টমস কর্মকর্তাকে অনুমতি প্রদান করিতে পারিবেন; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) কোনো পণ্য সম্পর্কিত বা উক্ত তদন্তাধীন পণ্যের বিনিময় সম্পর্কিত অথবা উক্ত তদন্তের সহিত সংশ্লিষ্ট দলিলপত্র বা রেকর্ডপত্র সম্পর্কিত বিষয়ে সকল প্রশ্নের উত্তর প্রদানের জন্য যুগ্ম- কমিশনারের সম্মুখে উপস্থিত হইতে নির্দেশ দিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এ উল্লিখিতভাবে প্রত্যায়িত প্রতিটি কপি সকল আদালতে এইরূপ সাক্ষ্য হিসাবে গ্রহণযোগ্য হইবে যেন উহাই মূল কপি।
                </p>

              </div>
                
                
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="">
          <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-700">
              {/* Horizontal line */}
            </div>
            <p className="text-xs italic text-gray-950">
              
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}