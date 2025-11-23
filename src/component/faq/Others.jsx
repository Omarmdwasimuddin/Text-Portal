'use client'
import { useState } from 'react';

const otherFaqs = [
  {
    question: "ট্রেড লাইসেন্স কী?",
    answer: "ট্রেড লাইসেন্স হলো স্থানীয় কর্তৃপক্ষ (সিটি কর্পোরেশন বা পৌরসভা) থেকে নেওয়া একটি লাইসেন্স যা কোনো ব্যবসা চালানোর অনুমতি দেয়।",
  },
  {
    question: "ট্রেড লাইসেন্স কীভাবে নেবেন?",
    answer: "আপনার ব্যবসার অবস্থান অনুযায়ী সংশ্লিষ্ট সিটি কর্পোরেশন বা পৌরসভায় আবেদন করতে হবে। প্রয়োজনীয় কাগজপত্রের মধ্যে দাখিলা, মালিকানের প্রমাণপত্র, ফটো ইত্যাদি অন্তর্ভুক্ত।",
  },
  {
    question: "বিনিয়োগ কর কী?",
    answer: "বিনিয়োগ কর হলো শেয়ার বাজারে লেনদেনের উপর প্রদত্ত কর। এটি প্রতিটি লেনদেনের সময় আদায় করা হয়।",
  },
  {
    question: "টার্নওভার ট্যাক্স কী?",
    answer: "টার্নওভার ট্যাক্স হলো নির্দিষ্ট খাতের ব্যবসায়ীদের জন্য VAT এর বিকল্প হিসেবে প্রযোজ্য কর। এটি মূলত খুচরা ও পাইকারি ব্যবসার জন্য প্রযোজ্য।",
  },
  {
    question: "এক্সাইজ ডিউটি কী?",
    answer: "এক্সাইজ ডিউটি হলো স্থানীয়ভাবে উৎপাদিত কিছু পণ্য (যেমন: সিগারেট, সফট ড্রিংক্স) এর উপর আরোপিত কর।",
  },
  {
    question: "স্টাম্প ডিউটি কী?",
    answer: "স্টাম্প ডিউটি হলো আইনগত দলিল, চুক্তি, এবং বিভিন্ন প্রকারের নথির উপর প্রদত্ত কর।",
  },
  {
    question: "গিফট ট্যাক্স কী?",
    answer: "গিফট ট্যাক্স হলো উপহার হিসেবে প্রাপ্ত অর্থ বা সম্পত্তির উপর প্রদত্ত কর। নির্দিষ্ট সীমার বেশি উপহারের উপর এই কর প্রযোজ্য।",
  },
  {
    question: "উত্তরাধিকার কর কী?",
    answer: "উত্তরাধিকার কর হলো মৃত ব্যক্তির কাছ থেকে প্রাপ্ত সম্পত্তির উপর প্রদত্ত কর। বাংলাদেশে বর্তমানে এটি প্রযোজ্য নয়।",
  },
  {
    question: "ওয়েভার ট্যাক্স কী?",
    answer: "ওয়েভার ট্যাক্স হলো বিশেষ অর্থনৈতিক অঞ্চল (SEZ) বা নির্দিষ্ট শিল্প প্রতিষ্ঠানকে প্রদত্ত কর ছাড়।",
  },
  {
    question: "সারচার্জ কী?",
    answer: "সারচার্জ হলো মূল করের উপর অতিরিক্তভাবে আদায়কৃত কর, যা সাধারণত বিশেষ উদ্দেশ্যে (যেমন: শিক্ষা বা স্বাস্থ্য খাত) সংগ্রহ করা হয়。",
  },
  {
    question: "ট্যাক্স হোলিডে কী?",
    answer: "ট্যাক্স হোলিডে হলো নতুন শিল্প প্রতিষ্ঠানকে প্রদত্ত করমুক্ত সুবিধা, যা সাধারণত নির্দিষ্ট সময়ের জন্য প্রযোজ্য হয়।",
  },
  {
    question: "ডবল ট্যাক্সেশন এভয়েডেন্স এগ্রিমেন্ট (DTAA) কী?",
    answer: "DTAA হলো দুটি দেশের মধ্যে স্বাক্ষরিত চুক্তি যা একই আয়ের উপর দুবার কর দেওয়া থেকে রক্ষা করে।",
  },
  {
    question: "ট্যাক্স ইনসেন্টিভ কী?",
    answer: "ট্যাক্স ইনসেন্টিভ হলো কর ছাড়ের বিশেষ সুবিধা, যা সাধারণত নির্দিষ্ট খাত বা অঞ্চলে বিনিয়োগ উৎসাহিত করার জন্য দেওয়া হয়।",
  },
  {
    question: "ফাইনাল সেটেলমেন্ট কী?",
    answer: "ফাইনাল সেটেলমেন্ট হলো করদাতা এবং কর কর্তৃপক্ষের মধ্যে চূড়ান্ত কর নির্ধারণ প্রক্রিয়া।",
  },
  {
    question: "ট্যাক্স অডিট কী?",
    answer: "ট্যাক্স অডিট হলো করদাতার হিসাব-নিকাশ পরীক্ষা করার প্রক্রিয়া, যাতে করের সঠিক পরিমাণ নিশ্চিত করা হয়।",
  },
  {
    question: "ট্যাক্স এপিলেট ট্রাইব্যুনাল কী?",
    answer: "ট্যাক্স এপিলেট ট্রাইব্যুনাল হলো কর সংক্রান্ত বিরোধ নিষ্পত্তির জন্য গঠিত বিশেষ আদালত।",
  },
  {
    question: "এডভান্স ট্যাক্স কী?",
    answer: "এডভান্স ট্যাক্স হলো করবছর শুরুতেই করের অগ্রিম পরিশোধ, যা পরবর্তীতে চূড়ান্ত কর নির্ধারণের সময় সমন্বয় করা হয়।",
  },
  {
    question: "মিনিমাম ট্যাক্স কী?",
    answer: "মিনিমাম ট্যাক্স হলো এমন একটি কর ব্যবস্থা যেখানে ব্যবসায়ী ক্ষতির সম্মুখীন হলেও নির্দিষ্ট পরিমাণ কর দিতে বাধ্য।",
  },
  {
    question: "প্রিসাম্পটিভ ট্যাক্স কী?",
    answer: "প্রিসাম্পটিভ ট্যাক্স হলো আয়ের প্রকৃত হিসাব না নিয়ে পূর্বনির্ধারিত হারে কর আদায়ের পদ্ধতি।",
  },
  {
    question: "ট্যাক্স রিফান্ডের সময়সীমা কত?",
    answer: "সাধারণত ট্যাক্স রিফান্ড আবেদন জমা দেওয়ার পর 60 থেকে 90 দিনের মধ্যে রিফান্ড প্রক্রিয়া সম্পন্ন হওয়ার কথা।",
  },
];

