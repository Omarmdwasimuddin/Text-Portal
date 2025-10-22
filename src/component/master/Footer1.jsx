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
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function SiteFooter() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Fix hydration by using the same initial value on server and client
  const [lastConsolidatedAt, setLastConsolidatedAt] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const buildVersion = process.env.NEXT_PUBLIC_BUILD_VERSION || "v1.0.0";

  // PWA install state
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Set the date only on client side after mount
    const formattedDate = new Intl.DateTimeFormat("en-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Dhaka",
    }).format(new Date());
    
    setLastConsolidatedAt(formattedDate);

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
    
    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('PWA installed successfully');
      }
      
      setDeferredPrompt(null);
      setCanInstall(false);
    } catch (error) {
      console.error('PWA installation failed:', error);
    }
  };

  // Semantic Components
  const SectionTitle = ({ children, id }) => (
    <h3 
      id={id}
      className="text-sm font-semibold tracking-wider uppercase text-neutral-800 dark:text-neutral-200 mb-4"
    >
      {children}
    </h3>
  );

  // Updated FooterLink - returns just the link without <li>
  const FooterLink = ({ href, children, external = false, ...props }) => {
    const LinkComponent = external ? 'a' : Link;
    
    return (
      <LinkComponent
        href={href}
        className="text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-200 flex items-center gap-1 py-1"
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer"
        })}
        {...props}
      >
        {children}
        {external && <ExternalLink className="size-3" aria-hidden="true" />}
      </LinkComponent>
    );
  };

  const ContactItem = ({ icon: Icon, children, href, label }) => (
    <p className="text-sm flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
      <Icon className="mt-0.5 size-4 flex-shrink-0" aria-hidden="true" />
      {href ? (
        <a 
          href={href} 
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
          aria-label={label}
        >
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </p>
  );

  return (
    <footer 
      className="border-t bg-green-950 text-white dark:from-green-800 dark:via-green-700 dark:to-red-800"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top CTA Section */}
      <section aria-labelledby="cta-heading" className="border-b border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <BadgePercent className="size-5" aria-hidden="true" />
              <p className="text-sm text-neutral-100">
                Annual Subscription — Read all softcopy books online (download limits apply).
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/subscription"
                className="rounded-xl px-4 py-2 text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
              >
                Subscribe / Renew
              </Link>
              <div className="flex items-center gap-2 text-xs text-neutral-200">
                <CreditCard className="size-4" aria-hidden="true" />
                <span>Stripe · SSLCommerz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          role="navigation"
          aria-label="Footer navigation"
        >
          {/* About Section */}
          <section aria-labelledby="about-heading" className="sm:col-span-2 lg:col-span-2">
            <SectionTitle id="about-heading">About Us</SectionTitle>
            <p className="text-sm leading-6 text-neutral-100 mb-4">
              VAT/Customs/Income Tax Laws—Rules—SROs—Orders—Interpretations—Schedules—All in one platform.
              <br />
              <em className="text-xs opacity-90">Unofficial consolidation; official text = Gazette.</em>
            </p>
            <nav aria-label="About links">
              <ul className="flex flex-wrap gap-4">
                <li><FooterLink href="/about">About Us</FooterLink></li>
                <li><FooterLink href="/team">Our Team</FooterLink></li>
                <li><FooterLink href="/consultancy">Consultancy</FooterLink></li>
              </ul>
            </nav>
          </section>

          {/* Acts Section */}
          <section aria-labelledby="acts-heading">
            <SectionTitle id="acts-heading">Legislation</SectionTitle>
            <nav aria-label="Acts navigation">
              <ul className="space-y-2">
                <li><FooterLink href="/vat/act/2012">VAT & SD Act, 2012</FooterLink></li>
                <li><FooterLink href="/income-tax/act/2023">Income Tax Act, 2023</FooterLink></li>
                <li><FooterLink href="/customs/act/2023">Customs Act, 2023</FooterLink></li>
                <li><FooterLink href="/finance-act">Finance Acts</FooterLink></li>
              </ul>
            </nav>
          </section>

          {/* Rules Section */}
          <section aria-labelledby="rules-heading">
            <SectionTitle id="rules-heading">Rules & Forms</SectionTitle>
            <nav aria-label="Rules navigation">
              <ul className="space-y-2">
                <li><FooterLink href="/vat/rules/2016">VAT & SD Rules, 2016</FooterLink></li>
                <li><FooterLink href="/income-tax/rules">IT Rules & Forms</FooterLink></li>
                <li><FooterLink href="/customs/rules">Customs Rules</FooterLink></li>
                <li><FooterLink href="/forms">All Forms</FooterLink></li>
              </ul>
            </nav>
          </section>

          {/* SRO Section */}
          <section aria-labelledby="sro-heading">
            <SectionTitle id="sro-heading">SRO & Orders</SectionTitle>
            <nav aria-label="SRO navigation">
              <ul className="space-y-2">
                <li><FooterLink href="/sro">All SROs</FooterLink></li>
                <li><FooterLink href="/orders">General Orders</FooterLink></li>
                <li><FooterLink href="/advance-ruling">Advance Ruling</FooterLink></li>
                <li><FooterLink href="/policy">IPO | EPO | Policy</FooterLink></li>
              </ul>
            </nav>
          </section>

          {/* Tools Section */}
          <section aria-labelledby="tools-heading">
            <SectionTitle id="tools-heading">Tools & Resources</SectionTitle>
            <nav aria-label="Tools navigation">
              <ul className="space-y-2">
                <li>
                  <FooterLink href="/search">
                    <Search className="size-4 mr-2" aria-hidden="true" />
                    Advanced Search
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/tools/vat-calculator">
                    <Scale className="size-4 mr-2" aria-hidden="true" />
                    VAT Calculator
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/tools/income-tax-calculator">
                    <Scale className="size-4 mr-2" aria-hidden="true" />
                    Income Tax Calculator
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/tools/customs-calculator">
                    <Scale className="size-4 mr-2" aria-hidden="true" />
                    Customs Calculator
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/consolidated">
                    <BookOpen className="size-4 mr-2" aria-hidden="true" />
                    Consolidated View
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/point-in-time">
                    <FileText className="size-4 mr-2" aria-hidden="true" />
                    Point-in-Time
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="/blog">
                    <Newspaper className="size-4 mr-2" aria-hidden="true" />
                    Blog & News
                  </FooterLink>
                </li>
              </ul>
            </nav>
          </section>

          {/* Support Section */}
          <section aria-labelledby="support-heading">
            <SectionTitle id="support-heading">Support</SectionTitle>
            <nav aria-label="Support navigation">
              <ul className="space-y-2">
                <li><FooterLink href="/help">Help Center</FooterLink></li>
                <li><FooterLink href="/feedback?suggest=1">Suggest an Edit</FooterLink></li>
                <li><FooterLink href="/changelog">Changelog</FooterLink></li>
                <li><FooterLink href="/status">System Status</FooterLink></li>
                <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              </ul>
            </nav>
          </section>
        </div>
      </div>

      {/* Contact & Compliance Section */}
      <section aria-labelledby="contact-heading" className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-xl p-6 bg-white/10 dark:bg-black/20 backdrop-blur-sm">
            
            {/* Contact Information */}
            <div aria-labelledby="contact-info-heading">
              <SectionTitle id="contact-info-heading">Contact Information</SectionTitle>
              <div className="space-y-3">
                <ContactItem 
                  icon={Mail} 
                  href="mailto:support@example.com"
                  label="Send email to support"
                >
                  support@example.com
                </ContactItem>
                <ContactItem 
                  icon={Phone} 
                  href="tel:+8801XXXXXXXXX"
                  label="Call us"
                >
                  +880 1XXX-XXXXXX
                </ContactItem>
                <ContactItem icon={MapPin}>
                  Level X, Road Y, City Z, Bangladesh
                </ContactItem>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-sm font-medium text-neutral-100 mb-3">Follow Us</p>
                <nav aria-label="Social media links">
                  <ul className="flex gap-4">
                    {[
                      { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                      { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                      { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                      { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                    ].map(({ icon: Icon, href, label }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-200 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 rounded-full p-1"
                          aria-label={`Visit our ${label} page`}
                        >
                          <Icon className="size-5" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Legal Links */}
            <div aria-labelledby="legal-heading">
              <SectionTitle id="legal-heading">Legal & Compliance</SectionTitle>
              <nav aria-label="Legal links">
                <ul className="space-y-2">
                  <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
                  <li><FooterLink href="/terms">Terms & Conditions</FooterLink></li>
                  <li><FooterLink href="/refund">Refund Policy</FooterLink></li>
                  <li><FooterLink href="/copyright">Copyright Notice</FooterLink></li>
                  <li className="flex items-start gap-2 text-sm text-neutral-200 pt-2">
                    <Shield className="mt-0.5 size-4 flex-shrink-0" aria-hidden="true" />
                    Unofficial consolidation; official text = Gazette.
                  </li>
                </ul>
              </nav>
            </div>

            {/* Payments & App */}
            <div aria-labelledby="app-heading">
              <SectionTitle id="app-heading">Payments & Mobile App</SectionTitle>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <CreditCard className="size-4" aria-hidden="true" />
                  <span>Stripe · SSLCommerz</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-200">
                  <Lock className="size-4" aria-hidden="true" />
                  <span>Secure checkout · HTTPS</span>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-2">
                  {canInstall && (
                    <button
                      onClick={handleInstall}
                      className="rounded-lg px-4 py-2 text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 inline-flex items-center gap-2"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      Install App
                    </button>
                  )}
                  <button className="rounded-lg px-4 py-2 text-sm font-medium border border-white text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 inline-flex items-center gap-2">
                    <QrCode className="size-4" aria-hidden="true" />
                    QR Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Copyright and Info */}
            <div className="text-xs text-neutral-200">
              <p>
                © {currentYear} Your Company. 
                <span className="mx-2">·</span>
                BIN: 000000000
                <span className="mx-2">·</span>
                Trade License: 000000
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-2">
                <Clock className="size-3" aria-hidden="true" />
                Consolidated as of{" "}
                {isMounted ? (
                  <time dateTime={new Date().toISOString()}>
                    {lastConsolidatedAt}
                  </time>
                ) : (
                  <span className="inline-block h-4 w-32 bg-neutral-400/30 animate-pulse rounded"></span>
                )}
                <span className="mx-2">·</span>
                Build {buildVersion}
                <span className="mx-2">·</span>
                <FooterLink href="/data-dictionary" className="text-xs">Data Dictionary</FooterLink>
                <span className="mx-2">·</span>
                <FooterLink href="/editorial-policy" className="text-xs">Editorial Policy</FooterLink>
              </p>
            </div>

            {/* Utility Controls */}
            <div className="flex items-center gap-3">
              <button
                className="text-xs rounded-full px-3 py-1 border border-white/30 text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                aria-label="Toggle between Bengali and English"
              >
                বাংলা / EN
              </button>
              <button
                className="text-xs rounded-full px-3 py-1 border border-white/30 text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600"
                aria-label="Toggle numeral system"
              >
                ১২৩ / 123
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <button
        className="text-xs rounded-full px-3 py-1 border border-white/30 text-white inline-flex items-center gap-2"
        aria-label="Theme toggle loading"
      >
        <div className="size-3 bg-neutral-400/30 animate-pulse rounded"></div>
        Theme
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-xs rounded-full px-3 py-1 border border-white/30 text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 inline-flex items-center gap-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === "light" ? (
        <Moon className="size-3" aria-hidden="true" />
      ) : (
        <Sun className="size-3" aria-hidden="true" />
      )}
      Theme
    </button>
  );
}