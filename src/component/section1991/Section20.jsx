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
                মূল্য সংযোজন কর কর্মকর্তাগণের নিয়োগ
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='ধারা ২০ অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫০ ধারাবলে প্রতিস্থাপিত'>১</sup>[ ২০৷<sup className='text-blue-500 cursor-pointer' title='বিদ্যমান ধারাটি উপ-ধারা (১) হিসেবে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৮ ধারাবলে  সংখায়িত।'>২</sup>[(১)] বোর্ড, এই আইন ও বিধি কার্যকর করিবার উদ্দেশ্যে, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা, প্রজ্ঞাপনে উল্লিখিত যে কোন এলাকার জন্য যে কোন ব্যক্তিকে-
                  </p>

                  <p className="mb-4 pl-4">
                    <sup className='text-blue-500 cursor-pointer' title='দফা (ক) অর্থ আইন, ২০২৩ (২০২৩ সনের ১৪ নং আইন) এর ৫ ধারাবলে প্রতিস্থাপিত'>৩</sup>[(ক) সদস্য, মূল্য সংযোজন কর;]
                  </p>

                  <p className="mb-4 pl-4">
                    <sup className='text-blue-500 cursor-pointer' title='দফা (কক) ও (ককক) হিসাবে দফা (ক) ও (কক) পুনঃসংখ্যায়িত এবং পুনঃসংখ্যায়িত দফা (কক) এর পূর্বে দফা (ক) অর্থ আইন, ২০১২ এর ৬৪ (ক) ধারাবলে সংযোজিত।'>৪</sup>[(কক) চীফ কমিশনার, মূল্য সংযোজন কর;
                  </p>
                  
                  <p className="mb-4 pl-4">
                    (ককক) কমিশনার, মূল্য সংযোজন কর;]
                  </p>

                  <p className="mb-4 pl-4">
                    (খ) কমিশনার (আপীল), মূল্য সংযোজন কর;
                  </p>

                  <p className="mb-4 pl-4">
                    (গ) কমিশনার, বৃহত্ করদাতা ইউনিট, মূল্য সংযোজন কর;
                  </p>

                  <p className="mb-4 pl-4">
                    <sup className='text-blue-500 cursor-pointer' title='‘‘চীফ কমিশনার, মূল্য সংযোজন কর;’’ শব্দাবলী, কমা ও সেমিকোলন ‘‘কমিশনার, মূল্য সংযোজন কর;’’ শব্দাবলী, কমা ও সেমিকোলন এর পরিবর্তে অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৭০ ধারাবলে প্রতিস্থাপিত এবং একইসাথে দফা (কক) সন্নিবেশিত। '>৫</sup>[(গগ) মহা-পরিচালক, সেন্ট্রাল ইন্টেলিজেন্স সেল;]
                  </p>

                  <p className="mb-4 pl-4">
                    (ঘ) মহাপরিচালক, নিরীক্ষা, গোয়েন্দা ও তদন্ত অধিদপ্তর, মূল্য সংযোজন কর;
                  </p>

                  <p className="mb-4 pl-4">
                    (ঙ) মহাপরিচালক, শুল্ক, রেয়াত ও প্রত্যর্পণ পরিদপ্তর, মূল্য সংযোজন কর;
                  </p>

                  <p className="mb-4 pl-4">
                    <sup className='text-blue-500 cursor-pointer' title='দফা (গগ) অর্থ আইন, ২০০৯ (২০০৯ সনের ৯ নং আইন) এর ৬২ ধারাবলে সন্নিবেশিত যাহা ১ জুলাই ২০০৭ তারিখ হইতে কার্যকর।'>৬</sup>[(চ) অতিরিক্ত কমিশনার, অতিরিক্ত মহাপরিচালক বা পরিচালক (সিআইসি), মূল্য সংযোজন কর;
                  </p>

                  <p className="mb-4 pl-4">
                    (ছ) যুগ্ম-কমিশনার, যুগ্ম-পরিচালক (সিআইসি) বা পরিচালক, মূল্য সংযোজন কর;]
                  </p>

                  <p className="mb-4 pl-4">
                    (জ) উপ-কমিশনার বা উপ-পরিচালক, মূল্য সংযোজন কর;
                  </p>

                  <p className="mb-4 pl-4">
                    (ঝ) সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন কর;
                  </p>

                  <p className="mb-4 pl-4">
                    (ঞ) <sup className='text-blue-500 cursor-pointer' title='দফা (চ) ও (ছ) অর্থ আইন, ২০১২ এর ৬৪ (খ) ধারাবলে প্রতিস্থাপিত ।'>৭</sup>[রাজস্ব কর্মকর্তা], মূল্য সংযোজন কর;
                  </p>

                  <p className="mb-4 pl-4">
                    (ট) <sup className='text-blue-500 cursor-pointer' title='“রাজস্ব কর্মকর্তা” শব্দগুলি “সুপারিনটেনডেন্ট” শব্দটির পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৮ ধারাবলে প্রতিস্থাপিত।'>৮</sup>[সহকারী রাজস্ব কর্মকর্তা], মূল্য সংযোজন কর; বা
                  </p>

                  <p className="mb-4 pl-4">
                    (ঠ) অন্য যে কোন পদবীর মূল্য সংযোজন কর কর্মকর্তা, নিয়োগ করিতে পারিবে৷]
                  </p>

                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='“সহকারী রাজস্ব কর্মকর্তা” শব্দগুলি “ইন্সপেক্টর” শব্দটির পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) ঙি ৭৮ ধারাবলে প্রতিস্থাপিত।'>৯</sup>[(২) উপ-ধারা (১) এর অধীনে নিয়োগকৃত মূল্য সংযোজন কর কর্মকর্তাগণ মূল্য সংযোজন কর কর্তৃপক্ষ হিসাবে অভিহিত হইবে।]
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
              <sup className="font-bold">১</sup>ধারা ২০ অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫০ ধারাবলে প্রতিস্থাপিত
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">২</sup>বিদ্যমান ধারাটি উপ-ধারা (১) হিসেবে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৮ ধারাবলে সংখায়িত।
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৩</sup>দফা (কক) ও (ককক) হিসাবে দফা (ক) ও (কক) পুনঃসংখ্যায়িত এবং পুনঃসংখ্যায়িত দফা (কক) এর পূর্বে দফা (ক) অর্থ আইন, ২০১২ এর ৬৪ (ক) ধারাবলে সংযোজিত।
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৪</sup>‘‘চীফ কমিশনার, মূল্য সংযোজন কর;’’ শব্দাবলী, কমা ও সেমিকোলন ‘‘কমিশনার, মূল্য সংযোজন কর;’’ শব্দাবলী, কমা ও সেমিকোলন এর পরিবর্তে অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৭০ ধারাবলে প্রতিস্থাপিত এবং একইসাথে দফা (কক) সন্নিবেশিত।
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৫</sup>দফা (গগ) অর্থ আইন, ২০০৯ (২০০৯ সনের ৯ নং আইন) এর ৬২ ধারাবলে সন্নিবেশিত যাহা ১ জুলাই ২০০৭ তারিখ হইতে কার্যকর।
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৬</sup>দফা (চ) ও (ছ) অর্থ আইন, ২০১২ এর ৬৪ (খ) ধারাবলে প্রতিস্থাপিত ।
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৭</sup>“রাজস্ব কর্মকর্তা” শব্দগুলি “সুপারিনটেনডেন্ট” শব্দটির পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৮ ধারাবলে প্রতিস্থাপিত।
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">৮</sup>“সহকারী রাজস্ব কর্মকর্তা” শব্দগুলি “ইন্সপেক্টর” শব্দটির পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৮ ধারাবলে প্রতিস্থাপিত।
            </p>
            <p className="text-xs text-gray-600 italic">
              <sup className="font-bold">৯</sup>উপ-ধারা (২) সংখায়িত উপ-ধারা (১) এর পর অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৮ ধারাবলে সংযোজিত।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}