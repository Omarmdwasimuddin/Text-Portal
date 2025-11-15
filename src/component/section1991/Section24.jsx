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
              <h1 className="text-xl md:text-xl font-bold text-gray-800 leading-tight">
                মূল্য সংযোজন কর কর্মকর্তাকে সহায়তা প্রদান
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='ধারা ২৪  অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে প্রতিস্থাপিত'>১</sup>[ ২৪৷ <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (১) অর্থ আইন, ২০১৪ (২০১৪ সনের ৪ নং আইন) এর ৬০ ধারাবলে প্রতিস্থাপিত।'>২</sup>[ (১) মূল্য সংযোজন কর কর্মকর্তাগণ এই আইনের অধীন তাহাদের দায়িত্ব পালনের জন্য নিমণবর্ণিত কর্তৃপক্ষ, কর্মকর্তা বা সদস্যের সহায়তা যাচনা করিতে পারিবে এবং উহারা উক্তরূপ সহায়তা প্রদানে বাধ্য থাকিবে, যথা:-
                  </p>

                  <p className="mb-4 pl-4">
                    (ক) বাংলাদেশ পুলিশ, বর্ডার গার্ড বাংলাদেশ, বাংলাদেশ কোস্ট গার্ড ও আনসার বাহিনীর যে কোনো সদস্য;
                  </p>

                  <p className="mb-4 pl-4">
                    (খ) মূল্য সংযোজন কর, আবগারী শুল্ক, আয়কর ও মাদক দ্রব্য সংক্রামত্ম কর্মকান্ড পরিচালনা ও নিয়ন্ত্রণকারী সকল কর্মকর্তা;
                  </p>

                  <p className="mb-4 pl-4">
                    (গ) গ্যাস, বিদ্যুৎ, পানি, টেলিফোন বা অনুরূপ সেবা প্রদানকারী সংস্থার সকল কর্মকর্তা;
                  </p>

                  <p className="mb-4 pl-4">
                    (ঘ) সকল ব্যাংক <sup className='text-blue-500 cursor-pointer' title='“, নন ব্যাংকিং ফাইন্যান্সিয়াল ইন্সটিটিউশন, স্টক এক্সচেঞ্জ, সিকিউরিটিজ এক্সচেঞ্জ কমিশন, রেজিস্ট্রার অব জয়েন্ট স্টক কোম্পানি, অডিট এন্ড একাউন্টিং ফার্ম এবং ক্রেডিট রেটিং এজেন্সি এর” শব্দগুলি ও কমাগুলি “সকল ব্যাংক” শব্দগুলির পর অর্থ আইন, ২০১৮ (২০১৮ সনের ২২ নং আইন) এর ৫০ ধারাবলে সন্নিবেশিত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।'>৩</sup>[, নন ব্যাংকিং ফাইন্যান্সিয়াল ইন্সটিটিউশন, স্টক এক্সচেঞ্জ, সিকিউরিটিজ এক্সচেঞ্জ কমিশন, রেজিস্ট্রার অব জয়েন্ট স্টক কোম্পানি, অডিট এন্ড একাউন্টিং ফার্ম এবং ক্রেডিট রেটিং এজেন্সি এর] কর্মকর্তা;
                  </p>

                  <p className="mb-4 pl-4">
                    (ঙ) ইউনিয়ন পরিষদ, উপজেলা পরিষদ, পৌরসভা, জেলা পরিষদ ও সিটি কর্পোরেশনের কর্তৃপক্ষ; এবং
                  </p>

                  <p className="mb-4 pl-4">
                    (চ) অন্য যে কোনো সরকারী কর্মকর্তা।]
                  </p>

                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (২) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৯ ধারাবলে প্রতিস্থাপিত ।'>৪</sup>[ (২) <sup className='text-blue-500 cursor-pointer' title='‘‘সহকারী কমিশনার বা সহকারী পরিচালক” শব্দগুলি “ সহকারী কমিশনার” শব্দগুলির পরিবর্তে অর্থ আইন, ২০১৫ (২০১৫ সনের ১০ নং আইন) এর ৬৮ ধারাবলে প্রতিস্থাপিত ।'>৫</sup>[সহকারী কমিশনার বা সহকারী পরিচালক] পদমর্যাদার নিম্নে নহেন এমন মূল্য সংযোজন কর কর্মকর্তা, তাঁকে সহায়তা বা সহায়তা করার উদ্দেশ্যে উপ-ধারা (১) এ উল্লিখিত কোন সদস্য, কর্তৃপক্ষ বা কর্মকর্তাকে যে কোন ব্যক্তির স্থাবর-অস্থাবর সম্পত্তির হিসাব, ব্যাংক একাউন্টের হিসাব বিবরণী, দলিলাদিসহ অন্য যে কোন তথ্য সরবরাহ করার জন্য অনুরোধ করিতে পারিবেন এবং উক্ত অনুরোধের প্রেক্ষিতে সংশ্লিষ্ট সদস্য, কর্তৃপক্ষ বা কর্মকর্তা চাহিদাকৃত তথ্য সরবরাহ করিতে বাধ্য থাকিবেন।]]
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="w-1/2 border-b border-gray-400 pb-2 mb-4">
              {/* Horizontal line */}
            </div>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">১</sup>ধারা ২৪ অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে প্রতিস্থাপিত
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">২</sup>উপ-ধারা (১) অর্থ আইন, ২০১৪ (২০১৪ সনের ৪ নং আইন) এর ৬০ ধারাবলে প্রতিস্থাপিত।
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৩</sup>“, নন ব্যাংকিং ফাইন্যান্সিয়াল ইন্সটিটিউশন, স্টক এক্সচেঞ্জ, সিকিউরিটিজ এক্সচেঞ্জ কমিশন, রেজিস্ট্রার অব জয়েন্ট স্টক কোম্পানি, অডিট এন্ড একাউন্টিং ফার্ম এবং ক্রেডিট রেটিং এজেন্সি এর” শব্দগুলি ও কমাগুলি “সকল ব্যাংক” শব্দগুলির পর <Link href='/' className='text-blue-500'>অর্থ আইন, ২০১৮</Link> (২০১৮ সনের ২২ নং আইন) এর ৫০ ধারাবলে সন্নিবেশিত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৪</sup>উপ-ধারা (২) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৯ ধারাবলে প্রতিস্থাপিত ।
            </p>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">৫</sup>‘‘সহকারী কমিশনার বা সহকারী পরিচালক” শব্দগুলি “ সহকারী কমিশনার” শব্দগুলির পরিবর্তে অর্থ আইন, ২০১৫ (২০১৫ সনের ১০ নং আইন) এর ৬৮ ধারাবলে প্রতিস্থাপিত ।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}