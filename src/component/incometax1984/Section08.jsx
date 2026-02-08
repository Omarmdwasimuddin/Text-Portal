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
                    তৃতীয় অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    বন্দর, বিমান বন্দর, স্থল কাস্টমস স্টেশন, ইত্যাদি ঘোষণা
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৮। কাস্টমস বন্দর, কাস্টমস বিমানবন্দর, ইত্যাদি ঘোষণা---</span> (১) বোর্ড, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা,-
                </p>

                <p className="mb-4 text-sm">
                  (ক) যে সকল বন্দর ও বিমানবন্দরে আমদানিকৃত পণ্য বা পণ্যশ্রেণি নামানো হয় এবং রপ্তানিতব্য পণ্য বা পণ্যশ্রেণি বোঝাই করা হয়, সেই সকল বন্দর ও বিমানবন্দরকে, যথাক্রমে, কাস্টমস বন্দর ও কাস্টমস বিমানবন্দর হিসাবে;
                </p>

                <p className="mb-4 text-sm">
                  (খ) যে স্থানে স্থলপথে অথবা অভ্যন্তরীণ জলপথে আমদানিকৃত পণ্য নামানো হয় বা রপ্তানিতব্য পণ্য বোঝাই করা হয় অথবা যে কোনো পণ্য বা পণ্যশ্রেণি নামানো বা বোঝাই করা হয়, সেই সকল স্থানকে স্থল কাস্টমস স্টেশন অথবা কাস্টমস অভ্যন্তরীণ কন্টেইনার ডিপো অথবা কাস্টমস অভ্যন্তরীণ নৌ- কন্টেইনার টার্মিনাল হিসাবে; এবং
                </p>

                <p className="mb-4 text-sm">
                  (গ) কোন কোন রুটের মাধ্যমে, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা নির্ধারিত, কোন পণ্য বা পণ্যশ্রেণি স্থলপথে বা অভ্যন্তরীণ জলপথে বা কোন স্থল কাস্টমস স্টেশন বা কাস্টমস স্টেশন বা কোন সীমান্ত দিয়া আমদানি বা রপ্তানি করা যাইবে, উহা নির্ধারণের উদ্দেশ্যে কোনো রুটকে কাস্টমস রুট হিসাবে-
                </p>

                <p className="mb-4 text-sm">
                  ঘোষণা করিতে পারিবে।
                </p>

                <p className="mb-4 text-sm">
                  (২) কেবল সে সকল স্থানকে কাস্টমস বন্দর হিসাবে ঘোষণা করা যাইবে, যে সকল স্থান হইতে বাংলাদেশের কোনো নির্ধারিত কাস্টমস বন্দরের সহিত উপকূলীয় বাণিজ্য পরিচালনা করা হয় এবং, এই আইনের উদ্দেশ্য পূরণকল্পে, যাহা কাস্টমস হাউস এবং উহার সীমানা হিসাবে গণ্য হয়।
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