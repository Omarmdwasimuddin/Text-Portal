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
                    ষোড়শ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    ওয়্যারহাউসিং
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১২৭। শুল্ক, ইত্যাদি পরিশোধে ব্যর্থতার ক্ষেত্রে পদ্ধতি---</span> (১) যদি কোনো মালিক ধারা ১২৬ এর অধীন দাবিকৃত কোনো অর্থ পরিশোধ করিতে ব্যর্থ হন, তাহা হইলে যথাযথ কর্মকর্তা ধারা ১০৯ এর অধীন সম্পাদিত বন্ডের উপর অথবা বিধি দ্বারা নির্ধারিত কার্যক্রম গ্রহণ করিতে পারিবেন অথবা ওয়্যারহাউসে রক্ষিত মালিকের পণ্য অথবা পণ্য প্রস্তুতকরণে ব্যবহৃত কোনো কারখানা, যন্ত্রপাতি অথবা মেশিনারি অথবা উক্ত ব্যক্তির মালিকানাধীন অন্য কোনো পণ্য এবং সম্পত্তির এইরূপ অংশ যাহা দাবি আদায়ের জন্য পর্যাপ্ত বিবেচিত হইবে তাহা আটক করাইতে পারিবেন, এবং অবিলম্বে উক্তরূপ আটকের লিখিত নোটিশ মালিককে প্রদান করিতে হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (২) উপ- ধারা (১) এ উল্লিখিত নোটিশের তারিখ হইতে ১৫ (পনের) দিবসের মধ্যে দাবি পূরণ করা না হইলে উক্তরূপ আটককৃত পণ্য বিক্রয় করা যাইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৩) উপ- ধারা (২) এর অধীন বিক্রয়লদ্ধ অর্থের নিট পরিমাণ লিপিবদ্ধ করিয়া বন্ডের বিপরীতে সমন্বয় করা হইবে এবং বন্ডের দায় সম্পূর্ণ মিটাইবার পর উদ্বৃত্ত, যদি থাকে, ধারা ২৩৭ অনুসারে বিলিবন্দেজ পদ্ধতিতে ব্যবস্থিত হইবে।
                </p>

                <p className="mb-4 ml-10 text-sm">
                  (৪) পণ্যের কোনো হস্তান্তর বা স্বত্ব- নিয়োগ (assignment) এর উপর পাওনা আদায়ের জন্য যথাযথ কর্মকর্তাকে এই ধারায় বর্ণিত পদ্ধতি অনুযায়ী কার্যক্রম গ্রহণ করা হইতে নিবৃত্ত করিতে পারিবে না।
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