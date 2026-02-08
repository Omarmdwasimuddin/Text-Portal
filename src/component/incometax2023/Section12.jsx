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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১২। বেসরকারি ওয়্যারহাউসের লাইসেন্স প্রদান, স্থগিত, বাতিল, ইত্যাদি---</span> (১) কমিশনার অব কাস্টমস (বন্ড) অথবা বোর্ড কর্তৃক ক্ষমতাপ্রাপ্ত কোনো কমিশনার অব কাস্টমস, উপ- ধারা (২) এর বিধান সাপেক্ষে, কোনো ওয়্যারহাউসিং স্টেশনে, কোনো ভবন বা ভবনের অংশবিশেষ বা আবদ্ধ কোনো স্থানকে (enclosure), নিম্নবর্ণিত উদ্দেশ্যে বেসরকারি ওয়্যারহাউস হিসাবে পরিচালনার জন্য লাইসেন্স প্রদান করিতে পারিবেন, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) লাইসেন্সি কর্তৃক বা তাহার পক্ষে আমদানিকৃত শুল্ক আরোপযোগ্য পণ্য মজুদ রাখা;
                </p>

                <p className="mb-4 text-sm">
                  (খ) সরকারি ওয়্যারহাউসে মজুদ রাখিবার মত সুবিধা নাই এইরূপ যে কোনো আমদানিকৃত পণ্য মজুদ রাখা; অথবা
                </p>

                <p className="mb-4 text-sm">
                  (গ) আমদানিকৃত শুল্ক আরোপযোগ্য পণ্য হইতে সম্পূর্ণ বা আংশিকভাবে পণ্য প্রক্রিয়াকরণ বা প্রস্তুত করা।
                </p>

                <p className="mb-4 text-sm">
                  (২) এই ধারার উদ্দেশ্য পূরণকল্পে, নিম্নবর্ণিত বিষয়ে বিধি প্রণয়ন করা যাইবে, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) বেসরকারি ওয়্যারহাউসের লাইসেন্স মঞ্জুর ও বেসরকারি ওয়্যারহাউসের ব্যবস্থাপনা;
                </p>

                <p className="mb-4 text-sm">
                  (খ) বেসরকারি ওয়্যারহাউসের পরিচালনা ও উহার প্রকৃতি এবং ওয়্যারহাউসে মজুদযোগ্য পণ্যের উপর শর্ত, সীমাবদ্ধতা বা বিধিনিষেধ; এবং
                </p>

                <p className="mb-4 text-sm">
                  (গ) ওয়্যারহাউসের আমদানি প্রাপ্যতা।
                </p>

                <p className="mb-4 text-sm">
                  (৩) কমিশনার অব কাস্টমস (বন্ড) বা বোর্ড কর্তৃক ক্ষমতাপ্রাপ্ত অন্য কোনো কমিশনার অব কাস্টমস, এই ধারার অধীন প্রাপ্ত লাইসেন্সিকে ওয়্যারহাউসে মজুদকৃত পণ্যের উপর আরোপণীয় শুল্ক ও কর পরিশোধ নিশ্চিত করিবার উদ্দেশ্যে, গ্যারান্টি প্রদানের জন্য নির্দেশ প্রদান করিতে পারিবেন।
                </p>

                <p className="mb-4 text-sm">
                  (৪) কমিশনার অব কাস্টমস (বন্ড) বা বোর্ড কর্তৃক ক্ষমতাপ্রাপ্ত অন্য কোনো কমিশনার অব কাস্টমস, উপ- ধারা (১) এর অধীন প্রদত্ত লাইসেন্স নিম্নবর্ণিত যে কোনো কারণে স্থগিত বা বাতিল করিতে পারিবেন, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) লাইসেন্সি এই আইন বা তদধীন প্রণীত বিধির কোনো বিধান বা লাইসেন্সের কোনো শর্ত ভঙ্গ করিলে; বা
                </p>

                <p className="mb-4 text-sm">
                  (খ) জনস্বার্থে কোনো লাইসেন্স স্থগিত বা বাতিল করা উপযুক্ত বিবেচিত হইলে।
                </p>

                <p className="mb-4 text-sm">
                  (৫) উপ- ধারা (৪) এর দফা (খ) এর অধীন লাইসেন্স স্থগিতের ক্ষেত্রে, বিষয়টি নিষ্পত্তি না হওয়া পর্যন্ত লাইসেন্সিদের অনুকূলে সংশ্লিষ্ট আইনের অধীন ইস্যুকৃত ব্যবসা শনাক্তকরণ নম্বর (বিআইএন) স্থগিত থাকিবে।
                </p>

                <p className="mb-4 text-sm">
                  (৬) উপ- ধারা (৪) এর অধীন লাইসেন্স স্থগিত বা বাতিল করা সত্ত্বেও, কোনো লাইসেন্সির নিকট এই আইনের অধীন কোনো সরকারি পাওনা থাকিলে, উক্ত পাওনা আদায় কার্যক্রম অব্যাহত থাকিবে।
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