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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৪৬। ব্যবসায়ের নথিপত্রের সংরক্ষণ---</span> (১) প্রত্যেক লাইসেন্সধারী, আমদানিকারক, রপ্তানিকারক বা তাহাদের এজেন্ট বোর্ড কর্তৃক নির্ধারিত পদ্ধতিতে ৩ (তিন) বৎসর মেয়াদের জন্য নথিপত্র সংরক্ষণ করিবেন বা করিবার ব্যবস্থা গ্রহণ করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এ উল্লিখিত প্রত্যেক ব্যক্তি কোনো কাস্টমস কর্মকর্তার নির্দেশিত মতে-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) নথিপত্র এবং হিসাবপত্র কাস্টমস কর্তৃপক্ষের নিকট উপস্থাপন করিবেন;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) নথিপত্র এবং হিসাবপত্রের অনুলিপি প্রয়োজনমত সরবরাহ করিবেন; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) এই আইনের অধীন উদ্ভূত কোনো বিষয়ের সহিত সংশ্লিষ্ট ক্ষেত্রে কাস্টমস কর্মকর্তা কর্তৃক জিজ্ঞাসিত যে কোনো প্রশ্নের উত্তর প্রদান করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) যে ক্ষেত্রে উপ- ধারা (২) এর উদ্দেশ্য পূরণকল্পে, ইলেকট্রনিক বা অন্য কোনো যন্ত্রের মাধ্যমে তথ্য লিপিবদ্ধ বা সংরক্ষণ করা হয় সেইক্ষেত্রে লাইসেন্সধারী, আমদানিকারক, রপ্তানিকারক অথবা তাহাদের এজেন্ট কোনো কাস্টমস কর্মকর্তার অনুরোধক্রমে উপ- ধারা (২) এর আবশ্যকতা পূরণকল্পে যন্ত্রটি পরিচালনা করিবেন অথবা করিবার ব্যবস্থা করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) উপ- ধারা (২) এবং উপ- ধারা (৩) এর উদ্দেশ্য পূরণকল্পে, ধারা ১০০ এর অধীন নিয়োগকৃত অডিট এজেন্সি এবং উক্ত এজেন্সির কোনো কর্মচারী কাস্টমস কর্মকর্তা হিসাবে গণ্য হইবেন।
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