'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const sections = [
  { href: '/section1', text: 'সংক্ষিপ্ত শিরোনামা,[***] ও প্রবর্তন', number: 1 },
  { href: '/section2', text: 'সংজ্ঞা', number: 2 },
  { href: '/section2.1', text: 'আইনের প্রাধান্য', number: 2.1 },
  { href: '/section3', text: 'মূল্য সংযোজন কর আরোপ', number: 3 },
  { href: '/section4', text: 'কর হার প্রয়োগ', number: 4 },
  { href: '/section5', text: 'মূল্য সংযোজন কর ধার্যের জন্য মূল্য নিরূপণ', number: 5 },
  { href: '/section6', text: 'পরিশোধের সময় ও পদ্ধতি', number: 6 },
  { href: '/section7', text: 'সম্পূরক শুল্ক আরোপ', number: 7 },
  { href: '/section8', text: 'টার্ণওভার কর', number: 8 },
  { href: '/section8.1', text: '[বিলুপ্ত ]', number: 8.1 },
  { href: '/section8.2', text: '[বিলুপ্ত ]', number: 8.2 },
  { href: '/section8.3', text: '[বিলুপ্ত ]', number: 8.3 },
  { href: '/section8.4', text: 'বৃহত্ করদাতা ইউনিট গঠন', number: 8.4 },
  { href: '/section9', text: 'কর রেয়াত', number: 9 },
  { href: '/section10', text: 'উৎপাদ কর প্রদান পরবর্তীকালে হিসাবে সংশোধন', number: 10 },
  { href: '/section11', text: 'উদ্বৃত্ত উপকরণ করের নিষ্পত্তি', number: 11 },
  { href: '/section12', text: 'আইন প্রবর্তনের সময়ে মজুদ বাবদ উপকরণ কর রেয়াত', number: 12 },
  { href: '/section13', text: 'রপ্তানিকৃত পণ্য প্রস্তুতে বা উত্পাদনে ব্যবহৃত উপকরণের উপর প্রদত্ত কর [প্রত্যর্পণ]', number: 13 },
  { href: '/section14', text: 'অব্যাহতি', number: 14 },
  { href: '/section15', text: 'নিবন্ধন', number: 15 },
  { href: '/section16', text: 'নিবন্ধন হইতে অব্যাহতি', number: 16 },
  { href: '/section17', text: 'স্বেচ্ছা নিবন্ধন', number: 17 },
  { href: '/section18', text: 'নিবন্ধন সংক্রান্ত তথ্যের পরিবর্তন', number: 18 },
];

const Law1991 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Filter sections based on search term
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const term = searchTerm.toLowerCase().trim();
    
    // If search term includes "ধারা" followed by a number, search specifically by section number
    const sectionNumberMatch = term.match(/ধারা\s*(\d+\.?\d*)/);
    if (sectionNumberMatch) {
      const sectionNumber = sectionNumberMatch[1];
      return sections.filter(section => 
        section.number.toString() === sectionNumber
      );
    }
    
    // Search by section number directly
    if (/^\d+\.?\d*$/.test(term)) {
      return sections.filter(section => 
        section.number.toString() === term
      );
    }
    
    // Search by text
    return sections.filter(section => 
      section.text.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // Close search when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsSearchOpen(false);
    };

    if (isSearchOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-blue-700 text-white shadow-lg relative">
        <div className="container mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">মূল্য সংযোজন কর আইন, ১৯৯১</h1>
          <p className="text-lg opacity-90">Value Added Tax Act, 1991</p>
          
          {/* Search Bar */}
          <div className="mt-6 max-w-2xl relative">
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                placeholder="আইন অনুসন্ধান করুন... (ধারা নম্বর বা শিরোনাম)"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setIsSearchOpen(false);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {isSearchOpen && searchTerm && (
              <div 
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredSections.length > 0 ? (
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm text-gray-500 border-b">
                      {filteredSections.length}টি ফলাফল পাওয়া গেছে
                    </div>
                    {filteredSections.map((section, index) => (
                      <Link
                        key={index}
                        href={section.href}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchTerm('');
                        }}
                        className="block px-4 py-3 hover:bg-blue-50 border-b last:border-b-0 transition-colors duration-200"
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-blue-700">ধারা {section.number}</span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            মূল্য সংযোজন কর আইন, ১৯৯১
                          </span>
                        </div>
                        <p className="text-gray-800 mt-1">{section.text}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    কোন ফলাফল পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">আইনের সংক্ষিপ্ত বিবরণ</h2>
          <p className="text-gray-600 mb-4">
            মূল্য সংযোজন কর আইন, ১৯৯১ বাংলাদেশের কর ব্যবস্থায় একটি মাইলফলক হিসেবে পরিচিত। 
            এই আইনটি ১৯৯১ সালে প্রণীত হয় এবং পরবর্তীতে বিভিন্ন সময়ে সংশোধিত হয়। 
            আইনটি মূল্য সংযোজন কর, সম্পূরক শুল্ক এবং টার্নওভার কর সম্পর্কিত বিধানাবলী সমন্বিত করে।
          </p>
          
          {/* Added important legal phrases */}
          <div className="bg-gray-50 border-l-4 border-red-500 p-4 my-4 rounded-r-lg">
            <p className="text-gray-700 italic mb-3">
              <span className="font-semibold">পণ্য ও সেবার উপর মূল্য সংযোজন কর আরোপের বিধানকরণকল্পে প্রণীত আইন৷</span>
            </p>
            <p className="text-gray-700 italic">
              <span className="font-semibold">যেহেতু</span> মূল্য সংযোজন কর আরোপ করার উদ্দেশ্যে বিধান করা সমীচীন ও প্রয়োজনীয়;
              <br />
              <span className="font-semibold">সেহেতু</span> এতদ্‌দ্বারা নিম্নরূপ আইন করা হইল:-
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">আইনের উদ্দেশ্য</h3>
              <p className="text-sm text-gray-600">আধুনিক ও স্বচ্ছ কর ব্যবস্থা প্রতিষ্ঠা</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">প্রবর্তনের তারিখ</h3>
              <p className="text-sm text-gray-600">১৯৯১ সাল</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">মূল বৈশিষ্ট্য</h3>
              <p className="text-sm text-gray-600">মূসক, সম্পূরক শুল্ক ও টার্নওভার কর ব্যবস্থা</p>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4">
            <h2 className="text-xl font-bold">ধারাসমূহ</h2>
            <p className="text-sm opacity-90">মূল্য সংযোজন কর আইন, ১৯৯১ এর সকল ধারা</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 hover:border-blue-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {section.number}
                    </div>
                    <div>
                      <Link 
                        href={section.href} 
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium block mb-1"
                      >
                        {section.text}
                      </Link>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        ধারা {section.number}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">গুরুত্বপূর্ণ তথ্য</h3>
          <div className="text-sm text-yellow-700 space-y-2">
            <p>• এই আইনটি ২০১২ সালের মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন দ্বারা প্রতিস্থাপিত হয়েছে</p>
            <p>• কিছু ধারা এখনও প্রাসঙ্গিক এবং প্রয়োগযোগ্য</p>
            <p>• আইনটি বিভিন্ন সময়ে সংশোধিত হয়েছে</p>
            <p>• আইনের মূল উদ্দেশ্য ছিল পণ্য ও সেবার উপর মূল্য সংযোজন কর আরোপের বিধান করা</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Law1991;