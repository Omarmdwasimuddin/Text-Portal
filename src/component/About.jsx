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
            <span className="mt-1 mr-2 text-cyan-600">•</span>
            <span><span className="font-semibold text-gray-800">One-stop knowledge hub</span> তৈরি করা
            যেখানে ভ্যাট, ট্যাক্স, কাস্টমস ও অন্যান্য ফিসক্যাল আইন সহজে পাওয়া যাবে।</span>
          </li>
          <li className="flex items-start">
            <span className="mt-1 mr-2 text-cyan-600">•</span>
            <span>প্র্যাকটিশনার, কর্মকর্তা, শিক্ষার্থী, গবেষক ও করদাতাদের জন্য{" "}
            <span className="font-semibold text-gray-800">digital-first platform</span>।</span>
          </li>
          <li className="flex items-start">
            <span className="mt-1 mr-2 text-cyan-600">•</span>
            <span>আইন-বিধির{" "}
            <span className="font-semibold text-gray-800">সঠিক ও আপডেটেড ভার্সন</span> প্রদান।</span>
          </li>
          <li className="flex items-start">
            <span className="mt-1 mr-2 text-cyan-600">•</span>
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
            <span className="mt-1 mr-2 text-cyan-600">•</span>
            <span><span className="font-semibold text-gray-800">Citation-first approach:</span> অফিসিয়াল
            সূত্র, গেজেট নম্বর, প্রকাশনার তারিখ সবসময় স্পষ্ট থাকে।</span>
          </li>
          <li className="flex items-start">
            <span className="mt-1 mr-2 text-cyan-600">•</span>
            <span><span className="font-semibold text-gray-800">Consolidation method:</span> সব amendments
            মেপ করে consolidated text ও point-in-time view তৈরি হয়।</span>
          </li>
          <li className="flex items-start">
            <span className="mt-1 mr-2 text-cyan-600">•</span>
            <span><span className="font-semibold text-gray-800">Quality Control:</span> OCR +
            manual peer review এর মাধ্যমে যাচাই করা হয়।</span>
          </li>
          <li className="flex items-start">
            <span className="mt-1 mr-2 text-cyan-600">•</span>
            <span><span className="font-semibold text-gray-800">Transparency:</span> প্রতিটি ডকুমেন্টে
            change history ও সূত্রের লিংক থাকে।</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="px-4 py-20 text-gray-900 bg-gradient-to-br from-gray-200 to-blue-200 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold text-gray-950 lg:text-3xl">
            About the Platform
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-cyan-600"></div>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
            একটি নির্ভরযোগ্য, হালনাগাদ ও ব্যবহারবান্ধব ডিজিটাল লিগ্যাল নলেজ হাব
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative p-8 overflow-hidden text-left transition-all duration-300 bg-white border shadow-2xl group rounded-2xl hover:shadow-2xl border-cyan-600 hover:border-cyan-800"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 transition-transform duration-300 translate-x-10 -translate-y-10 rounded-full bg-cyan-50 group-hover:scale-150"></div>
              
              {/* Icon */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6 text-white shadow-2xl w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                  {section.icon}
                </div>
                
                {/* Title */}
                <h3 className="mb-6 text-lg font-bold leading-tight text-gray-950">
                  {section.title}
                </h3>
                
                {/* Content */}
                <div className="text-sm leading-relaxed text-justify text-gray-700">
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