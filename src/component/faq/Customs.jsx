'use client'
import { useState } from 'react';

const faqs = [
  {
    question: "কাস্টমস শুল্ক কী?",
    answer: "কাস্টমস শুল্ক হলো আমদানি ও রপ্তানি পণ্যের উপর সরকারের আরোপিত কর, যা মূলত রাজস্ব আদায় ও স্থানীয় শিল্প সুরক্ষার জন্য নেওয়া হয়।",
  },
  {
    question: "কোন কোন পণ্যের উপর কাস্টমস শুল্ক দিতে হয়?",
    answer: "আমদানিকৃত অধিকাংশ পণ্যের উপর কাস্টমস শুল্ক দিতে হয়। তবে কিছু প্রয়োজনীয় ও মানবিক পণ্য শুল্কমুক্ত থাকে।",
  },
  {
    question: "ক্লিয়ারিং এজেন্ট কারা?",
    answer: "ক্লিয়ারিং এজেন্ট (C&F Agent) হলো অনুমোদিত প্রতিনিধি, যারা আমদানি বা রপ্তানি পণ্যের শুল্ক, কাগজপত্র ও কাস্টমস কার্যক্রম সম্পন্ন করে।",
  },
  {
    question: "HS Code কী?",
    answer: "HS Code হলো Harmonized System Code, যা একটি আন্তর্জাতিকভাবে স্বীকৃত পণ্যের শ্রেণিবিন্যাস ব্যবস্থা। কাস্টমস শুল্ক নির্ধারণে HS Code ব্যবহার হয়।",
  },
  {
    question: "আমদানি শুল্ক কীভাবে হিসাব হয়?",
    answer: "আমদানিকৃত পণ্যের শুল্ক সাধারণত পণ্যের CIF (Cost + Insurance + Freight) মূল্যের উপর নির্ধারিত হারে আরোপিত হয়।",
  },
  {
    question: "রপ্তানির ক্ষেত্রে কি কাস্টমস শুল্ক দিতে হয়?",
    answer: "বাংলাদেশে অধিকাংশ রপ্তানি পণ্যের উপর কাস্টমস শুল্ক নেই, বরং সরকার বিভিন্ন প্রণোদনা দিয়ে থাকে।",
  },
  {
    question: "কোন কোন পণ্য বাংলাদেশে আমদানি নিষিদ্ধ?",
    answer: "মাদকদ্রব্য, পর্নোগ্রাফি, কিছু অস্ত্রশস্ত্র, পরিবেশ ক্ষতিকর দ্রব্য ও আইন দ্বারা নিষিদ্ধ পণ্য আমদানি করা যাবে না।",
  },
  {
    question: "কাস্টমস শুল্ক কোথায় জমা দিতে হয়?",
    answer: "জাতীয় রাজস্ব বোর্ড (NBR) অনুমোদিত ব্যাংক অথবা অনলাইন সিস্টেমের মাধ্যমে কাস্টমস শুল্ক জমা দিতে হয়।",
  },
  {
    question: "কাস্টমসের EDI সিস্টেম কী?",
    answer: "EDI (Electronic Data Interchange) হলো অনলাইন সিস্টেম, যেখানে আমদানি-রপ্তানি সংক্রান্ত ঘোষণাপত্র ও কাগজপত্র জমা দেওয়া হয়।",
  },
  {
    question: "কাস্টমস নিয়ে সমস্যায় পড়লে কাকে যোগাযোগ করব?",
    answer: "আপনি জাতীয় রাজস্ব বোর্ড (NBR) বা সংশ্লিষ্ট কাস্টমস হাউজে যোগাযোগ করতে পারেন।",
  },
];

export default function CustomsFAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="প্রশ্ন বা বিষয়বস্তু অনুসন্ধান করুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Counter */}
        <div className="mb-5 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            {filteredFaqs.length}টি প্রশ্ন পাওয়া গেছে {searchTerm && `"${searchTerm}" এর জন্য`}
          </p>
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
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
                        <span className="text-blue-600 font-semibold text-sm">Q</span>
                      </div>
                    </div>
                    <span className="text-base font-medium text-gray-900">{faq.question}</span>
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
              <p className="mt-1 text-sm text-gray-500">আপনার অনুসন্ধানের সাথে মিলে এমন কোন প্রশ্ন পাওয়া যায়নি</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-10 bg-green-50 rounded-lg p-5 border border-green-100">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-base font-medium text-gray-900">আরও সাহায্য প্রয়োজন?</h3>
              <p className="text-sm text-gray-600">কাস্টমস সংক্রান্ত আরও তথ্যের জন্য সরাসরি যোগাযোগ করুন জাতীয় রাজস্ব বোর্ড (NBR) হেল্পলাইনে</p>
              <p className="text-green-600 font-medium mt-1 text-sm">হেল্পলাইন: ১৬১৫</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
