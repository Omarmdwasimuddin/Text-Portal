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
                রপ্তানিকৃত পণ্য প্রস্তুতে বা উত্পাদনে ব্যবহৃত উপকরণের উপর প্রদত্ত কর <sup className='text-blue-500' title='“প্রত্যর্পণ (Drawback)” শব্দগুলি ও বন্ধনী “প্রত্যর্পণ” শব্দটির পরিবর্তে অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত'>১</sup>[প্রত্যর্পণ]
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
              <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-gray-700">
                  {/* Section 1 */}
                  <div>
                    <p className="mb-4">
                      ১৩৷ (১) <sup className='text-blue-500 cursor-pointer' title='“Customs Act, 1969 (IV of 1969) এর Chapter VI এর বিধানাবলীতে যাহা কিছুই থাকুক না কেন, এই ধারার অধীনে” শব্দগুলি, কমাগুলি, বন্ধনী ও সংখ্যাগুলি অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ৯০ ধারাবলে সন্নিবেশিত'>২</sup>[<Link href='/' className='text-blue-500'>Customs Act, 1969</Link> (IV of 1969) এর Chapter VI এর বিধানাবলীতে যাহা কিছুই থাকুক না কেন, এই ধারার অধীনে] যে কোন ব্যক্তি তত্কর্তৃক রপ্তানিকৃত পণ্য প্রস্তুতে বা উত্পাদনে বা রপ্তানিকৃত সেবায় বা রপ্তানিকৃত বলিয়া গণ্য পণ্যে বা সেবায় বা ধারা ৩ এর উপ-ধারা (২) এ উল্লেখিত খাদ্য বা অন্য কোন সামগ্রীতে ব্যবহৃত উপকরণের উপর প্রদত্ত মূল্য সংযোজন কর, সম্পূরক শুল্ক, আমদানি শুল্ক, আবগারী শুল্ক ও অন্যান্য সকল প্রকার শুল্ক ও কর ( <sup className='text-blue-500 cursor-pointer' title='“আগাম প্রদত্ত আয়কর এবং রপ্তানি পণ্য প্রস্তুতকরণে বা উত্পাদনে ব্যবহৃত, সরকার কর্তৃক সরকারী গেজেটে প্রজ্ঞাপন দ্বারা এতদুদ্দেশ্যে নির্ধারিত, কোন উপকরণের উপর প্রদত্ত সম্পূরক শুল্ক” শব্দগুলি ও কমাগুলি “আগাম প্রদত্ত আয়কর” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত'>৩</sup>[আগাম প্রদত্ত আয়কর এবং রপ্তানি পণ্য প্রস্তুতকরণে বা উত্পাদনে ব্যবহৃত, সরকার কর্তৃক সরকারী গেজেটে প্রজ্ঞাপন দ্বারা এতদুদ্দেশ্যে নির্ধারিত, কোন উপকরণের উপর প্রদত্ত সম্পূরক শুল্ক] ব্যতীত) প্রত্যর্পণ হিসাবে পাওয়ার অধিকারী হইবেন <sup className='text-blue-500 cursor-pointer' title='দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে সংযোজিত'>৪</sup>:
                    </p>
                    
                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='শর্তাংশটি অর্থ আইন, ২০০১ (২০০১ সনের ৩০ নং আইন) এর ৭৬ ধারাবলে প্রতিস্থাপিত'>৫</sup>[তবে শর্ত থাকে যে, কোন রপ্তানীকৃত বা রপ্তানীকৃত বলিয়া গণ্য পণ্য বা সেবা রপ্তানির তারিখের এবং যেক্ষেত্রে নিশ্চিত ও অপরিবর্তনীয় রপ্তানি ঋণপত্রের অথবা অভ্যন্তরীণ ব্যাক টু ব্যাক ঋণপত্র অথবা স্থানীয় বা আন্তর্জাতিক দরপত্রের শর্তমোতাবেক আংশিক জাহাজীকরণের (Partial Shipment) ভিত্তিতে পণ্য রপ্তানি করা হয় সেক্ষেত্রে সর্বশেষ রপ্তানির তারিখের ছয় মাসের মধ্যে প্রত্যর্পণ (Drawback) দাবী করা না হইলে, এই ধারারের অধীন প্রত্যর্পণ (Drawback) প্রদেয় হইবে না৷]
                    </p>

                    <p className="mb-4">
                      [ব্যাখ্যা৷- এই উপ-ধারায়, "রপ্তানির তারিখ" বলিতে যে তারিখে রপ্তানিকৃত পণ্য বা সেবার মালিক Customs Act এর section 131 এর বিধান অনুযায়ী উক্ত পণ্য বা সেবা রপ্তানির বিল অব এক্সপোর্ট সংশ্লিষ্ট কর্মকর্তার নিকট হস্তান্তর করেন সেই তারিখ বুঝাইবে৷]
                    </p>

                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (১ক) অর্থ আইন, ২০০৫ (২০০৫ সনের ১৬ নং আইন) এর ৩৭ ধারাবলে সন্নিবেশিত'>৬</sup>[(১ক) উপ-ধারা (১) এ যাহা কিছুই থাকুক না কেন, সরকার, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, রপ্তানিকৃত পণ্য প্রস্তুতে বা উত্পাদনে বা রপ্তানিকৃত সেবায় বা রপ্তানিকৃত বলিয়া গণ্য পণ্যে বা সেবায় ব্যবহৃত কোন নির্দিষ্ট উপকরণের উপর প্রদত্ত মূল্য সংযোজন কর এবং প্রযোজ্য ক্ষেত্রে, অন্যান্য শুল্ক বা কর প্রত্যর্পণের হার নির্ধারণ করিতে পারিবে৷]
                    </p>

                    <p className="mb-4">
                      (২) কোন রপ্তানিকারক তত্কর্তৃক বাংলাদেশে সরবরাহকৃত পণ্য বা প্রদত্ত সেবার উপর প্রদেয় উত্পাদ করের বিপরীতে তত্কর্তৃক রপ্তানিকৃত বা রপ্তানিকৃত বলিয়া গণ্য পণ্যে বা সেবায় বা ধারা ৩ এর উপ-ধারা (২) এ উল্লেখিত খাদ্য বা অন্য কোন সামগ্রীতে ব্যবহৃত উপকরণের উপর উপ-ধারা (১) মোতাবেক প্রত্যপর্ণযোগ্য যাবতীয় কর ও শুল্ক সমন্বয় করিতে পারিবেন৷
                    </p>

                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৩) অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে সংযোজিত'>৭</sup>[(৩) "মহাপরিচালক, শুল্ক রেয়াত ও প্রত্যর্পণ পরিদপ্তর", সরকারী গেজেটে জারীকৃত আদেশ দ্বারা, কোন রপ্তানিকারককে প্রকৃত রপ্তানির বিপরীতে চালানভিতিক বা,ক্ষেত্রমত, রপ্তানি পণ্যের উপকরণ-উৎপাদ সম্পর্ক(input-output co-efficient)এর ভিত্তিতে নির্ধারিত সমহার(flat rate) এ রপ্তানিকৃত পণ্যে ব্যবহৃত উপকরণের উপর পরিশোধিত পরিমাণ উপ-ধারা (১) এ উল্লিখিত শুল্ক ও করসমূহ প্রত্যর্পণের নির্দেশ প্রদান করিতে পরিবেন।]
                    </p>

                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৩) অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৬৮ ধারাবলে প্রতিস্থাপিত।'>৮</sup>[(৪) বোর্ড, সরকারী গেজেটে জারীকৃত আদেশ দ্বারা, আদেশে উল্লিখিত শর্ত সাপেক্ষে কোন আন্তর্জাতিক চুক্তি বাস্তবায়নের জন্য স্থানীয়ভাবে উত্পাদিত কোন পণ্য বা সেবার উপর কোন ব্যক্তি বা সংস্থা কর্তৃক পরিশোধিত মূল্য সংযোজন কর বা, ক্ষেত্রমত, মূল্য সংযোজন কর ও সম্পূরক শুল্ক প্রত্যর্পণের নির্দেশ প্রদান করিতে পারিবে৷]
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
              <p className="text-xs text-gray-600 italic mb-2">
                <sup className="font-bold">১</sup>“প্রত্যর্পণ (Drawback)” শব্দগুলি ও বন্ধনী “প্রত্যর্পণ” শব্দটির পরিবর্তে অর্থ আইন, ১৯৯৭ (১৯৯৭ সনের ১৫ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত
              </p>
              <p className="text-xs text-gray-600 italic mb-2">
                <sup className="font-bold">২</sup><Link href='/' className='text-blue-500'>“Customs Act, 1969</Link> (IV of 1969) এর Chapter VI এর বিধানাবলীতে যাহা কিছুই থাকুক না কেন, এই ধারার অধীনে” শব্দগুলি, কমাগুলি, বন্ধনী ও সংখ্যাগুলি অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ৯০ ধারাবলে সন্নিবেশিত
              </p>
              <p className="text-xs text-gray-600 italic mb-2">
                <sup className="font-bold">৩</sup>“আগাম প্রদত্ত আয়কর এবং রপ্তানি পণ্য প্রস্তুতকরণে বা উত্পাদনে ব্যবহৃত, সরকার কর্তৃক সরকারী গেজেটে প্রজ্ঞাপন দ্বারা এতদুদ্দেশ্যে নির্ধারিত, কোন উপকরণের উপর প্রদত্ত সম্পূরক শুল্ক” শব্দগুলি ও কমাগুলি “আগাম প্রদত্ত আয়কর” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত
              </p>
              <p className="text-xs text-gray-600 italic mb-2">
                <sup className="font-bold">৪</sup>দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৫ (১৯৯৫ সনের ১২ নং আইন) এর ৮ ধারাবলে সংযোজিত
              </p>
              <p className="text-xs text-gray-600 italic mb-2">
                <sup className="font-bold">৫</sup>শর্তাংশটি অর্থ আইন, ২০০১ (২০০১ সনের ৩০ নং আইন) এর ৭৬ ধারাবলে প্রতিস্থাপিত
              </p>
              <p className="text-xs text-gray-600 italic mb-2">
                <sup className="font-bold">৬</sup>উপ-ধারা (১ক) অর্থ আইন, ২০০৫ (২০০৫ সনের ১৬ নং আইন) এর ৩৭ ধারাবলে সন্নিবেশিত
              </p>
              <p className="text-xs text-gray-600 italic mb-2">
                <sup className="font-bold">৭</sup>উপ-ধারা (৩) অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে সংযোজিত
              </p>
              <p className="text-xs text-gray-600 italic">
                <sup className="font-bold">৮</sup>উপ-ধারা (৩) অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৬৮ ধারাবলে প্রতিস্থাপিত।
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}