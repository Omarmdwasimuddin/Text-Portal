'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const sections = [
  { href: '/laws/law1991/section/section01', text: 'সংক্ষিপ্ত শিরোনামা,[***] ও প্রবর্তন', number: '১' },
  { href: '/laws/law1991/section/section02', text: 'সংজ্ঞা', number: '২' },
  { href: '/laws/law1991/section/section02.1', text: 'আইনের প্রাধান্য', number: '২.ক' },
  { href: '/laws/law1991/section/section03', text: 'মূল্য সংযোজন কর আরোপ', number: '৩' },
  { href: '/laws/law1991/section/section04', text: 'কর হার প্রয়োগ', number: '৪' },
  { href: '/laws/law1991/section/section05', text: 'মূল্য সংযোজন কর ধার্যের জন্য মূল্য নিরূপণ', number: '৫' },
  { href: '/laws/law1991/section/section06', text: 'পরিশোধের সময় ও পদ্ধতি', number: '৬' },
  { href: '/laws/law1991/section/section07', text: 'সম্পূরক শুল্ক আরোপ', number: '৭' },
  { href: '/laws/law1991/section/section08', text: 'টার্ণওভার কর', number: '৮' },
  { href: '/laws/law1991/section/section08.1', text: '[বিলুপ্ত ]', number: '৮.ক' },
  { href: '/laws/law1991/section/section08.2', text: '[বিলুপ্ত ]', number: '৮.খ' },
  { href: '/laws/law1991/section/section08.3', text: '[বিলুপ্ত ]', number: '৮.গ' },
  { href: '/laws/law1991/section/section08.4', text: 'বৃহত্ করদাতা ইউনিট গঠন', number: '৮.ঘ' },
  { href: '/laws/law1991/section/section09', text: 'কর রেয়াত', number: '৯' },
  { href: '/laws/law1991/section/section10', text: 'উৎপাদ কর প্রদান পরবর্তীকালে হিসাবে সংশোধন', number: '১০' },
  { href: '/laws/law1991/section/section11', text: 'উদ্বৃত্ত উপকরণ করের নিষ্পত্তি', number: '১১' },
  { href: '/laws/law1991/section/section12', text: 'আইন প্রবর্তনের সময়ে মজুদ বাবদ উপকরণ কর রেয়াত', number: '১২' },
  { href: '/laws/law1991/section/section13', text: 'রপ্তানিকৃত পণ্য প্রস্তুতে বা উত্পাদনে ব্যবহৃত উপকরণের উপর প্রদত্ত কর [প্রত্যর্পণ]', number: '১৩' },
  { href: '/laws/law1991/section/section14', text: 'অব্যাহতি', number: '১৪' },
  { href: '/laws/law1991/section/section15', text: 'নিবন্ধন', number: '১৫' },
  { href: '/laws/law1991/section/section16', text: 'নিবন্ধন হইতে অব্যাহতি', number: '১৬' },
  { href: '/laws/law1991/section/section17', text: 'স্বেচ্ছা নিবন্ধন', number: '১৭' },
  { href: '/laws/law1991/section/section18', text: 'নিবন্ধন সংক্রান্ত তথ্যের পরিবর্তন', number: '১৮' },
  { href: '/laws/law1991/section/section19', text: 'নিবন্ধন বাতিলকরণ', number: '১৯' },
  { href: '/laws/law1991/section/section19.1', text: '[নিবন্ধন বা টার্নওভার তালিকাভুক্ত ব্যতীত] টেন্ডারে অংশগ্রহণে বিধি-নিষেধ, ইত্যাদি', number: '১৯.ক' },
  { href: '/laws/law1991/section/section20', text: 'মূল্য সংযোজন কর কর্মকর্তাগণের নিয়োগ', number: '২০' },
  { href: '/laws/law1991/section/section21', text: 'ক্ষমতা', number: '২১' },
  { href: '/laws/law1991/section/section22', text: 'ক্ষমতা অর্পণ', number: '২২' },
  { href: '/laws/law1991/section/section23', text: 'মূল্য সংযোজন কর কর্মকর্তাগণের দায়িত্ব অন্য কর্মকর্তাগণের উপর ন্যস্তকরণ', number: '২৩' },
  { href: '/laws/law1991/section/section24', text: 'মূল্য সংযোজন কর কর্মকর্তাকে সহায়তা প্রদান', number: '২৪' },
  { href: '/laws/law1991/section/section24.1', text: 'মূল্য সংযোজন কর কর্মকর্তা কর্তৃক সহায়তা প্রদান', number: '২৪.ক' },
  { href: '/laws/law1991/section/section25', text: 'সমন প্রেরণের ক্ষমতা', number: '২৫' },
  { href: '/laws/law1991/section/section26', text: 'ক্ষমতাপ্রাপ্ত কর্মকর্তাগণের ঘরবাড়ীতে প্রবেশ, মজুদ পণ্য পরিদর্শন এবং হিসাব ও নথিপত্র পরীক্ষা করার অধিকার', number: '২৬' },
  { href: '/laws/law1991/section/section26.1', text: 'করদাতার কর সংশ্লিষ্ট কার্যক্রম নিরীক্ষা এবং অনুসন্ধান', number: '২৬.ক' },
  { href: '/laws/law1991/section/section26.2', text: 'তত্ত্বাবধানাধীন সরবরাহ (Supervised Supply), পর্যবেক্ষণ ও নজরদারী সংক্রান্ত বিধান', number: '২৬.খ' },
  { href: '/laws/law1991/section/section27', text: 'বাজেয়াপ্তযোগ্য পণ্য আটক', number: '২৭' },
  { href: '/laws/law1991/section/section28', text: 'আটককৃত পণ্যের ব্যবস্থাপনা', number: '২৮' },
  { href: '/laws/law1991/section/section29', text: 'পণ্য বিক্রয় ও বিক্রয়লব্ধ অর্থের বিলিবন্দেজ', number: '২৯' },
  { href: '/laws/law1991/section/section30', text: 'বাজেয়াপ্তকৃত পণ্যের ব্যবস্থাপনা', number: '৩০' },
  { href: '/laws/law1991/section/section31', text: 'হিসাব রক্ষণ', number: '৩১' },
  { href: '/laws/law1991/section/section32', text: 'কর চালানপত্র', number: '৩২' },
  { href: '/laws/law1991/section/section33', text: 'নথিপত্র সংরক্ষণের মেয়াদ', number: '৩৩' },
  { href: '/laws/law1991/section/section34', text: 'নথিপত্র ইত্যাদি পেশকরণ', number: '৩৪' },
  { href: '/laws/law1991/section/section34.1', text: 'মূল্য সংযোজন কর সংক্রান্ত দলিলপত্রের প্রত্যায়িত প্রতিলিপি প্রদান', number: '৩৪.ক' },
  { href: '/laws/law1991/section/section35', text: 'দাখিলপত্র পেশকরণ', number: '৩৫' },
  { href: '/laws/law1991/section/section36', text: 'দাখিলপত্রের পরীক্ষা', number: '৩৬' },
  { href: '/laws/law1991/section/section36.1', text: 'মুল্য সংযোজন কর সম্মাননাপত্র', number: '৩৬.ক' },
  { href: '/laws/law1991/section/section37', text: 'অপরাধ ও দণ্ডসমূহ', number: '৩৭' },
  { href: '/laws/law1991/section/section37.1', text: 'স্পেশাল জজ কর্তৃক বিচারকার্য পরিচালনা', number: '৩৭.ক' },
  { href: '/laws/law1991/section/section37.2', text: 'স্পেশাল জজ এর বিশেষ এখতিযার', number: '৩৭.খ' },
  { href: '/laws/law1991/section/section38', text: 'বাজেয়াপ্তকরণ', number: '৩৮' },
  { href: '/laws/law1991/section/section39', text: 'বাজেয়াপ্তির সীমা', number: '৩৯' },
  { href: '/laws/law1991/section/section40', text: 'ন্যায় নির্ণয়নের ক্ষমতা', number: '৪০' },
  { href: '/laws/law1991/section/section41', text: 'বাজেয়াপ্তির পরিবর্তে জরিমানা আরোপ', number: '৪১' },
  { href: '/laws/law1991/section/section41.1', text: 'বিকল্প বিরোধ-নিষ্পত্তি', number: '৪১.ক' },
  { href: '/laws/law1991/section/section41.2', text: 'বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ার প্রয়োগ ও প্রবর্তন', number: '৪১.খ' },
  { href: '/laws/law1991/section/section41.3', text: 'বিকল্প বিরোধ-নিষ্পত্তির আওতা ও পরিধি', number: '৪১.গ' },
  { href: '/laws/law1991/section/section41.4', text: 'বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ায় সহায়তাকারী(Facilitator)নিয়োগ এবং সংশ্লিষ্ট পক্ষসমুহের দায়-দায়িত্ব', number: '৪১.ঘ' },
  { href: '/laws/law1991/section/section41.5', text: 'বিকল্প বিরোধ-নিষ্পত্তির জন্য আবেদনপত্র দাখিল', number: '৪১.ঙ' },
  { href: '/laws/law1991/section/section41.6', text: 'বিকল্প বিরোধ-নিষ্পত্তির জন্য আবেদনসমুহ প্রক্রিয়াকরণ ও নিষ্পত্তি', number: '৪১.চ' },
  { href: '/laws/law1991/section/section41.7', text: 'সমঝোতা (Negotiation) এবং নিষ্পত্তির সময়সীমা', number: '৪১.ছ' },
  { href: '/laws/law1991/section/section41.8', text: 'বিকল্প বিরোধ নিষ্পত্তির সিদ্ধান্ত', number: '৪১.জ' },
  { href: '/laws/law1991/section/section41.9', text: 'মতৈক্যের ভিত্তিতে বিরোধ-নিষ্পত্তির ফলাফল', number: '৪১.ঝ' },
  { href: '/laws/law1991/section/section41.10', text: 'বিকল্প বিরোধ-নিষ্পত্তির মাধ্যমে সিদ্ধান্তেত্ম উপনীত না হওয়ার ক্ষেত্রে আপীলের বিধান', number: '৪১.ঞ' },
  { href: '/laws/law1991/section/section41.11', text: 'অধিকার সংরক্ষণ', number: '৪১.ট' },
  { href: '/laws/law1991/section/section42', text: 'আপীল', number: '৪২' },
  { href: '/laws/law1991/section/section43', text: 'বোর্ডের নথিপত্র, ইত্যাদি তলব ও পরীক্ষার ক্ষমতা', number: '৪৩' },
  { href: '/laws/law1991/section/section44', text: 'বোর্ডের ভুল, ইত্যাদি সংশোধনের ক্ষমতা', number: '৪৪' },
  { href: '/laws/law1991/section/section45', text: 'সরকারের পুনরীক্ষণের ক্ষমতা', number: '৪৫' },
  { href: '/laws/law1991/section/section46', text: 'ক্ষমতাপ্রাপ্ত[ প্রতিনিধির মাধ্যমে উপস্থিতি]', number: '৪৬' },
  { href: '/laws/law1991/section/section47', text: 'সরকারের নথিপত্র, ইত্যাদি তলব ও পরীক্ষার ক্ষমতা', number: '৪৭' },
  { href: '/laws/law1991/section/section48', text: 'তল্লাশীর ক্ষমতা', number: '৪৮' },
  { href: '/laws/law1991/section/section48.1', text: 'মূল্য সংযোজন কর কর্মকর্তাকে ম্যাজিস্ট্রেটের ক্ষমতা অর্পণ', number: '৪৮.ক' },
  { href: '/laws/law1991/section/section49', text: 'গ্রেফতারের ক্ষমতা', number: '৪৯' },
  { href: '/laws/law1991/section/section50', text: 'যে সকল অপরাধের ক্ষেত্রে বিনা পরওয়ানায় গ্রেফতার করা যাইবে না', number: '৫০' },
  { href: '/laws/law1991/section/section51', text: 'তল্লাশী ও গ্রেফতার পদ্ধতি', number: '৫১' },
  { href: '/laws/law1991/section/section52', text: 'গ্রেফতারকৃত ব্যক্তিদের ব্যবস্থাপনা', number: '৫২' },
  { href: '/laws/law1991/section/section53', text: 'থানার ভারপ্রাপ্ত কর্মকর্তার অনুসরণীয় পদ্ধতি', number: '৫৩' },
  { href: '/laws/law1991/section/section54', text: 'ধারা ৫২ এর অধীন প্রেরিত ব্যক্তির বিরুদ্ধে মূল্য সংযোজন কর কর্মকর্তা কর্তৃক তদন্ত পদ্ধতি', number: '৫৪' },
  { href: '/laws/law1991/section/section55', text: '[অনাদায়ী ও কম পরিশোধিত মূল্য সংযোজন করসহ অন্যান্য [শুল্ক-কর] আদায়]', number: '৫৫' },
  { href: '/laws/law1991/section/section56', text: 'সরকারের পাওনা আদায়', number: '৫৬' },
  { href: '/laws/law1991/section/section57', text: 'আদেশ, সিদ্ধান্ত, ইত্যাদি জারী', number: '৫৭' },
  { href: '/laws/law1991/section/section58', text: 'প্রমাণিত অবহেলা বা স্বেচ্ছাচারমূলক কার্যের জন্য ব্যতীত ক্ষতি বা অনিষ্টের জন্য ক্ষতিপূরণ প্রদেয় হইবে না', number: '৫৮' },
  { href: '/laws/law1991/section/section59', text: 'মালিকানা হস্তান্তর', number: '৫৯' },
  { href: '/laws/law1991/section/section60', text: 'মূল্য সংযোজন কর আইনের ক্ষেত্রে অন্যান্য আইনের প্রয়োগ', number: '৬০' },
  { href: '/laws/law1991/section/section61', text: 'আদালতের এখ্‌তিয়ার বারিত', number: '৬১' },
  { href: '/laws/law1991/section/section62', text: 'সরল বিশ্বাসে কৃত কাজকর্ম রক্ষণ', number: '৬২' },
  { href: '/laws/law1991/section/section62.1', text: 'তথ্যের গোপনীয়তা রক্ষণ', number: '৬২.ক' },
  { href: '/laws/law1991/section/section63', text: 'মৃত ব্যক্তির সম্পত্তি', number: '৬৩' },
  { href: '/laws/law1991/section/section64', text: 'দেউলিয়া ব্যক্তির দায়', number: '৬৪' },
  { href: '/laws/law1991/section/section65', text: 'অসুবিধা দূরীকরণ', number: '৬৫' },
  { href: '/laws/law1991/section/section66', text: 'মূল্য সংযোজন কর পরিশোধ ব্যতিরেকে কতিপয় পণ্য খালাস এবং কতিপয় পণ্যের মূল্য সংযোজন কর প্রত্যর্পণের ক্ষমতা', number: '৬৬' },
  { href: '/laws/law1991/section/section67', text: '[ফেরত্ প্রদান (Refund)]', number: '৬৭' },
  { href: '/laws/law1991/section/section68', text: 'আমদানিকৃত পণ্য রপ্তানির ক্ষেত্রে ড্র-ব্যাক', number: '৬৮' },
  { href: '/laws/law1991/section/section69', text: 'আমদানি ও রপ্তানির মধ্যবর্তী সময়ে ব্যবহৃত পণ্য বাবদ ড্র-ব্যাক', number: '৬৯' },
  { href: '/laws/law1991/section/section70', text: 'যে ক্ষেত্রে কোন ড্র-ব্যাক মঞ্জুর করা হইবে না', number: '৭০' },
  { href: '/laws/law1991/section/section70.1', text: 'মূল্য সংযোজন কর তথ্য প্রক্রিয়াকরণ, ইত্যাদি', number: '৭০.ক' },
  { href: '/laws/law1991/section/section71', text: 'করণিক ত্রুটি সংশোধন, ইত্যাদি', number: '৭১' },
  { href: '/laws/law1991/section/section71.1', text: 'সরকারী পাওনা অবলোপনের ক্ষমতা', number: '৭১.ক' },
  { href: '/laws/law1991/section/section71.11', text: 'কর ফাঁকি, আইন লংঘন ইত্যাদির উদ্‌ঘাটনের জন্য পুরস্কার প্রদান', number: '৭১.কক' },
  { href: '/laws/law1991/section/section71.2', text: 'মূল্য সংযোজন কর কর্মকর্তা কর্মচারীদেরকে আর্থিক প্রণোদনা প্রদান।', number: '৭১.খ' },
  { href: '/laws/law1991/section/section71.3', text: 'কর ফেরত প্রদান এবং পুরস্কার ও আর্থিক প্রণোদনা সংক্রান্ত তহবিল', number: '৭১গ' },
  { href: '/laws/law1991/section/section72', text: 'বিধি প্রণয়নের ক্ষমতা', number: '৭২' },
  { href: '/laws/law1991/section/section72.1', text: 'ইংরেজিতে অনূদিত পাঠ প্রকাশ, ইত্যাদি', number: '৭২.ক' },
  { href: '/laws/law1991/section/section73', text: 'রহিতকরণ ও হেফাজত', number: '৭৩' },
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
      <header className="relative overflow-hidden text-white shadow-lg bg-gradient-to-r from-green-600 to-green-700">
        <div className="container px-6 py-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
            {/* Text Content */}
            <div className="flex-1 lg:pr-8">
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">মূল্য সংযোজন কর আইন, ১৯৯১</h1>
              <p className="text-lg opacity-90">Value Added Tax Act, 1991</p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mt-6">
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
                    className="w-full px-4 py-3 pl-12 text-white border rounded-lg bg-white/10 backdrop-blur-sm border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                  
                  <svg 
                    className="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-white/70" 
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
                      className="absolute transform -translate-y-1/2 right-4 top-1/2 text-white/70 hover:text-white"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {isSearchOpen && searchTerm && (
                  <div 
                    className="absolute left-0 right-0 z-50 mt-2 overflow-y-auto bg-white rounded-lg shadow-xl top-full max-h-96"
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
                            className="block px-4 py-3 transition-colors duration-200 border-b hover:bg-blue-50 last:border-b-0"
                          >
                            <div className="flex items-start justify-between">
                              <span className="font-medium text-blue-700">ধারা {section.number}</span>
                              <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded">
                                মূল্য সংযোজন কর আইন, ১৯৯১
                              </span>
                            </div>
                            <p className="mt-1 text-gray-800">{section.text}</p>
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

            {/* Right Side Image - এখানে যোগ করুন */}
            <div className="flex-shrink-0 mt-6 lg:mt-0 lg:ml-6">
              <div className="w-full lg:w-64 xl:w-80">
                <img 
                  src="/law-banner/law-banner-img.png" 
                  alt="Value Added Tax Act" 
                  className="object-contain w-full h-32 rounded-lg lg:h-40"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-6 py-8 mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="p-6 mb-8 bg-white border-l-4 border-green-500 shadow-md rounded-xl">
          <h2 className="mb-3 font-semibold text-center text-black text-md">এই আইন মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২ (২০১২ সনের  ৪৭নং আইন) দ্বারা রহিত করা হইয়াছে।</h2>
          
          {/* Added important legal phrases */}
          <div className="p-4 my-4 border-l-4 rounded-r-lg bg-gray-50">
            <p className="mb-3 italic text-black">
              <span className="font-semibold">পণ্য ও সেবার উপর মূল্য সংযোজন কর আরোপের বিধানকরণকল্পে প্রণীত আইন৷</span>
            </p>
            <p className="italic text-black">
              <span className="font-semibold">যেহেতু</span> মূল্য সংযোজন কর আরোপ করার উদ্দেশ্যে বিধান করা সমীচীন ও প্রয়োজনীয়;
              <br />
              <span className="font-semibold">সেহেতু</span> এতদ্‌দ্বারা নিম্নরূপ আইন করা হইল:-
            </p>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="mb-8 overflow-hidden bg-white shadow-md rounded-xl">
          <div className="p-4 font-bold text-black bg-gradient-to-r from-green-300 to-green-300">
            <h2 className="text-xl text-center">ধারাসমূহ</h2>
            <p className="text-sm text-center opacity-90">মূল্য সংযোজন কর আইন, ১৯৯১ এর সকল ধারা</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className="p-2 transition-shadow duration-200 border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-bold text-blue-800 bg-blue-100 rounded-full">
                      {section.number}
                    </div>
                    <div>
                      <Link 
                        href={section.href} 
                        className="block mt-3 font-medium text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {section.text}
                      </Link>
                      
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
            <div key={idx} className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="p-4 font-bold text-black bg-gradient-to-r from-green-300 to-green-300">
                <h2 className="text-xl text-center">{specialChapter.title}</h2>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {specialChapter.sections?.map((section, secIdx) => (
                    <li key={secIdx} className="flex items-start">
                      {section.isPdf ? (
                        <a 
                          href={section.href} 
                          onClick={(e) => handlePdfClick(e, section.href)}
                          className="flex items-center text-xs text-blue-600 transition-colors duration-200 hover:text-green-800 hover:underline"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {section.text}
                        </a>
                      ) : (
                        <Link 
                          href={section.href} 
                          className="text-green-600 transition-colors duration-200 hover:text-green-800 hover:underline"
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
        <div className="p-6 mt-8 border border-yellow-200 bg-yellow-50 rounded-xl">
          <h3 className="mb-3 text-lg font-semibold text-yellow-800">গুরুত্বপূর্ণ তথ্য</h3>
          <div className="space-y-2 text-sm text-yellow-700">
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