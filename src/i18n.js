'use client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        siteName: "Tax & Trade Solutions",
        searchPlaceholder: "Search books, guides, blogs...",
        searchExample1: "Tax Guides...",
        searchExample2: "Trade Regulations...",
        searchExample3: "Business Books...",
      },
    },
    bn: {
      translation: {
        siteName: "ট্যাক্স এন্ড ট্রেড সলিউশনস",
        searchPlaceholder: "বই, গাইড, ব্লগ খুঁজুন...",
        searchExample1: "'ট্যাক্স গাইড' অনুসন্ধান করুন",
        searchExample2: "'বাণিজ্য নিয়ম' অনুসন্ধান করুন",
        searchExample3: "'ব্যবসায়িক বই' অনুসন্ধান করুন",
      },
    },
  },
  lng: "bn", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n