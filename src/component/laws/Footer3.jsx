"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden text-gray-300 bg-green-950">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-green-900 opacity-40 blur-2xl"></div>

      <div className="container relative z-10 grid grid-cols-1 gap-10 px-6 py-12 mx-auto max-w-7xl md:grid-cols-3">
        
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-white">About</h3>
          <p className="text-sm leading-relaxed text-justify transition-all duration-300 opacity-80 hover:opacity-100">
            বাংলাদেশের কাস্টমস আইন, ১৯৬৯ আমদানি-রপ্তানি প্রক্রিয়ার মূল ভিত্তি হিসেবে কাজ করে। 
            এই আইনে পণ্য আমদানি ও রপ্তানির শুল্ক নির্ধারণ, শুল্ক পরিশোধ পদ্ধতি, বাণিজ্য নিয়ন্ত্রণ, 
            নিষিদ্ধ পণ্যের তালিকা এবং শুল্ক ফাঁকি প্রতিরোধের বিধানাবলী বিস্তারিতভাবে উল্লেখ করা হয়েছে। 
            আমদানিকারক, রপ্তানিকারক এবং সংশ্লিষ্ট স্টেকহোল্ডারদের জন্য এই আইন শুল্ক আদায় ও বাণিজ্যিক কার্যক্রম পরিচালনায় গুরুত্বপূর্ণ দিকনির্দেশনা প্রদান করে।
          </p>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-white">Related Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://bangladesh.gov.bd" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block transition duration-300 hover:text-white group">
                বাংলাদেশ Government Official Web Site
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://legislativediv.gov.bd/" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block transition duration-300 hover:text-white group">
                Legislative and Parliamentary Affairs Division
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://www.parliament.gov.bd/" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block transition duration-300 hover:text-white group">
                Parliament Secretariat
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://lawcommissionbangladesh.org" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block transition duration-300 hover:text-white group">
                Law Commission
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://nhrc.org.bd" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block transition duration-300 hover:text-white group">
                National Human Rights Commission
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="mb-4 text-xl font-semibold text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
              <FaMapMarkerAlt className="text-green-400" /> Segunbagicha, Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
              <FaPhoneAlt className="text-green-400" /> +880 1760-409505
            </li>
            <li className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
              <FaEnvelope className="text-green-400" /> abu_sufian@vat-sd.gov.bd
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 py-4 mt-8 text-sm text-center text-gray-400 border-t border-green-800"
      >
        © {new Date().getFullYear()} কাস্টমস আইন, ১৯৬৯ (সংশোধিত) - সকল অধিকার সংরক্ষিত
      </motion.div>
    </footer>
  );
}