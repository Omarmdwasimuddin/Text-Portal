'use client'
import { useState } from 'react'
import Head from 'next/head'

export default function SubscriptionPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async () => {
    setIsLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      alert('সাবস্ক্রিপশন সফলভাবে সম্পন্ন হয়েছে!')
      setIsLoading(false)
    }, 2000)
  }

  const features = [
    'সব ধরনের বই অ্যাক্সেস করুন',
    'এক বছরের জন্য আনলিমিটেড পড়ার সুযোগ',
    'মোবাইল ও ওয়েব অ্যাপ একসেস',
    'অফলাইন পড়ার সুবিধা',
    'বুকমার্ক ও নোট তৈরি করুন',
    'বিশেষজ্ঞ রিভিউ ও রেটিং',
    'নতুন বই সম্পর্কে নোটিফিকেশন',
    'প্রিয় লেখকদের ফলো করুন'
  ]

  const pricing = {
    yearly: {
      price: 1500,
      discount: '১৭% সাশ্রয়',
      originalPrice: 1800
    },
    monthly: {
      price: 150,
      discount: null,
      originalPrice: null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>বইপড়া - প্রিমিয়াম সাবস্ক্রিপশন</title>
        <meta name="description" content="বইপড়া প্রিমিয়াম সাবস্ক্রিপশনে যোগ দিন" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">ট্যাক্স & ট্রেড সলিউশনস</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">লগইন</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                ফ্রি ট্রায়াল
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            আপনার পড়ার অভিজ্ঞতা উন্নত করুন
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            বইপড়া প্রিমিয়াম সাবস্ক্রিপশনের মাধ্যমে পাবেন হাজারো বইয়ের আনলিমিটেড অ্যাক্সেস
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                !isYearly
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              মাসিক
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                isYearly
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              বার্ষিক
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Popular Badge */}
          {isYearly && (
            <div className="bg-green-600 text-white text-center py-2">
              <span className="font-medium">সবচেয়ে জনপ্রিয়</span>
            </div>
          )}
          
          <div className="p-8">
            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-5xl font-bold text-gray-900">
                  ৳{isYearly ? pricing.yearly.price : pricing.monthly.price}
                </span>
                {!isYearly && (
                  <span className="text-gray-500 ml-2">/মাস</span>
                )}
              </div>
              
              {isYearly && pricing.yearly.discount && (
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600 bg-green-50 px-2 py-1 rounded-full text-sm font-medium">
                    {pricing.yearly.discount}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ৳{pricing.yearly.originalPrice}
                  </span>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleSubscribe}
              disabled={isLoading}
              className="w-full bg-green-600 text-white cursor-pointer py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  প্রসেসিং...
                </span>
              ) : (
                `এখনই সাবস্ক্রাইব করুন - ৳${isYearly ? pricing.yearly.price : pricing.monthly.price}`
              )}
            </button>

            {/* Payment Methods with Real Images */}
<div className="mt-6 text-center">
  <p className="text-gray-500 text-sm mb-4">সাপোর্টেড পেমেন্ট মেথড</p>
  <div className="flex justify-center items-center space-x-6">
    {/* bKash */}
    <div className="flex flex-col items-center">
      <img 
        src="https://imgur.com/3PAAp7H.png" 
        alt="bKash" 
        className="w-12 h-8 object-contain mb-1"
      />
      <span className="text-gray-400 text-xs">bKash</span>
    </div>
    
    {/* Nagad */}
    <div className="flex flex-col items-center">
      <img 
        src="/images/nagad-logo.png" 
        alt="Nagad" 
        className="w-12 h-8 object-contain mb-1"
      />
      <span className="text-gray-400 text-xs">Nagad</span>
    </div>
    
    {/* Rocket */}
    <div className="flex flex-col items-center">
      <img 
        src="/images/rocket-logo.png" 
        alt="Rocket" 
        className="w-12 h-8 object-contain mb-1"
      />
      <span className="text-gray-400 text-xs">রকেট</span>
    </div>
    
    {/* Card */}
    <div className="flex flex-col items-center">
      <img 
        src="/images/card-logo.png" 
        alt="Card" 
        className="w-12 h-8 object-contain mb-1"
      />
      <span className="text-gray-400 text-xs">কার্ড</span>
    </div>
  </div>
</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">সুরক্ষিত পেমেন্ট</h3>
            <p className="text-gray-600 text-sm">আপনার সমস্ত তথ্য এনক্রিপ্টেড এবং সুরক্ষিত</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">৭ দিনের মানি ব্যাক</h3>
            <p className="text-gray-600 text-sm">সন্তুষ্ট না হলে ফুল রিফান্ড</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">যেকোনো সময় ক্যান্সেল</h3>
            <p className="text-gray-600 text-sm">কোনো প্রশ্ন নেই, যেকোনো সময় বাতিল করুন</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">সচরাচর জিজ্ঞাসা</h2>
          <div className="space-y-6">
            {[
              {
                question: "সাবস্ক্রিপশন ক্যান্সেল করলে কি আমার এক্সেস চলে যাবে?",
                answer: "না, আপনি যে মাসের জন্য পেমেন্ট করেছেন, সেই মাসের শেষ পর্যন্ত আপনার এক্সেস থাকবে।"
              },
              {
                question: "কি ধরনের বই পাওয়া যাবে?",
                answer: "সব ধরনের বই - উপন্যাস, কবিতা, বিজ্ঞান, ইতিহাস, স্ব-উন্নয়ন এবং আরো অনেক কিছু।"
              },
              {
                question: "অফলাইন পড়তে পারবো?",
                answer: "হ্যাঁ, আপনি বই ডাউনলোড করে অফলাইন পড়তে পারবেন।"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500">
              © ২০২৪ বইপড়া. সকল স্বত্ব সংরক্ষিত।
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}