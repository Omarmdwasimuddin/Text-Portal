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
                    বিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    রসদ ও ভান্ডার সামগ্রী
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৫১। আগমনকারী যানবাহনের রসদ ও ভান্ডার সামগ্রী---</span> (১) বোর্ড কর্তৃক নির্ধারিত শর্তাবলি ও বিধি- নিষেধ এবং পণ্য ঘোষণা এবং ছাড়ের জন্য প্রয়োজনীয় আনুষ্ঠানিকতা সম্পাদন সাপেক্ষে, এবং এই অধ্যায়ের অধীন ভিন্নরূপ কিছু উল্লেখ না থাকিলে, বাংলাদেশের বাহিরের কোনো স্থান হইতে আগমনকারী কোনো যানবাহনের রসদ ও ভান্ডার হিসাবে বহনকৃত কোনো পণ্য, নিম্নবর্ণিত শর্ত সাপেক্ষে, কাস্টমস শুল্ক হইতে অব্যাহতি পাইবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) উক্ত রসদ ও ভান্ডার সামগ্রী, উল্লিখিত যানবাহন বাংলাদেশে উহার প্রস্থানের সর্বশেষ বন্দর, বিমানবন্দর, বা কাস্টমস স্টেশন হইতে প্রস্থানের পূর্বে, উক্ত যানবাহন ও যানবাহনের যাত্রী বা ক্রুদের ব্যবহার বা সেবার জন্য ব্যবহার ব্যতীত, ভিন্ন কোনো উদ্দেশ্যে ব্যবহার করা যাইবে না; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) উক্ত রসদ ও ভান্ডার সামগ্রী যানবাহন হইতে নামানো যাইবে না।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) কোনো কাস্টমস কর্মকর্তা, প্রয়োজনে, উপ- ধারা (১) এ উল্লিখিত যানবাহনের ভারপ্রাপ্ত ব্যক্তিকে, রসদ ও ভান্ডার সামগ্রী সিলমোহর করাসহ, উহার যে কোনো অননুমোদিত ব্যবহার রোধকল্পে যথাযথ পদক্ষেপ গ্রহণের জন্য নির্দেশ প্রদান করিতে পারিবেন।
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