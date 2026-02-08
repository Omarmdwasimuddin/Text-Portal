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
                    চতুর্বিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস কর্মকর্তা কর্তৃক ক্ষমতা প্রয়োগ (enforcement)
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২১৩। দণ্ডাদেশের নোটিশ প্রদর্শন করা---</span> (১) চোরাচালানের অপরাধে কোনো ব্যক্তির দণ্ডাদেশ হইবার পর সরকার তাহাকে তাহার ব্যবসাস্থলের, যদি থাকে, ভিতরে বা বাহিরে অথবা ভিতর এবং বাহির উভয় দিকে দণ্ডাদেশ প্রাপ্তির তারিখ হইতে কমপক্ষে ৩ (তিন) মাসকাল অব্যাহতভাবে সরকার কর্তৃক নির্ধারিত নম্বর, আয়তন ও অক্ষরে দণ্ডাদেশ সম্পর্কিত তথ্য সম্বলিত নোটিশ প্রদর্শন করিতে বাধ্য করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যদি কোনো ব্যক্তি উপ- ধারা (১) এ উল্লিখিত বাধ্যবাধকতা প্রতিপালন করিতে ব্যর্থ হন, তাহা হইলে তিনি এই আইনের অধীন প্রথম যে অপরাধের জন্য দণ্ডিত হইয়াছেন সেই অপরাধের অনুরূপ প্রকৃতির আরও একটি অপরাধ সংঘটন করিয়াছেন বলিয়া গণ্য হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) যদি দণ্ডাদেশ প্রাপ্ত কোনো ব্যক্তি উপ- ধারা (১) এ উল্লিখিত কোনো বাধ্যবাধকতা প্রতিপালন করিতে অস্বীকার করেন বা ব্যর্থ হন, তাহা হইলে এতদ্‌বিষয়ে সরকারের লিখিত আদেশ দ্বারা ক্ষমতাপ্রাপ্ত যে কোনো কর্মকর্তা উক্তরূপ কোনো অস্বীকৃতি বা ব্যর্থতার ক্ষেত্রে যে কার্যধারা গ্রহণ করা হইতে পারে তাহা ক্ষুণ্ন না করিয়া উপ- ধারা (১) এর বিধান অনুসারে উক্ত ব্যক্তির ব্যবসাস্থলের ভিতরে অথবা বাহিরে অথবা ভিতর অথবা বাহির উভয় দিকে নোটিশ আঁটাইয়া দিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) যদি কোনো ক্ষেত্রে সরকার এই মর্মে সন্তুষ্ট হয় যে, উপ- ধারা (১) বা (৩) এর বিধান অনুযায়ী নোটিশসমূহের প্রদর্শনীতে দণ্ডিত ব্যক্তির দণ্ডাদেশ সম্পর্কিত তথ্য উক্ত ব্যক্তির কারবারে জড়িত অন্যান্যদের ফলপ্রসূভাবে নজরে আসিবে না, তাহা হইলে সরকার উক্ত বাধ্যবাধকতার পরিবর্তে অথবা ইহার অতিরিক্ত হিসাবে দণ্ডিত ব্যক্তিকে তাহার ব্যবসায়ে ব্যবহৃত দ্রব্যাদিতে নির্ধারিত নম্বর, আয়তন ও অক্ষরে দণ্ডাদেশের বিবরণ সম্বলিত মুদ্রিত একটি নোটিশ অন্যূন ৩ (তিন) মাস সময়ের জন্য প্রদর্শন করিতে বাধ্য করিতে পারিবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৫) কোনো ব্যক্তি উপ- ধারা (৪) এ উল্লিখিত বাধ্যবাধকতা প্রতিপালনে ব্যর্থ হইলে, তিনি এই আইনের অধীন প্রথম যে অপরাধে দণ্ডিত হইয়াছিলেন, তাহার অনুরূপ প্রকৃতির আরও একটি অপরাধ সংঘটন করিয়াছেন বলিয়া গণ্য হইবে।
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