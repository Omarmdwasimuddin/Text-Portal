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
                    অষ্টম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস গ্যারান্টি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৪১। গ্যারান্টির প্রকার---</span> (১) এই আইনের উদ্দেশ্যপূরণকল্পে কোনো শুল্ক, কর বা অন্যান্য চার্জ পরিশোধের জন্য নিম্নবর্ণিত গ্যারান্টি প্রদান করা যাইবে, যথা:-
                </p>

                <p className="mb-4 text-sm">
                  (ক) বাংলাদেশি মুদ্রায় কোনো নগদ জমা, বা বোর্ড কর্তৃক স্বীকৃত নগদ জমার সমতুল্য অন্য কোনো প্রকারের পরিশোধ;
                </p>

                <p className="mb-4 text-sm">
                  (খ) বোর্ড কর্তৃক নির্ধারিত ফরমে কোনো জামিনদার কর্তৃক প্রদত্ত ব্যাংক গ্যারান্টি বা নিশ্চয়তা (surety); অথবা
                </p>

                <p className="mb-4 text-sm">
                  (গ) বোর্ড কর্তৃক নির্ধারিত ফরমে বন্ড বা অন্যান্য প্রকারের গ্যারান্টি বা অঙ্গীকারনামা, যাহা এই মর্মে নিশ্চয়তা প্রদান করে যে, শুল্ক, কর বা অন্যান্য চার্জ পরিশোধ করা হইবে এবং এই আইন ও তদধীন প্রণীত বিধির অধীন উদ্ভূত অন্য কোনো বাধ্যবাধকতা যথাযথভাবে প্রতিপালিত হইবে।
                </p>

                <p className="mb-4 text-sm">
                  <sup className='text-blue-500' title='উপ-ধারা (২) অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯২ ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।'>১</sup>[(২) উপ-ধারা (১) এ উল্লিখিত গ্যারান্টিসমূহের মধ্যে কোন্ প্রকারের গ্যারান্টি প্রদান করিতে হইবে এবং উক্ত গ্যারান্টি কোন্ নির্দিষ্ট মেয়াদের জন্য বহাল রাখিতে হইবে, উহা বিধি দ্বারা নির্ধারিত হইবে।]
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
              ১ উপ-ধারা (২) অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯২ ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}