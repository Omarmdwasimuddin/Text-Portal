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
                    ঊনবিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    রপ্তানি বা জাহাজীকরণ এবং পুনরায় অবতরণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৪৭। পণ্য বোঝাই না করা অথবা পুনরায় নামানোর নোটিশ এবং উহাদের উপর শুল্ক ফেরত---</span> (১) যদি রপ্তানি পণ্য ঘোষণা অথবা কার্গো ঘোষণায় উল্লিখিত পণ্য বোঝাই না করা হয় অথবা কম বোঝাই করা হয় অথবা বোঝাই করিবার পর উহা নামানো হয়, তাহা হইলে যে যানবাহনে উক্ত পণ্য বোঝাই করিবার অভিপ্রায় ছিল অথবা যে যানবাহন হইতে উহা নামানো হইয়াছে সেই যানবাহনটি কাস্টমস স্টেশন ত্যাগ করিবার ১৫ (পনের) কার্যদিবস অতিবাহিত হওয়ার পূর্বে পণ্যের রপ্তানিকারক যথাযথ কর্মকর্তার নিকট, যে ক্ষেত্রে কর্মকর্তা নিজেই পণ্য ঘোষণা অপেক্ষা কম বোঝাই করেন অথবা পুনরায় নামানোর ব্যবস্থা করিয়াছেন সেইক্ষেত্র ব্যতীত, অন্যান্য ক্ষেত্রে, উক্ত কম বোঝাই অথবা পুনরায় নামানোর সংবাদ প্রদান করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ-ধারা (১) এর অধীন পণ্য- বোঝাই অথবা কম বোঝাই অথবা পুনরায় নামানোর এক বৎসরের মধ্যে যথাযথ কর্মকর্তার নিকট আবেদন করা হইলে বোঝাই করা হয় নাই অথবা কম বোঝাইকৃত অথবা বোঝাই করিবার পর পুনরায় নামানো পণ্যের উপর আরোপিত শুল্ক যে ব্যক্তির পক্ষে উহা পরিশোধ করা হইয়াছিল তাহাকে ফেরত প্রদান করা হইবে:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, যে ক্ষেত্রে উল্লিখিত ১৫ (পনেরো) কার্যদিবসের মধ্যে পণ্য বোঝাই করা হয় নাই অথবা কম বোঝাই অথবা পুনরায় নামানোর প্রয়োজনীয় সংবাদ প্রদান করা না হয়, সেইক্ষেত্রে যথাযথ কর্মকর্তা যেরূপ উপযুক্ত বিবেচনা করেন সেইরূপ জরিমানা, যদি হয়, আরোপ সাপেক্ষে শুল্ক ফেরত প্রদান করিতে পারিবেন।
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