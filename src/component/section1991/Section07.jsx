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
                সম্পূরক শুল্ক আরোপ
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
              <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-gray-700">
                  {/* Section 1 */}
                  <div>
                    <p className="mb-4">
                      ৭৷ (১) বিলাস পণ্য, অত্যাবশ্যক নহে এবং সামাজিকভাবে অনভিপ্রেত <sup className='text-blue-500 cursor-pointer' title='“এবং অন্যান্য পণ্য ও সেবা যাহার উপর জনস্বার্থে সম্পূরক শুল্ক আরোপ করা যুক্তিযুক্ত” শব্দগুলি অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সন্নিবেশিত'>১</sup>[এবং অন্যান্য পণ্য ও সেবা যাহার উপর জনস্বার্থে সম্পূরক শুল্ক আরোপ করা যুক্তিযুক্ত] তৃতীয় তফসিলে উল্লিখিত এমন পণ্য ও সেবা যাহা বাংলাদেশে সরবরাহকৃত, আমদানিকৃত বা প্রদত্ত হয় উহার উপর উক্ত তফসিলে উল্লিখিত হারে সম্পূরক শুল্ক আরোপিত হইবে৷
                    </p>
                    <p className="mb-4">
                      (২) সম্পূরক শুল্ক আরোপের উদ্দেশ্যে পণ্য বা সেবার মূল্য হইবে,-
                    </p>
                    <p className="mb-4">
                      (ক) আমদানিকৃত পণ্যের ক্ষেত্রে, আমদানি শুল্ক আরোপের লক্ষ্যে Customs Act এর Section 25 <sup className='text-blue-500 cursor-pointer' title='“অথবা section 25A” শব্দগুলি, সংখ্যাটি ও অক্ষরটি অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে সন্নিবেশিত'>২</sup>[অথবা section 25A] এর অধীন <sup className='text-blue-500 cursor-pointer' title='“আমদানী শুল্ক আরোপনীয় মূল্যের সহিত আমদানী শুল্ক যোগ করিয়া যে মূল্য হয় সেই মূল্য” শব্দগুলি “আমদানি শুল্ক যে মূল্যের উপর আরোপিত হয় সেই মূল্য” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত'>৩</sup>[আমদানী শুল্ক আরোপনীয় মূল্যের সহিত আমদানী শুল্ক <sup className='text-blue-500 cursor-pointer' title='“এবং অন্যান্য শুল্ক ও কর( অগ্রিম আয়কর, সম্পূরক শুল্ক ও মূল্য সংযোজন কর ব্যতীত ) যোগ” শব্দগুলি, বন্ধনী ও কমা “যোগ” শব্দের পরিবর্তে অর্থ আইন, ২০০৯ (২০০৯ সনের ৩৬ নং আইন) এর ৫০ ধারাবলে প্রতিস্থাপিত যাহা ১ জুলাই ২০০৯ তারিখ হইতে কার্যকর।'>৪</sup>[এবং অন্যান্য শুল্ক ও কর( অগ্রিম আয়কর, সম্পূরক শুল্ক ও মূল্য সংযোজন কর ব্যতীত ) যোগ] করিয়া যে মূল্য হয় সেই মূল্য];
                    </p>
                    <p className="mb-4">
                      (খ) বাংলাদেশে প্রস্তুতকৃত বা উত্পাদিত পণ্যের ক্ষেত্রে, প্রস্তুতকারক বা উত্পাদক কর্তৃক <sup className='text-blue-500 cursor-pointer' title='“এবং করযোগ্য অন্যান্য পণ্যের ক্ষেত্রে ব্যবসায়ী কর্তৃক” শব্দগুলি অর্থ আইন, ১৯৯৬ (১৯৯৬ সনের ১৮ নং আইন) এর ৬ ধারাবলে সন্নিবেশিত'>৫</sup>[এবং করযোগ্য অন্যান্য পণ্যের ক্ষেত্রে ব্যবসায়ী কর্তৃক] উক্ত পণ্যের ক্রেতার নিকট হইতে প্রাপ্য পণ <sup className='text-blue-500 cursor-pointer' title='“যাহাতে” শব্দটি  “যাহা” শব্দটির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত'>৬</sup>[যাহাতে] মূল্য সংযোজন কর ও সম্পুরক শুল্ক অন্তর্ভুক্ত থাকিবে না; <sup className='text-blue-500 cursor-pointer' title='“এবং” শব্দটি অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে বিলুপ্ত'>৭</sup>[***]
                    </p>
                    <p className="mb-4">
                      (গ) বাংলাদেশে প্রদত্ত সেবার ক্ষেত্রে, সেবা প্রদান বাবদ সর্বমোট প্রাপ্তি যাহাতে মূল্য সংযোজন কর ও সম্পূরক শুল্ক অন্তর্ভুক্ত থাকিবে না <sup className='text-blue-500 cursor-pointer' title='দাঁড়ির (৷) পরিবর্তে “; এবং” সেমিকোলন এবং শব্দটি প্রতিস্থাপিত এবং অতঃপর দফা (ঘ) অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে সংযোজিত'>৮</sup>[; এবং
                    </p>
                    <p className="mb-4">
                      (ঘ) যে পণ্যের ক্ষেত্রে খুচরা মূল্যের ভিত্তিতে মূল্য সংযোজন কর আরোপিত হইবে সেই পণ্যের ক্ষেত্রে সম্পূরক শুল্ক আরোপের উদ্দেশ্যে এই আইনের ধারা ৫ (৩) এ বর্ণিত খুচরা মূল্য উক্ত পণ্যের মূল্য বলিয়া বিবেচিত হইবে৷]
                    </p>
                    <p className="mb-4">
                      (৩) মূল্য সংযোজন কর যে সময় ও পদ্ধতিতে প্রদান করা হয় সেই একই সময় ও পদ্ধতিতে সম্পূরক শুল্ক প্রদেয় হইবে৷
                    </p>
                  </div>
                </div>
              </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="border-b border-gray-400 pb-2 mb-4">
              {/* Horizontal line */}
            </div>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">১</sup>“এবং অন্যান্য পণ্য ও সেবা যাহার উপর জনস্বার্থে সম্পূরক শুল্ক আরোপ করা যুক্তিযুক্ত” শব্দগুলি অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সন্নিবেশিত
            </p>
            <p className="text-xs text-gray-600 italic mt-2">
              <sup className="font-bold">২</sup>“অথবা section 25A” শব্দগুলি, সংখ্যাটি ও অক্ষরটি অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে সন্নিবেশিত
            </p>
            <p className="text-xs text-gray-600 italic mt-2">
              <sup className="font-bold">৩</sup>“আমদানী শুল্ক আরোপনীয় মূল্যের সহিত আমদানী শুল্ক যোগ করিয়া যে মূল্য হয় সেই মূল্য” শব্দগুলি “আমদানি শুল্ক যে মূল্যের উপর আরোপিত হয় সেই মূল্য” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত
            </p>
            <p className="text-xs text-gray-600 italic mt-2">
              <sup className="font-bold">৪</sup>“এবং অন্যান্য শুল্ক ও কর( অগ্রিম আয়কর, সম্পূরক শুল্ক ও মূল্য সংযোজন কর ব্যতীত ) যোগ” শব্দগুলি, বন্ধনী ও কমা “যোগ” শব্দের পরিবর্তে অর্থ আইন, ২০০৯ (২০০৯ সনের ৩৬ নং আইন) এর ৫০ ধারাবলে প্রতিস্থাপিত যাহা ১ জুলাই ২০০৯ তারিখ হইতে কার্যকর।
            </p>
            <p className="text-xs text-gray-600 italic mt-2">
              <sup className="font-bold">৫</sup>“এবং করযোগ্য অন্যান্য পণ্যের ক্ষেত্রে ব্যবসায়ী কর্তৃক” শব্দগুলি অর্থ আইন, ১৯৯৬ (১৯৯৬ সনের ১৮ নং আইন) এর ৬ ধারাবলে সন্নিবেশিত
            </p>
            <p className="text-xs text-gray-600 italic mt-2">
              <sup className="font-bold">৬</sup>“যাহাতে” শব্দটি “যাহা” শব্দটির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত
            </p>
            <p className="text-xs text-gray-600 italic mt-2">
              <sup className="font-bold">৭</sup>“এবং” শব্দটি অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে বিলুপ্ত
            </p>
            <p className="text-xs text-gray-600 italic mt-2">
              <sup className="font-bold">৮</sup>দাঁড়ির (৷) পরিবর্তে “; এবং” সেমিকোলন এবং শব্দটি প্রতিস্থাপিত এবং অতঃপর দফা (ঘ) অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে সংযোজিত
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}