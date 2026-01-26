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
                    চতুর্বিংশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কাস্টমস কর্মকর্তা কর্তৃক ক্ষমতা প্রয়োগ (enforcement)
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>১৯৭। স্থলপথে আমদানিকৃত বা রপ্তানিকৃত পণ্য ছাড়পত্রের অনুমতি সংক্রান্ত আদেশ দাখিলে বাধ্য করানোর ক্ষমতা---</span> কোনো পণ্য কোনো বিদেশি ভূখণ্ড হইতে স্থলপথে আমদানি করা হইয়াছে বলিয়া অথবা উক্ত ভূখণ্ডে রপ্তানি হইতে পারে বলিয়া বিশ্বাস করিবার যুক্তিসঙ্গত কারণ থাকিলে যথাযথ কর্মকর্তা উক্ত পণ্যের তত্ত্বাবধানকারী ব্যক্তিকে ধারা ৯২ এর অধীন পণ্য ছাড়ের আদেশ দাখিল করিবার জন্য নির্দেশ প্রদান করিতে পারিবেন:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  তবে শর্ত থাকে যে, এই ধারার কোনো কিছুই ধারা ৮ এর দফা (গ) এর অধীন নির্ধারিত রুটে বিদেশি সীমান্ত হইতে কোনো অভ্যন্তরীণ কাস্টমস স্টেশনে আমদানিকৃত পণ্য চলাচলের ক্ষেত্রে প্রযোজ্য হইবে না:
                </p>

                <p className="mb-4 ml-10 text-sm">
                  আরও শর্ত থাকে যে, বোর্ড, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, নির্দেশ প্রদান করিতে পারিবে যে, এই ধারার বিধানাবলি বিদেশি সীমান্তের সহিত সংযুক্ত কোনো বিশেষ এলাকায় কোনো নির্ধারিত বর্ণনার অথবা মূল্যের পণ্যের ক্ষেত্রে প্রযোজ্য হইবে না।
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