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
                    পঞ্চম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    আমদানি ও রপ্তানি নিষিদ্ধকরণ এবং নিয়ন্ত্রণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৭। নিষিদ্ধকরণ (prohibition) এবং নিয়ন্ত্রণ---</span> (১) আপাতত বলবৎ অন্য কোনো আইনে ভিন্নরূপ যাহা কিছুই থাকুক না কেন, নিম্নবর্ণিত কোনো পণ্য আমদানি বা রপ্তানি করা যাইবে না, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) নকল ধাতব মুদ্রা;
                </p>

                <p className="mb-4 text-sm">
                  (খ) জাল বা নকল কারেন্সি নোট এবং অন্য কোনো নকল দ্রব্য;
                </p>

                <p className="mb-4 text-sm">
                  (গ) কোনো অশ্লীল পুস্তক, পুস্তিকা, কাগজ, ড্রইং, প্রতিকৃতি, আলোকচিত্র, চলচ্চিত্র বা বস্তু, ভিডিও বা অডিও রেকর্ডিং, সিডি অথবা অন্য কোনো মাধ্যমে রেকর্ডিং;
                </p>

                <p className="mb-4 text-sm">
                  (ঘ) বন্যপ্রাণী (সংরক্ষণ ও নিরাপত্তা) আইন, ২০১২ (২০১২ সনের ৩০ নং আইন) এর বিধান লঙ্ঘন করিয়া আনিত পণ্য;
                </p>

                <p className="mb-4 text-sm">
                  (ঙ) নকল ভৌগোলিক নির্দেশক পণ্য;
                </p>

                <p className="mb-4 text-sm">
                  (চ) দণ্ডবিধির আওতাধীন নকল ট্রেডমার্কযুক্ত পণ্য অথবা ট্রেডমার্ক আইন, ২০০৯ (২০০৯ সনের ১৯ নং আইন) এর ধারা ২ এর দফা (৫) এর সংজ্ঞা অনুযায়ী মিথ্যা ট্রেড বর্ণনা সংবলিত পণ্য;
                </p>

                <p className="mb-4 text-sm">
                  (ছ) বাংলাদেশের বাহিরে প্রস্তুত খণ্ড পণ্যসমূহ (piece- goods) (যাহা সাধারণত দৈর্ঘ্য বা খণ্ড হিসাবে বিক্রয় করা হয়), যদি না বাংলাদেশে আপাতত প্রযোজ্য প্রমিত (standard) মিটারে বা অন্য কোনো পরিমাপে উহার প্রকৃত দৈর্ঘ্য সংখ্যায় প্রতিটি খণ্ডে সুস্পষ্টভাবে স্ট্যাম্পযুক্ত বা অন্য কোনোভাবে মুদ্রিত থাকে;
                </p>

                <p className="mb-4 text-sm">
                  <sup className='text-blue-500' title='দফা (জ) ও (ঝ) অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪০ ধারাবলে প্রতিস্থাপিত।'>১</sup>[(জ) বাংলাদেশ পেটেন্ট আইন, ২০২৩ (২০২৩ সনের ৫৩ নং আইন) এর অধীন কোনো পেটেন্ট এর স্বত্বাধিকারীর স্বত্ব লঙ্ঘন করিয়া প্রস্তুতকৃত পণ্য;
                </p>

                <p className="mb-4 text-sm">
                  (ঝ) কপিরাইট আইন, ২০২৩ (২০২৩ সনের ৩৪ নং আইন) এর অধীন কোনো কপিরাইট এর স্বত্বাধিকারীর স্বত্ব লঙ্ঘন করিয়া প্রস্তুতকৃত পণ্য।]
                </p>

                <p className="mb-4 text-sm">
                  (ঞ) অন্য কোনো আইনের অধীন নিষিদ্ধ কোনো পণ্য; এবং
                </p>

                <p className="mb-4 text-sm">
                  (ট) বোর্ড কর্তৃক, সময় সময়, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, নির্দিষ্টকৃত কোনো পণ্য।
                </p>

                <p className="mb-4 text-sm">
                  (২) সরকার, সময়ে সময়ে, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, কোনো পণ্য বাংলাদেশের অভ্যন্তরে আনয়ন বা বাংলাদেশের বাহিরে নেওয়া নিয়ন্ত্রণ করিতে পারিবে।
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
              ১ দফা (জ) ও (ঝ) অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪০ ধারাবলে প্রতিস্থাপিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}