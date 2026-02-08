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
                    ২৬। পণ্যের পুনঃআমদানি---
                  </span>{" "}
                  যদি বাংলাদেশে উৎপাদিত বা প্রস্তুত কোনো পণ্য অথবা বাংলাদেশে দেশীয় ভোগের জন্য
                  ইতঃপূর্বে ছাড়কৃত কোনো পণ্য অথবা ইনওয়ার্ড প্রসেসিং বা কাস্টমস ওয়্যারহাউস পদ্ধতির
                  অধীন বাংলাদেশে প্রক্রিয়াজাত বা প্রস্তুতকৃত কোনো পণ্য রপ্তানি হইবার ২ (দুই)
                  বৎসরের মধ্যে কোনোরূপ প্রক্রিয়াকরণ ব্যতীত বাংলাদেশে ফেরত পাঠানো হয়, তাহা হইলে
                  উক্ত পণ্য অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস-এর নিম্নে নহে, এইরূপ কর্মকর্তা
                  কর্তৃক কাস্টমস শুল্ক পরিশোধ ব্যতিরেকে দেশে প্রবেশ করিতে দেওয়া যাইবে:
                </p>

                <p className="mb-4 text-sm font-semibold">
                  তবে শর্ত থাকে যে,-
                </p>

                <p className="mb-4 ml-6 text-sm">
                  (ক) উক্ত পণ্য রপ্তানির সময়ে প্রত্যর্পণ প্রদান করা হইলে, উক্ত প্রত্যর্পণ পরিশোধ
                  করিতে হইবে;
                </p>

                <p className="mb-4 ml-6 text-sm">
                  (খ) যদি উক্ত পণ্য ইনওয়ার্ড প্রসেসিং বা কাস্টমস ওয়্যারহাউস পদ্ধতির অধীন বাংলাদেশে
                  প্রক্রিয়াজাত বা প্রস্তুতকৃত হইয়া থাকে এবং নিম্নলিখিত শুল্ক ও কর পরিশোধ ব্যতিরেকে
                  রপ্তানি করা হইয়া থাকে, যথা:-
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (অ) উক্ত পণ্য প্রক্রিয়াকরণ বা প্রস্তুতকরণে ব্যবহৃত কোনো আমদানিকৃত উপাদান, যদি
                  থাকে, উহার উপর আরোপণীয় শুল্ক ও কর;
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (আ) উক্ত পণ্য প্রক্রিয়াকরণ বা প্রস্তুতকরণে ব্যবহৃত স্থানীয় কাঁচামাল, যদি থাকে,
                  উহার উপর আরোপণীয় শুল্ক ও কর; বা
                </p>

                <p className="mb-4 ml-12 text-sm">
                  (ই) উক্ত স্থানীয় পণ্য, যদি থাকে, উহার উপর আরোপণীয় শুল্ক ও কর,-
                </p>

                <p className="mb-4 text-sm">
                  তাহা হইলে উক্ত পণ্য আমদানির সময় এবং স্থানে বিদ্যমান হারে হিসাবকৃত সকল শুল্ক ও
                  করের সমপরিমাণ কাস্টমস শুল্ক পরিশোধ করিতে হইবে।
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