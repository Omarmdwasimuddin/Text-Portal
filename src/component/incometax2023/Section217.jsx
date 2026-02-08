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
                    পঞ্চবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    বিকল্প বিরোধ নিষ্পত্তি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২১৭। বিকল্প বিরোধ নিষ্পত্তির জন্য বিরোধের সংজ্ঞা এবং আওতা---</span> (১) এই অধ্যায়ের উদ্দেশ্য পূরণকল্পে, “বিরোধ” অর্থ কোনো মামলা বা কার্যধারা যাহা -
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) কোনো আমদানিকৃত পণ্যের কাস্টমস মূল্যায়ন সম্পর্কিত অথবা কাস্টমস মূল্যায়ন এবং পণ্যের শ্রেণিবিন্যাস সম্পর্কিত জরিমানা আরোপের ক্ষেত্রে প্রযোজ্য; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) কোনো কাস্টমস কর্তৃপক্ষ বা কমিশনার অব কাস্টমস (আপিল) অথবা আপিল ট্রাইব্যুনাল বা সুপ্রিম কোর্টের হাইকোর্ট বিভাগসহ কোনো আদালতের নিকট নিষ্পন্নাধীন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ-ধারা (১) এ যাহা কিছুই থাকুক না কেন, বিকল্প বিরোধ নিষ্পত্তি প্রক্রিয়ায় নিম্নবর্ণিত বিরোধ নিষ্পত্তি করা যাইবে না, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) প্রতারণা বা ফৌজদারি মামলা;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) নিষিদ্ধ, নিয়ন্ত্রিত বা এই আইনের অধীন চোরাচালানকৃত পণ্য আটক এবং বাজেয়াপ্তি সংক্রান্ত বিরোধ;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) মানিলন্ডারিং এর অভিযোগ সংক্রান্ত বিরোধ;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঘ) আমদানিকৃত পণ্যের শ্রেণিবিন্যাস সম্পর্কিত বিরোধ; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঙ) পণ্যের বর্ণনা, পরিমাণ, এবং এইচ.এস. কোডের অসত্য ঘোষণা, দলিলপত্র জালিয়াতি, আমদানি এবং রপ্তানি নীতি লঙ্ঘন অথবা কাস্টমস বন্ডেড ওয়্যারহাউস লাইসেন্সিং অথবা বন্ড সম্পর্কিত শর্তসমূহ লঙ্ঘনপূর্বক শুল্ক এবং কর ফাঁকির অভিযোগ সংক্রান্ত বিরোধ।
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