"use client"

import { useEffect, useState } from "react"
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Globe, Scale, FileText, Shield, Send, Download, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const [isInstallable, setIsInstallable] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const currentYear = new Date().getFullYear()
  const lastConsolidatedAt = "21 October 2025"
  const buildVersion = "v1.0.3"

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
    }
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setIsInstallable(false)
      }
      setDeferredPrompt(null)
    }
  }

  const SectionTitle = ({ children }) => (
    <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-blue-500 pl-2">{children}</h4>
  )

  const FooterLink = ({ href, children }) => (
    <li className="mb-2">
      <Link href={href} className="text-neutral-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center gap-1 group">
        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
        {children}
      </Link>
    </li>
  )

  const ContactItem = ({ icon: Icon, text }) => (
    <li className="flex items-center gap-3 text-neutral-300 text-sm mb-3 group hover:text-white transition-colors">
      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
        <Icon className="w-4 h-4 text-blue-400" />
      </div>
      <span>{text}</span>
    </li>
  )

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-white py-12 border-t border-white/10">
      {/* Notice Section */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4 flex items-start gap-3">
          <BookOpen className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h5 className="text-white font-semibold text-sm mb-1">ডিজিটাল বই পড়ার সুবিধা</h5>
            <p className="text-neutral-200 text-xs leading-relaxed">
              অনলাইনে সফট কপি বই পড়ুন এবং ইয়ারলি সাবস্ক্রিপশন নিন। সকল আইন, বিধি ও SRO একই প্ল্যাটফর্মে, 
              সর্বশেষ সংশোধনীসহ। আপনার ডিভাইসে ইন্সটল করে অফলাইনেও অ্যাক্সেস করুন।
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* --- Column 1: Brand & About --- */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">Tax & Trade Solution</h3>
              <p className="text-blue-300 text-xs">বাংলাদেশের ট্যাক্স ও ট্রেড প্ল্যাটফর্ম</p>
            </div>
          </div>
          <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
            বাংলাদেশের ট্যাক্স, ভ্যাট ও কাস্টমস আইনের একক ডিজিটাল প্ল্যাটফর্ম। 
            সকল আইন, বিধি ও SRO একত্রে, সহজ ভাষায় ও নির্ভুলভাবে উপস্থাপন।
          </p>
          <div className="flex items-center gap-3">
            <Link 
              href="https://facebook.com" 
              target="_blank"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5 text-white" />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5 text-white" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>

        {/* --- Column 2: Key Acts --- */}
        <div>
          <SectionTitle>
            <Scale className="inline w-4 h-4 mr-2" />
            মূল আইনসমূহ
          </SectionTitle>
          <ul className="space-y-1">
            <FooterLink href="/laws/law1991">মূল্য সংযোজন কর আইন, ১৯৯১</FooterLink>
            <FooterLink href="/laws/law2012">মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২</FooterLink>
            <FooterLink href="/income-tax/act/2023">আয়কর আইন, ২০২৩</FooterLink>
            <FooterLink href="/rules">নিয়মাবলি ও প্রবিধান</FooterLink>
            <FooterLink href="/sro">SRO ও বিজ্ঞপ্তি</FooterLink>
          </ul>
        </div>

        {/* --- Column 3: Legal & Support --- */}
        <div>
          <SectionTitle>
            <Shield className="inline w-4 h-4 mr-2" />
            আইনি ও সহায়তা
          </SectionTitle>
          <ul className="space-y-1">
            <FooterLink href="/disclaimer">ডিসক্লেইমার</FooterLink>
            <FooterLink href="/privacy-policy">গোপনীয়তা নীতি</FooterLink>
            <FooterLink href="/terms-of-use">ব্যবহারের শর্তাবলী</FooterLink>
            <FooterLink href="/citation-guidelines">সাইটেশন গাইডলাইন</FooterLink>
            <FooterLink href="/feedback">ফিডব্যাক / এডিট সাজেস্ট</FooterLink>
          </ul>
        </div>

        {/* --- Column 4: Contact & App --- */}
        <div>
          <SectionTitle>
            <FileText className="inline w-4 h-4 mr-2" />
            যোগাযোগ
          </SectionTitle>
          <ul className="mb-6">
            <ContactItem icon={MapPin} text="ঢাকা, বাংলাদেশ" />
            <ContactItem icon={Phone} text="+৮৮০ ১৭৮৯-০০০০০০" />
            <ContactItem icon={Mail} text="support@tts.gov.bd" />
            <ContactItem icon={Globe} text="www.tts.gov.bd" />
          </ul>
          
          {isInstallable && (
            <button
              onClick={handleInstallClick}
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Download className="w-4 h-4" /> 
              অ্যাপ ইন্সটল করুন
            </button>
          )}
          
          <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-neutral-300 text-center">
              মোবাইল অ্যাপে সকল সুবিধা উপভোগ করুন
            </p>
          </div>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="text-neutral-400 text-xs">
            <p className="mb-1">© {currentYear} Tax & Trade Solution (TTS) — সকল স্বত্ব সংরক্ষিত</p>
            <p>অনানুষ্ঠানিক কনসোলিডেশন; সরকারি গেজেট থেকে অফিসিয়াল টেক্সট পাওয়া যাবে</p>
          </div>
          
          <div className="text-neutral-500 text-xs">
            <p>কনসোলিডেশন তারিখ: {lastConsolidatedAt}</p>
            <p>বিল্ড ভার্সন: {buildVersion}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}