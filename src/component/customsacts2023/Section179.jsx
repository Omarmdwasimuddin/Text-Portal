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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৭৯। লুকানো পণ্য উদ্‌ঘাটনের জন্য সন্দেহভাজন ব্যক্তির দেহ স্ক্রিন বা এক্স- রে করিবার ক্ষমতা---</span> (১) যে ক্ষেত্রে যথাযথ কর্মকর্তার বিশ্বাস করিবার কারণ থাকে যে, ধারা ১৭৭ এর অধীন তল্লাশিযোগ্য কোনো ব্যক্তি তাহার দেহের অভ্যন্তরে কোনো বাজেয়াপ্তযোগ্য পণ্য লুকাইয়া রাখিয়াছেন সেই ক্ষেত্রে তিনি উক্ত ব্যক্তিকে আটক করিতে পারিবেন এবং অনতিবিলম্বে তাহাকে অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস পদমার্যাদার কর্মকর্তার নিম্নে নহেন এইরূপ কাস্টমস কর্মকর্তার সম্মুখে উপস্থিত করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) যদি উপ- ধারা (১) এ উল্লিখিত অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস এর বিশ্বাস করিবার যুক্তিসঙ্গত কারণ থাকে যে, উক্ত ব্যক্তির দেহের অভ্যন্তরে উক্তরূপ পণ্য লুকানো রহিয়াছে এবং উক্ত ব্যক্তির দেহ স্ক্রিন অথবা এক্স- রে করানো আবশ্যক, তাহা হইলে তিনি সেই মর্মে আদেশ প্রদান করিতে পারিবেন অথবা, অন্যথায়, উক্ত ব্যক্তি অন্য কোনো কারণে আটককৃত না হইলে, তাহাকে অবিলম্বে মুক্তির আদেশ প্রদান করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) যেক্ষেত্রে উপ- ধারা (২) এ উল্লিখিত অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস কোনো ব্যক্তিকে স্ক্রিন বা এক্স- রে করানোর জন্য আদেশ প্রদান করেন সেই ক্ষেত্রে যথাযথ কর্মকর্তা যথাশীঘ্র সম্ভব এতদুদ্দেশ্যে সরকার কর্তৃক যেরূপ স্বীকৃত হয় সেইরূপ যোগ্যতাসম্পন্ন রেডিওলজিস্টের নিকট উক্ত ব্যক্তিকে লইয়া যাইবেন এবং উক্ত ব্যক্তি রেডিওলজিস্টকে তাহার দেহ স্ক্রিন বা এক্স- রে করাইতে দিতে বাধ্য থাকিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) রেডিওলজিস্ট সংশ্লিষ্ট ব্যক্তির দেহ স্ক্রিন অথবা এক্স- রে করিবেন এবং উপ- ধারা (২) এ উল্লিখিত কর্মকর্তার নিকট তাহার গৃহীত স্ক্রিন অথবা এক্স- রে ছবিসহ অনতিবিলম্বে এতদ্‌বিষয়ে তাহার প্রতিবেদন প্রেরণ করিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৫) যেক্ষেত্রে রেডিওলজিস্টের প্রতিবেদনের ভিত্তিতে অথবা অন্যভাবে উপ- ধারা (২) এ উল্লিখিত কর্মকর্তা সন্তুষ্ট হন যে, কোনো ব্যক্তির দেহের অভ্যন্তরে বাজেয়াপ্তযোগ্য কোনো পণ্য লুকানো রহিয়াছে সেই ক্ষেত্রে তিনি কোনো নিবন্ধিত পেশাজীবী চিকিৎসকের পরামর্শ এবং তত্ত্বাবধানে তাহার দেহ হইতে উক্ত পণ্য বাহির করিয়া আনার জন্য যথাযথ ব্যবস্থা গ্রহণের নির্দেশ প্রদান করিতে পারিবেন এবং উক্ত ব্যক্তি এইরূপ নির্দেশ পালনে বাধ্য থাকিবেন:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, কোনো মহিলার ক্ষেত্রে কোনো নিবন্ধিত পেশাজীবি মহিলা চিকিৎসকের পরামর্শ এবং তত্ত্বাবধান ব্যতীত উক্তরূপ কোনো কার্যক্রম গ্রহণ করা যাইবে না।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৬) যেক্ষেত্রে উপ- ধারা (২) এ উল্লিখিত কর্মকর্তার নিকট উক্তরূপ কোনো ব্যক্তিকে আনয়ন করা হয়, সেই ক্ষেত্রে তিনি এই ধারার অধীন সকল কার্যক্রম সম্পূর্ণ না হওয়া পর্যন্ত উক্ত ব্যক্তিকে আটক রাখিবার জন্য নির্দেশ প্রদান করিতে পারিবেন।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৭) যদি কোনো ব্যক্তি স্বীকার করেন যে তাহার দেহের অভ্যন্তরে বাজেয়াপ্তযোগ্য পণ্য লুকানো রহিয়াছে এবং যদি তিনি তাহার নিজ সম্মতিতে উক্ত পণ্য বাহির করিয়া আনিবার উপযুক্ত পদক্ষেপ গ্রহণে রাজী থাকেন, তাহা হইলে তাহাকে স্ক্রিনিং অথবা এক্স- রে করা হইবে না।
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