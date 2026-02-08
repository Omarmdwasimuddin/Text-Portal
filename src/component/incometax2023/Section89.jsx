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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৮৯। আমদানিকারক বা রপ্তানিকারক কর্তৃক সকল ব্যবস্থা গ্রহণ ও ব্যয় বহন করা---</span> কোনো কাস্টমস কর্মকর্তা কর্তৃক পরীক্ষার উদ্দেশ্যে বা পরীক্ষার আনুষঙ্গিক কার্যক্রম, যাহার মধ্যে কোনো তদন্ত, বৈজ্ঞানিক অথবা রাসায়নিক পরীক্ষা বা ড্রাফট সার্ভে অন্তর্ভুক্ত, পরিচালনার উদ্দেশ্যে কোনো পণ্য বা উহার কন্টেইনার খোলা, মোড়ক খোলা, বাদ দেওয়া, পরিমাপ করা, পুনঃমোড়কজাত করা, স্তূপ করা, বাছাই করা, বাহির করা, চিহ্নযুক্ত (marking) করা, সংখ্যায়ন করা, উঠানো, নামানো, পরিবহণ করা বা বোঝাই করিবার কাজ বা উহার অপসারণ বা ওয়্যারহাউসিং এর জন্য এবং উক্তরূপ পরীক্ষা, তদন্ত, রাসায়নিক পরীক্ষা অথবা সার্ভে করিবার জন্য প্রয়োজনীয় কোনো সুবিধা বা সহায়তা প্রদান উক্ত পণ্যের আমদানিকারক বা রপ্তানিকারক কর্তৃক এবং তাহার নিজ খরচে সম্পন্ন করিতে হইবে।
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