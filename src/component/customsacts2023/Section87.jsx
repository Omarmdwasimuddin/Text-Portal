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
                    দ্বাদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    পণ্যের ঘোষণা এবং ছাড়করণ
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৮৭। সত্যতা প্রতিপাদন---</span> (১) কোনো পণ্য ঘোষণায় বর্ণিত বিবরণের সঠিকতার সত্যতা প্রতিপাদন এবং এই আইন ও বিধি এবং পণ্য আমদানি বা, ক্ষেত্রমত, রপ্তানি সংক্রান্ত অন্যান্য প্রযোজ্য আইনের কোনো নিষেধাজ্ঞা, বিধি- নিষেধ (restriction) বা অন্যান্য আবশ্যকতা প্রতিপালনের উদ্দেশ্যে এবং ধারা ৯৩ এর বিধানাবলি সাপেক্ষে, যথাযথ কর্মকর্তা নিম্নলিখিত এক বা একাধিক কার্যক্রম গ্রহণ করিতে পারিবেন, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) পণ্য ঘোষণা এবং যে কোনো সহায়ক দলিল পরীক্ষা করা;
                </p>

                <p className="mb-4 text-sm">
                  (খ) সংশ্লিষ্ট আমদানিকারক বা রপ্তানিকারককে অন্যান্য দলিল উপস্থাপনের নির্দেশ প্রদান;
                </p>

                <p className="mb-4 text-sm">
                  (গ) নন- ইন্ট্রুসিভ (non intrusive) যন্ত্র ব্যবহারের মাধ্যমে পণ্য পরিদর্শন করা;
                </p>

                <p className="mb-4 text-sm">
                  (ঘ) পণ্য পরীক্ষা করা;
                </p>
                
                <p className="mb-4 text-sm">
                  (ঙ) অন্য কোনো উপযুক্ত কর্তৃপক্ষ কর্তৃক পণ্য পরীক্ষা করানো; বা
                </p>

                <p className="mb-4 text-sm">
                  (চ) পণ্যের বিশ্লেষণ বা বিস্তারিত পরীক্ষার জন্য নমুনা সংগ্রহ করা।
                </p>

                <p className="mb-4 text-sm">
                  (২) কোনো কাস্টমস কর্মকর্তা বা অন্য কোনো উপযুক্ত কর্তৃপক্ষ কোনো পণ্য পরীক্ষা বা নমুনা হিসাবে সংগ্রহের জন্য নির্বাচন করিলে, যথাযথ কর্মকর্তা অবিলম্বে উহা সংশ্লিষ্ট আমদানিকারক বা রপ্তানিকারককে অবহিত করিবেন।
                </p>

                <p className="mb-4 text-sm">
                  (৩) অন্য কোনো সরকারি কর্তৃপক্ষ কর্তৃক বা তাহাদের পক্ষে কোনো পণ্যের পরীক্ষা, নমুনা সংগ্রহ বা অন্যান্য নিয়ন্ত্রণের ক্ষেত্রে, যথাযথ কর্মকর্তা, যেক্ষেত্রে সম্ভব, সেইক্ষেত্রে ইহা নিশ্চিত করিবেন যে, উক্ত কাস্টমস সংক্রান্ত কার্যাদি এবং অন্যান্য কর্তৃপক্ষ কর্তৃক বা তাহাদের পক্ষে অনুরূপ কার্যাদি একই সময়ে ও স্থানে পরিচালিত হয়।
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