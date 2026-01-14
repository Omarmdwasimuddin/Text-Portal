import React from "react";
import { 
  FaFileInvoiceDollar, 
  FaShippingFast, 
  FaMoneyBillWave, 
  FaBuilding, 
  FaFileAlt, 
  FaGlobeAmericas,
  FaBullseye,
  FaGraduationCap,
  FaCheck,
  FaStar,
  FaPhone,
  FaCalendarAlt,
  FaArrowRight,
  FaAward,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaHandshake,
  FaHeadset
} from "react-icons/fa";
import { 
  GiReceiveMoney, 
  GiTrade 
} from "react-icons/gi";
import { 
  MdSupportAgent,
  MdWorkspacePremium,
  MdOutlinePayment,
  MdBusinessCenter
} from "react-icons/md";

const services = [
  {
    icon: <FaFileInvoiceDollar className="text-2xl" />,
    title: "ভ্যাট (VAT) সংক্রান্ত সেবাসমূহ",
    details: [
      "নতুন ভ্যাট রেজিস্ট্রেশন ও পুরাতন ভ্যাট রেজিস্ট্রেশন হালনাগাদকরণ বা পুনঃরেজিস্ট্রেশন",
      "মাসিক/ত্রৈমাসিক ভ্যাট দাখিলপত্র",
      "উপকরণ উৎপাদ সহগ ঘোষণা (মূসক-৪.৩)",
      "হিসাব সংরক্ষণ, কর চালানপত্র ইস্যু",
      "ভ্যাট অডিট প্রস্তুতি ও সমাধান",
      "রিফান্ড প্রসেসিং ও ভ্যাট কমপ্লায়েন্স নির্দেশনা",
      "মামলা, আপীল, রীট ইত্যাদি।",
    ],
    tagline: "“ঝামেলাহীন ভ্যাট ম্যানেজমেন্টের নাম — Tax & Trade Solution (TTS)।”",
    gradient: "from-green-700 to-green-700",
  },
  {
    icon: <FaShippingFast className="text-2xl" />,
    title: "কাস্টমস (Customs) সাপোর্ট",
    details: [
      "আমদানি ও রপ্তানি সংক্রান্ত পরামর্শ",
      "কাস্টমস ক্লিয়ারেন্স ব্যবস্থা",
      "এইচ এস কোড নির্ণয়",
      "শুল্ক হিসাব ও মূসক সহায়তা",
      "মামলা পরিচালনা, আপীল, রীট ইত্যাদি",
      "কাস্টমস অডিট ও আইনগত সমাধান",
    ],
    tagline: "“আমদানি-রপ্তানির পথে আর কোনো বাধা নয়!”",
    gradient: "from-green-700 to-green-700",
  },
  {
    icon: <FaMoneyBillWave className="text-2xl" />,
    title: "আয়কর (Income Tax) সেবা",
    details: [
      "ব্যক্তি ও প্রতিষ্ঠানের বার্ষিক আয়কর রিটার্ন দাখিল",
      "TIN রেজিস্ট্রেশন ও হালনাগাদ",
      "ট্যাক্স প্ল্যানিং/পরিকল্পনা ও সঞ্চয়ী সমাধান",
      "ট্যাক্স অডিট সাপোর্ট ও আপিল",
    ],
    tagline: "“কম ট্যাক্স, বেশি সেভিংস — সঠিক পরিকল্পনায়।”",
    gradient: "from-green-700 to-green-700",
  },
  {
    icon: <FaBuilding className="text-2xl" />,
    title: "আরজেএসসি (RJSC) সম্পর্কিত সেবা",
    details: [
      "নতুন কোম্পানি রেজিস্ট্রেশন (Private Ltd/Public Ltd)",
      "MOA/AOA প্রস্তুতি ও সংশোধন",
      "বার্ষিক রিটার্ন দাখিল",
      "পরিচালক/শেয়ারহোল্ডার পরিবর্তন বা হালনাগাদ",
    ],
    tagline: "“কোম্পানি গঠন থেকে পরিবর্তন — সবকিছু একসাথে।”",
    gradient: "from-green-700 to-green-700",
  },
  {
    icon: <FaFileAlt className="text-2xl" />,
    title: "ট্রেড লাইসেন্স ও ব্যবসায়িক নিবন্ধন",
    details: [
      "ট্রেড লাইসেন্স আবেদন ও নবায়ন",
      "ব্যবসা শনাক্তকরণ নম্বর (BIN) সংগ্রহ",
      "ফায়ার, পরিবেশ ও অন্যান্য লাইসেন্স সংক্রান্ত সহায়তা",
    ],
    tagline: "“আইনানুগভাবে ব্যবসা শুরু করুন — আমরা আছি পাশে।”",
    gradient: "from-green-700 to-green-700",
  },
  {
    icon: <FaGlobeAmericas className="text-2xl" />,
    title: "IRC & ERC সেবা",
    details: [
      "আমদানি নিবন্ধন সনদ (IRC) সংগ্রহ ও নবায়ন",
      "রপ্তানি নিবন্ধন সনদ (ERC) সংগ্রহ ও নবায়ন",
      "সরকারি নীতিমালা অনুযায়ী ডকুমেন্টেশন সাপোর্ট",
    ],
    tagline: "“আন্তর্জাতিক ব্যবসার দরজা খোলার প্রথম পদক্ষেপ।”",
    gradient: "from-green-700 to-green-700",
  },
  {
    icon: <FaBullseye className="text-2xl" />,
    title: "অতিরিক্ত ব্যবসায়িক পরামর্শ",
    details: [
      "আইনগত ও কর্পোরেট পরামর্শ",
      "ব্যবসায়িক কাঠামো পরিকল্পনা",
      "ই-ফাইলিং (e-TIN, e-VAT, e-Return) সহ ডিজিটাল সলুশন",
      "কর ও ট্রেড আইন সম্পর্কিত ওয়ার্কশপ/ট্রেনিং",
    ],
    tagline: "“ব্যবসার প্রতিটি ধাপে আমরা আপনার বিশ্বস্ত সহযাত্রী।”",
    gradient: "from-green-700 to-green-700",
  },
];

