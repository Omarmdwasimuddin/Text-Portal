'use client'
import { useState } from 'react'

const vatFaqs = [
  {
    question: "মূসক (VAT) কী?",
    answer: "মূসক বা মূল্য সংযোজন কর হলো পণ্য ও সেবার মূল্য সংযোজনের উপর প্রদেয় একটি পরোক্ষ কর। বাংলাদেশে এটি মূসক ও সম্পূরক শুল্ক আইন ২০১২ অনুসারে নিয়ন্ত্রিত হয়।",
    category: "basic"
  },
  {
    question: "মূসকের হার কত?",
    answer: "সাধারণ মূসকের হার ১৫%, তবে কিছু পণ্য ও সেবার জন্য ৫%, ৭.৫%, ১০% ইত্যাদি হারে মূসক প্রযোজ্য। কিছু পণ্য মূসকমুক্তও রয়েছে।",
    category: "rates"
  },
  {
    question: "কে মূসক রেজিস্ট্রেশন করতে বাধ্য?",
    answer: "যেসব ব্যবসায়ীর বার্ষিক টার্নওভার ৮০ লাখ টাকার বেশি, তারা মূসক রেজিস্ট্রেশন করতে বাধ্য। স্বেচ্ছায় রেজিস্ট্রেশনের জন্য সীমা ৩০ লাখ টাকা।",
    category: "registration"
  },
  {
    question: "মূসক রেজিস্ট্রেশন কীভাবে পাবেন?",
    answer: "এনবিআরের মূসক অনলাইন পোর্টালে আবেদন করতে হবে। প্রয়োজনীয় কাগজপত্রের মধ্যে ট্রেড লাইসেন্স, টিআইএন, ব্যাংক স্টেটমেন্ট ইত্যাদি অন্তর্ভুক্ত।",
    category: "registration"
  },
  {
    question: "মূসক রিটার্ন জমা দেওয়ার সময়সীমা কত?",
    answer: "প্রতি মাসের ১৫ তারিখের মধ্যে পূর্ববর্তী মাসের মূসক রিটার্ন জমা দিতে হয়। যেমন: জানুয়ারি মাসের রিটার্ন ফেব্রুয়ারির ১৫ তারিখের মধ্যে জমা দিতে হবে।",
    category: "filing"
  },
  {
    question: "মূসক রিটার্ন জমা না দিলে কী শাস্তি?",
    answer: "মূসক রিটার্ন জমা না দিলে ১০,০০০ টাকা জরিমানা এবং বিলম্বের জন্য অতিরিক্ত জরিমানা হতে পারে।",
    category: "penalty"
  },
  {
    question: "ই-কেওয়াই (e-Challan) কী?",
    answer: "ই-কেওয়াই হলো অনলাইনে মূসক প্রদানের রসিদ। মূসক অনলাইন পোর্টাল বা অনুমোদিত ব্যাংকের মাধ্যমে ই-কেওয়াই তৈরি করে মূসক পরিশোধ করা যায়।",
    category: "payment"
  },
  {
    question: "ইনপুট ভ্যাট ক্রেডিট কী?",
    answer: "কাঁচামাল বা সেবা ক্রয়ের সময় প্রদত্ত মূসককে ইনপুট ভ্যাট বলে। এটি আউটপুট ভ্যাট (বিক্রয়ের সময় আদায়কৃত মূসক) থেকে সমন্বয় করা যায়।",
    category: "credit"
  },
  {
    question: "মূসক রিফান্ড কীভাবে পাওয়া যায়?",
    answer: "ইনপুট ভ্যাট আউটপুট ভ্যাটের চেয়ে বেশি হলে মূসক রিফান্ড পাওয়া যায়। এনবিআরের নির্ধারিত ফরমে আবেদন করতে হয়।",
    category: "refund"
  },
  {
    question: "মূসক রেজিস্ট্রেশন নম্বর কত অঙ্কের?",
    answer: "মূসক রেজিস্ট্রেশন নম্বর ১৩ অঙ্কের হয়। প্রথম ৪ অঙ্ক জোন কোড, পরের ২ অঙ্ক ইউনিট কোড, এবং শেষ ৭ অঙ্ক সিরিয়াল নম্বর।",
    category: "registration"
  },
  {
    question: "কোন কোন পণ্য মূসকমুক্ত?",
    answer: "মৌলিক খাদ্যশস্য, শিক্ষা ও চিকিৎসা সেবা, কৃষি উপকরণ, কিছু ওষুধ, এবং সামাজিক সেবা মূসকমুক্ত পণ্য ও সেবার তালিকায় রয়েছে।",
    category: "exemptions"
  },
  {
    question: "ট্রান্সফার প্রাইসিং কী?",
    answer: "একই গ্রুপের বিভিন্ন কোম্পানির মধ্যে লেনদেনের মূল্য নির্ধারণকে ট্রান্সফার প্রাইসিং বলে। মূসক আইনে এ সম্পর্কে বিশেষ বিধান রয়েছে।",
    category: "legal"
  },
  {
    question: "মূসক অডিট কী?",
    answer: "মূসক কর্তৃপক্ষ নিয়মিতভাবে ব্যবসায়ীদের হিসাব-নিকাশ পরীক্ষা করার জন্য মূসক অডিট পরিচালনা করে। অডিট নোটিশ পাওয়ার ৩০ দিনের মধ্যে জবাব দিতে হয়।",
    category: "audit"
  },
  {
    question: "মূসক রেজিস্ট্রেশন বাতিলের শর্ত কী?",
    answer: "ব্যবসা বন্ধ করা, টার্নওভার কমে যাওয়া, বা অন্য যেকোনো যৌক্তিক কারণে মূসক রেজিস্ট্রেশন বাতিলের জন্য আবেদন করা যায়।",
    category: "registration"
  },
  {
    question: "মূসক সম্পর্কিত অভিযোগ কীভাবে দায়ের করবেন?",
    answer: "মূসক আপিল ট্রাইব্যুনাল বা এনবিআরের অভিযোগ বিভাগে লিখিতভাবে অভিযোগ দায়ের করা যায়। অনলাইন পোর্টালেও অভিযোগ দায়েরের ব্যবস্থা রয়েছে।",
    category: "legal"
  },
]

