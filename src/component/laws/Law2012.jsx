'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const chapters = [
  {
    title: 'প্রথম অধ্যায়',
    subtitle: 'প্রারম্ভিক',
    sections: [
      { href: '/section1', text: 'সংক্ষিপ্ত শিরোনাম ও প্রবর্তন', number: '১' },
      { href: '/section2', text: 'সংজ্ঞা', number: '২' },
      { href: '/section3', text: 'আইনের প্রাধান্য', number: '৩' },
    ],
  },
  {
    title: 'দ্বিতীয় অধ্যায়',
    subtitle: 'মূসক নিবন্ধন এবং টার্নওভার কর তালিকাভুক্তি',
    sections: [
      { href: '/section4', text: 'মূসক নিবন্ধনযোগ্য ব্যক্তি', number: '৪' },
      { href: '/section5', text: 'নিবন্ধন', number: '৫' },
      { href: '/section6', text: 'মূসক নিবন্ধন পদ্ধতি', number: '৬' },
      { href: '/section7', text: 'নিবন্ধিত ব্যক্তিবর্গের তালিকা প্রকাশ ও সংরক্ষণ', number: '৭' },
      { href: '/section8', text: 'স্বেচ্ছা মূসক নিবন্ধন', number: '৮' },
      { href: '/section9', text: 'মূসক নিবন্ধন বাতিল', number: '৯' },
      { href: '/section10', text: 'তালিকাভুক্তিযোগ্য ব্যক্তি ও তালিকাভুক্তি', number: '১০' },
      { href: '/section11', text: 'তালিকাভুক্তি বাতিল', number: '১১' },
      { href: '/section12', text: '[***] স্ব-উদ্যোগে নিবন্ধনযোগ্য ও তালিকাভুক্তিযোগ্য ব্যক্তিকে নিবন্ধন বা তালিকাভুক্তিকরণ', number: '১২' },
      { href: '/section13', text: 'সনদপত্র প্রদর্শনে নিবন্ধিত বা তালিকাভুক্ত ব্যক্তির দায়িত্ব', number: '১৩' },
      { href: '/section14', text: 'পরিবর্তিত তথ্য অবহিতকরণে নিবন্ধিত বা তালিকাভুক্ত ব্যক্তির দায়িত্ব', number: '১৪' },
    ],
  },
  {
    title: 'তৃতীয় অধ্যায়',
    subtitle: 'মূল্য সংযোজন কর আরোপ',
    sections: [
      { href: '/section15', text: 'মূসক আরোপ', number: '১৫' },
      { href: '/section16', text: 'মূল্য সংযোজন কর পরিশোধে দায়ী ব্যক্তি', number: '১৬' },
      { href: '/section17', text: 'বাংলাদেশে প্রদত্ত সরবরাহ', number: '১৭' },
      { href: '/section18', text: 'নিবন্ধিত সরবরাহকারী এবং সরবরাহগ্রহীতা', number: '১৮' },
      { href: '/section19', text: 'অনাবাসিক ব্যক্তির মূসক এজেন্ট', number: '১৯' },
      { href: '/section20', text: 'আমদানিকৃত সেবার ক্ষেত্রে গ্রহীতার নিকট হইতে (reverse charged) কর আদায়', number: '২০' },
      { href: '/section21', text: 'শূন্যহার বিশিষ্ট সরবরাহ', number: '২১' },
      { href: '/section22', text: 'বাংলাদেশের বাহিরে অবস্থিত ভূমি', number: '২২' },
      { href: '/section23', text: 'রপ্তানির নিমিত্ত পণ্য সরবরাহ', number: '২৩' },
      { href: '/section24', text: 'শূন্যহার বিশিষ্ট সেবা সরবরাহ', number: '২৪' },
      { href: '/section25', text: 'ট্রাভেল এজেন্ট এবং ট্যুর অপারেটর', number: '২৫' },
      { href: '/section26', text: 'অব্যাহতিপ্রাপ্ত সরবরাহ বা অব্যাহতিপ্রাপ্ত আমদানি', number: '২৬' },
    ],
  },
  {
    title: 'চতুর্থ অধ্যায়',
    subtitle: 'মূসক আদায় পদ্ধতি',
    sections: [
      { 
        subtitle: 'খণ্ড ‘ক’- আমদানির ক্ষেত্রে',
        subsections: [
          { href: '/section27', text: 'করযোগ্য আমদানির ক্ষেত্রে মূসক আদায় পদ্ধতি', number: '২৭' },
          { href: '/section28', text: 'করযোগ্য আমদানির মূসক আরোপযোগ্য ভিত্তিমূল্য নির্ধারণ', number: '২৮' },
          { href: '/section29', text: 'পুনঃআমদানিকৃত পণ্যের মূল্য নির্ধারণ', number: '২৯' },
          { href: '/section30', text: 'রপ্তানির নিমিত্ত আমদানি', number: '৩০' },
          { href: '/section31', text: 'আমদানিকালে আগাম কর পরিশোধ ও সমন্বয়', number: '৩১' },
        ]
      },
      { 
        subtitle: 'খন্ড ‘খ’- সাধারণ সরবরাহের ক্ষেত্রে',
        subsections: [
          { href: '/section32', text: 'করযোগ্য সরবরাহের মূল্য নির্ধারণ', number: '৩২' },
          { href: '/section32.1', text: 'বোর্ড কর্তৃক ব্যাখ্যা প্রদান', number: '৩২.ক' },
          { href: '/section33', text: 'করযোগ্য সরবরাহের উপর মূসক প্রদানকাল', number: '৩৩' },
          { href: '/section34', text: 'আনুক্রমিক বা পর্যাবৃত্ত সরবরাহ', number: '৩৪' },
          { href: '/section35', text: 'একই চালানে একাধিক ধরনের পণ্য ও সেবা সরবরাহ', number: '৩৫' },
        ]
      },
      { 
        subtitle: 'খন্ড ‘গ’- বিশেষ সরবরাহের ক্ষেত্রে',
        subsections: [
          { href: '/section36', text: 'চলমান ব্যবসা হিসাবে প্রতিষ্ঠান বিক্রয়', number: '৩৬' },
          { href: '/section37', text: 'অধিকার (rights), ভবিষ্য ক্রয় বা বিক্রয়ের অধিকার (option) এবং ভাউচার', number: '৩৭' },
          { href: '/section38', text: 'আগাম মূল্য পরিশোধিত টেলিযোগাযোগ দ্রব্য বা সেবা সরবরাহ', number: '৩৮' },
          { href: '/section39', text: 'লটারী, লাকী ড্র, হাউজি, র‌্যাফেল ড্র এবং অনুরূপ উদ্যোগ', number: '৩৯' },
          { href: '/section40', text: 'কর্মচারী বা কর্মকর্তাকে নগদ অর্থের পরিবর্তে দ্রব্যের মাধ্যমে প্রদত্ত সুবিধার মূল্য', number: '৪০' },
          { href: '/section41', text: 'কিস্তিতে পণ্য বিক্রয়', number: '৪১' },
          { href: '/section42', text: 'বাতিলকৃত লেনদেন', number: '৪২' },
          { href: '/section43', text: 'ঋণ পরিশোধে সম্পত্তি বিক্রয়', number: '৪৩' },
          { href: '/section44', text: 'বিক্রয় যন্ত্র', number: '৪৪' },
        ]
      },
    ],
  },
  {
    title: 'পঞ্চম অধ্যায়',
    subtitle: 'করদাতা কর্তৃক প্রদেয় নীট কর নিরূপণ ও পরিশোধ',
    sections: [
      { href: '/section45', text: 'সরবরাহের উপর প্রদেয় নীট কর নিরূপণ ও পরিশোধ পদ্ধতি', number: '৪৫' },
      { href: '/section46', text: 'উপকরণ কর রেয়াত', number: '৪৬' },
      { href: '/section47', text: 'আংশিক উপকরণ কর রেয়াত', number: '৪৭' },
      { href: '/section48', text: 'সমন্বয়', number: '৪৮' },
      { href: '/section49', text: 'উৎসে কর কর্তনকারী সত্তা কর্তৃক উৎসে কর কর্তন ও বৃদ্ধিকারী সমন্বয়', number: '৪৯' },
      { href: '/section50', text: 'উৎসে কর কর্তনের পর সরবরাহকারী কর্তৃক হ্রাসকারী সমন্বয়', number: '৫০' },
    ],
  },
  {
    title: 'ষষ্ঠ অধ্যায়',
    subtitle: 'চালানপত্র এবং দলিলপত্র',
    sections: [
      { href: '/section51', text: 'কর চালানপত্র', number: '৫১' },
      { href: '/section52', text: 'ক্রেডিট নোট এবং ডেবিট নোট', number: '৫২' },
      { href: '/section53', text: 'উৎসে কর কর্তন সনদপত্র', number: '৫৩' },
      { href: '/section54', text: 'কর দলিলাদি সংক্রান্ত অন্যান্য বিধান', number: '৫৪' },
    ],
  },
  {
    title: 'সপ্তম অধ্যায়',
    subtitle: 'সম্পূরক শুল্ক আরোপ ও আদায়',
    sections: [
      { href: '/section55', text: 'সম্পূরক শুল্ক আরোপ', number: '৫৫' },
      { href: '/section56', text: 'সম্পূরক শুল্ক পরিশোধে দায়ী ব্যক্তি', number: '৫৬' },
      { href: '/section57', text: 'সম্পূরক শুল্ক আরোপযোগ্য মূল্য', number: '৫৭' },
      { href: '/section58', text: 'তামাক এবং এ্যালকোহলযুক্ত পণ্যের ক্ষেত্রে বিশেষ পরিকল্প (special scheme)', number: '৫৮' },
      { href: '/section59', text: 'আমদানির উপর সম্পূরক শুল্ক আদায়', number: '৫৯' },
      { href: '/section60', text: 'সরবরাহের উপর সম্পূরক শুল্ক আদায়', number: '৬০' },
      { href: '/section61', text: 'সম্পূরক শুল্ক আরোপযোগ্য পণ্যের অনুমিত সরবরাহ', number: '৬১' },
      { href: '/section62', text: 'সম্পূরক শুল্কের নিমিত্ত হ্রাসকারী সমন্বয়', number: '৬২' },
    ],
  },
  {
    title: 'অষ্টম অধ্যায়',
    subtitle: 'টার্নওভার কর আরোপ ও আদায়',
    sections: [
      { href: '/section63', text: 'টার্নওভার কর আরোপ ও আদায়', number: '৬৩' },
    ],
  },
  {
    title: 'নবম অধ্যায়',
    subtitle: 'দাখিলপত্র পেশ ও উহার সংশোধন',
    sections: [
      { href: '/section64', text: 'দাখিলপত্র পেশ', number: '৬৪' },
      { href: '/section65', text: 'বিলম্বে দাখিলপত্র পেশ', number: '৬৫' },
      { href: '/section66', text: 'দাখিলপত্রে সংশোধন', number: '৬৬' },
      { href: '/section67', text: 'পূর্ণ, অতিরিক্ত বা বিকল্প দাখিলপত্র পেশ', number: '৬৭' },
    ],
  },
  {
    title: 'দশম অধ্যায়',
    subtitle: 'ঋণাত্মক নীট অর্থ জের টানা ও ফেরত প্রদান',
    sections: [
      { href: '/section68', text: 'ঋণাত্নক নীট অর্থ জের টানা ও ফেরত প্রদান', number: '৬৮' },
      { href: '/section69', text: 'ঋণাত্মক নীট পরিমাণ অর্থ জের টানা ব্যতিরেকে ফেরৎ প্রদান', number: '৬৯' },
      { href: '/section70', text: 'ফেরৎ প্রদত্ত অর্থের প্রয়োগ', number: '৭০' },
      { href: '/section71', text: 'কূটনৈতিক এবং অন্যান্য আন্তর্জাতিক সংস্থা কর্তৃক প্রদত্ত কর ফেরত প্রদান', number: '৭১' },
      { href: '/section72', text: 'অতিরিক্ত পরিশোধিত কর সমন্বয় বা ফেরত প্রদান', number: '৭২' },
    ],
  },
  {
    title: 'একাদশ অধ্যায়',
    subtitle: '[***] কর নির্ধারণ',
    sections: [
      { href: '/section73', text: 'কর নির্ধারণ', number: '৭৩' },
      { href: '/section74', text: 'সরবরাহ গ্রহীতার মিথ্যা ঘোষণা', number: '৭৪' },
      { href: '/section75', text: 'সরবরাহকারীর মিথ্যা বর্ণনা', number: '৭৫' },
      { href: '/section76', text: 'কর সুবিধা প্রদান ও রদকরণ (negation)', number: '৭৬' },
      { href: '/section77', text: 'কর নির্ধারণী নোটিশের গ্রহণযোগ্যতা', number: '৭৭' },
    ],
  },
  {
    title: 'দ্বাদশ অধ্যায়',
    subtitle: 'মূল্য সংযোজন কর কর্তৃপক্ষ',
    sections: [
      { href: '/section78', text: 'মূল্য সংযোজন কর কর্তৃপক্ষ এবং উহার কর্মকর্তা', number: '৭৮' },
      { href: '/section79', text: 'মূসক কর্তৃপক্ষের দায়িত্ব এবং কর্তব্য', number: '৭৯' },
      { href: '/section80', text: 'মূসক কর্মকর্তার আদেশ বা সিদ্ধান্ত সংশোধনে বোর্ডের ক্ষমতা', number: '৮০' },
      { href: '/section81', text: 'ক্ষমতা অর্পণ', number: '৮১' },
      { href: '/section82', text: 'মূসক কর্মকর্তাকে সহায়তা প্রদান', number: '৮২' },
      { href: '/section83', text: 'মূসক কর্মকর্তার প্রবেশ ও তল্লাশির ক্ষমতা', number: '৮৩' },
      { href: '/section84', text: 'পণ্য জব্দকরণ ও উহার নিষ্পত্তি', number: '৮৪' },
      { href: '/section85', text: '[ব্যর্থতা, অনিয়ম বা কর ফাঁকির ক্ষেত্রে] জরিমানা আরোপ', number: '৮৫' },
      { href: '/section86', text: 'ন্যায় নির্ণয়ার্থ (adjudication) কার্যধারা গ্রহণে মূসক কর্মকর্তাগণের আর্থিক সীমা', number: '৮৬' },
      { href: '/section87', text: 'সমন প্রেরণ', number: '৮৭' },
      { href: '/section88', text: 'কাস্টমস কর্মকর্তাগণের দায়িত্ব এবং ক্ষমতা', number: '৮৮' },
      { href: '/section89', text: 'গোপনীয়তা', number: '৮৯' },
      { href: '/section89.1', text: 'মূল্য সংযোজন কর আইনের ক্ষেত্রে অন্যান্য আইনের প্রয়োগ', number: '৮৯.ক' },
    ],
  },
  {
    title: 'ত্রয়োদশ অধ্যায়',
    subtitle: 'নিরীক্ষা এবং অনুসন্ধান',
    sections: [
      { href: '/section90', text: 'করদাতার অর্থনৈতিক কার্যক্রম নিরীক্ষা এবং অনুসন্ধান', number: '৯০' },
      { href: '/section90.1', text: 'বার্ষিক নিরীক্ষিত আর্থিক বিবরণী দাখিল', number: '৯০.ক' },
      { href: '/section91', text: 'মূসক কর্মকর্তাগণের ক্ষমতা', number: '৯১' },
      { href: '/section92', text: 'তত্ত্বাবধানাধীন সরবরাহ, পর্যবেক্ষণ ও নজরদারী', number: '৯২' },
      { href: '/section93', text: 'একাধিক দাপ্তরিক নিরীক্ষা', number: '৯৩' },
      { href: '/section94', text: 'বিশেষ নিরীক্ষা', number: '৯৪' },
    ],
  },
  {
    title: 'চতুর্দশ অধ্যায়',
    subtitle: 'বকেয়া কর আদায়',
    sections: [
      { href: '/section95', text: 'বকেয়া কর আদায়', number: '৯৫' },
      { href: '/section96', text: 'দেওয়ানী কার্যবিধির অধীন মূসক কর্মকর্তার ক্ষমতা', number: '৯৬' },
      { href: '/section97', text: 'বকেয়া কর আদায়ের ক্ষেত্রে অধিক্ষেত্রের পরিবর্তন', number: '৯৭' },
      { href: '/section98', text: 'আদায়কৃত অর্থ বা জামানতের বিলিবন্টন', number: '৯৮' },
      { href: '/section99', text: 'খেলাপি করদাতার স্থাবর সম্পত্তির উপর সরকারের পূর্বস্বত্ব (lien) ও উহার ক্রোক', number: '৯৯' },
      { href: '/section100', text: 'পণ্য জব্দকরণ, উহার বিক্রয় ও বিক্রয়লব্ধ অর্থের বিলিবন্টন', number: '১০০' },
      { href: '/section101', text: 'প্রতিনিধির দায়দায়িত্ব এবং বাধ্যবাধকতা', number: '১০১' },
      { href: '/section102', text: 'রিসিভারের দায়িত্ব', number: '১০২' },
      { href: '/section103', text: 'কোম্পানী বা ব্যক্তি সংঘ বা সম্পত্তি উন্নয়নে যৌথ উদ্যোগের পরিচালক বা উদ্যোক্তার দায়', number: '১০৩' },
      { href: '/section104', text: 'অংশীদারি কারবার বা অনিগমিত সংঘের ধারাবাহিকতা', number: '১০৪' },
      { href: '/section105', text: 'করদাতার মৃত্যু বা দেউলিয়াত্ব ঘোষণা', number: '১০৫' },
      { href: '/section106', text: 'বকেয়া কর কিস্তিতে পরিশোধ', number: '১০৬' },
    ],
  },
  {
    title: 'পঞ্চদশ অধ্যায়',
    subtitle: 'ফরম, নোটিশ এবং রেকর্ডপত্র সংরক্ষণ',
    sections: [
      { href: '/section107', text: 'রেকর্ডপত্র এবং হিসাব সংরক্ষণ', number: '১০৭' },
      { href: '/section108', text: 'ফরম, নোটিশ এবং দলিলাদির সত্যায়ন', number: '১০৮' },
      { href: '/section109', text: 'নোটিশ জারি', number: '১০৯' },
      { href: '/section110', text: 'দলিলপত্রের বৈধতা', number: '১১০' },
    ],
  },
  {
    title: 'ষোড়শ অধ্যায়',
    subtitle: 'অপরাধ, বিচার ও দণ্ড',
    sections: [
      { href: '/section111', text: 'মূসক নিবন্ধন বা টার্নওভার কর সনদপত্র ও কর দলিল সংক্রান্ত অপরাধ ও দণ্ড', number: '১১১' },
      { href: '/section112', text: 'মিথ্যা বা বিভ্রান্তিকর বিবৃতি বা বিবরণ প্রদানের অপরাধ ও দণ্ড', number: '১১২' },
      { href: '/section113', text: 'প্রতিবন্ধকতা সৃষ্টির অপরাধ ও দণ্ড', number: '১১৩' },
      { href: '/section114', text: 'অপরাধের তদন্ত, বিচার ও আপীল', number: '১১৪' },
      { href: '/section115', text: 'জুডিসিয়াল ম্যাজিস্ট্রেট বা মেট্রোপলিটন ম্যাজিস্ট্রেটের অতিরিক্ত ক্ষমতা', number: '১১৫' },
      { href: '/section116', text: 'কোম্পানী, ব্যক্তি সংঘ বা সম্পত্তি উন্নয়নে যৌথ উদ্যোগ কর্তৃক অপরাধ সংঘটন', number: '১১৬' },
      { href: '/section117', text: 'অপরাধে সহায়তাকারী', number: '১১৭' },
      { href: '/section118', text: 'মামলা দায়েরের পূর্বানুমোদন।', number: '১১৮' },
      { href: '/section119', text: 'অপরাধের আপোষরফা', number: '১১৯' },
      { href: '/section120', text: 'অর্থদণ্ড প্রদেয় করের অতিরিক্ত', number: '১২০' },
    ],
  },
  {
    title: 'সপ্তদশ অধ্যায়',
    subtitle: 'আপীল ও রিভিশন',
    sections: [
      { href: '/section121', text: 'কমিশনার (আপীল) এর নিকট আপীল', number: '১২১' },
      { href: '/section122', text: '[আপিল ট্রাইব্যুনালে] আপীল', number: '১২২' },
      { href: '/section123', text: 'কার্যধারায় সাক্ষ্য প্রমাণের দায়', number: '১২৩' },
      { href: '/section124', text: 'হাইকোর্ট বিভাগে [আপিল]', number: '১২৪' },
      { href: '/section125', text: 'বিকল্প উপায়ে বিরোধ নিষ্পত্তি', number: '১২৫' },
    ],
  },
  {
    title: 'অষ্টাদশ অধ্যায়',
    subtitle: 'বিবিধ',
    sections: [
      { href: '/section126', text: 'অব্যাহতি', number: '১২৬' },
      { href: '/section126.1', text: 'পুরস্কার ও কর্মদক্ষতা প্রণোদনা প্রদান', number: '১২৬.ক' },
      { href: '/section127', text: 'প্রদেয় করের উপর সুদ আরোপ', number: '১২৭' },
      { href: '/section127.1', text: 'সরকারি পাওনা অবলোপনের ক্ষমতা', number: '১২৭.ক' },
      { href: '/section127.2', text: 'কতিপয় পণ্য বা সেবার ক্ষেত্রে কর পরিশোধের সময় ও পদ্ধতি নির্ধারণ', number: '১২৭.খ' },
      { href: '/section128', text: 'অনলাইনে কার্যসম্পাদন, দাখিলপত্র পেশকরণ এবং কর পরিশোধ, ইত্যাদি', number: '১২৮' },
      { href: '/section129', text: 'আদালতে মামলা দায়েরের ক্ষেত্রে প্রতিবন্ধকতা', number: '১২৯' },
      { href: '/section129.1', text: 'সরল বিশ্বাসে কৃত কাজকর্ম রক্ষণ', number: '১২৯.ক' },
      { href: '/section130', text: 'মূসক পরামর্শক নিয়োগ', number: '১৩০' },
      { href: '/section131', text: 'করণিক ত্রুটি, ইত্যাদির সংশোধন', number: '১৩১' },
      { href: '/section132', text: 'দলিলপত্রের প্রত্যায়িত অনুলিপি', number: '১৩২' },
      { href: '/section133', text: 'মূসক ছাড়পত্র প্রদান', number: '১৩৩' },
      { href: '/section134', text: 'ব্যক্তি মালিকানাধীন প্রতিষ্ঠানের মাধ্যমে কার্যক্রম সম্পাদন', number: '১৩৪' },
      { href: '/section135', text: 'বিধি প্রণয়নের ক্ষমতা', number: '১৩৫' },
      { href: '/section135.1', text: 'মূসক কর্মকর্তা ও কর্মচারীদের ইউনিফর্ম এবং ভাতা নির্ধারণ', number: '১৩৫.ক' },
      { href: '/section136', text: 'ইংরেজিতে অনূদিত পাঠ প্রকাশ', number: '১৩৬' },
      { href: '/section137', text: 'রহিতকরণ ও হেফাজত', number: '১৩৭' },
      { href: '/section138', text: 'ক্রান্তিকালীন কর হিসাব', number: '১৩৮' },
      { href: '/section139', text: 'এই আইন প্রবর্তনের পর আবদ্ধ চুক্তি', number: '১৩৯' },
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
        text: 'মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২ এর কার্যকারিতা সংক্রান্ত গেজেট কপি',
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
      <header className="bg-gradient-to-r from-green-600 to-blue-700 text-white shadow-lg relative">
        <div className="container mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২</h1>
          <p className="text-lg opacity-90">Value Added Tax and Supplementary Duty Act, 2012</p>
          
          {/* Search Bar */}
          <div className="mt-6 max-w-2xl relative">
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
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" 
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
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {isSearchOpen && searchTerm && (
              <div 
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredSections.length > 0 ? (
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm text-gray-500 border-b">
                      {filteredSections.length}টি ফলাফল পাওয়া গেছে
                      <span className="text-xs ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded">
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
                        <div className="flex justify-between items-start">
                          <span className="font-medium text-blue-700">ধারা {section.number}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {section.chapterTitle}
                            </span>
                            {section.priority === 1 && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                Exact Match
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-800 mt-1">{section.text}</p>
                        {section.sectionSubtitle && (
                          <p className="text-sm text-gray-600 mt-1">{section.sectionSubtitle}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">{section.chapterSubtitle}</p>
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
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">আইনের সংক্ষিপ্ত বিবরণ</h2>
          <p className="text-gray-600">
            এই আইনটি মূল্য সংযোজন কর, সম্পূরক শুল্ক এবং টার্নওভার কর সম্পর্কিত বিধানাবলী সমন্বিত একটি পূর্ণাঙ্গ আইন। 
            আইনটি ২০১২ সালে প্রণীত হয় এবং বাংলাদেশের কর ব্যবস্থায় গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে।
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {regularChapters.map((chapter, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-4">
                <h2 className="text-lg font-bold">{chapter.title}</h2>
                <p className="text-sm opacity-90">{chapter.subtitle}</p>
              </div>
              
              <div className="p-4">
                {chapter.sections[0]?.subtitle ? (
                  <div className="space-y-4">
                    {chapter.sections.map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-md font-semibold text-blue-800 mb-2 border-b border-blue-100 pb-1">
                          {section.subtitle}
                        </h3>
                        <ul className="space-y-1">
                          {section.subsections?.map((subsection, subIdx) => (
                            <li key={subIdx} className="flex items-start">
                              <span className="font-medium text-blue-700 min-w-[2.5rem]">{subsection.number}.</span>
                              <Link 
                                href={subsection.href} 
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
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
                          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialChapters.map((specialChapter, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
                <h2 className="text-lg font-bold">{specialChapter.title}</h2>
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
                          className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200 flex items-center"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {section.text}
                        </a>
                      ) : (
                        <Link 
                          href={section.href} 
                          className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
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