const trainings = [
  "মূসক পরামর্শক লাইসেন্সিং পরীক্ষা বিষয়ক প্রশিক্ষণ",
  "মূসক এজেন্ট লাইসেন্সিং পরীক্ষার প্রশিক্ষণ",
  "ভ্যাট বিষয়ক হাতে কলমে প্রশিক্ষণ",
  "কাস্টমস বিষয়ক প্রশিক্ষণ",
  "আমদানি-রপ্তানি বিষয়ক প্রশিক্ষণ",
  "এইচ এস কোড বিষয়ক প্রশিক্ষণ",
  "আইটিপি বিষয়ক পরীক্ষার সংক্রান্ত প্রশিক্ষণ",
  "আয়কর বিষয়ক প্রশিক্ষণ",
  "ই-রিটার্ন বিষয়ক প্রশিক্ষণ",
  "আরজেএসসি বিষয়ক প্রশিক্ষণ",
];

const whyChooseUs = [
  {
    icon: <FaAward className="text-2xl" />,
    title: "অভিজ্ঞ ও লাইসেন্সপ্রাপ্ত কনসালটেন্ট টিম",
    description: "বিষয়ভিত্তিক অভিজ্ঞতা সম্পন্ন প্রফেশনাল টিম"
  },
  {
    icon: <FaClock className="text-2xl" />,
    title: "সময়মতো সেবা প্রদানে অঙ্গীকারবদ্ধ",
    description: "নির্দিষ্ট সময়সীমার মধ্যে কাজ সম্পন্নের গ্যারান্টি"
  },
  {
    icon: <MdBusinessCenter className="text-2xl" />,
    title: "ব্যবসার ধরন অনুযায়ী কাস্টমাইজড সলুশন",
    description: "আপনার ব্যবসার প্রয়োজন অনুসারে পার্সোনালাইজড সেবা"
  },
  {
    icon: <MdOutlinePayment className="text-2xl" />,
    title: "স্বচ্ছ ফি ও নির্ভরযোগ্য সাপোর্ট",
    description: "কোনো হিডেন ফি নেই, সম্পূর্ণ স্বচ্ছ মূল্য কাঠামো"
  },
  {
    icon: <FaShieldAlt className="text-2xl" />,
    title: "নো হিডেন ফি",
    description: "শুরুতে যা বলা হবে, শেষ পর্যন্ত তাই"
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "ব্যবসায়ের সকল সেবা একই প্লাটফর্মে",
    description: "একই জায়গায় সব ধরনের ব্যবসায়িক সেবা"
  }
];

