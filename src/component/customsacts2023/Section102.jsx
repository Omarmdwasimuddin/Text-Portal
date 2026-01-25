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
                    চতুর্দশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    অস্থায়ী আমদানি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১০২। অস্থায়ী আমদানি পদ্ধতির পরিসমাপ্তি---</span> (১) কোনো পণ্য পুনঃরপ্তানি হওয়ার পর অস্থায়ী আমদানি পদ্ধতির পরিসমাপ্তি ঘটিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যথাযথ কর্মকর্তা কর্তৃক অনুমতি এবং বোর্ড কর্তৃক নির্ধারিত শর্ত ও বিধি- নিষেধ সাপেক্ষে, অস্থায়ী আমদানি পদ্ধতির নিম্নবর্ণিতভাবে পরিসমাপ্তি ঘটিবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) দেশীয় ভোগের জন্য পণ্য ঘোষণা দাখিল করা হইলে; বা
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) সরকারের নিকট পণ্য হস্তান্তর করা হইলে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) অস্থায়ী আমদানি পদ্ধতির পরিসমাপ্তির মেয়াদ বিধি দ্বারা নির্ধারিত হইবে:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, বোর্ড কর্তৃক সরকারি গেজেটে প্রজ্ঞাপন দ্বারা নির্ধারিত ব্যতিক্রমী পরিস্থিতিতে, যদি উক্ত মেয়াদের মধ্যে অনুমোদিত ব্যবহার সম্পন্ন করা না যায়, তাহা হইলে কমিশনার অব কাস্টমস, সংশ্লিষ্ট আমদানিকারক কর্তৃক যুক্তিসঙ্গত অনুরোধের প্রেক্ষিতে, উক্ত মেয়াদ অনধিক ৬ (ছয়) মাসের জন্য বৃদ্ধি করিতে পারিবেন।
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