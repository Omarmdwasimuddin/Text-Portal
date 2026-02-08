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
                    ষষ্ঠ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস শুল্ক আরোপ ও অব্যাহতি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
                <div>
                  <p className="mb-4 text-sm">
                    <span className="text-lg font-bold leading-tight text-black md:text-lg">
                      ৩২। শুল্ক, কর ও সুদ পরিশোধের সময়সীমা---
                    </span>
                  </p>

                  <p className="mb-4 ml-10 text-sm">
                    (১) এই আইনের অন্যান্য বিধান সাপেক্ষে, কোনো শুল্ক, কর ও অন্যান্য চার্জ
                    পরিশোধের জন্য দায়ী ব্যক্তিকে উহা অবহিতকরণের বিজ্ঞপ্তিতে অন্য কোনো তারিখ
                    প্রদান করা না হইলে, ১০ (দশ) দিনের মধ্যে উক্ত শুল্ক, কর ও অন্যান্য চার্জ
                    প্রদেয় হইবে।
                  </p>

                  <p className="mb-4 ml-10 text-sm">
                    (২) যদি কোনো শুল্ক, কর বা অন্যান্য চার্জ পরিশোধের জন্য দায়ী ব্যক্তি ধারা
                    ৩৫ এর উপ-ধারা (২) এর অধীন বিলম্ব পরিশোধের জন্য অনুমতি প্রাপ্ত হন,
                    তাহা হইলে উক্ত উপ-ধারায় উল্লিখিত মেয়াদের মধ্যে পরিশোধ করা যাইবে।
                  </p>

                  <p className="mb-4 ml-10 text-sm">
                    (৩) কোনো শুল্ক, কর বা অন্যান্য চার্জ প্রদেয় তারিখের মধ্যে পরিশোধিত না
                    হইলে, উক্ত শুল্ক, কর বা অন্যান্য চার্জের উপর, উহা পরিশোধযোগ্য বা প্রদেয়
                    হইবার সর্বশেষ তারিখ হইতে আরম্ভ করিয়া উহা পরিশোধিত হইবার তারিখ পর্যন্ত
                    মাসিক ১ (এক) শতাংশ সরল হারে সুদ পরিশোধ করিতে হইবে:
                  </p>

                  <p className="mb-4 ml-20 text-sm">
                    ব্যাখ্যা।- এই উপ-ধারার উদ্দেশ্যে পূরণকল্পে, “পরিশোধিত হইবার তারিখ পর্যন্ত”
                    অর্থ নির্ধারিত তারিখের পরবর্তী দিন হইতে নিষ্পন্নাধীন সময়সহ পরিশোধের দিন
                    পর্যন্ত, যাহা ২৪ (চব্বিশ) মাসের অধিক নহে।
                  </p>

                  <p className="mb-4 ml-10 text-sm">
                    (৪) কোনো শুল্ক, কর বা অন্যান্য চার্জ কোনো পণ্য ছাড়ের পর বকেয়া থাকিলে,
                    উক্ত নির্ধারিত বকেয়ার অতিরিক্ত হিসাবে, উক্ত পণ্য ছাড়ের তারিখ হইতে উক্ত
                    নির্ধারিত বকেয়া পরিশোধের তারিখ পর্যন্ত মাসিক ১ (এক) শতাংশ হারে সুদ ধার্য
                    করা হইবে:
                  </p>

                  <p className="mb-4 ml-20 text-sm">
                    তবে শর্ত থাকে যে, বোর্ড, সরকার কর্তৃক নির্ধারিত নীতিমালা অনুসারে, যদি
                    ইহা নির্ধারণ করে যে, ধার্যকৃত সুদ পরিশোধের ফলে সংশ্লিষ্ট ব্যক্তি গুরুতর
                    অর্থনৈতিক ক্ষতির সম্মুখীন হইবেন, তাহা হইলে বোর্ড উক্তরূপ সুদ ধার্য করা
                    হইতে বিরত থাকিতে পারিবে।
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
              ১ উপ-ধারা (৩) অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪৬(ক) ধারাবলে প্রতিস্থাপিত।<br/>
              ২ “পরিশোধের” শব্দ “অবহিতকরণের” শব্দের পরিবর্তে অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯১ ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।<br/>
              ৩ “মাসিক ১ (এক) শতাংশ” শব্দগুলি, সংখ্যা ও বন্ধনী “বার্ষিক ১০ (দশ) শতাংশ” শব্দগুলি, সংখ্যা ও বন্ধনীর পরিবর্তে অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪৬(খ) ধারাবলে প্রতিস্থাপিত।
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}