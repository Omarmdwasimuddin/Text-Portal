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
                    ষষ্ঠবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    আপিল এবং পুনরীক্ষণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২২৫। আপিল ট্রাইব্যুনাল---</span> (১) সরকার প্রয়োজনীয় সংখ্যক সদস্য সমন্বয়ে, এই আইনে আপিল ট্রাইব্যুনালের উপর অর্পিত ক্ষমতা প্রয়োগ এবং কর্তব্য পালনের জন্য কাস্টমস, এক্সাইজ এবং মূল্য সংযোজন কর আপিল ট্রাইব্যুনাল নামে একটি আপিল ট্রাইব্যুনাল গঠন করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) আপিল ট্রাইব্যুনালের সদস্য পদে নিম্নরূপ কোনো ব্যক্তি নিয়োগ লাভের যোগ্য হইবেন, যথা:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) বাংলাদেশ সিভিল সার্ভিস (কাস্টমস এন্ড এক্সাইজ) ক্যাডার এ নিয়োগপ্রাপ্ত বোর্ডের সদস্য পদে অথবা চলতি দায়িত্বে বোর্ডের সদস্য পদে কর্মরত রহিয়াছেন; অথবা
                </p>

                <p className="mb-4 ml-10 text-sm">
                  <sup className='text-blue-500'title='দফা (খ) অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৫৭ ধারাবলে প্রতিস্থাপিত।'>১</sup>[(খ) বাংলাদেশ সিভিল সার্ভিস (কাস্টমস এণ্ড এক্সাইজ) ক্যাডার এ নিয়োগপ্রাপ্ত কমিশনার বা কমিশনার চলতি দায়িত্বে বা সমপদমর্যাদার অন্য কোনো পদে কমপক্ষে ১ (এক) বৎসর যাবৎ চাকরি করিতেছেন বা করিয়াছেন; অথবা]
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) অতিরিক্ত জেলা ও দায়রা জজ পদে কর্মরত রহিয়াছেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) সরকার আপিল ট্রাইব্যুনালের সদস্যগণের মধ্য হইতে একজনকে উহার সভাপতি নিয়োগ করিবে, যাহার কাস্টমস এবং সংশ্লিষ্ট বিষয়ে বাস্তব অভিজ্ঞতা রহিয়াছে।
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
              ১ দফা (খ) অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৫৭ ধারাবলে প্রতিস্থাপিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}