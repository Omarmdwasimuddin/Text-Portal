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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৩০। পণ্যের শুল্কহার, মূল্য এবং বিনিময় হার নির্ধারণের তারিখ---</span> কোনো আমদানিকৃত বা <sup className='text-blue-500' title='“রপ্তানিতব্য” শব্দ “রপ্তানিকৃত” শব্দের পরিবর্তে অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪৫ ধারাবলে প্রতিস্থাপিত।'>১</sup>[রপ্তানিতব্য] পণ্যের উপর প্রযোজ্য শুল্ক ও করের পরিমাণ নিম্নবর্ণিত তারিখে বলবৎ বিনিময় হার ও বাণিজ্যের শ্রেণি, পণ্যের শ্রেণিবিন্যাস, রুলস অব অরিজিন, এবং উক্ত পণ্যের ক্ষেত্রে প্রযোজ্য শুল্ক ও কর হারের ভিত্তিতে গণনা করিতে হইবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) ধারা ৮৩ এর অধীন পণ্য ঘোষণা নিবন্ধিত হওয়ার তারিখ;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) ধারা ১৩৪ এর দফা (ক) এর উপ- দফা (অ) এর অধীন ওয়্যারহাউস হইতে দেশীয় ভোগের জন্য পণ্য ছাড়করণের ক্ষেত্রে যে তারিখে ধারা ৮৩ এর অধীন কোনো পণ্য ঘোষণা নিবন্ধিত হয় সেই তারিখ; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) অন্যান্য ক্ষেত্রে শুল্ক পরিশোধের তারিখ:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, যে যানবাহনে পণ্য আমদানি করা হইবে উহা আগমনের প্রত্যাশায় যদি ধারা ৮৪ এর উপ- ধারা (২) অনুসারে কোনো পণ্য ঘোষণা দাখিল করা হয়, তাহা হইলে, এই ধারার উদ্দেশ্যপূরণকল্পে পণ্য আগমনের বিষয়ে অবহিতকরণের (notify) তারিখ হইবে পণ্যের শুল্ক হার, মূল্য এবং বিনিময় হার নির্ধারণের তারিখ:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  আরও শর্ত থাকে যে, পণ্য ঘোষণা ব্যতীত বা এইরূপ ঘোষণা অর্পণের প্রত্যাশায় কোনো পণ্য রপ্তানি অনুমোদিত হইলে, উক্ত পণ্যের উপর প্রযোজ্য শুল্ক হার এবং মূল্য নিরূপণের জন্য বিনিময় হার হইবে, যে তারিখ বহির্গমনোদ্যত যানবাহনে পণ্য জাহাজীকরণ আরম্ভ করা হয় সেই তারিখে প্রযোজ্য শুল্ক হার, বা, ক্ষেত্রমত, বিনিময় হার।
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
              ১ “রপ্তানিতব্য” শব্দ “রপ্তানিকৃত” শব্দের পরিবর্তে অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪৫ ধারাবলে প্রতিস্থাপিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}