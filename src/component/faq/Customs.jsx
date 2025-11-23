'use client'
import { useState } from 'react';

const faqs = [
  {
    question: "কাস্টমস শুল্ক কী?",
    answer: "কাস্টমস শুল্ক হলো আমদানি ও রপ্তানি পণ্যের উপর সরকারের আরোপিত কর, যা মূলত রাজস্ব আদায় ও স্থানীয় শিল্প সুরক্ষার জন্য নেওয়া হয়।",
    category: "basic"
  },
  {
    question: "কোন কোন পণ্যের উপর কাস্টমস শুল্ক দিতে হয়?",
    answer: "আমদানিকৃত অধিকাংশ পণ্যের উপর কাস্টমস শুল্ক দিতে হয়। তবে কিছু প্রয়োজনীয় ও মানবিক পণ্য শুল্কমুক্ত থাকে।",
    category: "products"
  },
  {
    question: "ক্লিয়ারিং এজেন্ট কারা?",
    answer: "ক্লিয়ারিং এজেন্ট (C&F Agent) হলো অনুমোদিত প্রতিনিধি, যারা আমদানি বা রপ্তানি পণ্যের শুল্ক, কাগজপত্র ও কাস্টমস কার্যক্রম সম্পন্ন করে।",
    category: "agents"
  },
  {
    question: "HS Code কী?",
    answer: "HS Code হলো Harmonized System Code, যা একটি আন্তর্জাতিকভাবে স্বীকৃত পণ্যের শ্রেণিবিন্যাস ব্যবস্থা। কাস্টমস শুল্ক নির্ধারণে HS Code ব্যবহার হয়।",
    category: "technical"
  },
  {
    question: "আমদানি শুল্ক কীভাবে হিসাব হয়?",
    answer: "আমদানিকৃত পণ্যের শুল্ক সাধারণত পণ্যের CIF (Cost + Insurance + Freight) মূল্যের উপর নির্ধারিত হারে আরোপিত হয়।",
    category: "calculation"
  },
  {
    question: "রপ্তানির ক্ষেত্রে কি কাস্টমস শুল্ক দিতে হয়?",
    answer: "বাংলাদেশে অধিকাংশ রপ্তানি পণ্যের উপর কাস্টমস শুল্ক নেই, বরং সরকার বিভিন্ন প্রণোদনা দিয়ে থাকে।",
    category: "export"
  },
  {
    question: "কোন কোন পণ্য বাংলাদেশে আমদানি নিষিদ্ধ?",
    answer: "মাদকদ্রব্য, পর্নোগ্রাফি, কিছু অস্ত্রশস্ত্র, পরিবেশ ক্ষতিকর দ্রব্য ও আইন দ্বারা নিষিদ্ধ পণ্য আমদানি করা যাবে না।",
    category: "restricted"
  },
  {
    question: "কাস্টমস শুল্ক কোথায় জমা দিতে হয়?",
    answer: "জাতীয় রাজস্ব বোর্ড (NBR) অনুমোদিত ব্যাংক অথবা অনলাইন সিস্টেমের মাধ্যমে কাস্টমস শুল্ক জমা দিতে হয়।",
    category: "payment"
  },
  {
    question: "কাস্টমসের EDI সিস্টেম কী?",
    answer: "EDI (Electronic Data Interchange) হলো অনলাইন সিস্টেম, যেখানে আমদানি-রপ্তানি সংক্রান্ত ঘোষণাপত্র ও কাগজপত্র জমা দেওয়া হয়।",
    category: "technical"
  },
  {
    question: "কাস্টমস নিয়ে সমস্যায় পড়লে কাকে যোগাযোগ করব?",
    answer: "আপনি জাতীয় রাজস্ব বোর্ড (NBR) বা সংশ্লিষ্ট কাস্টমস হাউজে যোগাযোগ করতে পারেন।",
    category: "support"
  },
];

export default function CustomsFAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'সব ক্যাটাগরি' },
    { value: 'basic', label: 'মৌলিক ধারণা' },
    { value: 'products', label: 'পণ্য সম্পর্কিত' },
    { value: 'agents', label: 'ক্লিয়ারিং এজেন্ট' },
    { value: 'technical', label: 'প্রযুক্তিগত বিষয়' },
    { value: 'calculation', label: 'শুল্ক হিসাব' },
    { value: 'export', label: 'রপ্তানি বিষয়ক' },
    { value: 'restricted', label: 'নিষিদ্ধ পণ্য' },
    { value: 'payment', label: 'পেমেন্ট প্রক্রিয়া' },
    { value: 'support', label: 'সাহায্য ও সহায়তা' },
  ];

  // Filter FAQs based on search term and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            কাস্টমস সম্পর্কিত প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            বাংলাদেশের কাস্টমস শুল্ক ও আমদানি-রপ্তানি সংক্রান্ত প্রশ্নের উত্তর একসাথে পাবেন এখানে
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
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="কাস্টমস সম্পর্কিত প্রশ্ন অনুসন্ধান করুন..."
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
                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-green-600 text-white'
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
              className="text-green-600 hover:text-green-800 text-sm font-medium"
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
                key={index} 
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md border border-gray-100"
              >
                <button
                  className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-semibold text-sm">Q</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="text-base font-medium text-gray-900 block">{faq.question}</span>
                      <span className="text-xs text-green-500 bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">
                        {categories.find(c => c.value === faq.category)?.label}
                      </span>
                    </div>
                  </div>
                  <span className={`text-gray-500 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">A</span>
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
        <div className="mt-8 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-yellow-800">গুরুত্বপূর্ণ তথ্য</h4>
              <p className="text-sm text-yellow-700 mt-1">
                কাস্টমস শুল্ক ও আমদানি-রপ্তানি সংক্রান্ত সর্বশেষ তথ্য ও হালনাগাদকৃত হার জানতে এনবিআরের অফিসিয়াল ওয়েবসাইট নিয়মিত ভিজিট করুন। 
                আমদানি-রপ্তানি সংক্রান্ত যেকোনো সমস্যায় কাস্টমস কর্তৃপক্ষ বা লাইসেন্সপ্রাপ্ত ক্লিয়ারিং এজেন্টের পরামর্শ নেওয়া উচিত।
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-green-50 rounded-lg p-5 border border-green-200">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="ml-4">
              <h3 className="text-base font-medium text-gray-900">কাস্টমস সম্পর্কিত সাহায্য প্রয়োজন?</h3>
              <p className="text-sm text-gray-600 mt-1">কাস্টমস শুল্ক ও আমদানি-রপ্তানি সংক্রান্ত যেকোনো তথ্য ও সহায়তার জন্য যোগাযোগ করুন</p>
              <div className="mt-2 space-y-1">
                <p className="text-green-600 font-medium text-sm">জাতীয় রাজস্ব বোর্ড হেল্পলাইন: ১৬১৫</p>
                <p className="text-green-600 font-medium text-sm">কাস্টমস হাউজ, চট্টগ্রাম: ০৩১-৬৮৩২৫৪</p>
                <p className="text-green-600 font-medium text-sm">ইমেইল: customs@nbr.gov.bd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://nbr.gov.bd" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-sm font-medium text-gray-700">এনবিআর ওয়েবসাইট</span>
            </div>
          </a>
          <a href="https://www.bangladeshcustoms.gov.bd" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
              </svg>
              <span className="text-sm font-medium text-gray-700">কাস্টমস ডিপার্টমেন্ট</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}