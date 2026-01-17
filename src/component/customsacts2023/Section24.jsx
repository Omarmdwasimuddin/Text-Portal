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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>২৪। কাস্টমস সেবার জন্য ফি---</span> (১) বোর্ড কোনো নির্দিষ্ট ব্যক্তির অনুকূলে প্রদত্ত নিম্নরূপ সেবার জন্য ফি প্রদানের নির্দেশ প্রদান করিতে পারিবে, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) পণ্য বোঝাই বা খালাসের জন্য নির্ধারিত স্থান ব্যতীত অন্য কোনো স্থানে বা এতদ্‌সংক্রান্ত কার্যক্রম পরিচালনার জন্য নির্ধারিত কর্মসময়ের বাহিরে কোনো পণ্য বোঝাই বা খালাস করা;
                </p>

                <p className="mb-4 text-sm">
                  (খ) এই আইনের অধীন কার্যক্রম পরিচালনার জন্য নির্ধারিত কর্মসময়ের বাহিরে বা নির্ধারিত কাস্টমস স্টেশন ব্যতীত অন্য কোনো স্থানে কোনো পণ্যের ঘোষণা, সত্যতা প্রতিপাদন বা ছাড় করা;
                </p>

                <p className="mb-4 text-sm">
                  (গ) কাস্টমস কর্মকর্তার তত্ত্বাবধানের প্রয়োজনীয়তা রহিয়াছে এইরূপ কোনো কাস্টমস বন্ডেড ওয়্যারহাউস বা অস্থায়ী সংরক্ষণাগারে কোনো পণ্যের মালিক বা আমদানিকারক কর্তৃক প্রবেশ বা পণ্যের হ্যান্ডলিং বা নমুনা সংগ্রহ করা;
                </p>

                <p className="mb-4 text-sm">
                  (ঘ) এই আইনের অধীন কোনো বেসরকারি ওয়্যারহাউস প্রতিষ্ঠা বা বন্দরের সীমানার মধ্যে পণ্য নামানো ও জাহাজীকরণের জন্য কার্গো- বোট বা কোনো এজেন্ট হিসাবে বাণিজ্যিক লেনদেনের জন্য কোনো লাইসেন্স প্রদান বা নবায়ন সংক্রান্ত;
                </p>

                <p className="mb-4 text-sm">
                  (ঙ) কোনো ব্যক্তির অনুরোধের প্রেক্ষিতে তথ্য, ফরম বা দলিল সরবরাহ সংক্রান্ত;
                </p>

                <p className="mb-4 text-sm">
                  (চ) সত্যতা প্রতিপাদনের উদ্দেশ্যে পণ্যের নমুনা সংগ্রহ ও পরীক্ষা করা, বা পণ্য ধ্বংস করিবার জন্য কাস্টমস কর্মকর্তা ব্যবহারের ব্যয় ব্যতীত অন্য কোনো ব্যয় জড়িত থাকার ক্ষেত্রে; এবং
                </p>

                <p className="mb-4 text-sm">
                  (ছ) ট্রানজিট বা ট্রান্সশিপমেন্ট সংক্রান্ত কার্যক্রম:
                </p>

                <p className="mb-4 text-sm">
                  তবে শর্ত থাকে যে, উক্তরূপে আরোপিত কোনো ফি এর পরিমাণ সম্ভাব্য প্রশাসনিক ব্যয় এবং প্রদত্ত সেবার ব্যয়ের অধিক হইবে না।
                </p>

                <p className="mb-4 text-sm">
                  (২) এই ধারার উদ্দেশ্য পূরণকল্পে, বিধি প্রণয়ন করা যাইবে।
                </p>

                <p className="mb-4 text-sm">
                  (৩) সুস্পষ্টভাবে ভিন্নরূপ কিছু উল্লেখ না থাকিলে, শুল্ক প্রত্যর্পণ বা পরিশোধ বিলম্বিতকরণ সম্পর্কিত বিধানাবলি ব্যতীত, এই আইন ও বিধির অধীন অন্য সকল প্রশাসনিক ও প্রয়োগ ব্যবস্থা সংক্রান্ত বিধানাবলি, এই ধারার অধীন প্রদেয় ফি এবং উক্ত ফি পরিশোধের জন্য দায়ী ব্যক্তির ক্ষেত্রে, এইরূপে প্রযোজ্য হইবে যেন উক্ত ফি কোনো কাস্টমস শুল্ক, এবং এই ধারার উদ্দেশ্য পূরণকল্পে, কাস্টমস শুল্কের পরিমাণ সংশ্লিষ্ট নিরূপণীয় দণ্ড, উক্ত শুল্ক বাস্তবিক পক্ষে প্রদেয় বা পরিশোধযোগ্য হউক বা না হউক, এই ধারার অধীন প্রদেয় কোনো ফি প্রদানের ক্ষেত্রে প্রযোজ্য একই পদ্ধতি অনুসারে নিরূপিত হইবে।
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