export default function VatFAQComponent() {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'সব ক্যাটাগরি' },
    { value: 'basic', label: 'মৌলিক বিষয়' },
    { value: 'registration', label: 'রেজিস্ট্রেশন' },
    { value: 'filing', label: 'রিটার্ন দাখিল' },
    { value: 'payment', label: 'পরিশোধ' },
    { value: 'rates', label: 'কর হার' },
    { value: 'exemptions', label: 'মূসকমুক্ত' },
    { value: 'credit', label: 'ইনপুট ক্রেডিট' },
    { value: 'refund', label: 'রিফান্ড' },
    { value: 'audit', label: 'অডিট' },
    { value: 'legal', label: 'আইনগত বিষয়' },
    { value: 'penalty', label: 'জরিমানা' },
  ]

  // Filter FAQs based on search term and category
  const filteredFaqs = vatFaqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            মূসক (VAT) সম্পর্কিত প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            বাংলাদেশের মূসক সংক্রান্ত সকল প্রশ্নের উত্তর একসাথে পাবেন এখানে
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
              placeholder="মূসক সম্পর্কিত প্রশ্ন অনুসন্ধান করুন..."
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
                setSearchTerm('')
                setSelectedCategory('all')
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
                  className="w-full text-left p-4 flex justify-between items-center hover:bg-green-50 transition-colors duration-150"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">Q</span>
                    </div>
                    <div className="text-left">
                      <span className="text-base font-medium text-gray-900 block">{faq.question}</span>
                      <span className="text-xs text-green-500 bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">
                        {categories.find(c => c.value === faq.category)?.label}
                      </span>
                    </div>
                  </div>
                  <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 pb-4 bg-green-50">
                    <div className="flex space-x-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                        <span className="text-teal-600 font-semibold text-sm">A</span>
                      </div>
                      <p className="text-gray-700 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <svg className="mx-auto h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-base font-medium text-gray-900">কোন ফলাফল পাওয়া যায়নি</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'আপনার অনুসন্ধানের সাথে মিলে এমন কোন মূসক সম্পর্কিত প্রশ্ন পাওয়া যায়নি' 
                  : 'বর্তমানে কোন প্রশ্ন পাওয়া যায়নি'}
              </p>
            </div>
          )}
        </div>

        {/* Important Notice Section */}
        <div className="mt-8 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-yellow-800">গুরুত্বপূর্ণ নোটিশ</h4>
              <p className="text-sm text-yellow-700 mt-1">
                মূসক সংক্রান্ত সর্বশেষ তথ্য ও হালনাগাদকৃত হার জানতে এনবিআরের অফিসিয়াল ওয়েবসাইট নিয়মিত ভিজিট করুন।
                মূসক রিটার্ন জমা দেওয়ার সময়সীমা অবশ্যই মেনে চলুন যাতে জরিমানা এড়ানো যায়।
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
              <h3 className="text-base font-medium text-gray-900">মূসক সম্পর্কিত সাহায্য প্রয়োজন?</h3>
              <p className="text-sm text-gray-600 mt-1">মূসক সংক্রান্ত যেকোনো তথ্য ও সহায়তার জন্য যোগাযোগ করুন</p>
              <div className="mt-2 space-y-1">
                <p className="text-green-600 font-medium text-sm">মূসক হেল্পডেস্ক: ১৬১৫</p>
                <p className="text-green-600 font-medium text-sm">ইমেইল: vat.help@nbr.gov.bd</p>
                <p className="text-green-600 font-medium text-sm">ওয়েবসাইট: www.vat.gov.bd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="https://vat.gov.bd" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-sm font-medium text-gray-700">মূসক অনলাইন পোর্টাল</span>
            </div>
          </a>
          <a href="#" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-green-300 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">মূসক ফরম ডাউনলোড</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}