'use client'
import React from 'react';

const ConsultancyForm = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f2027] via-[#2c5364] to-[#203a43] text-white py-12 px-6 md:px-12 rounded-lg max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Side */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Get Your Free <br />
          <span className="text-cyan-400">Consultation Today!</span>
        </h1>
        <p className="text-base mt-4 text-gray-300">
          Take the first step towards success. Schedule your free consultation today!
        </p>

        {/* Student Avatars */}
        <div className="flex items-center mt-8 text-sm">
          <div className="flex -space-x-2 mr-3">
            <img src="/Consultancy/ismalimg.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-gray-900" />
            <img src="/Consultancy/prantoimg.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-gray-900" />
            <img src="/Consultancy/Wasim-removebg.png" alt="User 3" className="w-10 h-10 rounded-full border-2 border-gray-900" />
          </div>
          <p className="text-gray-300">1500+ students got consultation</p>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="bg-[#1a2d2f] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-gray-200">Book the call</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-200">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Schedule Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultancyForm;