export default function OurServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" id="our-services">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full shadow-lg bg-gradient-to-r from-green-300 to-green-300">
            <MdWorkspacePremium className="mr-2 text-black" />
            <span className="text-xl font-bold tracking-wider text-black uppercase">আমাদের সেবাসমূহ</span>
          </div>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl">
            আপনার ব্যবসার জন্য <span className="text-blue-600">সম্পূর্ণ সমাধান</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm leading-relaxed text-gray-600">
            ব্যবসায়িক সাফল্যের জন্য প্রয়োজন সঠিক পরিকল্পনা ও আইনি কমপ্লায়েন্স। 
            আমরা আপনাকে দিচ্ছি সম্পূর্ণ গাইডেন্স — শুরু থেকে শেষ পর্যন্ত।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 mb-20 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden transition-all duration-500 transform bg-white border border-gray-100 shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-3"
            >
              {/* Icon with Gradient Background */}
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 translate-x-10 -translate-y-10 rounded-full bg-white/10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 -translate-x-8 translate-y-8 rounded-full bg-white/10"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="p-3 mr-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow p-6">
                <ul className="mb-6 space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start group/item">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5 mr-3 group-hover/item:scale-110 transition-transform duration-300">
                        <FaCheck className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 transition-colors duration-300 group-hover/item:text-gray-900">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Tagline */}
                <div className="pt-4 mt-auto border-t border-gray-100">
                  <p className="flex items-center text-sm italic font-medium text-gray-600">
                    <GiTrade className="mr-2 text-blue-500" />
                    {service.tagline}
                  </p>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="px-6 pb-4">
                <button className="w-full group/btn py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 text-gray-800 hover:text-blue-700 font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-[1.02] shadow-sm border border-gray-200 hover:border-blue-200 flex items-center justify-center">
                  বিস্তারিত জানুন
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-xl font-extrabold text-gray-900 md:text-2xl">
              কেন আমাদের <span className="text-green-600">বেছে নেবেন?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              শতাধিক সন্তুষ্ট ক্লায়েন্টের বিশ্বাসের কারণ
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-2xl group rounded-xl hover:shadow-xl hover:border-green-200 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 mr-4 text-white transition-transform duration-300 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner */}
        <div className="p-8 mb-16 text-center text-white shadow-2xl bg-gradient-to-r from-green-600 via-green-600 to-green-600 rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <FaHeadset className="mr-3 text-3xl text-yellow-300" />
              <h3 className="text-xl font-bold md:text-xl">
                আজই যোগাযোগ করুন — <span className="text-yellow-300">Tax & Trade Solution (TTS)</span>
              </h3>
            </div>
            
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              <div className="flex items-center justify-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <FaPhone className="mr-3 text-md text-green-950" />
                <div className="text-left">
                  <p className="text-sm text-blue-100">মোবাইল নম্বর:</p>
                  <p className="text-md">+880 1878-594002</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <MdSupportAgent className="mr-3 text-xl text-green-950" />
                <div className="text-left">
                  <p className="text-sm text-blue-100">ইমেইল:</p>
                  <p className="text-md">info@tts.com</p>
                </div>
              </div>
            </div>

            <div className="p-4 mt-6 border rounded-lg bg-white/5 border-white/10">
              <p className="text-lg italic font-medium">
                <FaHandshake className="inline mr-2 text-yellow-300" />
                "আপনার ব্যবসার আইনি মজবুত ভিত্তি গড়তে আমরা আছি পাশে।"
              </p>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <div className="relative p-8 overflow-hidden text-white shadow-xl bg-gradient-to-r from-green-600 to-green-600 rounded-2xl md:p-12">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 translate-x-16 -translate-y-16 rounded-full bg-white/5"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 -translate-x-12 translate-y-12 rounded-full bg-white/5"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <FaGraduationCap className="mr-3 text-4xl text-yellow-300" />
                <h3 className="text-3xl font-bold">আমাদের পরিচালিত প্রশিক্ষণ</h3>
              </div>
              <p className="text-lg text-grey-500">
                বিশেষজ্ঞদের দ্বারা পরিচালিত হাতে-কলমে প্রশিক্ষণ, যা আপনার ক্যারিয়ারকে করবে আরও সমৃদ্ধ
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {trainings.map((item, idx) => (
                <div key={idx} className="flex items-center p-4 transition-all duration-300 border rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 group/training border-white/20 hover:border-white/30">
                  <div className="p-2 mr-4 transition-transform duration-300 rounded-lg bg-yellow-400/20 group-hover/training:scale-110">
                    <FaStar className="w-4 h-4 text-yellow-300" />
                  </div>
                  <span className="font-medium transition-colors duration-300 group-hover/training:text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="flex items-center justify-center px-8 py-3 mx-auto font-bold transition-all duration-300 transform bg-white rounded-lg shadow-lg text-yellow-950 hover:bg-gray-100 hover:scale-105 group/reg">
                প্রশিক্ষণে রেজিস্ট্রেশন করুন
                <FaGraduationCap className="ml-2 transition-transform duration-300 group-hover/reg:scale-110" />
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}