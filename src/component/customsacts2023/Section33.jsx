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
                      <span className="text-lg font-bold leading-tight text-black md:text-lg">
                        ৩৩। অসত্য বিবৃতি, ইত্যাদি---
                      </span>
                    </p>

                    <p className="mb-4 ml-10 text-sm">
                      (১) কোনো ব্যক্তি কাস্টমস সংশ্লিষ্ট নিম্নবর্ণিত কোনো বিষয়ে অসত্য তথ্য বা
                      বিবৃতি বা, ক্ষেত্রমত, দলিল দাখিল করিবেন না, যথা:-
                    </p>

                    <p className="mb-4 ml-20 text-sm">
                      (ক) কাস্টমস কর্মকর্তার নিকট কোনো ঘোষণা, নোটিশ, প্রত্যয়নপত্র অথবা অন্য যে
                      কোনো দলিল দাখিল বা স্বাক্ষর করা অথবা অর্পণ করা বা অর্পণ করিবার ব্যবস্থা
                      করা;
                    </p>

                    <p className="mb-4 ml-20 text-sm">
                      (খ) এই আইন বা বিধির অধীন কোনো প্রশ্নের উত্তর প্রদানে বাধ্যবাধকতা রহিয়াছে
                      এইরূপ কোনো কাস্টমস কর্মকর্তা কর্তৃক জিজ্ঞাসিত প্রশ্নের জবাবে কোনো ঘোষণা
                      প্রদান করা; অথবা
                    </p>

                    <p className="mb-4 ml-20 text-sm">
                      (গ) ইলেক্ট্রনিক মাধ্যমে কোনো ঘোষণা, দলিল, তথ্য অথবা রেকর্ড প্রেরণ করা
                      অথবা উহাদের সফট কপি উপস্থাপন করা।
                    </p>

                    <p className="mb-4 ml-10 text-sm">
                      (২) উপ-ধারা (১) এ উল্লিখিত কোনো অসত্য তথ্য বা বিবৃতি বা দলিল দাখিলের
                      কারণে অথবা কোনোরূপ যোগসাজশের কারণে যদি কোনো শুল্ক অথবা চার্জ আরোপ করা
                      না হয় অথবা কম আরোপিত হয় অথবা ভুলক্রমে ফেরত প্রদান করা হয়, তাহা হইলে
                      যে ব্যক্তি উক্ত কারণে কোনো অর্থ পরিশোধের জন্য দায়বদ্ধ তাহার উপর নোটিশে
                      উল্লিখিত পরিমাণ অর্থ তিনি কেন পরিশোধ করিবেন না উহার কারণ দর্শানোর জন্য
                      দাবিনামা সম্বলিত নোটিশ জারি করিতে হইবে।
                    </p>

                    <p className="mb-4 ml-10 text-sm">
                      (২ক) যে ক্ষেত্রে অসাবধানতা, ভ্রান্তি অথবা ভুল ব্যাখ্যার কারণে পরিমাণে
                      ৪ (চার) হাজার টাকার নিম্নে নহে এমন কোনো শুল্ক অথবা চার্জ আরোপ করা না হয়
                      অথবা কম আরোপিত হয় অথবা ভুলক্রমে ফেরত প্রদান করা হয়, সেই ক্ষেত্রে যে
                      ব্যক্তি উক্ত কারণে কোনো অর্থ পরিশোধের জন্য দায়বদ্ধ তাহার উপর নোটিশে
                      উল্লিখিত পরিমাণ অর্থ তিনি কেন পরিশোধ করিবেন না উহার কারণ দর্শানোর জন্য
                      দাবিনামা সম্বলিত নোটিশ জারি করিতে হইবে।
                    </p>

                    <p className="mb-4 ml-10 text-sm">
                      (৩) উপ-ধারা (২) এ বর্ণিত ব্যক্তির যদি কোনো বক্তব্য থাকে, তাহা হইলে
                      যথাযথ কর্মকর্তা তাহা বিবেচনাপূর্বক উক্ত ব্যক্তি কর্তৃক প্রদেয় শুল্কের
                      পরিমাণ নির্ধারণ করিবেন, যাহা নোটিশে উল্লিখিত অর্থের পরিমাণ হইতে বেশি
                      হইবে না, এবং উক্ত ব্যক্তি এইরূপে নির্ধারিত পরিমাণ অর্থ পরিশোধ করিবেন।
                    </p>

                    <p className="mb-4 ml-10 text-sm">
                      (৪) উপ-ধারা (২) এর অধীন কোনো নোটিশ জারির ক্ষেত্রে কোনো সময়সীমা থাকিবে না।
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
              ১ উপ-ধারা (২ক) অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৪৭ ধারাবলে সন্নিবেশিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}