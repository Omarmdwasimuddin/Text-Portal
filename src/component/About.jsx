'use client';

const AboutPlatform = () => {
  const sections = [
    {
      title: "About the Platform",
      content: (
        <>
          আমাদের প্ল্যাটফর্মটি ভ্যাট, কাস্টমস, আয়করসহ সংশ্লিষ্ট আইন, বিধি,
          এসআরও, আদেশ, তফসিল ও ব্যাখাপত্রের একটি পূর্ণাঙ্গ ও আপডেটযোগ্য
          ডিজিটাল আর্কাইভ। এখানে পাবেন{" "}
          <span className="font-semibold">Current Consolidated Text</span> এবং{" "}
          <span className="font-semibold">Point-in-Time View</span>—যে কোনো
          তারিখে কার্যকর আইন-বিধির অবস্থা এক ক্লিকে দেখতে পারবেন।  
          এর সাথে আছে সার্চ, ক্রস-রেফারেন্স, ব্লগ, ক্যালকুলেটর ও কনসালটেন্সি সেবা।
        </>
      ),
    },
    {
      title: "Mission & Vision",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">One-stop knowledge hub</span> তৈরি করা
            যেখানে ভ্যাট, ট্যাক্স, কাস্টমস ও অন্যান্য ফিসক্যাল আইন সহজে পাওয়া যাবে।
          </li>
          <li>
            প্র্যাকটিশনার, কর্মকর্তা, শিক্ষার্থী, গবেষক ও করদাতাদের জন্য{" "}
            <span className="font-semibold">digital-first platform</span>।
          </li>
          <li>
            আইন-বিধির{" "}
            <span className="font-semibold">সঠিক ও আপডেটেড ভার্সন</span> প্রদান।
          </li>
          <li>
            একটি{" "}
            <span className="font-semibold">community-driven legal-tech ecosystem</span>{" "}
            গড়ে তোলা।
          </li>
        </ul>
      ),
    },
    {
      title: "Why Trust This Site",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Citation-first approach:</span> অফিসিয়াল
            সূত্র, গেজেট নম্বর, প্রকাশনার তারিখ সবসময় স্পষ্ট থাকে।
          </li>
          <li>
            <span className="font-semibold">Consolidation method:</span> সব amendments
            মেপ করে consolidated text ও point-in-time view তৈরি হয়।
          </li>
          <li>
            <span className="font-semibold">Quality Control:</span> OCR +
            manual peer review এর মাধ্যমে যাচাই করা হয়।
          </li>
          <li>
            <span className="font-semibold">Transparency:</span> প্রতিটি ডকুমেন্টে
            change history ও সূত্রের লিংক থাকে।
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-700">
          About the Platform
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          একটি নির্ভরযোগ্য, হালনাগাদ ও ব্যবহারবান্ধব ডিজিটাল লিগ্যাল নলেজ হাব
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-left"
          >
            <h3 className="text-2xl font-bold text-cyan-600 mb-4">
              {section.title}
            </h3>
            <div className="text-gray-700 text-base leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPlatform;
