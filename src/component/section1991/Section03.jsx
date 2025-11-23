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
                মূল্য সংযোজন কর আরোপ
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
              <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-gray-700">
                  {/* Section 1 */}
                  <div>
                    <p className="mb-4">
                      ৩৷ (১) প্রথম তফসিলে উল্লিখিত পণ্যসমূহ ব্যতীত বাংলাদেশে আমদানিকৃত সকল পণ্য এবং উক্ত তফসিলে উল্লিখিত পণ্যসমূহ ব্যতীত সকল পণ্যের সরবরাহের উপর এবং <sup className='text-blue-500 cursor-pointer' title='“দ্বিতীয় তফসিলে উল্লিখিত সেবাসমূহ ব্যতীত” শব্দগুলি “দ্বিতীয় তফসিলে উল্লিখিত” শব্দগুলির পরিবর্তে অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ৮৬ ধারাবলে প্রতিস্থাপিত'>1</sup>[দ্বিতীয় তফসিলে উল্লিখিত সেবাসমূহ ব্যতীত]<sup className='text-blue-500 cursor-pointer' title='‘‘বাংলাদেশে আমদানিকৃত বা’’ শব্দগুলি ‘‘সেবাসমুহ ব্যতীত’’ শব্দগুলির পর অর্থ আইন, ২০১২ এর ৫৯ ধারাবলে সন্নিবেশিত।

        '>2</sup>[বাংলাদেশে আমদানিকৃত বা] <sup className='text-blue-500 cursor-pointer' title='“বাংলাদেশ প্রদত্ত” শব্দগুলি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত'>3</sup>[বাংলাদেশে প্রদত্ত] সকল সেবার উপর ধারা ৫ এ বর্ণিত মূল্যের ভিত্তিতে পনের শতাংশ হারে মূল্য সংযোজন কর ধার্য ও প্রদেয় হইবে৷
                    </p>
                    
                    <p className="mb-4">
                      (২) উপ-ধারা (১) এ যাহা কিছুই থাকুক না কেন, নিম্নবর্ণিত পণ্য বা সেবার উপর শূন্য হারে কর আরোপিত হইবে; যথা:-
                    </p>
                    
                    <div className="ml-6 mb-4">
                      <p className="mb-2">(ক) বাংলাদেশ হইতে রপ্তানিকৃত বা রপ্তানিকৃত বলিয়া গণ্য কোন পণ্য বা সেবা;</p>
                      
                      <p className="mb-2"><sup className='text-blue-500 cursor-pointer' title='দফা(কক) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭২ ধারাবলে বিলুপ্ত।'>4</sup>[ *** ]</p>
                      
                      <p className="mb-2">
                        <sup className='text-blue-500 cursor-pointer' title='দফা(খ) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত।'>5</sup>[(খ) <Link href='/' className='text-blue-500'>Customs Act, 1969</Link> (IV of 1969), অতঃপর Customs Act বলিয়া উল্লিখিত, এর Section 24 মোতাবেক বাংলাদেশ হইতে বিদেশগামী কোন যানবাহনে বাংলাদেশের বাহিরে ভোগের জন্য সরবরাহকৃত খাদ্য ও অন্যান্য সামগ্রী:
                      </p>
                      
                      <p className="mb-2">
                        তবে শর্ত থাকে যে, নিম্নবর্ণিত পণ্যের বা সেবার ক্ষেত্রে এই উপ-ধারা প্রযোজ্য হইবে না, যথা:-
                      </p>
                      
                      <div className="ml-6">
                        <p className="mb-2">(অ) বাংলাদেশে পুনঃ আমদানিকৃত বা পুনঃ আমদানির জন্য অভিপ্রেত কোন পণ্য বা সেবা;</p>
                        
                        <p className="mb-2">
                          (আ) Customs Act এর Section 131 মোতাবেক রপ্তানির জন্য উপস্থাপন করা হইয়াছে, কিন্তু রপ্তানি চালান (bill of export) দাখিলের ৩০ দিন বা কমিশনার কর্তৃক এতদুদ্দেশ্যে বর্ধিত সময়ের মধ্যে রপ্তানি হয় নাই, এইরূপ কোন পণ্য বা সেবা।]
                        </p>
                      </div>
                    </div>
                    
                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৩) অর্থ আইন, ১৯৯৬ (১৯৯৬ সনের ১৮ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত'>6</sup>[(৩) মূল্য সংযোজন কর প্রদান করিবেন,-
                    </p>
                    
                    <div className="ml-6 mb-4">
                      <p className="mb-2">(ক) আমদানীকৃত পণ্যের ক্ষেত্রে, আমদানী পর্যায়ে আমদানীকারক;</p>
                      
                      <p className="mb-2">(খ) বাংলাদেশে প্রস্তুতকৃত বা উত্পাদিত পণ্যের ক্ষেত্রে, প্রস্তুতকরণ বা উত্পাদন পর্যায়ে সরবরাহকারী;</p>
                      
                      <p className="mb-2">(গ) সেবা প্রদানের ক্ষেত্রে, সেবা প্রদানকারী; এবং</p>
                      
                      <p className="mb-2">
                        <sup className='text-blue-500 cursor-pointer' title='দফা(ঘ) ও (ঙ), দফা (ঘ) এর পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত ।'>7</sup>[(ঘ) বাংলাদেশের ভৌগলিক সীমারেখার বাহির হইতে সেবা সরবরাহের ক্ষেত্রে, সেবা গ্রহণকারী; এবং
                      </p>
                      
                      <p className="mb-2">
                        (ঙ) অন্যান্য ক্ষেত্রে, <sup className='text-blue-500 cursor-pointer' title='দফা(ঘ) ও (ঙ), দফা (ঘ) এর পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত ।'>8</sup>[সরবরাহকারী ও সেবাগ্রহণকারী]।]]
                      </p>
                    </div>
                    
                    <p className="mb-4">
                      (৩ক) <Link href='/' className='text-blue-500'>অর্থ আইন, ২০০১</Link> (২০০১ সনের ৩০ নং আইন) এর ৭২ ধারাবলে বিলুপ্ত৷
                    </p>
                    
                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৪) অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে সংযোজিত'>9</sup>[(৪) এই ধারার অধীন মূল্য সংযোজন কর ধার্য ও প্রদানের উদ্দেশ্যে কোন আমদানিকৃত বা সরবরাহকৃত পণ্যের শ্রেণীবিন্যাস (Classification) এর ক্ষেত্রে Customs Act এর অধীন উক্ত পণ্যের শ্রেণীবিন্যাস প্রযোজ্য হইবে৷]
                    </p>
                    
                    <p className="mb-4">
                      <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (৫) অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ৮৬ ধারাবলে সংযোজিত'>10</sup>[(৫) এই ধারার উদ্দেশ্য পূরণকল্পে বোর্ড, জনস্বার্থে, সরকারী গেজেটে প্রজ্ঞাপন দ্বারা-
                    </p>
                    
                    <div className="ml-6">
                      <p className="mb-2">
                        (ক) যে কোন করযোগ্য পণ্য বা পণ্য শ্রেণীকে করযোগ্য সেবা এবং যে কোন করযোগ্য সেবাকে করযোগ্য পণ্য হিসাবে ঘোষণা করিতে পারিবে; এবং
                      </p>
                      
                      <p className="mb-2">
                        (খ) করযোগ্য যে কোন সেবার, পরিধি নির্ধারণের লক্ষ্যে, ব্যাখ্যা প্রদান করিতে পারিবে৷]
                      </p>
                    </div>
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
                <sup className="font-bold">১</sup>“দ্বিতীয় তফসিলে উল্লিখিত সেবাসমূহ ব্যতীত” শব্দগুলি “দ্বিতীয় তফসিলে উল্লিখিত” শব্দগুলির পরিবর্তে অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ৮৬ ধারাবলে প্রতিস্থাপিত
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">২</sup>‘‘বাংলাদেশে আমদানিকৃত বা’’ শব্দগুলি ‘‘সেবাসমুহ ব্যতীত’’ শব্দগুলির পর অর্থ আইন, ২০১২ এর ৫৯ ধারাবলে সন্নিবেশিত।
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">৩</sup>“বাংলাদেশ প্রদত্ত” শব্দগুলি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">৪</sup>দফা(কক) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭২ ধারাবলে বিলুপ্ত।
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">৫</sup>দফা(খ) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত।
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">৬</sup>উপ-ধারা (৩) অর্থ আইন, ১৯৯৬ (১৯৯৬ সনের ১৮ নং আইন) এর ৬ ধারাবলে প্রতিস্থাপিত
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">৭</sup>দফা(ঘ) ও (ঙ), দফা (ঘ) এর পরিবর্তে অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত ।
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">৮</sup>‘‘সরবরাহকারী ও সেবাগ্রহণকারী’’ শব্দগুলি ‘‘সরবরাহকারী’’ শব্দের পরিবর্তে অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৬৪ ধারাবলে প্রতিস্থাপিত।
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">৯</sup>উপ-ধারা (৪) অর্থ আইন, ১৯৯২ (১৯৯২ সনের ২১ নং আইন) এর ১১ ধারাবলে সংযোজিত
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">১০</sup>উপ-ধারা (৫) অর্থ আইন, ২০০০ (২০০০ সনের ১৫ নং আইন) এর ৮৬ ধারাবলে সংযোজিত
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}