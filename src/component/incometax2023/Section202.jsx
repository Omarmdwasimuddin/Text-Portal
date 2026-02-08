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
                    <span className='text-lg font-bold leading-tight text-black md:text-lg'>২০২। ন্যায়নির্ণয়ন (adjudication) করিবার ক্ষমতা---</span> (১) এই আইনের অধীন পণ্য বাজেয়াপ্ত ও জরিমানা আরোপের ক্ষেত্রে কাস্টমস কর্মকর্তাগণের অধিক্ষেত্র এবং ক্ষমতা হইবে নিম্নরূপ, যথা :-
                  </p>

                  <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full text-sm border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-center border border-gray-300">নং</th>
                          <th className="p-2 text-center border border-gray-300">মামলার প্রকৃতি</th>
                          <th className="p-2 text-center border border-gray-300">কর্মকর্তাগণের পদবি</th>
                          <th className="p-2 text-center border border-gray-300">অধিক্ষেত্র ও ক্ষমতা</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 text-center border border-gray-300">১</td>
                          <td className="p-2 border border-gray-300">পণ্য বাজেয়াপ্তকরণ বা জরিমানা আরোপ অথবা উভয় ক্ষেত্রে ন্যায়নির্ণয়ন</td>
                          <td className="p-2 border border-gray-300">
                            কমিশনার অব কাস্টমস, কমিশনার অব কাস্টমস (বণ্ড) এবং ডিরেক্টর জেনারেল (কাস্টমস রেয়াত ও প্রত্যর্পণ
                          </td>
                          <td className="p-2 border border-gray-300">পণ্যের মূল্য ৬০ (ষাট) লক্ষ টাকার অধিক</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300">অ্যাডিশনাল কমিশনার অব কাস্টমস</td>
                          <td className="p-2 border border-gray-300">পণ্যের মূল্য অনধিক ৬০ (ষাট) লক্ষ টাকা</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300">জয়েন্ট কমিশনার অব কাস্টমস</td>
                          <td className="p-2 border border-gray-300">পণ্যের মূল্য অনধিক ৩৫ (পয়ত্রিশ) লক্ষ টাকা</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300">ডেপুটি কমিশনার অব কাস্টমস</td>
                          <td className="p-2 border border-gray-300">পণ্যের মূল্য অনধিক ২০ (বিশ) লক্ষ টাকা</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300">অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস</td>
                          <td className="p-2 border border-gray-300">পণ্যের মূল্য অনধিক ১০ (দশ) লক্ষ টাকা</td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300"></td>
                          <td className="p-2 border border-gray-300">রাজস্ব কর্মকর্তা</td>
                          <td className="p-2 border border-gray-300">পণ্যের মূল্য অনধিক ৫ (পাঁচ) লক্ষ টাকা</td>
                        </tr>
                        <tr>
                          <td className="p-2 text-center border border-gray-300">২</td>
                          <td className="p-2 border border-gray-300">
                            কাস্টমস হাউস এবং কাস্টমস স্টেশনসমূহে কার্গো ঘোষণায় উল্লিখিত কোনো পণ্য পাওয়া না যাওয়া বা কম পাওয়ার ক্ষেত্রে ন্যায়নির্ণয়ন, যাহাতে কেবল ধারা ১৭১ এর উপ-ধারা (১) এর টেবিলের কলাম (১) এর ক্রমিক নম্বর ১১ এর বিপরীতে, যথাক্রমে, কলাম (৩) ও (৪) এর এন্ট্রি (৩) এর অধীন জরিমানা আরোপণীয়
                          </td>
                          <td className="p-2 border border-gray-300">
                            কাস্টমস হাউস অথবা, ক্ষেত্রমত, কাস্টমস স্টেশনে কার্গো ঘোষণার ছাড়করণের দায়িত্বে ভারপ্রাপ্ত ডেপুটি কমিশনার অব কাস্টমস অথবা অ্যাসিস্ট্যান্ট কমিশনার অব কাস্টমস
                          </td>
                          <td className="p-2 border border-gray-300">পণ্যের মূল্য সীমাহীন</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-sm">
                    (২) উপ-ধারা (১) এ উল্লিখিত টেবিলে যাহা কিছুই থাকুক না কেন, বোর্ড, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, কোনো বিশেষ কর্মকর্তার অথবা কোনো শ্রেণির কর্মকর্তার অধিক্ষেত্র এবং ক্ষমতা হ্রাস বা বৃদ্ধি করিতে পারিবে।
                  </p>

                  <p className="mt-4 text-sm">
                    (৩) বোর্ড, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, যে ক্ষেত্রে উপ-ধারা (১) এর টেবিলে অধিক্ষেত্র এবং ক্ষমতা প্রদর্শিত হয় নাই, সেই ক্ষেত্রে যে কোনো কাস্টমস কর্মকর্তার উপর অধিক্ষেত্র নির্ধারণ এবং ক্ষমতা অর্পণ করিতে পারিবে।
                  </p>

                  <p className="mt-4 text-sm">
                    <sup className='text-blue-500'title='উপ-ধারা (৪)  অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯৭ ধারাবলে সংযোজিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।'>২</sup>[(৪) উচ্চতর পদে চলতি দায়িত্বপ্রাপ্ত কর্মকর্তা, উপ-ধারা (১) এর টেবিলে উল্লিখিত সংশ্লিষ্ট উচ্চতর পদের জন্য নির্ধারিত ন্যায়নির্ণয়ন ক্ষমতা প্রয়োগ করিতে পারিবেন।]
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
              ১ “টেবিল অর্থ অধ্যাদেশ, ২০২৫ (২০২৫ সনের ২৮ নং অধ্যাদেশ) এর ১৫৫ ধারাবলে প্রতিস্থাপিত।<br/>
              ২ উপ-ধারা (৪) অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ৯৭ ধারাবলে সংযোজিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।<br/>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}