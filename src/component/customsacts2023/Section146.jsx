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
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৪৬। রপ্তানি পদ্ধতি---</span> (১) নিম্নলিখিত পণ্য ব্যতীত বাংলাদেশ ত্যাগের জন্য নির্ধারিত অন্য সকল পণ্য, পণ্য ঘোষণা দাখিল এবং রপ্তানি পদ্ধতির অধীন ন্যস্ত হওয়া সাপেক্ষে, রপ্তানি করা যাইবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) ট্রানজিট পদ্ধতির অধীন বাংলাদেশের মধ্য দিয়া অতিক্রমকারী পণ্য;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) ট্রানজিট পদ্ধতির অধীন বাংলাদেশের এক স্থান হইতে কোনো সংলগ্ন দেশের মাধ্যমে অন্য কোনো স্থানে স্থানান্তরিত পণ্য; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) ট্রান্সশিপমেন্ট বা ভান্ডার পদ্ধতির অধীন পুনঃরপ্তানিকৃত পণ্য।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) রপ্তানি পদ্ধতির অধীন কোনো পণ্য ন্যস্তকরণের ক্ষেত্রে নিম্নলিখিত শর্তাবলি প্রতিপালন করিতে হইবে, যথা:-
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (ক) সংশ্লিষ্ট পণ্যের উপর প্রদেয় সকল রপ্তানি শুল্ক ও কর, এবং অন্যান্য চার্জ পরিশোধ বা এই আইন বা বিধির অধীনে অনুমোদিত হইলে, উক্ত পরিশোধ নিশ্চিত করিবার জন্য গ্যারান্টি প্রদান করিতে হইবে;
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (খ) বিধি দ্বারা নির্ধারিত পদ্ধতি এবং যথাযথ কর্মকর্তার চাহিদা সাপেক্ষে, পণ্যের প্রকৃত রপ্তানি সম্পন্নের প্রমাণ দাখিল নিশ্চিত করিবার জন্য প্রযোজ্য ক্ষেত্রে গ্যারান্টি প্রদান করিতে হইবে; এবং
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (গ) পণ্য ঘোষণা এবং খালাসের জন্য প্রয়োজনীয় আনুষ্ঠানিকতা সম্পন্ন করিতে হইবে।
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