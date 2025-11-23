"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300 mt-12 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-green-900 opacity-40 blur-2xl"></div>

      <div className="relative container mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">About</h3>
          <p className="text-sm leading-relaxed opacity-80 hover:opacity-100 transition-all duration-300">
            মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২ সম্পর্কিত তথ্য এখানে সহজভাবে উপস্থাপন করা হয়েছে। 
            করদাতা ও ব্যবহারকারীদের জন্য এটি একটি সহায়ক প্ল্যাটফর্ম।
          </p>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Related Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://bangladesh.gov.bd" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block hover:text-white transition duration-300 group">
                বাংলাদেশ Government Official Web Site
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://legislativediv.gov.bd/" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block hover:text-white transition duration-300 group">
                Legislative and Parliamentary Affairs Division
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://www.parliament.gov.bd/" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block hover:text-white transition duration-300 group">
                Parliament Secretariat
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://lawcommissionbangladesh.org" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block hover:text-white transition duration-300 group">
                Law Commission
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="https://nhrc.org.bd" target="_blank" rel="noopener noreferrer"
                 className="relative inline-block hover:text-white transition duration-300 group">
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
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
              <FaMapMarkerAlt className="text-green-400" /> Segunbagicha, Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
              <FaPhoneAlt className="text-green-400" /> +880 1760-409505
            </li>
            <li className="flex items-center gap-2 hover:text-white transition-colors duration-300">
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
        className="relative border-t border-green-800 mt-8 py-4 text-center text-sm text-gray-400 z-10"
      >
        © {new Date().getFullYear()} মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২ - সকল অধিকার সংরক্ষিত
      </motion.div>
    </footer>
  );
}
