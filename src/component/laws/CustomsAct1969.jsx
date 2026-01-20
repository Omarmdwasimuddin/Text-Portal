'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const chapters = [
  {
    title: 'প্রথম অধ্যায়',
    subtitle: 'প্রারম্ভিক',
    sections: [
      { href: '/laws/law2012/section/section01', text: 'সংক্ষিপ্ত শিরোনাম ও প্রবর্তন', number: '১' },
      { href: '/laws/law2012/section/section02', text: 'সংজ্ঞা', number: '২' },
      { href: '/laws/law2012/section/section03', text: 'আইনের প্রাধান্য', number: '৩' },
    ],
  },
  {
    title: 'দ্বিতীয় অধ্যায়',
    subtitle: 'কাস্টমস কর্মকর্তা নিয়োগ এবং ক্ষমতা',
    sections: [
      { href: '/laws/law2012/section/section04', text: 'কাস্টমস কর্মকর্তা নিয়োগ', number: '৪' },
      { href: '/laws/law2012/section/section05', text: 'কাস্টমস কর্মকর্তাগণের ক্ষমতা ও কর্তব্য', number: '৫' },
      { href: '/laws/law2012/section/section06', text: 'মূসক নিবন্ধন পদ্ধতি', number: '৬' },
      { href: '/laws/law2012/section/section07', text: 'কাস্টমস কর্মকর্তাগণকে সহায়তা', number: '৭' },
    ],
  },
  {
    title: 'তৃতীয় অধ্যায়',
    subtitle: 'বন্দর, বিমান বন্দর, স্থল কাস্টমস স্টেশন, ইত্যাদি ঘোষণা',
    sections: [
      { href: '/laws/law2012/section/section15', text: 'কাস্টমস বন্দর, কাস্টমস বিমানবন্দর, ইত্যাদি ঘোষণা', number: '৮' },
      { href: '/laws/law2012/section/section16', text: 'অবতরণ স্থান অনুমোদন এবং কাস্টমস স্টেশনের সীমানা ও সময়সীমা নির্ধারণ করিবার ক্ষমতা', number: '৯' },
      { href: '/laws/law2012/section/section17', text: 'ওয়্যারহাউসিং স্টেশন ঘোষণা', number: '১০' },
      { href: '/laws/law2012/section/section18', text: 'সরকারি ওয়্যারহাউস নির্ধারণ', number: '১১' },
      { href: '/laws/law2012/section/section19', text: 'বেসরকারি ওয়্যারহাউসের লাইসেন্স প্রদান, স্থগিত, বাতিল, ইত্যাদি', number: '১২' },
      { href: '/laws/law2012/section/section20', text: 'কাস্টমস কর্মকর্তাগণের আরোহণ ও অবতরণের জন্য স্টেশন', number: '১৩' },
    ],
  },
  {
    title: 'চতুর্থ অধ্যায়',
    subtitle: 'ইলেকট্রনিক রেকর্ড এবং পেমেন্ট',
    sections: [
      { href: '/laws/law2012/section/section27', text: 'ইলেকট্রনিক মাধ্যমে দলিল দাখিল বা পেমেন্ট প্রদান', number: '১৪' },
      { href: '/laws/law2012/section/section28', text: 'ইলেকট্রনিক রেকর্ড সংরক্ষণ', number: '১৫' },
      { href: '/laws/law2012/section/section29', text: '২০০৬ সনের ৩৯ নং আইনের প্রযোজ্যতা', number: '১৬' },
    ],
  },
  {
    title: 'পঞ্চম অধ্যায়',
    subtitle: 'আমদানি ও রপ্তানি নিষিদ্ধকরণ এবং নিয়ন্ত্রণ',
    sections: [
      { href: '/laws/law2012/section/section45', text: 'নিষিদ্ধকরণ (prohibition) এবং নিয়ন্ত্রণ', number: '১৭' },
    ],
  },
  {
    title: 'ষষ্ঠ অধ্যায়',
    subtitle: 'কাস্টমস শুল্ক আরোপ ও অব্যাহতি',
    sections: [
      { href: '/laws/law2012/section/section51', text: 'শুল্কযোগ্য পণ্য', number: '১৮' },
      { href: '/laws/law2012/section/section52', text: 'কাউন্টারভেইলিং শুল্ক আরোপ', number: '১৯' },
      { href: '/laws/law2012/section/section53', text: 'অ্যান্টি-ডাম্পিং শুল্ক আরোপ', number: '২০' },
      { href: '/laws/law2012/section/section54', text: 'কতিপয় ক্ষেত্রে কাউন্টারভেইলিং শুল্ক বা অ্যান্টি-ডাম্পিং শুল্ক আরোপণীয় নহে', number: '২১' },
      { href: '/laws/law2012/section/section55', text: 'কাউন্টারভেইলিং অথবা অ্যান্টি-ডাম্পিং শুল্ক আরোপের বিরুদ্ধে আপিল', number: '২২' },
      { href: '/laws/law2012/section/section56', text: 'সেইফগার্ড শুল্ক আরোপ', number: '২৩' },
      { href: '/laws/law2012/section/section57', text: 'কাস্টমস সেবার জন্য ফি', number: '২৪' },
      { href: '/laws/law2012/section/section58', text: 'শুল্ক ও কর হইতে অব্যাহতি প্রদানের ক্ষমতা', number: '২৫' },
      { href: '/laws/law2012/section/section59', text: 'পণ্যের পুনঃআমদানি', number: '২৬' },
      { href: '/laws/law2012/section/section60', text: 'শুল্কায়নের উদ্দেশ্যে পণ্যের কাস্টমস মূল্য (assessable value)', number: '২৭' },
      { href: '/laws/law2012/section/section61', text: 'ক্ষতিগ্রস্ত, অবনতিপ্রাপ্ত, নিখোঁজ অথবা ধ্বংসপ্রাপ্ত পণ্যের শুল্ক হ্রাসকরণ', number: '২৮' },
      { href: '/laws/law2012/section/section62', text: 'আমদানিকৃত স্পিরিট পরীক্ষা এবং পান করিবার অনুপযোগী (denature) করিবার ক্ষমতা', number: '২৯' },
      { href: '/laws/law2012/section/section63', text: 'পণ্যের শুল্কহার, মূল্য এবং বিনিময় হার নির্ধারণের তারিখ', number: '৩০' },
      { href: '/laws/law2012/section/section64', text: 'মূল্য এবং কার্যকর শুল্ক হার', number: '৩১' },
      { href: '/laws/law2012/section/section65', text: 'শুল্ক, কর ও সুদ পরিশোধের সময়সীমা', number: '৩২' },
      { href: '/laws/law2012/section/section66', text: 'অসত্য বিবৃতি, ইত্যাদি', number: '৩৩' },
      { href: '/laws/law2012/section/section67', text: 'তিন বৎসরের মধ্যে ফেরত প্রদান দাবি করা', number: '৩৪' },
      { href: '/laws/law2012/section/section68', text: 'শুল্ক, কর ও চার্জ জমা এবং বিলম্বিত পরিশোধ', number: '৩৫' },
    ],
  },
  {
    title: 'সপ্তম অধ্যায়',
    subtitle: 'প্রত্যর্পণ',
    sections: [
      { href: '/laws/law2012/section/section69', text: 'কাস্টমস শুল্ক প্রত্যর্পণ', number: '৩৬' },
      { href: '/laws/law2012/section/section70', text: 'শনাক্তযোগ্য নহে এইরূপ পণ্যের ঘোষণা প্রদান এবং নির্ধারিত বৈদেশিক অঞ্চলের ক্ষেত্রে প্রত্যর্পণ নিষিদ্ধ করিবার ক্ষমতা', number: '৩৭' },
      { href: '/laws/law2012/section/section71', text: 'প্রত্যর্পণ মঞ্জুর না করিবার ক্ষেত্রসমূহ', number: '৩৮' },
      { href: '/laws/law2012/section/section72', text: 'প্রত্যর্পণ প্রদানের সময়', number: '৩৯' },
      { href: '/laws/law2012/section/section73', text: 'প্রত্যর্পণ দাবিদার কর্তৃক ঘোষণা', number: '৪০' },
    ],
  },
  {
    title: 'অষ্টম অধ্যায়',
    subtitle: 'কাস্টমস গ্যারান্টি',
    sections: [
      { href: '/laws/law2012/section/section74', text: 'গ্যারান্টির প্রকার', number: '৪১' },
      { href: '/laws/law2012/section/section75', text: 'গ্যারান্টিদাতা', number: '৪২' },
      { href: '/laws/law2012/section/section76', text: 'সমন্বিত (comprehensive) গ্যারান্টি', number: '৪৩' },
      { href: '/laws/law2012/section/section76', text: 'সমন্বিত (comprehensive) গ্যারান্টি', number: '৪৪' },
      { href: '/laws/law2012/section/section77', text: 'অতিরিক্ত বা প্রতিস্থাপন গ্যারান্টি', number: '৪৫' },
      { href: '/laws/law2012/section/section78', text: 'গ্যারান্টি অবমুক্ত এবং চার্জ বাতিলকরণ', number: '৪৬' },
    ],
  },
  {
    title: 'নবম অধ্যায়',
    subtitle: 'যানবাহনের আগমন এবং প্রস্থান',
    sections: [
      { href: '/laws/law2012/section/section79', text: 'কাস্টমস এর নিয়ন্ত্রণাধীন পণ্য', number: '৪৭' },
      { href: '/laws/law2012/section/section80', text: 'যানবাহন এবং কার্গো ঘোষণা', number: '৪৮' },
      { href: '/laws/law2012/section/section81', text: 'যানবাহন আগমনের স্থান', number: '৪৯' },
      { href: '/laws/law2012/section/section82', text: 'দৈবদূর্বিপাক', number: '৫০' },
      { href: '/laws/law2012/section/section82', text: 'আগমন এবং অন্তর্মুখী (inward) প্রতিবেদন', number: '৫১' },
      { href: '/laws/law2012/section/section82', text: 'রপ্তানি পণ্য বোঝাই করিবার পূর্বে বহির্গমন এন্ট্রি বা পণ্য বোঝাইয়ের আদেশ গ্রহণ', number: '৫২' },
      { href: '/laws/law2012/section/section82', text: 'বন্দর ছাড়পত্র ব্যতীত কোনো নৌযান প্রস্থান না করা', number: '৫৩' },
      { href: '/laws/law2012/section/section82', text: 'নৌযান ব্যতীত অন্য কোনো যানবাহন বিনা অনুমতিতে প্রস্থান না করা', number: '৫৪' },
      { href: '/laws/law2012/section/section82', text: 'নৌযানের বন্দর ছাড়পত্রের জন্য আবেদন', number: '৫৫' },
      { href: '/laws/law2012/section/section82', text: 'নৌযান ব্যতীত অন্যান্য যানবাহন প্রস্থানের পূর্বে দলিলপত্র অর্পণ এবং প্রশ্নের উত্তর প্রদান', number: '৫৬' },
      { href: '/laws/law2012/section/section82', text: 'নৌযানের বন্দর ছাড়পত্র বা অন্যান্য যানবাহনের প্রস্থানের অনুমতি প্রত্যাখ্যানের ক্ষমতা', number: '৫৭' },
      { href: '/laws/law2012/section/section82', text: 'বন্দর ছাড়পত্র বা প্রস্থানের অনুমতি প্রদান', number: '৫৮' },
      { href: '/laws/law2012/section/section82', text: 'এজেন্টের জামানতের ভিত্তিতে বন্দর ছাড়পত্র বা প্রস্থানের অনুমতি প্রদান', number: '৫৯' },
      { href: '/laws/law2012/section/section82', text: 'বন্দর ছাড়পত্র বা প্রস্থানের অনুমতি বাতিল করিবার ক্ষমতা', number: '৬০' },
      { href: '/laws/law2012/section/section82', text: 'কতিপয় শ্রেণির যানবাহনকে এই অধ্যায়ের কতিপয় বিধান হইতে অব্যাহতি', number: '৬১' },
    ],
  },
  {
    title: 'দশম অধ্যায়',
    subtitle: 'কাস্টমস স্টেশনে যানবাহন সংশ্লিষ্ট সাধারণ বিধানাবলি',
    sections: [
      { href: '/laws/law2012/section/section83', text: 'যানবাহনে আরোহণের জন্য কাস্টমস কর্মকর্তা নিযুক্ত করিবার ক্ষমতা', number: '৬২' },
      { href: '/laws/law2012/section/section84', text: 'প্রবেশ, ইত্যাদির ক্ষমতা', number: '৬৩' },
      { href: '/laws/law2012/section/section85', text: 'যানবাহন সিলকরণ', number: '৬৪' },
      { href: '/laws/law2012/section/section86', text: 'কতিপয় স্থান, দিবস এবং সময়ে পণ্য বোঝাই, খালাস বা ছাড় না করা', number: '৬৫' },
      { href: '/laws/law2012/section/section87', text: 'বোট-নোট', number: '৬৬' },
      { href: '/laws/law2012/section/section87', text: 'জলপথে পরিবহণকৃত পণ্য অবিলম্বে অবতরণ বা জাহাজজাত করা', number: '৬৭' },
      { href: '/laws/law2012/section/section87', text: 'অনুমতি ব্যতিরেকে যানান্তর না করা', number: '৬৮' },
      { href: '/laws/law2012/section/section87', text: 'লাইসেন্সবিহীন কার্গো বোট চলাচল নিষিদ্ধ করিবার ক্ষমতা', number: '৬৯' },
      { href: '/laws/law2012/section/section87', text: 'অনধিক একশত টন জাহাজের চলাচল', number: '৭০' },
    ],
  },
  {
    title: 'একাদশ অধ্যায়',
    subtitle: 'কার্গো খালাস এবং পণ্যের অন্তর্মুখী (inward) এন্ট্রি',
    sections: [
      { href: '/laws/law2012/section/section88', text: 'নৌযানের কার্গো খালাস', number: '৭১' },
      { href: '/laws/law2012/section/section89', text: 'নৌযান ব্যতীত অন্যান্য যানবাহনের পণ্য খালাস', number: '৭২' },
      { href: '/laws/law2012/section/section90', text: 'কার্গো ঘোষণার অন্তর্ভুক্ত না হইলে আমদানিকৃত পণ্য খালাস না করা', number: '৭৩' },
      { href: '/laws/law2012/section/section91', text: 'অনুমোদিত সময়ের মধ্যে নৌযান হইতে খালাস না করা পণ্যের ক্ষেত্রে পদ্ধতি', number: '৭৪' },
      { href: '/laws/law2012/section/section92', text: 'ক্ষুদ্র পার্সেল অবতরণ করানোর এবং দাবিদারবিহীন পার্সেল নিয়ন্ত্রণে রাখিবার ক্ষমতা', number: '৭৫' },
      { href: '/laws/law2012/section/section92', text: 'অবিলম্বে পণ্য খালাসের অনুমতি প্রদানের ক্ষমতা', number: '৭৬' },
      { href: '/laws/law2012/section/section92', text: 'পণ্যের অস্থায়ী মজুদ', number: '৭৭' },
      { href: '/laws/law2012/section/section92', text: 'অস্থায়ী মজুদের ওয়্যারহাউস ও স্থান', number: '৭৮' },
      { href: '/laws/law2012/section/section92', text: 'অস্থায়ী মজুদকৃত পণ্যে প্রবেশাধিকার', number: '৭৯' },
      { href: '/laws/law2012/section/section92', text: 'অস্থায়ী মজুদে রক্ষিত পণ্যের ক্ষেত্রে অনুমোদিত কার্যক্রম', number: '৮০' },
    ],
  },
  {
    title: 'দ্বাদশ অধ্যায়',
    subtitle: 'পণ্যের ঘোষণা এবং ছাড়করণ',
    sections: [
      { href: '/laws/law2012/section/section93', text: 'পণ্যের ঘোষণা', number: '৮১' },
      { href: '/laws/law2012/section/section94', text: 'আমদানিকারক এবং রপ্তানিকারকের দায়িত্ব', number: '৮২' },
      { href: '/laws/law2012/section/section95', text: 'নিবন্ধন', number: '৮৩' },
      { href: '/laws/law2012/section/section96', text: 'পণ্য ঘোষণা দাখিলের সময়', number: '৮৪' },
      { href: '/laws/law2012/section/section96', text: 'পণ্য ঘোষণার প্রতিস্থাপন', number: '৮৫' },
      { href: '/laws/law2012/section/section96', text: 'দাখিলকৃত পণ্য ঘোষণার সংশোধন ও প্রত্যাহার', number: '৮৬' },
      { href: '/laws/law2012/section/section96', text: 'সত্যতা প্রতিপাদন', number: '৮৭' },
      { href: '/laws/law2012/section/section96', text: 'পণ্যের নমুনা সংগ্রহ ও পরীক্ষা', number: '৮৮' },
      { href: '/laws/law2012/section/section96', text: 'আমদানিকারক বা রপ্তানিকারক কর্তৃক সকল ব্যবস্থা গ্রহণ ও ব্যয় বহন করা', number: '৮৯' },
      { href: '/laws/law2012/section/section96', text: 'শুল্কায়ন', number: '৯০' },
      { href: '/laws/law2012/section/section96', text: 'পুনঃশুল্কায়ন', number: '৯১' },
      { href: '/laws/law2012/section/section96', text: 'ছাড়করণ', number: '৯২' },
      { href: '/laws/law2012/section/section96', text: 'সাময়িক শুল্কায়ন ও ছাড়করণ', number: '৯৩' },
      { href: '/laws/law2012/section/section96', text: 'সরকারের নিকট পণ্য হস্তান্তর ও উহার বিলিবন্দেজ', number: '৯৪' },
      { href: '/laws/law2012/section/section96', text: 'নির্ধারিত মেয়াদের মধ্যে শুল্কায়ন না করা পণ্যের ক্ষেত্রে পদ্ধতি', number: '৯৫' },
      { href: '/laws/law2012/section/section96', text: 'ঘোষণা এবং ছাড় প্রক্রিয়া পরিবর্তনের ক্ষেত্র', number: '৯৬' },
      { href: '/laws/law2012/section/section96', text: 'অথরাইজড ইকোনোমিক অপারেটর (Authorized Economic Operator)', number: '৯৭' },
    ],
  },
  {
    title: 'ত্রয়োদশ অধ্যায়',
    subtitle: 'পণ্যের ছাড় ও ছাড় পরবর্তী নিরীক্ষা',
    sections: [
      { href: '/laws/law2012/section/section97', text: 'দেশীয় ভোগের জন্য ছাড়পত্র', number: '৯৮' },
      { href: '/laws/law2012/section/section98', text: 'নথিপত্র নিরীক্ষা বা পরীক্ষা', number: '৯৯' },
      { href: '/laws/law2012/section/section99', text: 'নিরীক্ষক, ইত্যাদি নিয়োগের ক্ষমতা', number: '১০০' },
    ],
  },
  {
    title: 'চতুর্দশ অধ্যায়',
    subtitle: 'অস্থায়ী আমদানি',
    sections: [
      { href: '/laws/law2012/section/section101', text: 'অস্থায়ী আমদানি পদ্ধতি', number: '১০১' },
      { href: '/laws/law2012/section/section102', text: 'অস্থায়ী আমদানি পদ্ধতির পরিসমাপ্তি', number: '১০২' },
    ],
  },
  {
    title: 'পঞ্চদশ অধ্যায়',
    subtitle: 'ইনওয়ার্ড ও আউটওয়ার্ড প্রসেসিং পদ্ধতি',
    sections: [
      { href: '/laws/law2012/section/section105', text: 'ইনওয়ার্ড ও আউটওয়ার্ড প্রসেসিং পদ্ধতি সমাপ্তির মেয়াদ', number: '১০৩' },
      { href: '/laws/law2012/section/section106', text: 'ইনওয়ার্ড প্রসেসিং পদ্ধতি', number: '১০৪' },
      { href: '/laws/law2012/section/section107', text: 'আউটওয়ার্ড প্রসেসিং পদ্ধতি', number: '১০৫' },
      { href: '/laws/law2012/section/section108', text: 'ইনওয়ার্ড প্রসেসিং পদ্ধতির পরিসমাপ্তি', number: '১০৬' },
      { href: '/laws/law2012/section/section108', text: 'আউটওয়ার্ড প্রসেসিং পদ্ধতির পরিসমাপ্তি', number: '১০৭' },
    ],
  },
  {
    title: 'ষোড়শ অধ্যায়',
    subtitle: 'ওয়্যারহাউসিং',
    sections: [
      { href: '/laws/law2012/section/section109', text: 'কাস্টমস ওয়্যারহাউসিং পদ্ধতি', number: '১০৮' },
      { href: '/laws/law2012/section/section110', text: 'ওয়্যারহাউসিং বন্ড', number: '১০৯' },
      { href: '/laws/law2012/section/section111', text: 'ওয়্যারহাউসিং ব্যাংক গ্যারান্টি', number: '১১০' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসে পণ্য প্রেরণ', number: '১১১' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসে পণ্য গ্রহণ', number: '১১২' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসে রক্ষিত পণ্যের উপর নিয়ন্ত্রণ', number: '১১৩' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসে রক্ষিত প্যাকেজ খোলা এবং পরীক্ষা করিবার ক্ষমতা।-', number: '১১৪' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসে রক্ষিত পণ্যের মালিকের ওয়্যারহাউসে প্রবেশাধিকার', number: '১১৫' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসকৃত পণ্যের মালিকের ব্যবস্থা গ্রহণের ক্ষমতা', number: '১১৬' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসে রক্ষিত পণ্যের প্রস্তুতকরণ এবং অন্যান্য কার্যক্রম', number: '১১৭' },
      { href: '/laws/law2012/section/section112', text: 'এই আইনে উল্লিখিত বিধান ব্যতীত ওয়্যারহাউস হইতে কোনো পণ্য বাহির না করা', number: '১১৮' },
      { href: '/laws/law2012/section/section112', text: 'কাস্টমস ওয়্যারহাউসিং এর মেয়াদ', number: '১১৯' },
      { href: '/laws/law2012/section/section112', text: 'লাইসেন্স বাতিল হইলে পণ্য অপসারণ', number: '১২০' },
      { href: '/laws/law2012/section/section112', text: 'একই কাস্টমস স্টেশনে এক ওয়্যারহাউস হইতে অন্য ওয়্যারহাউসে পণ্য অপসারণের ক্ষমতা', number: '১২১' },
      { href: '/laws/law2012/section/section112', text: 'পণ্য এক ওয়্যারহাউসিং স্টেশন হইতে অন্য ওয়্যারহাউসিং স্টেশনে অপসারণের ক্ষমতা', number: '১২২' },
      { href: '/laws/law2012/section/section112', text: 'গন্তব্যের কাস্টমস স্টেশনে পৌঁছাইবার পর পণ্য প্রথম আমদানির পণ্যের মত একই আইনসমূহের অধীন হইবে', number: '১২৩' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসে রক্ষিত পণ্যের ক্ষতি হইলে বা অবনতি ঘটিলে উহার পুনঃশুল্কায়ন', number: '১২৪' },
      { href: '/laws/law2012/section/section112', text: 'উদ্বায়ী (Volatile) পণ্যের ক্ষেত্রে ছাড়', number: '১২৫' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউস হইতে অসঙ্গতভাবে অপসারিত বা নির্দিষ্ট মেয়াদের বেশি সময়ে রাখিবার অনুমোদনপ্রাপ্ত বা ক্ষতিগ্রস্ত বা ধ্বংসপ্রাপ্ত বা নমুনা হিসাবে গৃহীত পণ্যের উপর শুল্ক', number: '১২৬' },
      { href: '/laws/law2012/section/section112', text: 'শুল্ক, ইত্যাদি পরিশোধে ব্যর্থতার ক্ষেত্রে পদ্ধতি', number: '১২৭' },
      { href: '/laws/law2012/section/section112', text: 'রেকর্ড সংরক্ষণ', number: '১২৮' },
      { href: '/laws/law2012/section/section112', text: 'দুর্ঘটনায় ধ্বংসপ্রাপ্ত ওয়্যারহাউসকৃত পণ্যের শুল্ক মওকুফ করিবার ক্ষমতা', number: '১২৯' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউস রক্ষকের দায়িত্ব', number: '১৩০' },
      { href: '/laws/law2012/section/section112', text: 'ওয়্যারহাউসে পণ্য জমা রাখিবার বিষয়ে সিদ্ধান্ত গ্রহণের ক্ষমতা', number: '১৩১' },
      { href: '/laws/law2012/section/section112', text: 'পরিবহণ, প্যাকিং, ইত্যাদির ব্যয় মালিক কর্তৃক বহন', number: '১৩২' },
      { href: '/laws/law2012/section/section112', text: 'শর্ত সংযোজন, পরিবর্তন, শিথিল করা, ইত্যাদির ক্ষমতা', number: '১৩৩' },
      { href: '/laws/law2012/section/section112', text: 'কাস্টমস ওয়্যারহাউস পদ্ধতির পরিসমাপ্তি', number: '১৩৪' },
    ],
  },
  {
    title: 'সপ্তদশ অধ্যায়',
    subtitle: 'ট্রান্সশিপমেন্ট',
    sections: [
      { href: '/laws/law2012/section/section113', text: 'ব্যাগেজ বা পোস্টাল পণ্যের ক্ষেত্রে এই অধ্যায়ের অপ্রযোজ্যতা', number: '১৩৫' },
      { href: '/laws/law2012/section/section114', text: 'শুল্ক পরিশোধ ব্যতিরেকে পণ্য ট্রান্সশিপমেন্ট', number: '১৩৬' },
      { href: '/laws/law2012/section/section115', text: 'ট্রান্সশিপমেন্টের তত্ত্বাবধান', number: '১৩৭' },
      { href: '/laws/law2012/section/section116', text: 'ট্রান্সশিপমেন্টের ক্ষেত্রে আমদানিকারকের বাধ্যবাধকতা', number: '১৩৮' },
      { href: '/laws/law2012/section/section116', text: 'মেরামতের সময় পণ্য নামানো', number: '১৩৯' },
      { href: '/laws/law2012/section/section116', text: 'ট্রান্সশিপমেন্ট পদ্ধতির পরিসমাপ্তি', number: '১৪০' },
    ],
  },
  {
    title: 'অষ্টাদশ অধ্যায়',
    subtitle: 'ট্রানজিট বাণিজ্য',
    sections: [
      { href: '/laws/law2012/section/section117', text: 'ব্যাগেজ বা পোস্টাল পণ্যের ক্ষেত্রে এই অধ্যায়ের অপ্রযোজ্যতা', number: '১৪১' },
      { href: '/laws/law2012/section/section118', text: 'একই যানবাহনে পণ্য ট্রানজিট', number: '১৪২' },
      { href: '/laws/law2012/section/section119', text: 'নির্ধারিত শর্তাবলি সাপেক্ষে কতিপয় পণ্যশ্রেণির পরিবহণ', number: '১৪৩' },
      { href: '/laws/law2012/section/section120', text: 'বাংলাদেশের মধ্য দিয়া বিদেশি ভূখণ্ডে পণ্য ট্রানজিট', number: '১৪৪' },
      { href: '/laws/law2012/section/section120', text: 'খালাসের জন্য আমদানিকৃত পণ্য অভ্যন্তরীণ কাস্টমস স্টেশনে স্থানান্তর', number: '১৪৫' },
    ],
  },
  {
    title: 'ঊনবিংশ অধ্যায়',
    subtitle: 'রপ্তানি বা জাহাজীকরণ এবং পুনরায় অবতরণ',
    sections: [
      { href: '/laws/law2012/section/section121', text: 'রপ্তানি পদ্ধতি', number: '১৪৬' },
      { href: '/laws/law2012/section/section122', text: 'পণ্য বোঝাই না করা অথবা পুনরায় নামানোর নোটিশ এবং উহাদের উপর শুল্ক ফেরত', number: '১৪৭' },
      { href: '/laws/law2012/section/section123', text: 'কোনো কাস্টমস স্টেশনে প্রত্যাবর্তনকারী অথবা অন্য কাস্টমস স্টেশনে প্রবেশকারী যানবাহন হইতে পুনরায় নামানো অথবা ট্রান্সশিপকৃত পণ্য', number: '১৪৮' },
      { href: '/laws/law2012/section/section124', text: 'কাস্টমস স্টেশনে প্রত্যাবর্তনকারী যানবাহনের প্রবেশ এবং পণ্য নামানো', number: '১৪৯' },
      { href: '/laws/law2012/section/section124', text: 'ফ্রাস্ট্রেটেড (frustrated) কার্গো', number: '১৫০' },
    ],
  },
  {
    title: 'বিংশ অধ্যায়',
    subtitle: 'রসদ ও ভান্ডার সামগ্রী',
    sections: [
      { href: '/laws/law2012/section/section125', text: 'আগমনকারী যানবাহনের রসদ ও ভান্ডার সামগ্রী', number: '১৫১' },
      { href: '/laws/law2012/section/section126', text: 'রসদ ও ভান্ডার সামগ্রীর অন্যান্য বিলিবন্দেজ', number: '১৫২' },
      { href: '/laws/law2012/section/section127', text: 'শুল্ক ও কর অব্যাহতিপ্রাপ্ত রসদ ও ভান্ডার সামগ্রী সরবরাহ', number: '১৫৩' },
    ],
  },
  {
    title: 'একবিংশ অধ্যায়',
    subtitle: 'ব্যাগেজ এবং ডাকযোগে আমদানিকৃত অথবা রপ্তানিকৃত পণ্য সম্পর্কিত বিশেষ বিধানাবলি',
    sections: [
      { href: '/laws/law2012/section/section129', text: 'যাত্রী অথবা ক্রু কর্তৃক ব্যাগেজ ঘোষণা', number: '১৫৪' },
      { href: '/laws/law2012/section/section130', text: 'ব্যাগেজের ক্ষেত্রে শুল্কহার নির্ধারণ', number: '১৫৫' },
      { href: '/laws/law2012/section/section131', text: 'প্রকৃত ব্যাগেজ শুল্ক হইতে অব্যাহতি', number: '১৫৬' },
      { href: '/laws/law2012/section/section132', text: 'ব্যাগেজের সাময়িক আটক', number: '১৫৭' },
      { href: '/laws/law2012/section/section132', text: 'ট্রানজিট যাত্রী অথবা ক্রু সদস্যগণের ব্যাগেজের ব্যবস্থাপনা', number: '১৫৮' },
      { href: '/laws/law2012/section/section132', text: 'ডাকযোগে আমদানিকৃত বা রপ্তানিকৃত পণ্যের ক্ষেত্রে লেবেল বা ঘোষণাকে পণ্য ঘোষণা হিসাবে গণ্য করা', number: '১৫৯' },
      { href: '/laws/law2012/section/section132', text: 'ডাকযোগে আমদানিকৃত অথবা রপ্তানিকৃত পণ্যের ক্ষেত্রে শুল্কের হার', number: '১৬০' },
    ],
  },
  {
    title: 'দ্বাবিংশ অধ্যায়',
    subtitle: 'উপকূলীয় পণ্য এবং নৌযান সম্পর্কিত বিধানাবলি',
    sections: [
      { href: '/laws/law2012/section/section133', text: 'ব্যাগেজের ক্ষেত্রে এই অধ্যায়ের অপ্রযোজ্যতা', number: '১৬১' },
      { href: '/laws/law2012/section/section134', text: 'উপকূলীয় পণ্যের এন্ট্রি', number: '১৬২' },
      { href: '/laws/law2012/section/section135', text: 'উপকূলীয় পণ্য সম্পর্কিত বিল ছাড় না হওয়া পর্যন্ত উহা বোঝাই না করা', number: '১৬৩' },
      { href: '/laws/law2012/section/section136', text: 'গন্তব্যস্থলে উপকূলীয় পণ্যের ছাড়পত্র', number: '১৬৪' },
      { href: '/laws/law2012/section/section136', text: 'উপকূলীয় নৌযানের বিদেশি বন্দর স্পর্শ করা সম্পর্কিত ঘোষণা', number: '১৬৫' },
      { href: '/laws/law2012/section/section136', text: 'কার্গো বুক', number: '১৬৫' },
      { href: '/laws/law2012/section/section136', text: 'নৌযানের কর আদায়', number: '১৬৬' },
      { href: '/laws/law2012/section/section136', text: 'কাস্টমস বন্দর অথবা উপকূলীয় বন্দর ব্যতীত অন্যত্র উপকূলীয় পণ্য বোঝাই অথবা খালাস না করা', number: '১৬৭' },
      { href: '/laws/law2012/section/section136', text: 'প্রস্থানের পূর্বে উপকূলীয় নৌযান কর্তৃক লিখিত আদেশ গ্রহণ', number: '১৬৮' },
      { href: '/laws/law2012/section/section136', text: 'উপকূলীয় পণ্যের ক্ষেত্রে এই আইনের কতিপয় বিধানের প্রয়োগ', number: '১৬৯' },
      { href: '/laws/law2012/section/section136', text: 'কতিপয় পণ্যের উপকূলীয় বাণিজ্য নিষিদ্ধ', number: '১৭০' },
    ],
  },
  {
    title: 'ত্রয়োবিংশ অধ্যায়',
    subtitle: 'অপরাধ, জরিমানা ও দণ্ড',
    sections: [
      { href: '/laws/law2012/section/section137', text: 'অপরাধসমূহের জরিমানা বা দণ্ড', number: '১৭১' },
      { href: '/laws/law2012/section/section138', text: 'দণ্ড আরোপ কার্যক্রমের দায় ও পরিধি', number: '১৭২' },
      { href: '/laws/law2012/section/section139', text: 'বাজেয়াপ্তকরণ, বিলি-বন্দেজ, ইত্যাদি', number: '১৭৩' },
    ],
  },
  {
    title: 'চতুর্বিংশ অধ্যায়',
    subtitle: 'কাস্টমস কর্মকর্তা কর্তৃক ক্ষমতা প্রয়োগ (enforcement)',
    sections: [
      { href: '/laws/law2012/section/section174', text: 'কাস্টমস নিয়ন্ত্রণের প্রয়োগ', number: '১৭৪' },
      { href: '/laws/law2012/section/section175', text: 'বাংলাদেশ সিঙ্গেল উইন্ডো প্রতিষ্ঠা', number: '১৭৫' },
      { href: '/laws/law2012/section/section176', text: 'কাস্টমস কর্মকর্তা কর্তৃক দলিল ও নথিপত্র দখলে নেওয়া এবং রাখা', number: '১৭৬' },
      { href: '/laws/law2012/section/section177', text: 'যুক্তিসঙ্গত কারণে তল্লাশির ক্ষমতা', number: '১৭৭' },
      { href: '/laws/law2012/section/section178', text: 'তল্লাশি করা হইবে এইরূপ ব্যক্তির কাস্টমস কর্মকর্তার সম্মুখে নেওয়ার অভিপ্রায়', number: '১৭৮' },
      { href: '/laws/law2012/section/section179', text: 'লুকানো পণ্য উদ্‌ঘাটনের জন্য সন্দেহভাজন ব্যক্তির দেহ স্ক্রিন বা এক্স-রে করিবার ক্ষমতা', number: '১৭৯' },
      { href: '/laws/law2012/section/section180', text: 'গ্রেফতার করিবার ক্ষমতা', number: '১৮০' },
      { href: '/laws/law2012/section/section181', text: 'তল্লাশি পরোয়ানা জারি করিবার ক্ষমতা', number: '১৮১' },
      { href: '/laws/law2012/section/section182', text: 'পরোয়ানা ব্যতীত তল্লাশি এবং গ্রেফতারের ক্ষমতা', number: '১৮২' },
      { href: '/laws/law2012/section/section183', text: 'তল্লাশির সময় সংগৃহীত দলিল কপি করা', number: '১৮৩' },
      { href: '/laws/law2012/section/section184', text: 'তল্লাশির সময় সংগৃহীত দলিল ও পণ্য সংরক্ষণ করা', number: '১৮৪' },
      { href: '/laws/law2012/section/section185', text: 'যানবাহন থামাইবার এবং তল্লাশি করিবার ক্ষমতা', number: '১৮৫' },
      { href: '/laws/law2012/section/section186', text: 'ব্যক্তিকে পরীক্ষা করিবার ক্ষমতা', number: '১৮৬' },
      { href: '/laws/law2012/section/section187', text: 'দলিল উপস্থাপনের জন্য চাহিদা প্রদান', number: '১৮৭' },
      { href: '/laws/law2012/section/section188', text: 'দলিল সম্পর্কিত অতিরিক্ত ক্ষমতা', number: '১৮৮' },
      { href: '/laws/law2012/section/section189', text: 'সাক্ষ্য প্রদান এবং দলিল বা পণ্য উপস্থাপন করিবার জন্য ব্যক্তির উপর সমন জারির ক্ষমতা', number: '১৮৯' },
      { href: '/laws/law2012/section/section190', text: 'পলাতক ব্যক্তিকে পরবর্তীকালে গ্রেফতার করা', number: '১৯০' },
      { href: '/laws/law2012/section/section191', text: 'বাজেয়াপ্তযোগ্য পণ্য জব্দ', number: '১৯১' },
      { href: '/laws/law2012/section/section192', text: 'জব্দকৃত পণ্যের ব্যবস্থাপনা', number: '১৯২' },
      { href: '/laws/law2012/section/section193', text: 'পুলিশ কর্তৃক সন্দেহবশত জব্দকৃত পণ্যের ক্ষেত্রে পদ্ধতি', number: '১৯৩' },
      { href: '/laws/law2012/section/section194', text: 'জব্দ বা গ্রেফতারের সময়ে ইনভেন্টরিসহ লিখিতভাবে উহার কারণ অবহিত করা', number: '১৯৪' },
      { href: '/laws/law2012/section/section195', text: 'বাংলাদেশে আমদানিকৃত কতিপয় প্রকাশনা সম্বলিত ধারণকৃত মোড়ক জব্দ করিবার ক্ষমতা', number: '১৯৫' },
      { href: '/laws/law2012/section/section196', text: 'জব্দকৃত মোড়ক খালাসের জন্য দাখিলকৃত আবেদনপত্র নিষ্পত্তির ক্ষেত্রে হাইকোর্ট বিভাগ কর্তৃক অনুসরণীয় পদ্ধতি', number: '১৯৬' },
      { href: '/laws/law2012/section/section197', text: 'স্থলপথে আমদানিকৃত বা রপ্তানিকৃত পণ্য ছাড়পত্রের অনুমতি সংক্রান্ত আদেশ দাখিলে বাধ্য করানোর ক্ষমতা', number: '১৯৭' },
      { href: '/laws/law2012/section/section198', text: 'কতিপয় সংকেত বা সংবাদ প্রস্তুত বা প্রেরণ নিরোধ করিবার ক্ষমতা', number: '১৯৮' },
      { href: '/laws/law2012/section/section199', text: 'কতিপয় কারখানায় কর্মকর্তা মোতায়েনের ক্ষমতা', number: '১৯৯' },
      { href: '/laws/law2012/section/section200', text: 'কতিপয় এলাকায় পণ্য দখলে রাখিবার ক্ষেত্রে বিধি-নিষেধ', number: '২০০' },
      { href: '/laws/law2012/section/section201', text: 'বাজেয়াপ্তযোগ্য পণ্য দখলে রাখিয়াছেন এইরূপ ব্যক্তির সঙ্গীর দণ্ড', number: '২০১' },
      { href: '/laws/law2012/section/section202', text: 'ন্যায়নির্ণয়ন (adjudication) করিবার ক্ষমতা', number: '২০২' },
      { href: '/laws/law2012/section/section203', text: 'পণ্য বাজেয়াপ্তি বা জরিমানা আরোপের পূর্বে কারণ দর্শানো নোটিশ জারি', number: '২০৩' },
      { href: '/laws/law2012/section/section204', text: 'তামাদির মেয়াদ', number: '২০৪' },
      { href: '/laws/law2012/section/section205', text: 'বাজেয়াপ্তকৃত পণ্যের পরিবর্তে জরিমানা পরিশোধ', number: '২০৫' },
      { href: '/laws/law2012/section/section206', text: 'বাজেয়াপ্তকৃত সম্পত্তি সরকারের উপর ন্যস্ত হওয়া', number: '২০৬' },
      { href: '/laws/law2012/section/section207', text: 'অনুমতি ব্যতীত প্রস্থান করিবার বা আনয়নে ব্যর্থতার জন্য জরিমানা আরোপ', number: '২০৭' },
      { href: '/laws/law2012/section/section208', text: 'সংক্ষিপ্ত বিচার করিবার ক্ষমতা', number: '২০৮' },
      { href: '/laws/law2012/section/section209', text: 'জুডিসিয়াল ম্যাজিস্ট্রেটের বিশেষ ক্ষমতা', number: '২০৯' },
      { href: '/laws/law2012/section/section210', text: 'জরিমানা বা অর্থদণ্ড পরিশোধ অপেক্ষমান অবস্থায় পণ্য আটক', number: '২১০' },
      { href: '/laws/law2012/section/section211', text: 'বৈধ কর্তৃত্ব, ইত্যাদি প্রমাণের দায়ভার', number: '২১১' },
      { href: '/laws/law2012/section/section212', text: 'কতিপয় ক্ষেত্রে দলিলপত্র সম্পর্কে পূর্বানুমান (presumption)', number: '২১২' },
      { href: '/laws/law2012/section/section213', text: 'দণ্ডাদেশের নোটিশ প্রদর্শন করা', number: '২১৩' },
      { href: '/laws/law2012/section/section214', text: 'দণ্ডাদেশ প্রকাশ করিবার ক্ষমতা', number: '২১৪' },
      { href: '/laws/law2012/section/section215', text: 'কতিপয় ব্যক্তি কর্তৃক তথ্য প্রদানের কর্তব্য', number: '২১৫' },
    ],
  },
  {
    title: 'পঞ্চবিংশ অধ্যায়',
    subtitle: 'বিকল্প বিরোধ নিষ্পত্তি',
    sections: [
      { href: '/laws/law2012/section/section145', text: 'বিকল্প বিরোধ নিষ্পত্তি', number: '২১৬' },
      { href: '/laws/law2012/section/section146', text: 'বিকল্প বিরোধ নিষ্পত্তির জন্য বিরোধের সংজ্ঞা এবং আওতা', number: '২১৭' },
      { href: '/laws/law2012/section/section147', text: 'সহায়তাকারী নিয়োগ', number: '২১৮' },
      { href: '/laws/law2012/section/section148', text: 'বিকল্প বিরোধ নিষ্পত্তি সংক্রান্ত কার্যক্রম ও পদ্ধতি', number: '২১৯' },
    ],
  },
  {
    title: 'ষষ্ঠবিংশ অধ্যায়',
    subtitle: 'আপিল এবং পুনরীক্ষণ',
    sections: [
      { href: '/laws/law2012/section/section220', text: 'কমিশনার অব কাস্টমস (আপিল) এর নিকট আপিল', number: '২২০' },
      { href: '/laws/law2012/section/section221', text: 'আপিলের পদ্ধতি', number: '২২১' },
      { href: '/laws/law2012/section/section222', text: 'বোর্ড কর্তৃক ভুল, ইত্যাদি সংশোধনের ক্ষমতা', number: '২২২' },
      { href: '/laws/law2012/section/section223', text: 'নিষ্পন্নাধীন আপিলের ক্ষেত্রে দাবিকৃত শুল্ক ও কর বা আরোপিত জরিমানা জমা', number: '২২৩' },
      { href: '/laws/law2012/section/section224', text: 'বোর্ডের নথিপত্র, ইত্যাদি তলব এবং পরীক্ষা করিবার ক্ষমতা', number: '২২৪' },
      { href: '/laws/law2012/section/section225', text: 'আপিল ট্রাইব্যুনাল', number: '২২৫' },
      { href: '/laws/law2012/section/section226', text: 'আপিল ট্রাইব্যুনালের নিকট আপিল', number: '২২৬' },
      { href: '/laws/law2012/section/section227', text: 'আপিল ট্রাইব্যুনালের আদেশ', number: '২২৭' },
      { href: '/laws/law2012/section/section228', text: 'আপিল ট্রাইব্যুনালের পদ্ধতি', number: '২২৮' },
      { href: '/laws/law2012/section/section229', text: 'হাইকোর্ট বিভাগে আপিল', number: '২২৯' },
      { href: '/laws/law2012/section/section230', text: 'অন্যূন দুইজন বিচারক কর্তৃক হাইকোর্ট বিভাগে শুনানি গ্রহণ', number: '২৩০' },
      { href: '/laws/law2012/section/section231', text: 'আপিলের উপর হাইকোর্ট বিভাগের সিদ্ধান্ত', number: '২৩১' },
      { href: '/laws/law2012/section/section232', text: 'হাইকোর্ট বিভাগে প্রেরণ করা সত্ত্বেও পাওনা অর্থ আদায়, ইত্যাদি', number: '২৩২' },
      { href: '/laws/law2012/section/section233', text: 'কপির জন্য ব্যয়িত সময় হিসাব বহির্ভূত', number: '২৩৩' },
      { href: '/laws/law2012/section/section234', text: 'ক্ষমতাপ্রাপ্ত প্রতিনিধির মাধ্যমে উপস্থিতি', number: '২৩৪' },
      { href: '/laws/law2012/section/section235', text: 'সরকার কর্তৃক নথিপত্র, ইত্যাদি তলব এবং পরীক্ষা করিবার ক্ষমতা', number: '২৩৫' },
    ],
  },
  {
    title: 'সপ্তবিংশ অধ্যায়',
    subtitle: 'বিবিধ',
    sections: [
      { href: '/laws/law2012/section/section236', text: 'মোড়ক খোলার এবং পণ্য পরীক্ষা, ওজন বা পরিমাপ করিবার ক্ষমতা', number: '২৩৬' },
      { href: '/laws/law2012/section/section237', text: 'পণ্য বিক্রয়ের পদ্ধতি এবং বিক্রয়লব্ধ অর্থের বিলিবন্দেজ', number: '২৩৭' },
      { href: '/laws/law2012/section/section238', text: 'সরকারি পাওনা আদায়', number: '২৩৮' },
      { href: '/laws/law2012/section/section239', text: 'সরকারি পাওনা অবলোপনের ক্ষমতা', number: '২৩৯' },
      { href: '/laws/law2012/section/section240', text: 'ওয়ার্ফ ব্যবহার বাবদ প্রদেয় ফি বা মজুদকরণ ফি', number: '২৪০' },
      { href: '/laws/law2012/section/section241', text: 'কাস্টমস দলিলের সার্টিফিকেট এবং নকল ইস্যু সরবরাহ', number: '২৪১' },
      { href: '/laws/law2012/section/section242', text: 'করণিক ত্রুটি, ইত্যাদির সংশোধন', number: '২৪২' },
      { href: '/laws/law2012/section/section243', text: 'কাস্টমস হাউস এজেন্টের লাইসেন্স', number: '২৪৩' },
      { href: '/laws/law2012/section/section244', text: 'এজেন্ট কর্তৃক ক্ষমতা প্রদান সংক্রান্ত দলিল দাখিল', number: '২৪৪' },
      { href: '/laws/law2012/section/section245', text: 'প্রিন্সিপাল এবং এজেন্টের দায়', number: '২৪৫' },
      { href: '/laws/law2012/section/section246', text: 'ব্যবসায়ের নথিপত্রের সংরক্ষণ', number: '২৪৬' },
      { href: '/laws/law2012/section/section247', text: 'স্বর্ণ, ইত্যাদির ব্যবসা নিয়ন্ত্রণ', number: '২৪৭' },
      { href: '/laws/law2012/section/section248', text: 'কতিপয় দলিলপত্রের উপর অর্থ আদায়', number: '২৪৮' },
      { href: '/laws/law2012/section/section249', text: 'কতিপয় ক্ষেত্রে শুল্ক মওকুফ এবং মালিককে ক্ষতিপূরণ প্রদান', number: '২৪৯' },
      { href: '/laws/law2012/section/section250', text: 'অবহেলা বা ইচ্ছাকৃত অবহেলার প্রমাণ ব্যতীত ক্ষতিপূরণ প্রদেয় হইবে না', number: '২৫০' },
      { href: '/laws/law2012/section/section251', text: 'আদেশ, সিদ্ধান্ত, ইত্যাদি জারি', number: '২৫১' },
      { href: '/laws/law2012/section/section252', text: 'দেওয়ানি আদালতে মামলা দায়ের বারিত', number: '২৫২' },
      { href: '/laws/law2012/section/section253', text: 'এই আইনের অধীন সরল বিশ্বাসে কৃত কর্ম সংরক্ষণ', number: '২৫৩' },
      { href: '/laws/law2012/section/section254', text: 'শুল্ক ফাঁকি বা আইনের লঙ্ঘন উদ্‌ঘাটনের জন্য পুরস্কার', number: '২৫৪' },
      { href: '/laws/law2012/section/section255', text: 'কাস্টমস কর্মকর্তা এবং কর্মচারীগণকে আর্থিক প্রণোদনা পুরস্কার', number: '২৫৫' },
      { href: '/laws/law2012/section/section256', text: 'আইনগত কার্যধারার নোটিশ', number: '২৫৬' },
      { href: '/laws/law2012/section/section257', text: 'সিদ্ধান্ত প্রদান', number: '২৫৭' },
      { href: '/laws/law2012/section/section258', text: 'কাস্টমস রুলিং প্রদানের ক্ষমতা', number: '২৫৮' },
      { href: '/laws/law2012/section/section259', text: 'অনুসন্ধান এবং অনুসন্ধান কেন্দ্র', number: '২৫৯' },
      { href: '/laws/law2012/section/section260', text: 'সিদ্ধান্তের কপি', number: '২৬০' },
      { href: '/laws/law2012/section/section261', text: 'গোপনীয়তা এবং বাণিজ্য সহজীকরণের উদ্দেশ্যে তথ্য বিনিময়/ব্যবস্থাপনা', number: '২৬১' },
      { href: '/laws/law2012/section/section262', text: 'পরামর্শ', number: '২৬২' },
      { href: '/laws/law2012/section/section263', text: 'বিধি প্রণয়নের ক্ষমতা', number: '২৬৩' },
      { href: '/laws/law2012/section/section264', text: 'বিশেষ বিধান', number: '২৬৪' },
      { href: '/laws/law2012/section/section264A', text: 'বিশেষায়িত কার্যকরী ইউনিট', number: '২৬৪ক' },
      { href: '/laws/law2012/section/section265', text: 'ইলেকট্রনিকভাবে কার্যসম্পাদন ও ইলেকট্রনিক মাধ্যমে প্রকাশ', number: '২৬৫' },
      { href: '/laws/law2012/section/section266', text: 'আদেশ, ফরম, নোটিশ, ব্যাখ্যা বা সার্কুলার জারির ক্ষমতা', number: '২৬৬' },
      { href: '/laws/law2012/section/section267', text: 'অসুবিধা দূরীকরণ', number: '২৬৭' },
      { href: '/laws/law2012/section/section268', text: 'ইংরেজিতে অনূদিত পাঠ প্রকাশ', number: '২৬৮' },
      { href: '/laws/law2012/section/section269', text: 'রহিতকরণ এবং হেফাজত', number: '২৬৯' },
      { href: '/laws/law2012/section/section270', text: 'Customs Act, 1969 এর উল্লেখ রহিয়াছে এইরূপ আইন, বিধি, ইত্যাদির সংশোধন', number: '২৭০' },
    ],
  },
  {
    title: 'তফসিল',
    sections: [
      { 
        href: '/pdfs/schedule.pdf', 
        text: 'তফসিল',
        isPdf: true
      },
    ],
  },
  {
    title: 'গেজেটেড অনুলিপি',
    sections: [
      { 
        href: '/pdfs/gazette.pdf', 
        text: 'কাস্টমস আইন, ২০২৩',
        isPdf: true
      },
    ],
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handlePdfClick = (e, href) => {
    e.preventDefault();
    window.open(href, '_blank');
  };

  // Flatten all sections for searching
  const allSections = useMemo(() => {
    const sections = [];
    
    chapters.forEach(chapter => {
      const hasSubsections = chapter.sections && chapter.sections.some(section => section.subsections);
      
      if (hasSubsections) {
        chapter.sections.forEach(section => {
          if (section.subsections) {
            section.subsections.forEach(subsection => {
              sections.push({
                ...subsection,
                chapterTitle: chapter.title || '',
                chapterSubtitle: chapter.subtitle || '',
                sectionSubtitle: section.subtitle || ''
              });
            });
          } else {
            sections.push({
              ...section,
              chapterTitle: chapter.title || '',
              chapterSubtitle: chapter.subtitle || '',
              sectionSubtitle: ''
            });
          }
        });
      } else {
        chapter.sections?.forEach(section => {
          sections.push({
            ...section,
            chapterTitle: chapter.title || '',
            chapterSubtitle: chapter.subtitle || '',
            sectionSubtitle: ''
          });
        });
      }
    });
    
    return sections;
  }, []);

  // Filter sections based on search term - WITH PRIORITY RANKING
  const filteredSections = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const term = searchTerm.toLowerCase().trim();
    
    // If search term includes "ধারা" followed by a number, search specifically by section number
    const sectionNumberMatch = term.match(/ধারা\s*(\d+\.?\d*)/);
    if (sectionNumberMatch) {
      const sectionNumber = sectionNumberMatch[1];
      const exactMatch = allSections.filter(section => 
        section.number.toString() === sectionNumber
      );
      return exactMatch.map(section => ({ ...section, priority: 1 }));
    }
    
    // Search by section number directly
    if (/^\d+\.?\d*$/.test(term)) {
      const exactMatch = allSections.filter(section => 
        section.number.toString() === term
      );
      return exactMatch.map(section => ({ ...section, priority: 1 }));
    }
    
    const searchResults = allSections.map(section => {
      const searchFields = [
        section.text?.toLowerCase() || '',
        section.chapterTitle?.toLowerCase() || '',
        section.chapterSubtitle?.toLowerCase() || '',
        section.sectionSubtitle?.toLowerCase() || '',
      ].join(' ');
      
      let priority = 0;
      
      // Exact match (পুরো বাক্য exact মিলে গেলে)
      if (searchFields.includes(term)) {
        priority = 1; // Highest priority
      }
      // Starts with match (শুরুতে মিলে গেলে)
      else if (searchFields.startsWith(term)) {
        priority = 2;
      }
      // Contains all words in order (সব words সঠিক order এ থাকলে)
      else if (searchFields.includes(term)) {
        priority = 3;
      }
      // Contains all words but not necessarily in order (সব words থাকলে)
      else {
        const searchWords = term.split(/\s+/).filter(word => word.length > 0);
        const containsAllWords = searchWords.every(word => searchFields.includes(word));
        if (containsAllWords) {
          priority = 4;
        }
        // Contains some words (কিছু word মিললে)
        else {
          const containsSomeWords = searchWords.some(word => searchFields.includes(word));
          if (containsSomeWords) {
            priority = 5;
          }
        }
      }
      
      return { ...section, priority };
    }).filter(section => section.priority > 0);
    
    // Sort by priority (lower number = higher priority)
    return searchResults.sort((a, b) => a.priority - b.priority);
  }, [searchTerm, allSections]);

  // Close search when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsSearchOpen(false);
    };

    if (isSearchOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen]);

  const regularChapters = chapters.filter(ch => 
    ch.title !== 'তফসিল' && ch.title !== 'গেজেটেড অনুলিপি'
  );
  
  const specialChapters = chapters.filter(ch => 
    ch.title === 'তফসিল' || ch.title === 'গেজেটেড অনুলিপি'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
        <header className="relative overflow-hidden text-white shadow-lg bg-gradient-to-r from-green-600 to-green-700">
          <div className="container px-6 py-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
              {/* Text Content */}
              <div className="flex-1 lg:pr-8">
                <h1 className="mb-2 text-3xl font-bold md:text-4xl">কাস্টমস আইন, ১৯৬৯</h1>
                <p className="text-lg opacity-90">( ৮ই মার্চ, ১৯৬৯ )</p>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mt-6">
                  <div className="relative" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="text"
                      placeholder="আইন অনুসন্ধান করুন... (বাংলা বা ইংরেজি)"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsSearchOpen(true);
                      }}
                      onFocus={() => setIsSearchOpen(true)}
                      className="w-full px-4 py-3 pl-12 text-white border rounded-lg bg-white/10 backdrop-blur-sm border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    />
                    
                    <svg 
                      className="absolute w-5 h-5 transform -translate-y-1/2 left-4 top-1/2 text-white/70" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                      />
                    </svg>
                    
                    {searchTerm && (
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setIsSearchOpen(false);
                        }}
                        className="absolute transform -translate-y-1/2 right-4 top-1/2 text-white/70 hover:text-white"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Search Results Dropdown */}
                  {isSearchOpen && searchTerm && (
                    <div 
                      className="absolute left-0 right-0 z-50 mt-2 overflow-y-auto bg-white rounded-lg shadow-xl top-full max-h-96"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {filteredSections.length > 0 ? (
                        <div className="py-2">
                          <div className="px-4 py-2 text-sm text-gray-500 border-b">
                            {filteredSections.length}টি ফলাফল পাওয়া গেছে
                            <span className="px-2 py-1 ml-2 text-xs text-blue-800 bg-blue-100 rounded">
                              Exact match: {filteredSections.filter(s => s.priority === 1).length}
                            </span>
                          </div>
                          {filteredSections.map((section, index) => (
                            <Link
                              key={index}
                              href={section.href}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchTerm('');
                              }}
                              className={`block px-4 py-3 hover:bg-blue-50 border-b last:border-b-0 transition-colors duration-200 ${
                                section.priority === 1 ? 'bg-yellow-50 border-l-4 border-yellow-400' : ''
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <span className="font-medium text-blue-700">ধারা {section.number}</span>
                                <div className="flex items-center space-x-2">
                                  <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded">
                                    {section.chapterTitle}
                                  </span>
                                  {section.priority === 1 && (
                                    <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                                      Exact Match
                                    </span>
                                  )}
                                </div>
                              </div>
                              <p className="mt-1 text-gray-800">{section.text}</p>
                              {section.sectionSubtitle && (
                                <p className="mt-1 text-sm text-gray-600">{section.sectionSubtitle}</p>
                              )}
                              <p className="mt-1 text-xs text-gray-500">{section.chapterSubtitle}</p>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 text-center text-gray-500">
                          কোন ফলাফল পাওয়া যায়নি। অন্য শব্দ দিয়ে চেষ্টা করুন।
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side Image */}
              <div className="flex-shrink-0 mt-6 lg:mt-0 lg:ml-6">
                <div className="w-full lg:w-64 xl:w-80">
                  <img 
                    src="/law-banner/law-banner-img.png" 
                    alt="Law Banner" 
                    className="object-contain w-full h-32 rounded-lg lg:h-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

      {/* Main Content */}
      <main className="container px-6 py-8 mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="p-6 mb-8 bg-white border-l-4 border-green-500 shadow-md rounded-xl">
          <h2 className="mb-3 font-semibold text-center text-black text-md">Customs Act, 1969 রহিতক্রমে যুগোপযোগী করিয়া নূতনভাবে প্রণয়নকল্পে প্রণীত আইন</h2>
          
          {/* Added important legal phrases */}
          <div className="p-4 my-4 border-l-4 rounded-r-lg bg-gray-50">
            <p className="italic text-black">
              <span className="font-semibold">যেহেতু</span> Customs Act, 1969 (Act No. IV of 1969) রহিতক্রমে যুগোপযোগী করিয়া নূতনভাবে প্রণয়ন করা সমীচীন ও প্রয়োজনীয়;
              <br />
              <span className="font-semibold">সেহেতু</span> এতদ্‌দ্বারা নিম্নরূপ আইন করা হইল:-
            </p>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 gap-6">
          {regularChapters.map((chapter, index) => (
            <div key={index} className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="p-4 font-bold text-black bg-gradient-to-r from-green-300 to-green-300">
                <h2 className="text-xl text-center">{chapter.title}</h2>
                <p className="text-sm text-center opacity-90">{chapter.subtitle}</p>
              </div>
              
              <div className="p-4">
                {chapter.sections[0]?.subtitle ? (
                  <div className="space-y-4">
                    {chapter.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="pb-1 mb-2 font-semibold text-blue-800 border-b border-blue-100 text-md">
                          {section.subtitle}
                        </h3>
                        <ul className="space-y-1">
                          {section.subsections?.map((subsection, subIdx) => (
                            <li key={subIdx} className="flex items-start">
                              <span className="font-medium text-blue-700 min-w-[2.5rem]">{subsection.number}.</span>
                              <Link 
                                href={subsection.href} 
                                className="text-blue-600 transition-colors duration-200 hover:text-blue-800 hover:underline"
                              >
                                {subsection.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {chapter.sections?.map((section, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="font-medium text-blue-700 min-w-[2.5rem]">{section.number}.</span>
                        <Link 
                          href={section.href} 
                          className="text-blue-600 transition-colors duration-200 hover:text-green-800 hover:underline"
                        >
                          {section.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Special Chapters */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          {specialChapters.map((specialChapter, idx) => (
            <div key={idx} className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="p-4 text-black bg-gradient-to-r from-green-300 to-green-300">
                <h2 className="text-xl font-bold text-center">{specialChapter.title}</h2>
                <p className="text-sm opacity-90">{specialChapter.subtitle}</p>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {specialChapter.sections?.map((section, secIdx) => (
                    <li key={secIdx} className="flex items-start">
                      {section.isPdf ? (
                        <a 
                          href={section.href} 
                          onClick={(e) => handlePdfClick(e, section.href)}
                          className="flex items-center text-blue-600 transition-colors duration-200 hover:text-green-800 hover:underline"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {section.text}
                        </a>
                      ) : (
                        <Link 
                          href={section.href} 
                          className="text-purple-600 transition-colors duration-200 hover:text-purple-800 hover:underline"
                        >
                          {section.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;