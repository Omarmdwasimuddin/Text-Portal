import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
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
                <div>
                    <p className="mb-4">
                        <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">
                            ৭১গ৷ কর ফেরত প্রদান এবং পুরস্কার ও আর্থিক প্রণোদনা সংক্রান্ত তহবিল---
                        </span>

                        <br /><br />

                        <sup className='text-blue-500' title='ধারা ৭১গ অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৭৮ ধারাবলে সন্নিবেশিত।'>১</sup>[ (১) এই আইনের উদ্দেশ্যপূরণকল্পে, নিম্নোক্ত তহবিলে সংরক্ষিত অর্থ <Link href='/' className='text-blue-500 text-pointer'>গণপ্রজাতন্ত্রী বাংলাদেশের সংবিধানের</Link> ৮৮(চ) অনুচ্ছেদের বিধানাবলী অনুসারে সংযুক্ত তহবিলের উপর দায়যুক্ত হইবে, যথাঃ-]

                        <br /><br />

                        (ক) কর ফেরত প্রদান তহবিল ; এবং

                        <br /><br />

                        (খ) পুরস্কার ও আর্থিক প্রণোদনা তহবিল।

                        <br /><br />

                        (২) অর্থ বিভাগ বোর্ডের নিজস্ব খাতের অধীনে নিম্নোক্ত হিসাবসমূহ প্রতিষ্ঠা করিবে, যথাঃ-

                        <br /><br />

                        (ক) ‘‘কর ফেরৎ প্রদান তহবিল’’ যেখানে কর ফেরত প্রদানযোগ্য অর্থ সংরক্ষিত হইবে এবং মূল্য সংযোজন কর কর্মকর্তা হিসাবে ক্ষমতাপ্রাপ্ত সহকারী কমিশনার উক্ত তহবিল হইতে ধারা ৬৭ এর অধীনে পরিশোধযোগ্য কর ফেরত প্রদান করিবেন; এবং

                        <br /><br />

                        (খ) ‘‘পুরস্কার ও আর্থিক প্রণোদনা তহবিল’’ যেখানে পুরস্কার এবং আর্থিক প্রণোদনা প্রদানযোগ্য অর্থ সংরক্ষিত হইবে এবং উক্ত তহবিল হইতে বোর্ড ধারা ৭১কক এবং ৭১খ এর অধীনে পরিশোধযোগ্য পুরস্কার ও আর্থিক প্রণোদনা প্রদান করিবে।

                        <br /><br />

                        (৩) উপ-ধারা (২) এ বর্ণিত হিসাবসমূহ সংশ্লিষ্ট অর্থ বৎসরে এপ্রোপ্রিয়েশন আইন(Appropriation Act)এর অধীন বোর্ড এবং মূল্য সংযোজন কর দপ্তরকে প্রদত্ত বাৎসরিক মঞ্জুরী হইতে পৃথক হইতে হইবে।

                        <br /><br />

                        (৪) কর ফেরত প্রদান তহবিলে ঘাটতি হইলে, সংযুক্ত তহবিলের বিপরীতে একটি দায় সৃষ্টির মাধ্যমে উহা পরিশোধ করিতে হইবে এবং ফেরত প্রদানযোগ্য অর্থের জন্য তহবিলের হিসাব গণনায় ব্যবহৃত শতকরা হার বৃদ্ধি করিয়া উহা সম্প্ন্ন করিতে হইবে।

                        <br /><br />

                        (৫) কর ফেরত প্রদান তহবিলের জন্য বরাদ্দকৃত অর্থের পরিমাণ অনুমিত কর ফেরত দাবী মিটাইবার জন্য আবশ্যকীয় পরিমাণ অপেক্ষা বেশী হইলে, রিজার্ভের পরিমাণ প্রয়োজনীয় স্তরে নামিয়া না আসা পর্যন্ত আর কোন অর্থ মোট দৈনিক কর রাজস্ব হইতে পৃথক করিয়া রাখা যাইবে না।

                        <br /><br />

                        (৬) কোন অর্থ বৎসরের শেষে পুরস্কার ও আর্থিক প্রণোদনা তহবিলে কোন অর্থ অবশিষ্ট থাকিলে উহা সংযুক্ত তহবিলে স্থানান্তরিত হইবে, যদি না উক্ত অর্থ বৎসর সমাপ্তির পর অন্যূন ০৩ (তিন) মাসের কম সময়ের মধ্যে উক্ত অর্থ বৎসরে এই আইনের আওতায় কর আদায়ের বিষয়ে পুরস্কার হিসাবে উহা পরিশোধিত হয়।

                        <br /><br />

                        ব্যাখ্যা।-এই ধারার উদ্দেশ্যপুরণকল্পে-

                        <br /><br />

                        (ক) ‘‘কর ফেরত প্রদান তহবিল’’ বলিতে কোন অর্থ বৎসরের সম্ভাব্য সকল ফেরত দাবী মিটাইবার লক্ষ্যে, বোর্ড কতৃর্ক নির্ধারিত এই আইনের অধীন আদায়কৃত সর্বমোট কর রাজস্বের নির্ধারিত শতাংশ হারে হিসাবকৃত অর্থকে বুঝাইবে; এবং

                        <br /><br />

                        (খ) ‘‘পুরস্কার ও আর্থিক প্রণোদনা তহবিল’’ বলিতে এই আইনের অধীন আদায়কৃত সর্বমোট কর রাজস্বের শূন্য দশমিক এক শতাংশ (এক শতাংশের একদশমাংশ) পরিমাণ অর্থকে বুঝাইবে।]
                    </p>
                </div>
            </div>
        </div>



          </div>
        </div>

        {/* Footer Section */}
        <div className="">
            <div className="p-6">
                <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
                    {/* Horizontal line */}
                </div>

                <div className="space-y-2 text-xs italic text-gray-600">

                    <p>
                        <sup className="font-bold">১</sup> ধারা ৭১গ অর্থ আইন, ২০১১ (২০১১ সনের ১২ নং আইন) এর ৭৮ ধারাবলে সন্নিবেশিত।
                    </p>

                </div>
            </div>
        </div>



      </div>
    </div>
  );
}