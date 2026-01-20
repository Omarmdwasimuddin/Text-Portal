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
                    নবম অধ্যায়
                  </h1>
                  <p className="text-sm md:text-sm">
                    যানবাহনের আগমন এবং প্রস্থান
                  </p>
                </div>
              </div>

                
                {/*Section*/}
              <div>
                <p className="mb-4 text-sm">
                  <span className='text-lg font-bold leading-tight text-black md:text-lg'>৪৯। যানবাহন আগমনের স্থান---</span> (১) বাংলাদেশের বাহির হইতে বাংলাদেশে প্রবেশকারী যানবাহনের ভারপ্রাপ্ত ব্যক্তি (person- in- charge) কাস্টমস স্টেশন ব্যতীত অন্য কোনো স্থানে যানবাহনটি ভিড়াইবেন না বা অবতরণ করাইবেন না, অথবা ভিড়াইবার বা অবতরণ করাইবার অনুমতি প্রদান করিবেন না।
                </p>

                <p className="mb-4 text-sm">
                  (২) স্থলপথে বাংলাদেশে প্রবেশকারী যানবাহনের ভারপ্রাপ্ত ব্যক্তি, বোর্ড কর্তৃক নির্ধারিত রুটে বাংলাদেশের যে স্থানে সীমান্ত অতিক্রম করিবেন, তৎক্ষণাৎ উক্ত স্থানের নিকটবর্তী কাস্টমস স্টেশনে তাহার যানবাহনসহ অগ্রসর হইবেন।
                </p>

                <p className="mb-4 text-sm">
                  (৩) বাংলাদেশে আগমনের পর, কোনো যানবাহন যথাযথ কর্মকর্তার নিকট হইতে অনুমতি প্রাপ্ত না হইলে আগমনের বন্দর, স্থান বা বিমানবন্দর হইতে প্রস্থান করিবে না বা কোনো পণ্য খালাস করিবে না।
                </p>

                <p className="mb-4 text-sm">
                  (৪) উপ- ধারা (১), (২) ও (৩) এ যাহা কিছুই থাকুক না কেন, সন্ত্রাস ও ব্যাপক বিধ্বংসী অস্ত্র বিস্তার ও উহার অর্থায়ন সন্দেহে আন্তর্জাতিক সংস্থা কর্তৃক তালিকাভুক্ত আমদানি বা রপ্তানি পণ্য বহনকারী কোনো বাহন বাংলাদেশের কোনো কাস্টমস স্টেশনে ভিড়াইবার বা অবতরণ করাইবার বা বাংলাদেশ হইতে রপ্তানির জন্য প্রস্থান করিবার অনুমতি প্রদান করা যাইবে না।
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