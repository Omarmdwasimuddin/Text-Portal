'use client'
import { useState } from 'react';

const faqs = [
  {
    question: "আয়কর কী?",
    answer: "আয়কর হলো ব্যক্তি বা প্রতিষ্ঠানের আয়ের উপর সরকার কর্তৃক আরোপিত কর। বাংলাদেশে এটি আয়কর অধ্যাদেশ ১৯৮৪ অনুসারে নিয়ন্ত্রিত হয়।",
  },
  {
    question: "আয়করের পরিসর কত?",
    answer: "বর্তমান আর্থিক বছরে (২০২৪-২৫) একক ব্যক্তির জন্য আয়করমুক্ত থাকার সীমা ৩,৫০,০০০ টাকা। এর উপরে আয় হলে কর প্রযোজ্য।",
  },
  {
    question: "কোন কোন আয় আয়করের আওতায় পড়ে?",
    answer: "বেতন, ব্যবসায়িক লাভ, ঘর ভাড়া আয়, কৃষি আয় (সীমিত), বিনিয়োগের লভ্যাংশ ইত্যাদি আয়করের আওতায় পড়ে।",
  },
  {
    question: "টিআইএন কী?",
    answer: "টিআইএন (Taxpayer Identification Number) হলো করদাতার অনন্য সনাক্তকরণ নম্বর, যা আয়কর ফাইলিংয়ের জন্য প্রয়োজনীয়।",
  },
  {
    question: "টিআইএন কীভাবে পাব?",
    answer: "এনবিআরের ওয়েবসাইট থেকে অনলাইনে আবেদন করুন অথবা নিকটস্থ ট্যাক্স অফিসে গিয়ে ফর্ম পূরণ করুন।",
  },
  {
    question: "আয়কর ফাইল করার শেষ তারিখ কবে?",
    answer: "সাধারণত মূল্যায়ন বছরের ৩০ সেপ্টেম্বর। ২০২৫ সালের ২৬ সেপ্টেম্বর অনুযায়ী, সর্বশেষ পরীক্ষা করুন এনবিআরের নোটিফিকেশন।",
  },
  {
    question: "কে আয়কর রিটার্ন দাখিল করতে বাধ্য?",
    answer: "যাদের করযোগ্য আয় মুক্তির সীমা অতিক্রম করে, বেতনভোগী কর্মচারী, ব্যবসায়ী প্রতিষ্ঠান ইত্যাদি।",
  },
  {
    question: "আয়কর ফাইল করার জন্য কী কী ডকুমেন্টস লাগবে?",
    answer: "টিআইএন, আয়ের বিবরণী, ব্যাঙ্ক স্টেটমেন্ট, বিনিয়োগের প্রমাণপত্র, ছাড়-ছাড়ের রসিদ ইত্যাদি।",
  },
  {
    question: "আয়কর রিফান্ডের স্ট্যাটাস কীভাবে চেক করব?",
    answer: "এনবিআর ওয়েবসাইটে টিআইএন এবং লগইন ক্রেডেনশিয়ালস ব্যবহার করে চেক করুন।",
  },
  {
    question: "দেরিতে আয়কর রিটার্ন দাখিল করলে কী শাস্তি?",
    answer: "দেরিতে ফাইল করলে ১,০০০ থেকে ১০,০০০ টাকা পর্যন্ত জরিমানা হতে পারে।",
  },
  {
    question: "কোন কোন খরচ আয়কর থেকে ছাড়যোগ্য?",
    answer: "শিক্ষা, চিকিৎসা, দান, বিনিয়োগ (ডিপোজিট, শেয়ার) ইত্যাদি নির্দিষ্ট খরচ ছাড়যোগ্য।",
  },
  {
    question: "আয়করের হার কত?",
    answer: "০% থেকে ৩০% পর্যন্ত প্রগ্রেসিভ হার, আয়ের পরিমাণ অনুসারে।",
  },
  {
    question: "অনলাইনে আয়কর ফাইল কীভাবে করব?",
    answer: "এনবিআরের e-TIN পোর্টালে রেজিস্ট্রেশন করে ফর্ম পূরণ এবং সাবমিট করুন।",
  },
  {
    question: "কৃষি আয়ে আয়কর লাগে কি?",
    answer: "কৃষি আয়ের উপর নির্দিষ্ট সীমা অতিক্রম করলে কর প্রযোজ্য।",
  },
  {
    question: "আয়কর অফিস কোথায়?",
    answer: "নিকটস্থ ট্যাক্স অফিস বা এনবিআরের জোনাল অফিসে যোগাযোগ করুন।",
  },
];

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'সব ক্যাটাগরি' },
    { value: 'basic', label: 'মৌলিক ধারণা' },
    { value: 'filing', label: 'ফাইলিং প্রক্রিয়া' },
    { value: 'tin', label: 'টিআইএন সম্পর্কিত' },
    { value: 'deduction', label: 'ছাড় ও করমুক্তি' },
    { value: 'legal', label: 'আইনগত বিষয়' },
  ];

  // Categorize FAQs
  const categorizedFaqs = faqs.map((faq, index) => {
    let category = 'basic';
    if (faq.question.includes('টিআইএন') || faq.question.includes('নম্বর')) category = 'tin';
    else if (faq.question.includes('ফাইল') || faq.question.includes('দাখিল') || faq.question.includes('রিটার্ন')) category = 'filing';
    else if (faq.question.includes('ছাড়') || faq.question.includes('করমুক্ত') || faq.question.includes('খরচ')) category = 'deduction';
    else if (faq.question.includes('শাস্তি') || faq.question.includes('আইন') || faq.question.includes('অফিস')) category = 'legal';
    
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            আয়কর সম্পর্কিত প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            বাংলাদেশের আয়কর সংক্রান্ত সকল প্রশ্নের উত্তর একসাথে পাবেন এখানে
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
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="প্রশ্ন বা বিষয়বস্তু অনুসন্ধান করুন..."
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
                    ? 'bg-blue-600 text-white'
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
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
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
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">Q</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <span className="text-base font-medium text-gray-900 block">{faq.question}</span>
                      <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-full mt-1 inline-block">
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
        <div className="mt-8 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-yellow-800">গুরুত্বপূর্ণ তথ্য</h4>
              <p className="text-sm text-yellow-700 mt-1">
                আয়কর সংক্রান্ত সর্বশেষ তথ্য ও হালনাগাদকৃত হার জানতে এনবিআরের অফিসিয়াল ওয়েবসাইট নিয়মিত ভিজিট করুন। 
                কর সংক্রান্ত যেকোনো সমস্যায় আইনজীবী বা কর বিশেষজ্ঞের পরামর্শ নেওয়া উচিত।
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-5 border border-blue-200">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="ml-4">
              <h3 className="text-base font-medium text-gray-900">আয়কর সম্পর্কিত সাহায্য প্রয়োজন?</h3>
              <p className="text-sm text-gray-600 mt-1">আয়কর সংক্রান্ত যেকোনো তথ্য ও সহায়তার জন্য যোগাযোগ করুন</p>
              <div className="mt-2 space-y-1">
                <p className="text-blue-600 font-medium text-sm">জাতীয় রাজস্ব বোর্ড হেল্পলাইন: ১৬১৫</p>
                <p className="text-blue-600 font-medium text-sm">ইমেইল: info@nbr.gov.bd</p>
                <p className="text-blue-600 font-medium text-sm">ওয়েবসাইট: www.nbr.gov.bd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://nbr.gov.bd" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-sm font-medium text-gray-700">এনবিআর ওয়েবসাইট</span>
            </div>
          </a>
          <a href="#" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">আয়কর ফরম ডাউনলোড</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}