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
                নথিপত্র সংরক্ষণের মেয়াদ
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='ধারা ৩৩  অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে প্রতিস্থাপিত'>১</sup>[ ৩৩৷<sup className='text-blue-500 cursor-pointer' title='বিদ্যমান বিধানটি উপ-ধারা(১) হিসেবে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮২ ধারাবলে সংখ্যায়িত।'>২</sup>[(১)] যে নিবন্ধিত ব্যক্তির ধারা ৩১ এর অধীন কোন নথিপত্র সংরক্ষণের বাধ্যবাধকতা রহিয়াছে, তাহাকে উক্ত নথিপত্র যে করমেয়াদ সম্পর্কিত সেই করমেয়াদ সমাপ্তির পরবর্তী অন্যুন <sup className='text-blue-500 cursor-pointer' title=' “৬(ছয়)” সংখ্যা, বন্ধনী ও শব্দ  “চার” শব্দের পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮২ ধারাবলে প্রতিস্থাপিত।'>৩</sup>[৬(ছয়)] বছর উহা বাংলাদেশে সংরক্ষণ করিতে হইবে; তবে, নিবন্ধিত ব্যক্তির বিরুদ্ধে <sup className='text-blue-500 cursor-pointer' title='‘‘এই আইনের অধীন উদ্ভূত কোন বিরোধ বা তদন্ত বা মামলা অনিষ্পন্ন থাকিলে, উহা চূড়ান্ত নিষ্পত্তি না হওয়া পর্যন্ত উক্ত বিরোধ বা তদন্ত বা’’ শব্দগুলি ও কমা ‘‘এই আইনে দায়েরকৃত যে কোন মামলা অনিষ্পন্ন থাকিলে, উক্ত মামলা চূড়ান্ত নিষ্পত্তি না হওয়া পর্যন্ত’’ শব্দগুলি ও কমার পরিবর্তে অর্থ আইন, ২০১২ এর ৬৯ ধারাবলে প্রতিস্থাপিত।'>৪</sup>[এই আইনের অধীন উদ্ভূত কোন বিরোধ বা তদন্ত বা মামলা অনিষ্পন্ন থাকিলে, উহা চূড়ান্ত নিষ্পত্তি না হওয়া পর্যন্ত উক্ত বিরোধ বা তদন্ত বা] মামলা সংশ্লিষ্ট কর মেয়াদের নথিপত্র সংরক্ষণ করিতে হইবে৷]
                  </p>

                  <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (২) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮২ ধারাবলে সংযোজিত।'>৫</sup>[(২) উৎসে মূল্য সংযোজন কর কর্তনকারীকে বিধিতে উল্লিখিত দলিলাদি অন্যূন ৬(ছয়) বছর পর্যন্ত সংরক্ষণ করিতে হইবে৷]
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
            <div className="text-xs text-gray-600 italic space-y-2">
              <p>
                <sup className="font-bold">১</sup>ধারা ৩৩ অর্থ আইন, ১৯৯৯ (১৯৯৯ সনের ১৬ নং আইন) এর ৭ ধারাবলে প্রতিস্থাপিত
              </p>
              <p>
                <sup className="font-bold">২</sup>বিদ্যমান বিধানটি উপ-ধারা(১) হিসেবে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮২ ধারাবলে সংখ্যায়িত।
              </p>
              <p>
                <sup className="font-bold">৩</sup>"৬(ছয়)" সংখ্যা, বন্ধনী ও শব্দ "চার" শব্দের পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮২ ধারাবলে প্রতিস্থাপিত।
              </p>
              <p>
                <sup className="font-bold">৪</sup>''এই আইনের অধীন উদ্ভূত কোন বিরোধ বা তদন্ত বা মামলা অনিষ্পন্ন থাকিলে, উহা চূড়ান্ত নিষ্পত্তি না হওয়া পর্যন্ত উক্ত বিরোধ বা তদন্ত বা'' শব্দগুলি ও কমা ''এই আইনে দায়েরকৃত যে কোন মামলা অনিষ্পন্ন থাকিলে, উক্ত মামলা চূড়ান্ত নিষ্পত্তি না হওয়া পর্যন্ত'' শব্দগুলি ও কমার পরিবর্তে অর্থ আইন, ২০১২ এর ৬৯ ধারাবলে প্রতিস্থাপিত।
              </p>
              <p>
                <sup className="font-bold">৫</sup>উপ-ধারা (২) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৮২ ধারাবলে সংযোজিত।
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}