"use client"

import { useEffect, useState } from "react"
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Globe, Scale, FileText, Shield, Send } from "lucide-react"
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
    <h4 className="text-white font-semibold text-lg mb-3">{children}</h4>
  )

  const FooterLink = ({ href, children }) => (
    <li>
      <Link href={href} className="text-neutral-300 hover:text-blue-400 transition text-sm">
        {children}
      </Link>
    </li>
  )

  const ContactItem = ({ icon: Icon, text }) => (
    <li className="flex items-center gap-2 text-neutral-300 text-sm">
      <Icon className="w-4 h-4 text-blue-400" />
      <span>{text}</span>
    </li>
  )

  return (
    <footer className="bg-green-950 text-white dark:from-green-800 dark:via-green-700 dark:to-red-800 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* --- Column 1: About --- */}
        <div>
          <SectionTitle>Tax & Trade Solution</SectionTitle>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
            বাংলাদেশের ট্যাক্স, ভ্যাট ও কাস্টমস আইনের একক ডিজিটাল প্ল্যাটফর্ম। 
            সকল আইন, বিধি ও SRO একত্রে, সহজ ভাষায় ও নির্ভুলভাবে উপস্থাপন।
          </p>
          <ul className="flex items-center gap-4">
            <li><Link href="https://facebook.com" target="_blank"><Facebook className="w-4 h-4 text-blue-400 hover:text-blue-500" /></Link></li>
            <li><Link href="https://twitter.com" target="_blank"><Twitter className="w-4 h-4 text-blue-400 hover:text-blue-500" /></Link></li>
            <li><Link href="https://linkedin.com" target="_blank"><Linkedin className="w-4 h-4 text-blue-400 hover:text-blue-500" /></Link></li>
          </ul>
        </div>

        {/* --- Column 2: Key Acts --- */}
        <div>
          <SectionTitle><Scale className="inline w-4 h-4 mr-1 text-blue-400" />মূল আইনসমূহ</SectionTitle>
          <ul className="space-y-2">
            <FooterLink href="/vat/act/2012">ভ্যাট ও সম্পূরক শুল্ক আইন, ২০১২</FooterLink>
            <FooterLink href="/customs/act/2023">কাস্টমস আইন, ২০২৩</FooterLink>
            <FooterLink href="/income-tax/act/2023">আয়কর আইন, ২০২৩</FooterLink>
            <FooterLink href="/rules">নিয়মাবলি ও প্রবিধান</FooterLink>
            <FooterLink href="/sro">SRO ও বিজ্ঞপ্তি</FooterLink>
          </ul>
        </div>

        {/* --- Column 3: Legal & Contribution --- */}
        <div>
          <SectionTitle><Shield className="inline w-4 h-4 mr-1 text-blue-400" />আইনি ও অবদান</SectionTitle>
          <ul className="space-y-2">
            <FooterLink href="/disclaimer">Disclaimer</FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/terms-of-use">Terms of Use</FooterLink>
            <FooterLink href="/citation-guidelines">Citation Guidelines</FooterLink>
            <FooterLink href="/feedback">Feedback / Suggest Edit</FooterLink>
          </ul>
        </div>

        {/* --- Column 4: Contact --- */}
        <div>
          <SectionTitle><FileText className="inline w-4 h-4 mr-1 text-blue-400" />যোগাযোগ</SectionTitle>
          <ul className="space-y-2">
            <ContactItem icon={MapPin} text="ঢাকা, বাংলাদেশ" />
            <ContactItem icon={Phone} text="+880 1789-000000" />
            <ContactItem icon={Mail} text="support@tts.gov.bd" />
            <ContactItem icon={Globe} text="www.tts.gov.bd" />
          </ul>
          {isInstallable && (
            <button
              onClick={handleInstallClick}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm flex items-center gap-2 hover:bg-blue-600 transition"
            >
              <Send className="w-4 h-4" /> Install App
            </button>
          )}
        </div>
      </div>

      {/* --- Footer bottom --- */}
      <div className="mt-10 border-t border-white/10 pt-5 text-center text-neutral-400 text-xs">
        <p>Unofficial consolidation; official text available from Government Gazette.</p>
        <p className="mt-1">
          Consolidated as of: {lastConsolidatedAt} | Build: {buildVersion}
        </p>
        <p className="mt-1">© {currentYear} Tax & Trade Solution (TTS) — All rights reserved.</p>
      </div>
    </footer>
  )
}