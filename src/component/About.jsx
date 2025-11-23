'use client';

import { FaBalanceScale, FaBook, FaBullseye, FaCheckCircle } from 'react-icons/fa';

const AboutPlatform = () => {
  const sections = [
    {
      title: "About the Platform",
      icon: <FaBook className="text-2xl" />,
      content: (
        <>
          আমাদের প্ল্যাটফর্মটি ভ্যাট, কাস্টমস, আয়করসহ সংশ্লিষ্ট আইন, বিধি,
          এসআরও, আদেশ, তফসিল ও ব্যাখাপত্রের একটি পূর্ণাঙ্গ ও আপডেটযোগ্য
          ডিজিটাল আর্কাইভ। এখানে পাবেন{" "}
          <span className="font-semibold text-cyan-700">Current Consolidated Text</span> এবং{" "}
          <span className="font-semibold text-cyan-700">Point-in-Time View</span>—যে কোনো
          তারিখে কার্যকর আইন-বিধির অবস্থা এক ক্লিকে দেখতে পারবেন।  
          এর সাথে আছে সার্চ, ক্রস-রেফারেন্স, ব্লগ, ক্যালকুলেটর ও কনসালটেন্সি সেবা।
        </>
      ),
    },
    {
      title: "Mission & Vision",
      icon: <FaBullseye className="text-2xl" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-cyan-600 mr-2 mt-1">•</span>
            <span><span className="font-semibold text-gray-800">One-stop knowledge hub</span> তৈরি করা
            যেখানে ভ্যাট, ট্যাক্স, কাস্টমস ও অন্যান্য ফিসক্যাল আইন সহজে পাওয়া যাবে।</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-2 mt-1">•</span>
            <span>প্র্যাকটিশনার, কর্মকর্তা, শিক্ষার্থী, গবেষক ও করদাতাদের জন্য{" "}
            <span className="font-semibold text-gray-800">digital-first platform</span>।</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-2 mt-1">•</span>
            <span>আইন-বিধির{" "}
            <span className="font-semibold text-gray-800">সঠিক ও আপডেটেড ভার্সন</span> প্রদান।</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-2 mt-1">•</span>
            <span>একটি{" "}
            <span className="font-semibold text-gray-800">community-driven legal-tech ecosystem</span>{" "}
            গড়ে তোলা।</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Why Trust This Site",
      icon: <FaCheckCircle className="text-2xl" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-cyan-600 mr-2 mt-1">•</span>
            <span><span className="font-semibold text-gray-800">Citation-first approach:</span> অফিসিয়াল
            সূত্র, গেজেট নম্বর, প্রকাশনার তারিখ সবসময় স্পষ্ট থাকে।</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-2 mt-1">•</span>
            <span><span className="font-semibold text-gray-800">Consolidation method:</span> সব amendments
            মেপ করে consolidated text ও point-in-time view তৈরি হয়।</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-2 mt-1">•</span>
            <span><span className="font-semibold text-gray-800">Quality Control:</span> OCR +
            manual peer review এর মাধ্যমে যাচাই করা হয়।</span>
          </li>
          <li className="flex items-start">
            <span className="text-cyan-600 mr-2 mt-1">•</span>
            <span><span className="font-semibold text-gray-800">Transparency:</span> প্রতিটি ডকুমেন্টে
            change history ও সূত্রের লিংক থাকে।</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About the Platform
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            একটি নির্ভরযোগ্য, হালনাগাদ ও ব্যবহারবান্ধব ডিজিটাল লিগ্যাল নলেজ হাব
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-left border border-cyan-600 hover:border-cyan-800 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-50 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-300"></div>
              
              {/* Icon */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  {section.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  {section.title}
                </h3>
                
                {/* Content */}
                <div className="text-gray-700 leading-relaxed text-base">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;