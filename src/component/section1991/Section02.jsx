import React from 'react';

export default function LawPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Section */}
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Heading */}
            <div className="md:w-2/5 bg-blue-50 p-6 border-r border-gray-300">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                সংক্ষিপ্ত শিরোনামা,[***] ও প্রবর্তন
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-3/5 p-6">
              <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                  <p className="mb-4">
                    <span className="font-semibold">১৷</span> (১) এই আইন মূল্য সংযোজন কর আইন, ১৯৯১ নামে অভিহিত হইবে৷
                  </p>
                  
                  <p className="mb-4">
                    (২) এই আইনের-
                  </p>
                  
                  <div className="ml-6 space-y-3">
                    <p>
                      (ক) ধারা ১৫, ১৬, ১৭, ১৮, ২০, ২১, ২২ এবং ৭২ ২রা জুন, ১৯৯১ ইং মোতাবেক ১৮ই জ্যৈষ্ঠ, ১৩৯৮ বাং তারিখে বলবৎ হইয়াছে বলিয়া গণ্য হইবে; এবং
                    </p>
                    
                    <p>
                      (খ) উপরে উল্লিখিত ধারাসমূহ ব্যতীত অন্যান্য ধারাসমূহ ১লা জুলাই, ১৯৯১ ইং মোতাবেক ১৬ই আষাঢ়, ১৩৯৮ বাং তারিখে বলবৎ হইবে৷
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
            <p className="text-sm text-gray-600 italic">
              1 “, প্রয়োগ” কমা ও শব্দটি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে বিলুপ্ত
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}