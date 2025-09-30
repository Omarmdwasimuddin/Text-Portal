'use client'
import React, { useState } from 'react';

const ConsultancyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#0f2027] via-[#2c5364] to-[#203a43] text-white py-12 px-6 md:px-12 rounded-lg max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
      {/* Left Content Section */}
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
            আজই নিন আপনার ফ্রি <br />
            <span className="text-cyan-400">কনসালটেশন সেবা!</span>
          </h1>
          <p className="text-sm sm:text-base mt-4 text-gray-300">
            সাফল্যের পথে প্রথম পদক্ষেপ নিন। এখনই আপনার ফ্রি কনসালটেশন বুক করুন।
          </p>
        </header>

        {/* Student Avatars Section */}
        <div className="flex items-center">
          <div className="flex -space-x-2 mr-3">
            <img 
              src="/Consultancy/ismalimg.jpg" 
              alt="Student 1" 
              className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" 
            />
            <img 
              src="/Consultancy/prantoimg.jpg" 
              alt="Student 2" 
              className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" 
            />
            <img 
              src="/Consultancy/Wasim-removebg.png" 
              alt="Student 3" 
              className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" 
            />
          </div>
          <p className="text-sm text-gray-300">1500+ students got consultation</p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="bg-[#1a2d2f] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-gray-200">Book the call</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-200">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-200">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 transition-colors"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#1a2d2f]"
          >
            Schedule Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConsultancyForm;