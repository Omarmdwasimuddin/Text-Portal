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
                    একাদশ অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    কার্গো খালাস এবং পণ্যের অন্তর্মুখী (inward) এন্ট্রি
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৭৫। ক্ষুদ্র পার্সেল অবতরণ করানোর এবং দাবিদারবিহীন পার্সেল নিয়ন্ত্রণে রাখিবার ক্ষমতা---</span> (১) কোনো নৌযান পৌঁছাইবার পর যে কোনো সময় যথাযথ কর্মকর্তা উক্ত নৌযানের মাস্টারের সম্মতিক্রমে পণ্যের কোনো ক্ষুদ্র প্যাকেজ বা পার্সেল কাস্টমস স্টেশনে বহন করিবার ব্যবস্থা করিবেন, যেখানে উহা এন্ট্রির জন্য কাস্টমস কর্মকর্তার দায়িত্বে এই আইনের অধীন উক্ত প্যাকেজ বা পার্সেল অবতরণের জন্য অনুমোদিত অবশিষ্ট কার্যদিবস পর্যন্ত রক্ষিত থাকিবে।
                </p>

                <p className="mb-4 text-sm">
                  (২) যদি কাস্টমস স্টেশন বহনকৃত কোনো প্যাকেজ বা পার্সেল নামাইবার জন্য অনুমোদিত সংখ্যক কার্যদিবস উত্তীর্ণ হওয়ার পর বা যে নৌযান হইতে উহা নামানো হইয়াছে তাহা বহির্গমনের ছাড়পত্র প্রদান করিবার সময় দাবিদারবিহীন থাকে, তাহা হইলে উক্ত নৌযানের মাস্টার ধারা ৭৪ এর বিধানমতে নোটিশ প্রদান করিতে পারিবেন এবং কাস্টমস স্টেশনের ভারপ্রাপ্ত কর্মকর্তা অতঃপর উক্ত ধারার ব্যবস্থামতে উক্ত প্যাকেজ বা পার্সেলের দখল গ্রহণ করিবেন।
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