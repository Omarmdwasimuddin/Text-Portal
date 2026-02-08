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
                    সপ্তম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    প্রত্যর্পণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৩৬। কাস্টমস শুল্ক প্রত্যর্পণ---</span> (১) সহজে শনাক্তকরণযোগ্য এইরূপ কোনো পণ্য বাংলাদেশের বাহিরে যে কোনো স্থানে রপ্তানি করা হইলে, এবং অতঃপর বিদেশগামী কোনো যানবাহনে রসদ বা মজুদ সামগ্রী হিসাবে ব্যবহারের জন্য নামানো হইলে বা যথাযথ কর্মকর্তার তত্ত্বাবধানে ধ্বংস করা হইলে বা সরকারের নিকট হস্তান্তর করিলে, উক্ত পণ্যের উপর প্রদত্ত শুল্কের অনধিক সাত- অষ্টমাংশ নিম্নবর্ণিত শর্ত সাপেক্ষে প্রত্যর্পণ হিসাবে ফেরত প্রদান করিতে হইবে, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) বিধি দ্বারা নির্ধারিত ব্যতিক্রম এবং অনুমোদিত ক্ষেত্র ব্যতীত, উক্ত পণ্য আমদানি এবং পরবর্তীতে রপ্তানি, ধ্বংস, বা হস্তান্তর করিবার মধ্যবর্তী সময়ে বাংলাদেশে ব্যবহৃত হয় নাই; এবং
                </p>

                <p className="mb-4 text-sm">
                  (খ) অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস এর নিম্নে নহেন এইরূপ কর্মকর্তার সন্তুষ্টিমতে যে পণ্য আমদানি করা হইয়াছে সেই একই পণ্য হিসেবে উহা কাস্টমস স্টেশনে শনাক্ত করা হয়:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, কমিশনার অব কাস্টমস উক্ত পণ্য আমদানির পর ৩ (তিন) বৎসরের অধিক সময় বর্ধিত করিবেন না।
                </p>

                <p className="mb-4 text-sm">
                  ব্যাখ্যা।- এই উপ- ধারার উদ্দেশ্য পূরণকল্পে, যথাযথ কর্মকর্তা কর্তৃক ধারা ৮৩ এর অধীন যে তারিখে রপ্তানির উদ্দেশ্যে কোনো পণ্য ঘোষণা নিবন্ধিত করা হয়, সেই তারিখে উক্ত পণ্য রপ্তানির জন্য ঘোষণা করা হইয়াছে বলিয়া গণ্য হইবে।
                </p>

                <p className="mb-4 text-sm">
                  (২) যে ক্ষেত্রে বোর্ডের নিকট প্রতীয়মান হয় যে, বাংলাদেশে প্রস্তুত এবং বাংলাদেশের বাহিরে কোনো স্থানে রপ্তানিকৃত কোনো শ্রেণির অথবা বর্ণনার পণ্য প্রস্তুতকরণে ব্যবহৃত পণ্যের উপর প্রত্যর্পন প্রদান করা সমীচীন সেই ক্ষেত্রে বোর্ড, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, উক্ত পণ্যের ব্যাপারে বিধিমালায় যেরূপ ব্যবস্থিত থাকে সেই পরিমাণ এবং সেইরূপ শর্ত সাপেক্ষে প্রত্যর্পণ মঞ্জুর করিবার নির্দেশ প্রদান করিতে পারিবে।
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