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
                    সপ্তবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    বিবিধ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৬১। গোপনীয়তা এবং বাণিজ্য সহজীকরণের উদ্দেশ্যে তথ্য বিনিময়/ব্যবস্থাপনা---</span> (১) নিম্নবর্ণিত ক্ষেত্রে ব্যবহারের উদ্দেশ্য ব্যতীত কাস্টমস কর্তৃপক্ষ কর্তৃক এই আইনের অধীন কোনো কর্তব্য সম্পাদনকালে সংগৃহীত সকল বাণিজ্য এবং যাত্রীর তথ্য গোপনীয় হইবে-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) বোর্ড এবং অন্যান্য সরকারী সংস্থার পরিসংখ্যানগত প্রয়োজনে; বা
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) যথোপযুক্ত কাস্টমস কর্মকর্তা কর্তৃক অন্যান্য আমদানি ও রপ্তানির সাথে তুলনা ও প্রমাণক হিসেবে ব্যবহারের উদ্দেশ্যে; বা
                </p>

                <p className="mb-4 ml-10 text-sm">
                  1[(গ) কোনো আদালত বা সরকার কর্তৃক অনুমোদিত সংস্থার সম্মুখে প্রমাণক হিসাবে উপস্থাপন:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, যেক্ষেত্রে তদন্তের স্বার্থে প্রয়োজনীয় কোনো দলিলাদি প্রমাণক হিসাবে উপস্থাপনের বিষয়ে আমলি আদালত আদেশ করিবে কেবল সেইক্ষেত্রে উক্তরূপ প্রয়োজনীয় কোনো দলিলাদি প্রমাণক হিসাবে উপস্থাপনযোগ্য হইবে; বা]
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঘ) তথ্য অধিকার আইন, ২০০৯ (২০০৯ সনের ২০ নং আইন) এর শর্ত এবং সীমাবদ্ধতা সাপেক্ষে তথ্য প্রকাশ; বা
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ঙ) বোর্ড কর্তৃক নির্ধারিত অন্য কোনো উদ্দেশ্য।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) সরকার এই আইনের অধীন বাণিজ্য সহজীকরণ, কার্যকর ঝুঁকি বিশ্লেষণ, প্রতিপালন ও প্রতিরোধের যথার্থতা নির্ণয়, অপরাধ প্রতিরোধ এবং তদন্তের প্রয়োজনে তথ্য বিনিময়ের যেকোনো দ্বিপাক্ষিক, আঞ্চলিক, বহুপাক্ষিক চুক্তি বা কনভেনশন বা অন্য কোনো ব্যবস্থা গ্রহণ করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) উপ- ধারা (২) এর আলোকে সম্পাদিত চুক্তি বা কনভেনশন বা এই জাতীয় কোনো ব্যবস্থায় বর্ণিত সীমাবদ্ধতা এবং শর্ত সাপেক্ষে বিনিময়কৃত তথ্য, এই আইনের অধীন তদন্ত এবং কার্যধারায় বা অন্য কোনো দেশের সংশ্লিষ্ট আইনে বিদ্যমান বিধান প্রতিপালনের ক্ষেত্রে প্রমাণক হিসেবে ব্যবহার করা যাইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) বোর্ড, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, এই ধরণের তথ্য বিনিময়কারীর পদবী সুনির্দিষ্টকরণসহ বিনিময়ের পদ্ধতি এবং শর্তাবলী নির্ধারণ করিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৫) উপধারা (১) হতে (৪) এ উল্লিখিত ক্ষেত্র ব্যতীত তথ্যের কোন প্রকাশ বা প্রচার এই আইনের অধীন অপরাধ হিসেবে বিবেচিত হইবে।
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
              ১ দফা (গ) অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ১০১ ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}