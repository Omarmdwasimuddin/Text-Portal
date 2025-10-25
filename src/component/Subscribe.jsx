'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function SubscribeNotice() {
  const router = useRouter();

  const goToSubscribe = () => {
    router.push("/subscription");
  };

  return (
    <div className="min-h-[300px] flex flex-col justify-center items-center bg-yellow-50 border border-yellow-300 rounded-lg p-8 shadow-lg">
      <div className="text-2xl font-bold text-yellow-700 mb-4">
        🔒 এই বইটি পড়তে হলে সাবস্ক্রিপশন নিতে হবে!
      </div>
      <div className="text-md text-gray-700 mb-6">
        Soft copy book পড়ার জন্য সাবস্ক্রাইব করুন এবং একচেটিয়া কনটেন্ট আনলক করুন।
      </div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition"
        onClick={goToSubscribe}
      >
        সাবস্ক্রাইব করুন
      </button>
    </div>
  );
}