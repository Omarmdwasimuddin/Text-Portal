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
                    দ্বাদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    পণ্যের ঘোষণা এবং ছাড়করণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৯০। শুল্কায়ন---</span> (১) এই আইন এবং বিধি দ্বারা নির্ধারিত পদ্ধতিতে, যথাযথ কর্মকর্তা-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) এই আইন ও বিধির বিধানাবলি এবং অন্যান্য আইনগত বিধানাবলি অনুসরণপূর্বক পণ্যের শ্রেণিবিন্যাস, উৎস দেশ এবং পণ্যের কাস্টমস মূল্য নিরূপণ করিবেন; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) উক্ত পণ্যের উপর, প্রযোজ্য ক্ষেত্রে, পরিশোধযোগ্য শুল্ক, কর ও অন্যান্য চার্জের পরিমাণ নির্ধারণ করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) সংশ্লিষ্ট আমদানিকারক বা রপ্তানিকারককে অনতিবিলম্বে, প্রদেয় শুল্ক করের পরিমাণ নিরূপণ করিয়া, যদি থাকে, ইলেকট্রনিক পদ্ধতিতে বা শুল্কায়ন আদেশ জারি করিয়া অবহিত করিতে হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) উপ- ধারা (১) এর অধীন যথাযথ কর্মকর্তা কর্তৃক শুল্কায়নের পরিবর্তে, বিধি দ্বারা নির্ধারিত পদ্ধতিতে, পণ্য ঘোষণায় বর্ণিত কাস্টমস মূল্য, পণ্যের শ্রেণিবিন্যাস, উৎস দেশ, শুল্ক হার, প্রদেয় শুল্ক, কর ও অন্যান্য চার্জের পরিমাণ গ্রহণ করা যাইবে এবং উক্তরূপ ক্ষেত্রে, প্রদেয় পরিমাণের নোটিশ, এই আইনের উদ্দেশ্য পূরণকল্পে, যথাযথ কর্মকর্তা কর্তৃক কৃত শুল্কায়ন আদেশ বলিয়া গণ্য হইবে।
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