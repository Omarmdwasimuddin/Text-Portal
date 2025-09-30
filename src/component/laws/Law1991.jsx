'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const sections = [
  { href: '/section1', text: 'সংক্ষিপ্ত শিরোনামা,[***] ও প্রবর্তন', number: '১' },
  { href: '/section2', text: 'সংজ্ঞা', number: '২' },
  { href: '/section2.1', text: 'আইনের প্রাধান্য', number: '২.ক' },
  { href: '/section3', text: 'মূল্য সংযোজন কর আরোপ', number: '৩' },
  { href: '/section4', text: 'কর হার প্রয়োগ', number: '৪' },
  { href: '/section5', text: 'মূল্য সংযোজন কর ধার্যের জন্য মূল্য নিরূপণ', number: '৫' },
  { href: '/section6', text: 'পরিশোধের সময় ও পদ্ধতি', number: '৬' },
  { href: '/section7', text: 'সম্পূরক শুল্ক আরোপ', number: '৭' },
  { href: '/section8', text: 'টার্ণওভার কর', number: '৮' },
  { href: '/section8.1', text: '[বিলুপ্ত ]', number: '৮.ক' },
  { href: '/section8.2', text: '[বিলুপ্ত ]', number: '৮.খ' },
  { href: '/section8.3', text: '[বিলুপ্ত ]', number: '৮.গ' },
  { href: '/section8.4', text: 'বৃহত্ করদাতা ইউনিট গঠন', number: '৮.ঘ' },
  { href: '/section9', text: 'কর রেয়াত', number: '৯' },
  { href: '/section10', text: 'উৎপাদ কর প্রদান পরবর্তীকালে হিসাবে সংশোধন', number: '১০' },
  { href: '/section11', text: 'উদ্বৃত্ত উপকরণ করের নিষ্পত্তি', number: '১১' },
  { href: '/section12', text: 'আইন প্রবর্তনের সময়ে মজুদ বাবদ উপকরণ কর রেয়াত', number: '১২' },
  { href: '/section13', text: 'রপ্তানিকৃত পণ্য প্রস্তুতে বা উত্পাদনে ব্যবহৃত উপকরণের উপর প্রদত্ত কর [প্রত্যর্পণ]', number: '১৩' },
  { href: '/section14', text: 'অব্যাহতি', number: '১৪' },
  { href: '/section15', text: 'নিবন্ধন', number: '১৫' },
  { href: '/section16', text: 'নিবন্ধন হইতে অব্যাহতি', number: '১৬' },
  { href: '/section17', text: 'স্বেচ্ছা নিবন্ধন', number: '১৭' },
  { href: '/section18', text: 'নিবন্ধন সংক্রান্ত তথ্যের পরিবর্তন', number: '১৮' },
  { href: '/section19', text: 'নিবন্ধন বাতিলকরণ', number: '১৯' },
  { href: '/section19.1', text: '[নিবন্ধন বা টার্নওভার তালিকাভুক্ত ব্যতীত] টেন্ডারে অংশগ্রহণে বিধি-নিষেধ, ইত্যাদি', number: '১৯.ক' },
  { href: '/section20', text: 'মূল্য সংযোজন কর কর্মকর্তাগণের নিয়োগ', number: '২০' },
  { href: '/section21', text: 'ক্ষমতা', number: '২১' },
  { href: '/section22', text: 'ক্ষমতা অর্পণ', number: '২২' },
  { href: '/section23', text: 'মূল্য সংযোজন কর কর্মকর্তাগণের দায়িত্ব অন্য কর্মকর্তাগণের উপর ন্যস্তকরণ', number: '২৩' },
  { href: '/section24', text: 'মূল্য সংযোজন কর কর্মকর্তাকে সহায়তা প্রদান', number: '২৪' },
  { href: '/section24.1', text: 'মূল্য সংযোজন কর কর্মকর্তা কর্তৃক সহায়তা প্রদান', number: '২৪.ক' },
  { href: '/section25', text: 'সমন প্রেরণের ক্ষমতা', number: '২৫' },
  { href: '/section26', text: 'ক্ষমতাপ্রাপ্ত কর্মকর্তাগণের ঘরবাড়ীতে প্রবেশ, মজুদ পণ্য পরিদর্শন এবং হিসাব ও নথিপত্র পরীক্ষা করার অধিকার', number: '২৬' },
  { href: '/section26.1', text: 'করদাতার কর সংশ্লিষ্ট কার্যক্রম নিরীক্ষা এবং অনুসন্ধান', number: '২৬.ক' },
  { href: '/section26.2', text: 'তত্ত্বাবধানাধীন সরবরাহ (Supervised Supply), পর্যবেক্ষণ ও নজরদারী সংক্রান্ত বিধান', number: '২৬.খ' },
  { href: '/section27', text: 'বাজেয়াপ্তযোগ্য পণ্য আটক', number: '২৭' },
  { href: '/section28', text: 'আটককৃত পণ্যের ব্যবস্থাপনা', number: '২৮' },
  { href: '/section29', text: 'পণ্য বিক্রয় ও বিক্রয়লব্ধ অর্থের বিলিবন্দেজ', number: '২৯' },
  { href: '/section30', text: 'বাজেয়াপ্তকৃত পণ্যের ব্যবস্থাপনা', number: '৩০' },
  { href: '/section31', text: 'হিসাব রক্ষণ', number: '৩১' },
  { href: '/section32', text: 'কর চালানপত্র', number: '৩২' },
  { href: '/section33', text: 'নথিপত্র সংরক্ষণের মেয়াদ', number: '৩৩' },
  { href: '/section34', text: 'নথিপত্র ইত্যাদি পেশকরণ', number: '৩৪' },
  { href: '/section34.1', text: 'মূল্য সংযোজন কর সংক্রান্ত দলিলপত্রের প্রত্যায়িত প্রতিলিপি প্রদান', number: '৩৪.ক' },
  { href: '/section35', text: 'দাখিলপত্র পেশকরণ', number: '৩৫' },
  { href: '/section36', text: 'দাখিলপত্রের পরীক্ষা', number: '৩৬' },
  { href: '/section36.1', text: 'মুল্য সংযোজন কর সম্মাননাপত্র', number: '৩৬.ক' },
  { href: '/section37', text: 'অপরাধ ও দণ্ডসমূহ', number: '৩৭' },
  { href: '/section37.1', text: 'স্পেশাল জজ কর্তৃক বিচারকার্য পরিচালনা', number: '৩৭.ক' },
  { href: '/section37.2', text: 'স্পেশাল জজ এর বিশেষ এখতিযার', number: '৩৭.খ' },
  { href: '/section38', text: 'বাজেয়াপ্তকরণ', number: '৩৮' },
  { href: '/section39', text: 'বাজেয়াপ্তির সীমা', number: '৩৯' },
  { href: '/section40', text: 'ন্যায় নির্ণয়নের ক্ষমতা', number: '৪০' },
  { href: '/section41', text: 'বাজেয়াপ্তির পরিবর্তে জরিমানা আরোপ', number: '৪১' },
  { href: '/section41.1', text: 'বিকল্প বিরোধ-নিষ্পত্তি', number: '৪১.ক' },
  { href: '/section41.2', text: 'বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ার প্রয়োগ ও প্রবর্তন', number: '৪১.খ' },
  { href: '/section41.3', text: 'বিকল্প বিরোধ-নিষ্পত্তির আওতা ও পরিধি', number: '৪১.গ' },
  { href: '/section41.4', text: 'বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ায় সহায়তাকারী(Facilitator)নিয়োগ এবং সংশ্লিষ্ট পক্ষসমুহের দায়-দায়িত্ব', number: '৪১.ঘ' },
  { href: '/section41.5', text: 'বিকল্প বিরোধ-নিষ্পত্তির জন্য আবেদনপত্র দাখিল', number: '৪১.ঙ' },
  { href: '/section41.6', text: 'বিকল্প বিরোধ-নিষ্পত্তির জন্য আবেদনসমুহ প্রক্রিয়াকরণ ও নিষ্পত্তি', number: '৪১.চ' },
  { href: '/section41.7', text: 'সমঝোতা (Negotiation) এবং নিষ্পত্তির সময়সীমা', number: '৪১.ছ' },
  { href: '/section41.8', text: 'বিকল্প বিরোধ নিষ্পত্তির সিদ্ধান্ত', number: '৪১.জ' },
  { href: '/section41.9', text: 'মতৈক্যের ভিত্তিতে বিরোধ-নিষ্পত্তির ফলাফল', number: '৪১.ঝ' },
  { href: '/section41.10', text: 'বিকল্প বিরোধ-নিষ্পত্তির মাধ্যমে সিদ্ধান্তেত্ম উপনীত না হওয়ার ক্ষেত্রে আপীলের বিধান', number: '৪১.ঞ' },
  { href: '/section41.11', text: 'অধিকার সংরক্ষণ', number: '৪১.ট' },
  { href: '/section42', text: 'আপীল', number: '৪২' },
  { href: '/section43', text: 'বোর্ডের নথিপত্র, ইত্যাদি তলব ও পরীক্ষার ক্ষমতা', number: '৪৩' },
  { href: '/section44', text: 'বোর্ডের ভুল, ইত্যাদি সংশোধনের ক্ষমতা', number: '৪৪' },
  { href: '/section45', text: 'সরকারের পুনরীক্ষণের ক্ষমতা', number: '৪৫' },
  { href: '/section46', text: 'ক্ষমতাপ্রাপ্ত[ প্রতিনিধির মাধ্যমে উপস্থিতি]', number: '৪৬' },
  { href: '/section47', text: 'সরকারের নথিপত্র, ইত্যাদি তলব ও পরীক্ষার ক্ষমতা', number: '৪৭' },
  { href: '/section48', text: 'তল্লাশীর ক্ষমতা', number: '৪৮' },
  { href: '/section48.1', text: 'মূল্য সংযোজন কর কর্মকর্তাকে ম্যাজিস্ট্রেটের ক্ষমতা অর্পণ', number: '৪৮.ক' },
  { href: '/section49', text: 'গ্রেফতারের ক্ষমতা', number: '৪৯' },
  { href: '/section50', text: 'যে সকল অপরাধের ক্ষেত্রে বিনা পরওয়ানায় গ্রেফতার করা যাইবে না', number: '৫০' },
  { href: '/section51', text: 'তল্লাশী ও গ্রেফতার পদ্ধতি', number: '৫১' },
  { href: '/section52', text: 'গ্রেফতারকৃত ব্যক্তিদের ব্যবস্থাপনা', number: '৫২' },
  { href: '/section53', text: 'থানার ভারপ্রাপ্ত কর্মকর্তার অনুসরণীয় পদ্ধতি', number: '৫৩' },
  { href: '/section54', text: 'ধারা ৫২ এর অধীন প্রেরিত ব্যক্তির বিরুদ্ধে মূল্য সংযোজন কর কর্মকর্তা কর্তৃক তদন্ত পদ্ধতি', number: '৫৪' },
  { href: '/section55', text: '[অনাদায়ী ও কম পরিশোধিত মূল্য সংযোজন করসহ অন্যান্য [শুল্ক-কর] আদায়]', number: '৫৫' },
  { href: '/section56', text: 'সরকারের পাওনা আদায়', number: '৫৬' },
  { href: '/section57', text: 'আদেশ, সিদ্ধান্ত, ইত্যাদি জারী', number: '৫৭' },
  { href: '/section58', text: 'প্রমাণিত অবহেলা বা স্বেচ্ছাচারমূলক কার্যের জন্য ব্যতীত ক্ষতি বা অনিষ্টের জন্য ক্ষতিপূরণ প্রদেয় হইবে না', number: '৫৮' },
  { href: '/section59', text: 'মালিকানা হস্তান্তর', number: '৫৯' },
  { href: '/section60', text: 'মূল্য সংযোজন কর আইনের ক্ষেত্রে অন্যান্য আইনের প্রয়োগ', number: '৬০' },
  { href: '/section61', text: 'আদালতের এখ্‌তিয়ার বারিত', number: '৬১' },
  { href: '/section62', text: 'সরল বিশ্বাসে কৃত কাজকর্ম রক্ষণ', number: '৬২' },
  { href: '/section62.1', text: 'তথ্যের গোপনীয়তা রক্ষণ', number: '৬২.ক' },
  { href: '/section63', text: 'মৃত ব্যক্তির সম্পত্তি', number: '৬৩' },
  { href: '/section64', text: 'দেউলিয়া ব্যক্তির দায়', number: '৬৪' },
  { href: '/section65', text: 'অসুবিধা দূরীকরণ', number: '৬৫' },
  { href: '/section66', text: 'মূল্য সংযোজন কর পরিশোধ ব্যতিরেকে কতিপয় পণ্য খালাস এবং কতিপয় পণ্যের মূল্য সংযোজন কর প্রত্যর্পণের ক্ষমতা', number: '৬৬' },
  { href: '/section67', text: '[ফেরত্ প্রদান (Refund)]', number: '৬৭' },
  { href: '/section68', text: 'আমদানিকৃত পণ্য রপ্তানির ক্ষেত্রে ড্র-ব্যাক', number: '৬৮' },
  { href: '/section69', text: 'আমদানি ও রপ্তানির মধ্যবর্তী সময়ে ব্যবহৃত পণ্য বাবদ ড্র-ব্যাক', number: '৬৯' },
  { href: '/section70', text: 'যে ক্ষেত্রে কোন ড্র-ব্যাক মঞ্জুর করা হইবে না', number: '৭০' },
  { href: '/section70.1', text: 'মূল্য সংযোজন কর তথ্য প্রক্রিয়াকরণ, ইত্যাদি', number: '৭০.ক' },
  { href: '/section71', text: 'করণিক ত্রুটি সংশোধন, ইত্যাদি', number: '৭১' },
  { href: '/section71.1', text: 'সরকারী পাওনা অবলোপনের ক্ষমতা', number: '৭১.ক' },
  { href: '/section71.2', text: 'কর ফাঁকি, আইন লংঘন ইত্যাদির উদ্‌ঘাটনের জন্য পুরস্কার প্রদান', number: '৭১.কক' },
  { href: '/section71.3', text: 'মূল্য সংযোজন কর কর্মকর্তা কর্মচারীদেরকে আর্থিক প্রণোদনা প্রদান।', number: '৭১.খ' },
  { href: '/section72', text: 'কর ফেরত প্রদান এবং পুরস্কার ও আর্থিক প্রণোদনা সংক্রান্ত তহবিল', number: '৭১গ' },
  { href: '/section72', text: 'বিধি প্রণয়নের ক্ষমতা', number: '৭২' },
  { href: '/section72.1', text: 'ইংরেজিতে অনূদিত পাঠ প্রকাশ, ইত্যাদি', number: '৭২.ক' },
  { href: '/section73', text: 'রহিতকরণ ও হেফাজত', number: '৭৩' },
];

// শুধুমাত্র তফসিল সেকশন রাখা হয়েছে
const specialSections = [
  {
    title: 'তফসিল',
    sections: [
      { 
        href: '/pdfs/schedule-1991.pdf', 
        text: 'SCHEDULE',
        isPdf: true
      },
    ],
  },
];

const Law1991 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handlePdfClick = (e, href) => {
    e.preventDefault();
    window.open(href, '_blank');
  };

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
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
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

        {/* শুধুমাত্র তফসিল সেকশন */}
        <div className="mt-8">
          {specialSections.map((specialChapter, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
                <h2 className="text-lg font-bold">{specialChapter.title}</h2>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {specialChapter.sections?.map((section, secIdx) => (
                    <li key={secIdx} className="flex items-start">
                      {section.isPdf ? (
                        <a 
                          href={section.href} 
                          onClick={(e) => handlePdfClick(e, section.href)}
                          className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200 flex items-center"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {section.text}
                        </a>
                      ) : (
                        <Link 
                          href={section.href} 
                          className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
                        >
                          {section.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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