export default function OtherTaxFAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'সব ক্যাটাগরি' },
    { value: 'license', label: 'লাইসেন্স ও রেজিস্ট্রেশন' },
    { value: 'investment', label: 'বিনিয়োগ কর' },
    { value: 'other', label: 'অন্যান্য কর' },
    { value: 'legal', label: 'আইনগত বিষয়' },
  ];

  // Categorize FAQs
  const categorizedFaqs = otherFaqs.map((faq, index) => {
    let category = 'other';
    if (faq.question.includes('লাইসেন্স') || faq.question.includes('রেজিস্ট্রেশন')) category = 'license';
    else if (faq.question.includes('বিনিয়োগ') || faq.question.includes('শেয়ার')) category = 'investment';
    else if (faq.question.includes('আদালত') || faq.question.includes('আইন') || faq.question.includes('ট্রাইব্যুনাল')) category = 'legal';
    
    return { ...faq, category, id: index };
  });

  // Filter FAQs based on search term and category
  const filteredFaqs = categorizedFaqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            অন্যান্য কর ও রাজস্ব সম্পর্কিত প্রশ্নোত্তর
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            VAT, Income Tax, এবং Customs ছাড়াও অন্যান্য সকল কর ও রাজস্ব সংক্রান্ত প্রশ্নের উত্তর
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="অন্যান্য কর সম্পর্কিত প্রশ্ন অনুসন্ধান করুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Counter */}
        <div className="mb-5 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            {filteredFaqs.length}টি প্রশ্ন পাওয়া গেছে 
            {searchTerm && ` "${searchTerm}" এর জন্য`}
            {selectedCategory !== 'all' && ` ${categories.find(c => c.value === selectedCategory)?.label} ক্যাটাগরিতে`}
          </p>
          {(searchTerm || selectedCategory !== 'all') && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              সব প্রশ্ন দেখুন
            </button>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={faq.id} 
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md border border-gray-100"
              >
                <button
                  className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-sm">Q</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="text-base font-medium text-gray-900 block">{faq.question}</span>
                      <span className="text-xs text-purple-500 bg-purple-50 px-2 py-1 rounded-full mt-1 inline-block">
                        {categories.find(c => c.value === faq.category)?.label}
                      </span>
                    </div>
                  </div>
                  <span className={`text-gray-500 transition-transform duration-200 ${openIndex === faq.id ? 'transform rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openIndex === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-sm">A</span>
                        </div>
                      </div>
                      <div className="text-gray-700 text-sm">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg className="mx-auto h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-base font-medium text-gray-900">কোন ফলাফল পাওয়া যায়নি</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'আপনার অনুসন্ধানের সাথে মিলে এমন কোন প্রশ্ন পাওয়া যায়নি' 
                  : 'বর্তমানে কোন প্রশ্ন পাওয়া যায়নি'}
              </p>
            </div>
          )}
        </div>

        {/* Important Notice Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-yellow-800">গুরুত্বপূর্ণ তথ্য</h4>
              <p className="text-sm text-yellow-700 mt-1">
                বিভিন্ন ধরনের কর ও রাজস্ব সংক্রান্ত সর্বশেষ তথ্য ও হালনাগাদকৃত হার জানতে এনবিআরের অফিসিয়াল ওয়েবসাইট নিয়মিত ভিজিট করুন। 
                কর সংক্রান্ত যেকোনো সমস্যায় আইনজীবী বা কর বিশেষজ্ঞের পরামর্শ নেওয়া উচিত।
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-purple-50 rounded-lg p-5 border border-purple-200">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="ml-4">
              <h3 className="text-base font-medium text-gray-900">অন্যান্য কর সম্পর্কিত সাহায্য প্রয়োজন?</h3>
              <p className="text-sm text-gray-600 mt-1">বিভিন্ন কর ও রাজস্ব সংক্রান্ত যেকোনো তথ্য ও সহায়তার জন্য যোগাযোগ করুন</p>
              <div className="mt-2 space-y-1">
                <p className="text-purple-600 font-medium text-sm">জাতীয় রাজস্ব বোর্ড হেল্পলাইন: ১৬১৫</p>
                <p className="text-purple-600 font-medium text-sm">ইমেইল: info@nbr.gov.bd</p>
                <p className="text-purple-600 font-medium text-sm">ওয়েবসাইট: www.nbr.gov.bd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://nbr.gov.bd" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-sm font-medium text-gray-700">এনবিআর ওয়েবসাইট</span>
            </div>
          </a>
          <a href="#" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">কর ফরম ডাউনলোড</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}