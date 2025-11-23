import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 px-4 md:px-8 relative">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="mt-3 inline-block bg-green-500 px-4 py-1 rounded-full shadow-md">
              <p className="text-sm md:text-base font-medium">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
            className="absolute top-4 left-4 flex items-center gap-2 bg-white text-green-700 hover:bg-green-100 transition-all px-3 py-2 rounded-full shadow"
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
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Heading */}
            <div className="md:w-1/5 bg-blue-50 p-6 border-r border-gray-300">
              <h1 className="text-xl md:text-xl font-bold text-black leading-tight">
                বিকল্প বিরোধ নিষ্পত্তির সিদ্ধান্ত
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪১জ। (১) যেই ক্ষেত্রে উভয় পক্ষ বিরোধ সংক্রান্ত কোন ঘটনা বা আইন (Fact or law) সম্পর্কে ঐক্যমত পোষণ করেন, সেই ক্ষেত্রে বিরোধীয় বিষয়ে মতৈক্যের ভিত্তিতে (By agreement) আংশিক অথবা সম্পূর্ণভাবে উহা বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ায় নিষ্পত্তি করা যাইবে।
                        </p>

                        <p className="mb-4">
                            (২) যেই ক্ষেত্রে সংক্ষুব্ধ আবেদনকারী ব্যক্তি এবং মূল্য সংযোজন কর কমিশনারের প্রতিনিধির মধ্যে আংশিক বা সম্পূর্ণ মতৈক্যের ভিত্তিতে কোন বিরোধ নিষ্পত্তি হইবে, সেই ক্ষেত্রে সহায়তাকারী (Facilitator), পক্ষদ্বয়ের মধ্যে উপনীত মতৈক্যের বিষয়াদি বিস্তারিতভাবে লিপিবদ্ধ করিবেন এবং উহা সংক্ষুব্ধ আবেদনকারী ব্যক্তি, সংশ্লিষ্ট কমিশনার এবং বোর্ডকে ০৭ (সাত) কার্যদিবসের মধ্যে অবহিত করিবেন।
                        </p>

                        <p className="mb-4">
                            <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৩) অর্থ আইন, ২০১২ এর ৭৮(ক) ধারাবলে প্রতিস্থাপিত ।'>১</sup>[(৩) মতৈক্যের ভিত্তিতে কোন বিরোধ নিষ্পত্তির ক্ষেত্রে সম্পূরক শুল্ক, মূল্য সংযোজন কর, অর্থদন্ড, জরিমানা ও আরোপিত সুদ, যদি থাকে, পরিশোধ করা বা ফেরত প্রদান বা এতদসংশ্লিষ্ট বিষয়ে মতৈক্যের শর্তসমুহ সুষ্পষ্ট ও সুনির্দিষ্টভাবে উল্লেখ করিতে হইবে যেন উহা মতৈক্যের সময় প্রতিশ্রুত সময়সীমার মধ্যে বাস্তবায়ন করা যায়।]
                        </p>

                        <p className="mb-4">
                            (৪) মতৈক্যের (Agreement) বিষয়টি আবেদনকারী, মূল্য সংযোজন কর কমিশনারের প্রতিনিধি এবং সহায়তাকারী কর্তৃক সীলমোহরকৃত এবং স্বাক্ষরিত হইতে হইবে।
                        </p>

                        <p className="mb-4">
                            (৫) যেই ক্ষেত্রে পরবর্তীকালে এই মর্মে তথ্য উদ্ঘাটিত হইবে যে, আবেদনকারী কর্তৃক জালিয়াতি বা অসত্য তথ্য উপস্থাপনের মাধ্যমে উপ-ধারা (১) এর অধীন মতৈক্যটি (Agreement) গৃহীত হইয়াছে, তাহা হইলে উক্তরূপে উপনীত মতৈক্যের বিষয়টি শুরু হইতে বাতিল (Void ab initio) বলিয়া গণ্য হইবে।
                        </p>

                        <p className="mb-4">
                            (৬) যেই ক্ষেত্রে আংশিক বা সম্পূর্ণরূপে কোন মতৈক্যে পৌঁছানো সম্ভবপর হয় নাই, সেই ক্ষেত্রে সহায়তাকারী উক্তরূপ ব্যর্থ বিকল্প বিরোধ-নিষ্পত্তির বিষয়টি লিখিতভাবে আবেদনকারী, সংশ্লিষ্ট কমিশনার, বোর্ডসহ সংশ্লিষ্ট দপ্তর বা আদালতকে যথাশীঘ্র সম্ভব অবহিত করিবেন।
                        </p>

                        <p className="mb-4">
                            (৭) যেই ক্ষেত্রে মতৈক্যের ভিত্তিতে বিরোধ-নিষ্পত্তি করা হইয়াছে এবং তাহা সংশ্লিষ্ট সকল পক্ষকে অবহিত করা হইয়াছে, সেইক্ষেত্রে সরকার পক্ষ কোন পাওনা আদায় অথবা ফেরত প্রদানের বিষয়সহ অন্যান্য বিষয়ে যথাযথ আইনানুগ কার্যক্রম গ্রহণ করিতে হইবে।
                        </p>

                        <p className="mb-4">
                            <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৮) অর্থ আইন, ২০১২ এর ৭৮(খ) ধারাবলে সংযোজিত ।'>২</sup>[(৮) এই ধারার অধীন মতৈক্য, বা ব্যর্থ বিকল্প বিরোধ নিষ্পত্তি, লিপিবদ্ধ করণের ফরম বিধি দ্বারা নির্ধারিত হইবে।]
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="border-b border-gray-400 pb-2 mb-4">
              {/* Horizontal line */}
            </div>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">১</sup>উপ-ধারা (৩) অর্থ আইন, ২০১২ এর ৭৮(ক) ধারাবলে প্রতিস্থাপিত ।
            </p>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">১</sup>উপ-ধারা (৮) অর্থ আইন, ২০১২ এর ৭৮(খ) ধারাবলে সংযোজিত ।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}