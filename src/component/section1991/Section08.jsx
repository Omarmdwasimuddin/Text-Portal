import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
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
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                     <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৮৷ টার্ণওভার কর---</span><sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (১) ও (১ক) অর্থ আইন, ২০১২ এর ৬১ ধারাবলে প্রতিস্থাপিত ।'>১</sup>[ (১) করযোগ্য পণ্যের প্রস্তুতকারক বা উৎপাদক বা ব্যবসায়ী বা করযোগ্য সেবা প্রদানকারী কোন ব্যক্তি, যাহার ধারা ১৫ এর অধীন নিবন্ধিত হওয়ার বাধ্যবাধকতা নাই তিনি তাহার বার্ষিক টার্ণওভারের তিন শতাংশ হারে টার্ণওভার কর প্রদান করিবেন।
                  </p>
                  <p className="mb-4">
                    (১ক) ধারা ৬ এর উপ-ধারা (৪) এর অধীন আমদানি পর্যায়ে অগ্রিম মূল্য সংযোজন কর আদায়ের ক্ষেত্রে উপ-ধারা (১) এর বিধান প্রযোজ্য হইবে না।]
                  </p>
                  <p className="mb-4">
                    (২) সর্বোচ্চ কি পরিমাণ টার্ণওভারের উপর টার্ণওভার কর প্রদেয় হইবে তাহা নির্ধারণ, টার্ণওভার করদাতাগণের তালিকাভুক্তি <sup className='text-blue-500 cursor-pointer' title='‘‘ও ব্যবসায় সনাক্তকরণ সংখ্যা প্রদান’’ শব্দগুলি ‘‘তালিকাভুক্তি’’ শব্দটির পর অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৬৬(ক) ধারাবলে সন্নিবেশিত।'>২</sup>[ ও ব্যবসায় সনাক্তকরণ সংখ্যা প্রদান], প্রদেয় টার্ণওভার কর নিরূপণ ও আদায় পদ্ধতি, নিরূপণের বিরুদ্ধে আপীল, অপরাধ ও দণ্ডসমূহ, পণ্য আটক, ন্যায়-নির্ণয়ন, বাজেয়াপ্তি ও জরিমানা আরোপ এবং তত্সমূহ সম্পর্কিত আপীল, সংশ্লিষ্ট কর্মকর্তাগণের ক্ষমতা, হিসাবরক্ষণ, কম পরিশোধিত বা বকেয়া কর আদায়, ভুলবশতঃ বা অধিক পরিশোধিত কর প্রত্যর্পণ এবং অন্যান্য সংশ্লিষ্ট বিষয় বিধি দ্বারা নির্ধারিত হইবে৷
                  </p>
                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৩) অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে সংযোজিত'>৩</sup>[ (৩) বোর্ড, জনস্বার্থের গুরুত্ব বিবেচনা এবং যথোপযুক্ত অনুসন্ধানপূর্বক সরকারী গেজেটে জারীকৃত আদেশ দ্বারা, উক্ত আদেশে উল্লিখিত সীমা ও শর্তসাপেক্ষে, যে কোন পণ্য বা সেবাকে 'টার্ণওভার' কর হইতে অব্যাহতি প্রদান করিতে পারিবে৷]
                  </p>
                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৪) অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সংযোজিত'>৪</sup>[ (৪) বোর্ড, জনস্বার্থের গুরুত্ব বিবেচনা করিয়া এবং যথোপযুক্ত অনুসন্ধানপূর্বক সরকারী গেজেটে জারীকৃত আদেশ দ্বারা, কোন নির্দিষ্ট পণ্য, পণ্যশ্রেণী বা সেবা প্রদানকারীকে বার্ষিক টার্ণওভারের পরিমাণ নির্বিশেষে ধারা ১৫ এর আওতায় নিবন্ধিত হওয়া সহ মূল্য সংযোজন কর প্রদানের আদেশ প্রদান করিতে পারিবে৷]
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
          <div className="">
            <div className="p-6">
              <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
                {/* Horizontal line */}
              </div>
              <p className="text-xs italic text-gray-600">
                <sup className="font-bold">১</sup>উপ-ধারা (১) ও (১ক) অর্থ আইন, ২০১২ এর ৬১ ধারাবলে প্রতিস্থাপিত ।
              </p>
              <p className="mt-2 text-xs italic text-gray-600">
                <sup className="font-bold">২</sup>‘‘ও ব্যবসায় সনাক্তকরণ সংখ্যা প্রদান’’ শব্দগুলি ‘‘তালিকাভুক্তি’’ শব্দটির পর অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৬৬(ক) ধারাবলে সন্নিবেশিত।
              </p>
              <p className="mt-2 text-xs italic text-gray-600">
                <sup className="font-bold">৩</sup>উপ-ধারা (৩) অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে সংযোজিত
              </p>
              <p className="mt-2 text-xs italic text-gray-600">
                <sup className="font-bold">৪</sup>উপ-ধারা (৪) অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে সংযোজিত
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}