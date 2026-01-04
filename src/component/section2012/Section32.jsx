import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl md:text-4xl">
              মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ২০১২ সনের ৪৭ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ১০ ডিসেম্বর, ২০১২ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-and-supplementary-duty-act"
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
                

              <div className="py-2 text-black bg-gradient-to-r from-green-500 to-green-500 md:px-8">
                <div className="text-center">
                  <h1 className="text-lg font-semibold">
                    চতুর্থ অধ্যায়
                  </h1>
                  <p className="text-md md:text-md">
                    মূসক আদায় পদ্ধতি
                  </p>
                </div>
                <div className="py-2 text-black bg-gradient-to-r from-green-300 to-green-300 md:px-8">
                <div className="text-center">
                  <p className="text-md md:text-md">
                    খন্ড ‘খ’- সাধারণ সরবরাহের ক্ষেত্রে
                  </p>
                </div>
              </div>
              </div>

                
                {/*Section*/}
                <div>
                  <p className="mb-4 text-lg">
                    <span className='text-xl font-bold leading-tight text-gray-950 md:text-xl'>৩২। করযোগ্য সরবরাহের মূল্য নির্ধারণ---</span><sup className='text-blue-500' title='ধারা ৩২ অর্থ আইন, ২০১৯ (২০১৯ সনের ১০ নং আইন) এর ৭০ ধারাবলে প্রতিস্থাপিত।'>১</sup>[(১) এই ধারার বিধান সাপেক্ষে, করযোগ্য কোন সরবরাহের পণ হইতে উক্ত পণের কর-ভগ্নাংশের সমপরিমাণ অর্থ বিয়োগ করিয়া যাহা পাওয়া যাইবে তাহাই হইবে সরবরাহ মূল্য।
                  </p>

                  <p className='mb-4 ml-10 text-lg'>
                    <sup className='text-blue-500' title='উপ-ধারা (২) অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) এর ৫৯ ধারাবলে প্রতিস্থাপিত।'>২</sup>[(২) আমদানিকৃত সেবার করযোগ্য সরবরাহের পণ্য হইবে সরবরাহের মূল্য বা সরবরাহকারী এবং সরবরাহগ্রহীতা পরস্পর সম্পর্কযুক্ত হইলে ন্যায্য বাজার মূল্য।]
                  </p>

                  <p className='mb-4 ml-10 text-lg'>
                    (৩) কোন নিবন্ধিত ব্যক্তি কর্তৃক তাহার সহযোগীর নিকট সরবরাহকৃত করযোগ্য সরবরাহের মূল্য হইবে উক্ত সরবরাহের ন্যায্য বাজার মূল্য হইতে উহার কর-ভগ্নাংশ বিয়োজিত মূল্য, যদি―
                  </p>

                  <p className='mb-4 ml-20 text-lg'>
                    (ক)   উক্ত সরবরাহ পণবিহীন হয় বা উহার পণ ন্যায্য বাজার মূল্য অপেক্ষা কম হয়; এবং <br/>
                    (খ)   উক্ত সহযোগী এইরূপ সরবরাহের নিমিত্ত উদ্ভূত সমুদয় উপকরণ কর রেয়াত গ্রহণের অধিকারী না হন।
                  </p>

                  <p className='mb-4 ml-10 text-lg'>
                    (৪) অন্যবিধভাবে নির্ধারিত না থাকিলে পণবিহীন করযোগ্য সরবরাহের মূল্য হইবে উক্ত সরবরাহের ন্যায্য বাজার মূল্য হইতে উহার কর-ভগ্নাংশ বিয়োজিত মূল্য।
                  </p>

                  <p className='mb-4 ml-10 text-lg'>
                    <sup className='text-blue-500' title='উপ-ধারা (৫) অর্থ আইন, ২০২১ (২০২১ সনের ১১ নং আইন) এর ৪৩ ধারাবলে প্রতিস্থাপিত।'>৩</sup>[(৫)পণ্য সরবরাহের ক্ষেত্রে নিবন্ধিত ও তালিকাভুক্ত ব্যক্তি কর্তৃক সংশ্লিষ্ট কর্মকর্তার নিকট নির্ধারিত পদ্ধতিতে উপকরণ-উৎপাদ সহগ (Input-Output Coefficient) দাখিল করিতে হইবে।]]
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
            <p className="text-xs italic text-gray-900">
              ১ ধারা ৩২ অর্থ আইন, ২০১৯ (২০১৯ সনের ১০ নং আইন) এর ৭০ ধারাবলে প্রতিস্থাপিত।<br/>
              ২ উপ-ধারা (২) অর্থ আইন, ২০২০ (২০২০ সনের ৯ নং আইন) এর ৫৯ ধারাবলে প্রতিস্থাপিত।<br/>
              ৩ উপ-ধারা (৫) অর্থ আইন, ২০২১ (২০২১ সনের ১১ নং আইন) এর ৪৩ ধারাবলে প্রতিস্থাপিত।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}