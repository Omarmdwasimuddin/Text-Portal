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
                       <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">১৫৷ নিবন্ধন---</span>(১) করযোগ্য পণ্যের সরবরাহকারী বা করযোগ্য সেবা প্রদানকারী বা <sup className='text-blue-500 cursor-pointer' title='“যে কোন পণ্য বা সেবার আমদানিকারক বা” শব্দগুলি “যে কোন পণ্যের আমদানিকারক বা যে কোন পণ্য বা সেবার” শব্দগুলির পরিবর্তে অর্থ আইন, ২০১৮ (২০১৮ সনের ২২ নং আইন) এর ৪৯(ক) ধারাবলে প্রতিস্থাপিত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।'>১</sup>[ যে কোন পণ্য বা সেবার আমদানিকারক বা] রপ্তানিকারককে বিধি দ্বারা নির্ধারিত পদ্ধতিতে সংশ্লিষ্ট কর্মকর্তার নিকট নিবন্ধিত হইতে হইবে৷
                    </p>

                    <p className="mb-4">
                      (২) যদি কোন ব্যক্তি দুই বা ততোধিক স্থান হইতে উক্তরূপ পণ্য সরবরাহ করেন বা সেবা প্রদান করেন বা আমদানি বা রপ্তানির ব্যবসায় পরিচালনা করেন তাহা হইলে তাহাকে প্রতিটি স্থানের জন্য পৃথকভাবে নিবন্ধিত হইতে হইবে <sup className='text-blue-500 cursor-pointer' title='দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৪ (১৯৯৪ সনের ১১ নং আইন) এর ৯ ধারাবলে সংযোজিত'>২</sup>:
                    </p>

                    <p className="pl-4 mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='শর্তাংশ অর্থ আইন, ২০১৬ (২০১৬ সনের ২৮ নং আইন) এর ৬৯ ধারাবলে প্রতিস্থাপিত (with effect from 1st July 2016).'>৩</sup>[ <sup className='text-blue-500 cursor-pointer' title='প্রথম শর্তাংশ অর্থ আইন, ২০১৮ (২০১৮ সনের ২২ নং আইন) এর ৪৯(খ)(অ) ধারাবলে বিলুপ্ত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।'>৪</sup>[ ***] <sup className='text-blue-500 cursor-pointer' title='“তবে” শব্দটি “আরও” শব্দটির পরিবর্তে অর্থ আইন, ২০১৮ (২০১৮ সনের ২২ নং আইন) এর ৪৯(খ)(আ) ধারাবলে প্রতিস্থাপিত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।'>৫</sup>[ তবে] শর্ত থাকে যে, যদি কোন ব্যক্তি দুই বা ততোধিক স্থান হইতে তাহার করযোগ্য পণ্যের উৎপাদন, সরবরাহ বা সেবা প্রদান বা আমদানি বা রপ্তানি ব্যবসা পরিচালনা করেন এবং সকল হিসাব-নিকাশ একত্রে সংরক্ষণ করেন, তাহা হইলে তিনি, স্বেচ্ছায়, বিধি দ্বারা নির্ধারিত পদ্ধতিতে কেন্দ্রীয়ভাবে নিবন্ধিত হইতে পারিবেন।]]
                    </p>

                    <p className="mb-4">
                      (৩) নিবন্ধনের আবেদনপত্র সর্বতোভাবে যথাযথ বলিয়া সংশ্লিষ্ট কর্মকর্তা সন্তুষ্ট হইলে তিনি আবেদনকারীকে নিবন্ধিত করিবেন এবং তাহার ব্যবসায় সনাক্তকরণ সংখ্যা উল্লেখ করিয়া তাহাকে একটি নিবন্ধনপত্র প্রদান করিবেন৷
                    </p>

                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৩ক) অর্থ আইন, ২০১৪ (২০১৪ সনের ৪ নং আইন) এর ৫৯ ধারাবলে বিলুপ্ত।'>৬</sup>[ ***]
                    </p>

                    <p className="mb-4">
                      (৪) যদি নিবন্ধনযোগ্য কোন ব্যক্তি নিবন্ধনের জন্য আবেদনপত্র পেশ না করেন এবং সংশ্লিষ্ট কর্মকর্তা যথাযথ অনুসন্ধানের পর সন্তুষ্ট হন যে উক্ত ব্যক্তির এই ধারার অধীন নিবন্ধিত হওয়ার বাধ্যবাধকতা রহিয়াছে, তাহা হইলে তিনি উক্ত ব্যক্তিকে <sup className='text-blue-500 cursor-pointer' title='“নিবন্ধিত করিয়া তাহাকে অবহিত করিবেন” শব্দগুলি  “নিবন্ধিত হইতে বাধ্য করিবেন” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত'>৭</sup>[নিবন্ধিত করিয়া তাহাকে অবহিত করিবেন] এবং যেদিন হইতে উক্ত বাধ্যবাধকতার উদ্ভব হইয়াছে সেই দিন হইতেই উক্ত ব্যক্তি নিবন্ধিত বলিয়া গণ্য হইবেন৷
                    </p>

                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='উপ ধারা (৫) অর্থ আইন, ২০০৯ ( ২০০৯ সনের ৯ নং আইন) এর ৬১ ধারাবলে সন্নিবেশিত।'>৮</sup>[ (৫) উপ-ধারা (১) , (২), (৩) ও (৪) এ যাহা কিছুই থাকুক না কেন মূল্য সংযোজন কর ও আয়করের জন্য প্রত্যেক নিবন্ধিত ব্যক্তিকে একটি সমন্বিত (Unified) নিবন্ধন সংখ্যা প্রদান করা যাইবে। তবে শর্ত থাকে যে, বোর্ড, গেজেটে প্রকাশিত প্রজ্ঞাপনের মাধ্যমে এই সমন্বিত নিবন্ধন সংখ্যা প্রদানের সময় ও পদ্ধতি নির্ধারণ করিতে পারিবে। ]
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
              <p className="mb-2 text-xs italic text-gray-600">
                <sup className="font-bold">১</sup>“যে কোন পণ্য বা সেবার আমদানিকারক বা” শব্দগুলি “যে কোন পণ্যের আমদানিকারক বা যে কোন পণ্য বা সেবার” শব্দগুলির পরিবর্তে <Link href='/' className='text-blue-500'>অর্থ আইন, ২০১৮</Link> (২০১৮ সনের ২২ নং আইন) এর ৪৯(ক) ধারাবলে প্রতিস্থাপিত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।
              </p>
              <p className="mb-2 text-xs italic text-gray-600">
                <sup className="font-bold">২</sup>দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৪ (১৯৯৪ সনের ১১ নং আইন) এর ৯ ধারাবলে সংযোজিত
              </p>
              <p className="mb-2 text-xs italic text-gray-600">
                <sup className="font-bold">৩</sup>শর্তাংশ অর্থ আইন, ২০১৬ (২০১৬ সনের ২৮ নং আইন) এর ৬৯ ধারাবলে প্রতিস্থাপিত (with effect from 1st July 2016).
              </p>
              <p className="mb-2 text-xs italic text-gray-600">
                <sup className="font-bold">৪</sup>প্রথম শর্তাংশ <Link href='/' className='text-blue-500'>অর্থ আইন, ২০১৮</Link> (২০১৮ সনের ২২ নং আইন) এর ৪৯(খ)(অ) ধারাবলে বিলুপ্ত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।
              </p>
              <p className="mb-2 text-xs italic text-gray-600">
                <sup className="font-bold">৫</sup>“তবে” শব্দটি “আরও” শব্দটির পরিবর্তে <Link href='/' className='text-blue-500'>অর্থ আইন, ২০১৮</Link> (২০১৮ সনের ২২ নং আইন) এর ৪৯(খ)(আ) ধারাবলে প্রতিস্থাপিত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।
              </p>
              <p className="mb-2 text-xs italic text-gray-600">
                <sup className="font-bold">৬</sup>উপ-ধারা (৩ক) অর্থ আইন, ২০১৪ (২০১৪ সনের ৪ নং আইন) এর ৫৯ ধারাবলে বিলুপ্ত।
              </p>
              <p className="mb-2 text-xs italic text-gray-600">
                <sup className="font-bold">৭</sup>“নিবন্ধিত করিয়া তাহাকে অবহিত করিবেন” শব্দগুলি “নিবন্ধিত হইতে বাধ্য করিবেন” শব্দগুলির পরিবর্তে অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে প্রতিস্থাপিত
              </p>
              <p className="text-xs italic text-gray-600">
                <sup className="font-bold">৮</sup>উপ ধারা (৫) অর্থ আইন, ২০০৯ ( ২০০৯ সনের ৯ নং আইন) এর ৬১ ধারাবলে সন্নিবেশিত।
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}