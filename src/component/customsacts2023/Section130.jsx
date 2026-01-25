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
                    ষোড়শ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    ওয়্যারহাউসিং
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৩০। ওয়্যারহাউস রক্ষকের দায়িত্ব---</span> সরকারি ওয়্যারহাউসে রক্ষিত পণ্যের ক্ষেত্রে ওয়্যারহাউস রক্ষক এবং বেসরকারি ওয়্যারহাউসে রক্ষিত পণ্যের ক্ষেত্রে লাইসেন্সধারী, উক্ত পণ্যের শুল্কায়নকারী কাস্টমস কর্মকর্তা কর্তৃক উল্লিখিত পরিমাণ, ওজন অথবা পরিমাপ অনুসারে, প্রযোজ্য ক্ষেত্রে ধারা ১২৫ এ ব্যবস্থিত স্বাভাবিক অপচয়ের কারণে পরিমাণে ঘাটতির জন্য ছাড় প্রদানপূর্বক, ওয়্যারহাউসে উহাদের যথাযথ গ্রহণ এবং উক্ত স্থান হইতে সরবরাহ এবং উক্ত স্থানে জমা থাকাকালীন সময়ে নিরাপদ হেফাজতের জন্য দায়ী থাকিবেন:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, ওয়্যারহাউসে পণ্য প্রবেশ করানোর অথবা উক্ত স্থান হইতে বাহিরে লইবার অথবা উক্ত স্থানে জমা থাকাকালীন সময়ে সংঘটিত কোনো অপচয় অথবা ক্ষতির জন্য কোনো মালিক যথাযথ কর্মকর্তা বা কোনো সরকারি ওয়্যারহাউসের রক্ষকের নিকট ক্ষতিপূরণ দাবি করিবার অধিকারী হইবেন না, যদি না ইহা প্রমাণিত হয় যে, উক্ত অপচয় বা ক্ষতি ওয়্যারহাউস রক্ষক বা কোনো কাস্টমস কর্মকর্তার ইচ্ছাকৃত কর্ম বা অবহেলার কারণে সংঘটিত হইয়াছে।
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