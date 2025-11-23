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
                বিকল্প বিরোধ-নিষ্পত্তির জন্য আবেদনপত্র দাখিল
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪১ঙ। (১) ধারা ৪১গ এ বর্ণিত কোন বিকল্প বিরোধ-নিষ্পত্তির জন্য সংক্ষুব্ধ ব্যক্তি বিকল্প বিরোধ-নিষ্পত্তি ব্যবস্থা প্রবর্তনের পূর্বে উদ্ভূত এবং নিষ্পন্নাধীন বিরোধসমূহের ক্ষেত্রে, সংশ্লিষ্ট কর্তৃপক্ষ তথা মূল্য সংযোজন কর কমিশনার, ন্যায়নির্ণয়কারী কর্তৃপক্ষ বা, ক্ষেত্রমত, আপীলাত কর্তৃপক্ষের নিকট <sup className='text-blue-500 cursor-pointer' title='‘‘,বিধি দ্বারা নির্ধারিত পদ্ধতিতে,’’ শব্দগুলি ও কমাগুলি ‘‘কর্তৃপক্ষের নিকট’’ শব্দগুলির পর অর্থ আইন, ২০১২ এর ৭৬(ক) ধারাবলে সন্নিবেশিত।'>১</sup>[,বিধি দ্বারা নির্ধারিত পদ্ধতিতে,] আবেদন করিতে পারিবেন।
                        </p>

                        <p className="mb-4">
                            (২) উপ-ধারা (১) এর অধীন আবেদন দাখিলের সময় সংক্ষুব্ধ আবেদনকারী এইমর্মে অঙ্গীকারনামা দাখিল করিবেন যে, সংশ্লিষ্ট বিরোধের ক্ষেত্রে এই আইনের অধীন ন্যায়নির্ণয়ন সম্প্ন্ন বা চূড়ান্তভাবে নিষ্পত্তি করা হয় নাই।
                        </p>

                        <p className="mb-4">
                            (৩) বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়া প্রবর্তনের পর এই আইনের ধারা ৩৭, ৪২ ও ৫৫ এর অধীন সংশ্লিষ্ট ন্যায়নির্ণয়কারী কর্মকর্তা বা আপীলাত কর্তৃপক্ষ কর্তৃক ইস্যুকৃত কারণ দর্শানো নোটিশ, দাবীনামা সংক্রান্ত নোটিশ, মূল্য সংযোজন কর ও সম্পূরক শুল্ক নির্ধারণ সংক্রান্ত নোটিশ বা ধারা ৫ এর অধীন মূল্য অনুমোদন সংক্রান্ত কোন সিদ্ধান্ত বা এতদ্সংক্রান্ত অন্য যে কোন নোটিশ হইতে উদ্ভূত কোন বিরোধের ক্ষেত্রে উক্তরূপ নোটিশ জারীর <sup className='text-blue-500 cursor-pointer' title='“২০ (বিশ)”সংখ্যা, বন্ধনী ও শব্দ “১০ (দশ)” সংখ্যা, বন্ধনী ও শব্দের পরিবর্তে অর্থ আইন, ২০১৬ (২০১৬ সনের ২৮ নং আইন) এর ৭১ ধারাবলে প্রতিস্থাপিত (with effect from 1st July 2016).'>২</sup>[২০ (বিশ)] কার্যদিবসের মধ্যে সংক্ষুব্ধ ব্যক্তিকে বিকল্প বিরোধ-নিষ্পত্তির জন্য আবেদন করিতে হইবে।
                        </p>

                        <p className="mb-4">
                            <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৪) অর্থ আইন, ২০১২ এর ৭৬(খ) ধারাবলে প্রতিস্থাপিত ।'>৩</sup>[(৪) বিকল্প বিরোধ-নিষ্পত্তিযোগ্য কোন মামলা, যাহা সুপ্রীম কোর্টের আপীল বিভাগ বা হাইকোর্ট বিভাগে বিচারাধীন রহিয়াছে, উহা সংক্ষুব্ধ ব্যক্তির আবেদনের ভিত্তিতে অথবা সংশ্লিষ্ট বিভাগ স্বতঃপ্রবৃত্ত হইয়া, যথাযথ কর্তৃপক্ষের নিকট বিকল্প পদ্ধতিতে বিরোধ নিষ্পত্তির জন্য প্রেরণ করিতে পারিবেন:
                        </p>

                        <p className="mb-4">
                            তবে শর্ত থাকে যে, কোন সংক্ষুব্ধ ব্যক্তির আবেদনের প্রেক্ষিতে কোন মামলা বিকল্প পদ্ধতিতে বিরোধ নিষ্পত্তির জন্য প্রেরণের ক্ষেত্রে সংশ্লিষ্ট বিভাগের অনুমতির প্রয়োজন হইবে।]
                        </p>

                        <p className="mb-4">
                            (৫) হাইকোর্ট বিভাগ বা আপীল বিভাগ কতৃর্ক বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ার জন্য অনুমতি প্রদানের পর বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়া সম্প্ন্ন হওয়ার মেয়াদকাল পর্যন্ত, ক্ষেত্রমত, সংশ্লিষ্ট আদালতে মামলাটি স্থগিত (Stay) থাকিবে।
                        </p>

                        <p className="mb-4">
                            (৬) যদি হাইকোর্ট বিভাগ বা আপীল বিভাগ উপ-ধারা (৪) এর অধীন কোন আবেদনের ক্ষেত্রে বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ায় বিষয়টি নিষ্পন্নের জন্য সংশ্লিষ্ট কোন কর্তৃপক্ষকে নির্দেশনা প্রদানসহ আবেদনপত্রটি মঞ্জুর করেন, তাহা হইলে নির্দেশিত কর্তৃপক্ষ, আইন দ্বারা বারিত না হইলে, উক্তরূপ নির্দেশিত পন্থায় মামলাটি নিষ্পত্তি করিবেন।
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
              <sup className="font-bold">১</sup>‘‘,বিধি দ্বারা নির্ধারিত পদ্ধতিতে,’’ শব্দগুলি ও কমাগুলি ‘‘কর্তৃপক্ষের নিকট’’ শব্দগুলির পর অর্থ আইন, ২০১২ এর ৭৬(ক) ধারাবলে সন্নিবেশিত।
            </p>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">১</sup>“২০ (বিশ)”সংখ্যা, বন্ধনী ও শব্দ “১০ (দশ)” সংখ্যা, বন্ধনী ও শব্দের পরিবর্তে অর্থ আইন, ২০১৬ (২০১৬ সনের ২৮ নং আইন) এর ৭১ ধারাবলে প্রতিস্থাপিত (with effect from 1st July 2016).
            </p>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">১</sup>উপ-ধারা (৪) অর্থ আইন, ২০১২ এর ৭৬(খ) ধারাবলে প্রতিস্থাপিত ।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}