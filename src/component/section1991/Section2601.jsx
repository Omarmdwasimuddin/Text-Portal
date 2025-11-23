import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 px-4 md:px-8 relative">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="mt-3 inline-block bg-green-500 px-4 py-1 rounded-full shadow-md">
              <p className="text-sm md:text-base font-medium">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
            className="absolute top-4 left-4 flex items-center gap-2 bg-white text-green-700 hover:bg-green-100 transition-all px-3 py-2 rounded-full shadow"
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
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Heading */}
            <div className="md:w-1/5 bg-blue-50 p-6 border-r border-gray-300">
              <h1 className="text-xl md:text-xl font-bold text-gray-800 leading-tight">
                করদাতার কর সংশ্লিষ্ট কার্যক্রম নিরীক্ষা এবং অনুসন্ধান
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='ধারা ২৬ক ও ২৬খ পূর্ববর্তী ধারা ২৬ক এর পরিবর্তে অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫৩ ধারাবলে প্রতিস্থাপিত'>১</sup>[২৬ক। (১) যুগ্ম- কমিশনার বা যুগ্ম-পরিচালক পদমর্যাদার নিম্নে নহেন এমন কোন মূল্য সংযোজন কর কর্মকর্তা, এই আইনের অধীন প্রদেয় করের যথার্থতা নিরূপণের উদ্দেশ্যে সংশ্লিষ্ট কার্যক্রম নিরীক্ষা বা অনুসন্ধানের জন্য যে কোন নিবন্ধিত বা নিবন্ধনযোগ্য ব্যক্তিকে নির্বাচন করিতে পারিবেন।
                  </p>

                  <p className="mb-4">
                    (২) উপ-ধারা (১) এর অধীন নিবন্ধিত বা নিবন্ধনযোগ্য ব্যক্তি নির্বাচনের ক্ষেত্রে নিম্নবর্ণিত বিষয়াদি বিবেচনায় রাখিতে হইবে, যথা:-
                  </p>

                  <p className="mb-4">
                    (ক) এই আইন বা সংশ্লিষ্ট অন্য কোন আইনের অধীন নিবন্ধিত বা নিবন্ধনযোগ্য ব্যক্তির অতীত কার্যক্রম ;
                  </p>

                  <p className="mb-4">
                    (খ) নিবন্ধিত বা নিবন্ধনযোগ্য ব্যক্তি কর্তৃক পরিচালিত পণের বিনিময়ে অর্থনৈতিক কার্যক্রমের প্রকৃতি বা ধরন ; এবং
                  </p>

                  <p className="mb-4">
                    (গ) এই আইনের অধীন প্রদেয় কর নিরূপন ও আদায় নিশ্চিতকরণকল্পে প্রাসঙ্গিক অন্য কোন বিষয়।
                  </p>

                  <p className="mb-4">
                    (৩) এই ধারার অধীন নিরীক্ষা বা অনুসন্ধান কার্যক্রম পরিচালনার উদ্দেশ্যে বোর্ড এই আইন এবং বিধির বিধানাবলীর সহিত সামঞ্জস্যপূর্ণ রীতি ও পদ্ধতি নির্ধারণকল্পে প্রয়োজনীয় আদেশ বা নির্দেশনা জারী করিতে পারিবে এবং উক্তরূপে কোন আদেশ বা নির্দেশনা জারী করা হইলে উহা মূল্য সংযোজন কর কর্মকর্তা কর্তৃক অনুসৃত হইবে।
                  </p>

                  <p className="mb-4">
                    (৪) এই ধারার অধীন নিরীক্ষা বা অনুসন্ধান কার্যক্রম পরিচালনার জন্য আদেশপ্রাপ্ত কর্মকর্তা উপ-ধারা (৩) এর অধীন জারিকৃত আদেশ বা নির্দেশনার ভিত্তিতে নির্ধারিত সময়ের মধ্যে নিরীক্ষা বা অনুসন্ধান সম্পন্ন করিয়া আদেশদানকারী কর্মকর্তার নিকট প্রতিবেদন দাখিল করিবেন।
                  </p>

                  <p className="mb-4">
                    (৫) উপ-ধারা (৪) এ উল্লিখিত নিরীক্ষা প্রতিবেদন প্রাপ্তির পর নিরীক্ষিত কর মেয়াদে এই আইনের অধীন করদাতার প্রদেয় করের দায়-দায়িত্ব উদঘাটিত হইলে, যথাযথভাবে করদায়িতা নির্ধারণ, নির্ধারিত করদায়িতার মধ্যে অপরিশোধিত করের উপর প্রযোজ্য সুদসহ উক্ত অপরিশোধিত কর আদায়, নিরীক্ষা বা অনুসন্ধানে উদঘাটিত কর ফাঁকি সংক্রান্ত অপরাধ বা অন্যান্য অনিয়ম সম্পর্কে যথাযথ দন্ড আরোপের জন্য উহা সংশ্লিষ্ট কর্মকর্তার নিকট প্রেরণ করিবেন।
                  </p>

                  <p className="mb-4">
                    (৬) পুনঃ নিরীক্ষা ও পুনঃ অনুসন্ধান করিবার যুক্তিযুক্ত কারণ থাকিলে কোন ব্যক্তির কোন কর মেয়াদ সংশ্লিষ্ট কার্যক্রম নিরীক্ষিত বা অনুসন্ধানকৃত হওয়া সত্ত্বেও, উক্ত করদাতার অন্য কোন কর মেয়াদ সংশ্লিষ্ট কার্যক্রম পুনঃনিরীক্ষা এবং পুনঃ অনুসন্ধান করার ক্ষেত্রে কোন বাধা থাকিবে না ।
                  </p>

                  <p className="mb-4">
                    (৭) উপ-ধারা (১) এ যাহা কিছুই থাকুক না কেন, কোন নিবন্ধিত বা নিবন্ধনযোগ্য ব্যক্তির মজুদ পণ্য পরিদর্শন ও হিসাব পরীক্ষা করিবার জন্য বোর্ড, আদেশ দ্বারা, যুক্তিসঙ্গত পারিশ্রমিক নির্ধারণ ও শর্তাদি স্থিরক্রমে কোন নিরীক্ষক নিয়োগ করিতে পারিবে।
                  </p>

                  <p className="mb-4">
                    (৮) উপ-ধারা (৭) এর অধীন নিয়োগপ্রাপ্ত নিরীক্ষক এই ধারার উদ্দেশ্য পূরণকল্পে, একজন মূল্য সংযোজন কর কর্মকর্তা হিসাবে গণ্য হইবেন।
                  </p>

                  <p className="mb-4">
                    (৯) এই ধারার উদ্দেশ্য পূরণকল্পে, টার্নওভার করের আওতায় তালিকাভুক্ত বা তালিকাভুক্তিযোগ্য প্রতিষ্ঠান এবং কুটির শিল্পের সুবিধাপ্রাপ্ত বা সুবিধা দাবীকারী প্রতিষ্ঠানও এই আইনের অধীন নিবন্ধিত বা নিবন্ধনযোগ্য ব্যক্তি বলিয়া গণ্য হইবে।]
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
          <div className="border-t border-gray-300">
            <div className="p-6">
              <div className="w-1/2 border-b border-gray-400 pb-2 mb-4">
                {/* Horizontal line */}
              </div>
              <div className="text-xs text-gray-600 italic space-y-2">
                <p>
                  <sup className="font-bold">১</sup>ধারা ২৬ক ও ২৬খ পূর্ববর্তী ধারা ২৬ক এর পরিবর্তে অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫৩ ধারাবলে প্রতিস্থাপিত
                </p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}