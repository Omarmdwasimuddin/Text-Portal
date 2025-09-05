"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  CreditCard,
  Download,
  BookOpen,
  Search,
  Scale,
  Newspaper,
  FileText,
  Lock,
  QrCode,
  Moon,
  Sun,
  BadgePercent,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function SiteFooter() {
  const pathname = usePathname();

  const [lastConsolidatedAt, setLastConsolidatedAt] = useState(
    new Intl.DateTimeFormat("bn-BD", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Dhaka",
    }).format(new Date())
  );

  const buildVersion = process.env.NEXT_PUBLIC_BUILD_VERSION || "v1.0.0";

  // PWA install
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setCanInstall(false);
  };

  const SectionTitle = ({ children }) => (
    <h3 className="text-sm font-semibold tracking-wider uppercase text-neutral-700 dark:text-neutral-300">
      {children}
    </h3>
  );

  const FooterLink = ({ href, children }) => (
    <Link
      href={href}
      className="text-sm text-neutral-700/90 hover:text-black dark:text-neutral-300/90 dark:hover:text-white transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <footer className="border-t bg-gradient-to-r from-green-600 via-green-500 to-red-600 text-white dark:from-green-800 dark:via-green-700 dark:to-red-800">
      {/* Top CTA strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BadgePercent className="size-5" />
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            বার্ষিক সাবস্ক্রিপশন নিন — সব সফটকপি বই অনলাইনে পড়ুন (ডাউনলোড সীমাবদ্ধ)।
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/subscription"
            className="rounded-2xl px-4 py-2 text-sm font-medium bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Subscribe / Renew
          </Link>
          <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
            <CreditCard className="size-4" />
            <span>Stripe · SSLCommerz</span>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* About */}
        <div className="col-span-2 sm:col-span-1 lg:col-span-2">
          <SectionTitle>About</SectionTitle>
          <p className="mt-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            ভ্যাট/কাস্টমস/আয়কর আইন—বিধি—এসআরও—আদেশ—ব্যাখাপত্র—তফসিল—সব এক প্ল্যাটফর্মে।
            <br />
            Unofficial consolidation; official text = Gazette.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/about" className="text-sm underline underline-offset-4">
              About Us
            </Link>
            <Link href="/team" className="text-sm underline underline-offset-4">
              Team
            </Link>
            <Link
              href="/consultancy"
              className="text-sm underline underline-offset-4"
            >
              Consultancy
            </Link>
          </div>
        </div>

        {/* Acts */}
        <div>
          <SectionTitle>Acts</SectionTitle>
          <ul className="mt-3 space-y-2">
            <li>
              <FooterLink href="/vat/act/2012">VAT & SD Act, 2012</FooterLink>
            </li>
            <li>
              <FooterLink href="/income-tax/act/2023">
                Income Tax Act, 2023
              </FooterLink>
            </li>
            <li>
              <FooterLink href="/customs/act/2023">Customs Act, 2023</FooterLink>
            </li>
            <li>
              <FooterLink href="/finance-act">Finance Acts</FooterLink>
            </li>
          </ul>
        </div>

        {/* Rules */}
        <div>
          <SectionTitle>Rules & Forms</SectionTitle>
          <ul className="mt-3 space-y-2">
            <li>
              <FooterLink href="/vat/rules/2016">VAT & SD Rules, 2016</FooterLink>
            </li>
            <li>
              <FooterLink href="/income-tax/rules">IT Rules & Forms</FooterLink>
            </li>
            <li>
              <FooterLink href="/customs/rules">Customs Rules</FooterLink>
            </li>
            <li>
              <FooterLink href="/forms">All Forms</FooterLink>
            </li>
          </ul>
        </div>

        {/* SRO */}
        <div>
          <SectionTitle>SRO / Orders</SectionTitle>
          <ul className="mt-3 space-y-2">
            <li>
              <FooterLink href="/sro">All SROs</FooterLink>
            </li>
            <li>
              <FooterLink href="/orders">General/Standing Orders</FooterLink>
            </li>
            <li>
              <FooterLink href="/advance-ruling">Advance Ruling</FooterLink>
            </li>
            <li>
              <FooterLink href="/policy">IPO | EPO | Policy</FooterLink>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <SectionTitle>Tools & Resources</SectionTitle>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <Search className="size-4" />
              <FooterLink href="/search">Advanced Search</FooterLink>
            </li>
            <li className="flex items-center gap-2">
              <Scale className="size-4" />
              <FooterLink href="/tools/vat-calculator">VAT Calculator</FooterLink>
            </li>
            <li className="flex items-center gap-2">
              <Scale className="size-4" />
              <FooterLink href="/tools/income-tax-calculator">
                Income Tax Calculator
              </FooterLink>
            </li>
            <li className="flex items-center gap-2">
              <Scale className="size-4" />
              <FooterLink href="/tools/customs-calculator">
                Customs Calculator
              </FooterLink>
            </li>
            <li className="flex items-center gap-2">
              <BookOpen className="size-4" />
              <FooterLink href="/consolidated">Consolidated View</FooterLink>
            </li>
            <li className="flex items-center gap-2">
              <FileText className="size-4" />
              <FooterLink href="/point-in-time">Point-in-Time</FooterLink>
            </li>
            <li className="flex items-center gap-2">
              <FileText className="size-4" />
              <FooterLink href="/compare">Compare Versions</FooterLink>
            </li>
            <li className="flex items-center gap-2">
              <Newspaper className="size-4" />
              <FooterLink href="/blog">Blog</FooterLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <SectionTitle>Support</SectionTitle>
          <ul className="mt-3 space-y-2">
            <li>
              <FooterLink href="/help">Help Center</FooterLink>
            </li>
            <li>
              <FooterLink href="/feedback?suggest=1">Suggest an edit</FooterLink>
            </li>
            <li>
              <FooterLink href="/changelog">Changelog</FooterLink>
            </li>
            <li>
              <FooterLink href="/status">System Status</FooterLink>
            </li>
            <li>
              <FooterLink href="/contact">Contact</FooterLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact & Compliance */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl border p-6 bg-white/60 dark:bg-neutral-950/40">
          <div className="space-y-3">
            <SectionTitle>Contact</SectionTitle>
            <p className="text-sm flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
              <Mail className="mt-0.5 size-4" /> support@example.com
            </p>
            <p className="text-sm flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
              <Phone className="mt-0.5 size-4" /> +880 1XXXXXXXXX
            </p>
            <p className="text-sm flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
              <MapPin className="mt-0.5 size-4" /> Level X, Road Y, City Z,
              Bangladesh
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-4">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="size-5 hover:text-blue-600 transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="size-5 hover:text-sky-500 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="size-5 hover:text-blue-700 transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                <Youtube className="size-5 hover:text-red-600 transition-colors" />
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <SectionTitle>Legal</SectionTitle>
            <ul className="space-y-2">
              <li>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </li>
              <li>
                <FooterLink href="/refund">Refund Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/copyright">Copyright Notice</FooterLink>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                <Shield className="mt-0.5 size-4" /> Unofficial consolidation;
                official text = Gazette.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <SectionTitle>Payments & App</SectionTitle>
            <div className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
              <CreditCard className="size-4" /> Stripe · SSLCommerz
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
              <Lock className="size-4" /> Secure checkout · HTTPS
            </div>
            <div className="flex items-center gap-3">
              {canInstall && (
                <button
                  onClick={handleInstall}
                  className="rounded-xl px-3 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 inline-flex items-center gap-2"
                >
                  <Download className="size-4" /> Install App
                </button>
              )}
              <button className="rounded-xl px-3 py-2 text-sm font-medium border inline-flex items-center gap-2">
                <QrCode className="size-4" /> Get App via QR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-neutral-600 dark:text-neutral-400">
            <p>
              © {new Date().getFullYear()} Your Company. BIN / TIN: 000000000,
              Trade License: 000000. All rights reserved.
            </p>
            <p className="mt-1 flex items-center gap-2">
              <Clock className="size-4" /> Consolidated as of{" "}
              <span className="font-medium">{lastConsolidatedAt}</span> · Build{" "}
              <span className="font-medium">{buildVersion}</span>
              <span className="mx-2">·</span>
              <Link
                className="underline underline-offset-4"
                href="/data-dictionary"
              >
                Data Dictionary
              </Link>
              <span className="mx-2">·</span>
              <Link
                className="underline underline-offset-4"
                href="/editorial-policy"
              >
                Editorial Policy
              </Link>
            </p>
          </div>

          {/* Toggles */}
          <div className="flex items-center gap-3">
            <button
              className="text-xs rounded-full px-3 py-1 border"
              aria-label="Toggle language"
            >
              বাংলা / EN
            </button>
            <button
              className="text-xs rounded-full px-3 py-1 border"
              aria-label="Toggle numerals"
            >
              ১২৩ / 123
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      className="text-xs rounded-full px-3 py-1 border inline-flex items-center gap-2"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />} Theme
    </button>
  );
}
