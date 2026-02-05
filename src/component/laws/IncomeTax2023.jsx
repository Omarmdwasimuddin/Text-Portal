'use client'
import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const chapters = [
  {
    title: 'অংশ ১',
    subtitle: 'প্রারম্ভিক',
    sections: [
      { 
        href: '/laws/incometax2023/section/section01', 
        text: 'সংক্ষিপ্ত শিরোনাম ও প্রবর্তন', 
        number: '১'
      },
      { 
        href: '/laws/incometax2023/section/section02', 
        text: 'সংজ্ঞা', 
        number: '২' 
      },
      { 
        href: '/laws/incometax2023/section/section03', 
        text: 'আইনের প্রাধান্য', 
        number: '৩'
      },
    ],
  },
  {
    title: 'অংশ ২',
    subtitle: 'কর প্রশাসন',
    sections: [
          {
            href: '/laws/incometax2023/section/section04',
            text: 'আয়কর কর্তৃপক্ষ',
            number: '৪',
          },
          {
            href: '/laws/incometax2023/section/section05',
            text: 'আয়কর কর্তৃপক্ষ নিয়োগ',
            number: '৫',
          },
          {
            href: '/laws/incometax2023/section/section06',
            text: 'ক্ষমতা অর্পণ',
            number: '৬',
          },
          {
            href: '/laws/incometax2023/section/section07',
            text: 'আয়কর কর্তৃপক্ষের অধীনস্থতা ও নিয়ন্ত্রণ',
            number: '৭',
          },
          {
            href: '/laws/incometax2023/section/section08',
            text: 'আয়কর কর্তৃপক্ষের দায়িত্ব ও কার্যাবলি এবং অধিক্ষেত্র',
            number: '৮',
          },
          {
            href: '/laws/incometax2023/section/section09',
            text: 'উত্তরসূরি কর্তৃক কর্তৃত্ব প্রয়োগ',
            number: '৯',
          },
          {
            href: '/laws/incometax2023/section/section10',
            text: 'বোর্ডের নির্দেশনা অনুসরণ',
            number: '১০',
          },
          {
            href: '/laws/incometax2023/section/section11',
            text: 'উপকর কমিশনারের প্রতি নির্দেশনা',
            number: '১১',
          },
          {
            href: '/laws/incometax2023/section/section12',
            text: 'কর নির্ধারণী কার্যক্রমে পরিদর্শী অতিরিক্ত কর কমিশনারের ক্ষমতা প্রয়োগ',
            number: '১২',
          },
    ],
  },
  {
    title: 'অংশ ৩',
    subtitle: 'কর আপিল ট্রাইব্যুনাল',
        sections: [
          {
            href: '/laws/incometax2023/section/section13',
            text: 'কর আপিল ট্রাইব্যুনাল প্রতিষ্ঠা',
            number: '১৩',
          },
          {
            href: '/laws/incometax2023/section/section14',
            text: 'বেঞ্চ কর্তৃক ট্রাইব্যুনালের ক্ষমতা প্রয়োগ',
            number: '১৪',
          },
          {
            href: '/laws/incometax2023/section/section15',
            text: 'বেঞ্চের সিদ্ধান্ত',
            number: '১৫',
          },
          {
            href: '/laws/incometax2023/section/section16',
            text: 'একজন সদস্য কর্তৃক ক্ষমতা প্রয়োগ',
            number: '১৬',
          },
          {
            href: '/laws/incometax2023/section/section17',
            text: 'কার্যপদ্ধতি নিয়ন্ত্রণ',
            number: '১৭',
          },
        ],
  },
  {
    title: 'অংশ ৪',
    subtitle: 'আয়কর ধার্যকরণ',
    sections: [
      {
        title: 'প্রথম অধ্যায়',
        subtitle: 'কর ধার্যকরণের ভিত্তি',
        sections: [
          {
            href: '/laws/incometax2023/section/section18',
            text: 'কর ধার্যকরণ',
            number: '১৮'
          },
          {
            href: '/laws/incometax2023/section/section19',
            text: 'অতিরিক্ত কর আরোপ',
            number: '১৯'
          },
          {
            href: '/laws/incometax2023/section/section20',
            text: '[বিলুপ্ত]',
            number: '২০'
          },
          {
            href: '/laws/incometax2023/section/section21',
            text: 'রিটার্নে অপ্রদর্শিত বিদেশস্থ সম্পত্তির উপর জরিমানা আরোপ',
            number: '২১'
          },
          {
            href: '/laws/incometax2023/section/section22',
            text: 'সংরক্ষিত আয় (retained earnings), সঞ্চিতি (reserve), উদ্বৃত্ত (surplus), ইত্যাদির উপর কর আরোপ',
            number: '২২'
          },
          {
            href: '/laws/incometax2023/section/section23',
            text: 'স্টক লভ্যাংশের উপর কর আরোপ',
            number: '২৩'
          },
          {
            href: '/laws/incometax2023/section/section24',
            text: 'আয়ের স্বপ্রণোদিত প্রদর্শন',
            number: '২৪'
          },
          {
            href: '/laws/incometax2023/section/section25',
            text: 'কর পরিগণনার বিশেষ বিধান',
            number: '২৫'
          }
        ]
      },
      {
        title: 'দ্বিতীয় অধ্যায়',
        subtitle: 'আয়ের আওতা',
        sections: [
          {
            href: '/laws/incometax2023/section/section26',
            text: 'মোট আয়ের আওতা',
            number: '২৬'
          },
          {
            href: '/laws/incometax2023/section/section27',
            text: 'বাংলাদেশে উপচিত বা উদ্ভূত বলিয়া গণ্য আয়',
            number: '২৭'
          },
          {
            href: '/laws/incometax2023/section/section28',
            text: 'মোট আয়ের আওতায় একই আয় দুই বার অন্তর্ভুক্ত না হওয়া',
            number: '২৮'
          }
        ]
      }
    ]
  },
  {
    title: 'অংশ ৫',
    subtitle: 'আয় পরিগণনা',
    sections: [
      {
        title: 'প্রথম অধ্যায়',
        subtitle: 'মোট আয়',
        sections: [
          { 
            href: '/laws/incometax2023/section/section29',
            text: 'মোট আয় পরিগণনা',
            number: '২৯',
          },
          { 
            href: '/laws/incometax2023/section/section30',
            text: 'আয়ের খাতসমূহ',
            number: '৩০',
          },
          { 
            href: '/laws/incometax2023/section/section31',
            text: 'আয় একীভূতকরণ',
            number: '৩১',
          },
        ],
      },
      {
        title: 'দ্বিতীয় অধ্যায়',
        subtitle: 'চাকরি হইতে আয়',
        sections: [
          { 
            href: '/laws/incometax2023/section/section32',
            text: 'চাকরি হইতে আয়',
            number: '৩২',
          },
          { 
            href: '/laws/incometax2023/section/section33',
            text: 'পারকুইজিট, ভাতা ও সুবিধাদির আর্থিক মূল্য নির্ধারণ',
            number: '৩৩',
          },
          { 
            href: '/laws/incometax2023/section/section34',
            text: 'কর্মচারী শেয়ার স্কিম হইতে অর্জিত আয় নির্ধারণ',
            number: '৩৪',
          },
        ],
      },
      {
        title: 'তৃতীয় অধ্যায়',
        subtitle: 'ভাড়া হইতে আয়',
        sections: [
          { 
            href: '/laws/incometax2023/section/section35',
            text: 'সংজ্ঞা',
            number: '৩৫',
          },
          { 
            href: '/laws/incometax2023/section/section36',
            text: 'ভাড়া হইতে আয়',
            number: '৩৬',
          },
          { 
            href: '/laws/incometax2023/section/section37',
            text: 'মোট ভাড়ামূল্য পরিগণনা',
            number: '৩৭',
          },
          { 
            href: '/laws/incometax2023/section/section38',
            text: 'ভাড়া হইতে প্রাপ্ত আয় পরিগণনার ক্ষেত্রে অনুমোদনযোগ্য বিয়োজনসমূহ',
            number: '৩৮',
          },
          { 
            href: '/laws/incometax2023/section/section39',
            text: 'বিশেষ ভাড়া হইতে আয় পরিগণনা',
            number: '৩৯',
          },
        ],
      },
      {
        title: 'চতুর্থ অধ্যায়',
        subtitle: 'কৃষি হইতে আয়',
        sections: [
          { 
            href: '/laws/incometax2023/section/section40',
            text: 'কৃষি হইতে আয়',
            number: '৪০',
          },
          { 
            href: '/laws/incometax2023/section/section41',
            text: 'বিশেষ কৃষি আয়',
            number: '৪১',
          },
          { 
            href: '/laws/incometax2023/section/section42',
            text: 'কৃষি হইতে আয় খাতে আয় গণনার ক্ষেত্রে অনুমোদিত সাধারণ বিয়োজনসমূহ',
            number: '৪২',
          },
          { 
            href: '/laws/incometax2023/section/section43',
            text: 'হিসাববহি রক্ষণাবক্ষণ না করিবার ক্ষেত্রে বিশেষ বিয়োজন পরিগণনা',
            number: '৪৩',
          },
          { 
            href: '/laws/incometax2023/section/section44',
            text: 'কতিপয় ক্ষেত্রে বিয়োজন অনুমোদিত হইবে না',
            number: '৪৪',
          },
        ],
      },
      {
        title: 'পঞ্চম অধ্যায়',
        subtitle: 'ব্যবসা হইতে আয়',
        sections: [
          { 
            href: '/laws/incometax2023/section/section45',
            text: 'ব্যবসা হইতে আয়',
            number: '৪৫',
          },
          { 
            href: '/laws/incometax2023/section/section46',
            text: 'ব্যবসা হইতে আয়ের বিশেষ ক্ষেত্রসমূহ',
            number: '৪৬',
          },
          { 
            href: '/laws/incometax2023/section/section47',
            text: 'কতিপয় ব্যবসায়ের মুনাফা পরিগণনা',
            number: '৪৭',
          },
          { 
            href: '/laws/incometax2023/section/section48',
            text: 'ফটকা ব্যবসাকে পৃথকভাবে বিবেচনা',
            number: '৪৮',
          },
          { 
            href: '/laws/incometax2023/section/section49',
            text: 'ব্যবসা হইতে আয় গণনার ক্ষেত্রে অনুমোদনযোগ্য সাধারণ বিয়োজনসমূহ',
            number: '৪৯',
          },
          { 
            href: '/laws/incometax2023/section/section50',
            text: 'ব্যবসা হইতে আয় পরিগণনার ক্ষেত্রে অনুমোদনযোগ্য বিশেষ বিয়োজনসমূহ',
            number: '৫০',
          },
          { 
            href: '/laws/incometax2023/section/section51',
            text: 'কুঋণ ব্যয় অনুমোদন',
            number: '৫১',
          },
          { 
            href: '/laws/incometax2023/section/section52',
            text: 'সুদ বা মুনাফার বিশেষ বিয়োজন পরিগণনা',
            number: '৫২',
          },
          { 
            href: '/laws/incometax2023/section/section53',
            text: 'সুদ অনুমোদনের ক্ষেত্রে বিশেষ সীমা',
            number: '৫৩',
          },
          { 
            href: '/laws/incometax2023/section/section54',
            text: 'বিয়োজন অনুমোদনের সাধারণ শর্তাবলি',
            number: '৫৪',
          },
          { 
            href: '/laws/incometax2023/section/section55',
            text: 'কতিপয় ক্ষেত্রে বিয়োজন অনুমোদনযোগ্য না হওয়া',
            number: '৫৫',
          },
          { 
            href: '/laws/incometax2023/section/section56',
            text: 'বিশেষ ব্যবসা আয় পরিগণনা',
            number: '৫৬',
          },
        ],
      },
      {
        title: 'ষষ্ঠ অধ্যায়',
        subtitle: 'মূলধনি আয়',
        sections: [
          { 
            href: '/laws/incometax2023/section/section57',
            text: 'মূলধনি আয়',
            number: '৫৭',
          },
          { 
            href: '/laws/incometax2023/section/section58',
            text: 'মূলধনি আয় পরিগণনা',
            number: '৫৮',
          },
          { 
            href: '/laws/incometax2023/section/section59',
            text: 'পরিগণনার সময়',
            number: '৫৯',
          },
          { 
            href: '/laws/incometax2023/section/section60',
            text: 'বিয়োজন অনুমোদনের সীমাবদ্ধতা',
            number: '৬০',
          },
          { 
            href: '/laws/incometax2023/section/section61',
            text: 'মূলধনি আয় নির্ধারণে অন্যান্য বিষয়াবলি',
            number: '৬১',
          },
        ],
      },
      {
        title: 'সপ্তম অধ্যায়',
        subtitle: 'আর্থিক পরিসম্পদ হইতে আয়',
        sections: [
          { 
            href: '/laws/incometax2023/section/section62',
            text: 'আর্থিক পরিসম্পদ হইতে আয়',
            number: '৬২',
          },
          { 
            href: '/laws/incometax2023/section/section63',
            text: 'আয় পরিগণনার সময়',
            number: '৬৩',
          },
          { 
            href: '/laws/incometax2023/section/section64',
            text: 'আর্থিক পরিসম্পদ হইতে আয় পরিগণনার ক্ষেত্রে অনুমোদনযোগ্য খরচ',
            number: '৬৪',
          },
          { 
            href: '/laws/incometax2023/section/section65',
            text: 'কতিপয় ক্ষেত্রে বিয়োজন অনুমোদনযোগ্য না হওয়া',
            number: '৬৫',
          },
        ],
      },
      {
        title: 'অষ্টম অধ্যায়',
        subtitle: 'অন্যান্য উৎস হইতে আয়',
        sections: [
          { 
            href: '/laws/incometax2023/section/section66',
            text: 'অন্যান্য উৎস হইতে আয়',
            number: '৬৬',
          },
          { 
            href: '/laws/incometax2023/section/section67',
            text: 'অন্যান্য উৎস হইতে আয়ের বিশেষ ক্ষেত্র',
            number: '৬৭',
          },
          { 
            href: '/laws/incometax2023/section/section68',
            text: 'অন্যান্য উৎস হইতে আয় পরিগণনার ক্ষেত্রে অনুমোদনযোগ্য বিয়োজন',
            number: '৬৮',
          },
          { 
            href: '/laws/incometax2023/section/section69',
            text: 'কতিপয় ক্ষেত্রে বিয়োজন অনুমোদিত না হওয়া',
            number: '৬৯',
          },
        ],
      },
      {
        title: 'নবম অধ্যায়',
        subtitle: 'ক্ষতির সমন্বয় এবং জের টানা',
        sections: [
          { 
            href: '/laws/incometax2023/section/section70',
            text: 'ক্ষতির সমন্বয় এবং জের টানা',
            number: '৭০',
          },
          { 
            href: '/laws/incometax2023/section/section71',
            text: 'অবচয় ভাতার জের টানা',
            number: '৭১',
          },
        ],
      },
      {
        title: 'দশম অধ্যায়',
        subtitle: 'হিসাবরক্ষণ পদ্ধতি',
        sections: [
          { 
            href: '/laws/incometax2023/section/section72',
            text: 'হিসাবরক্ষণ পদ্ধতি',
            number: '৭২',
          },
          { 
            href: '/laws/incometax2023/section/section73',
            text: 'কোম্পানি, ইত্যাদি কর্তৃক নিরীক্ষাকৃত আর্থিক প্রতিবেদন দাখিল',
            number: '৭৩',
          },
          { 
            href: '/laws/incometax2023/section/section74',
            text: 'দীর্ঘমেয়াদি চুক্তির ক্ষেত্রে হিসাবরক্ষণ পদ্ধতি',
            number: '৭৪',
          },
          { 
            href: '/laws/incometax2023/section/section75',
            text: 'অসম্পূর্ণ বা ভুল হিসাব, ইত্যাদি',
            number: '৭৫',
          },
        ],
      },
    ],
  },
  {
    title: 'অংশ ৬',
    subtitle: 'অব্যাহতি, বাদ ও কর অবকাশ',
    sections: [
      {
        title: 'প্রথম অধ্যায়',
        subtitle: 'অব্যাহতি, হ্রাস ও বাদ',
        sections: [
          { 
            href: '/laws/incometax2023/section/section76',
            text: 'কর অব্যাহতি',
            number: '৭৬',
          },
          { 
            href: '/laws/incometax2023/section/section77',
            text: 'মোট আয় হইতে বাদ',
            number: '৭৭',
          },
          { 
            href: '/laws/incometax2023/section/section78',
            text: 'কতিপয় বিনিয়োগ ও ব্যয়ের ক্ষেত্রে সাধারণ কর রেয়াত',
            number: '৭৮',
          },
          { 
            href: '/laws/incometax2023/section/section79',
            text: 'সমবায় সমিতির কতিপয় আয়ের অব্যাহতি',
            number: '৭৯',
          },
        ],
      },
      {
        title:'দ্বিতীয় অধ্যায়',
        subtitle:'গড়করণ',
        sections:[
          { 
            href: '/laws/incometax2023/section/section80', 
            text: 'গড়করণ', 
            number: '৮০' 
          },
        ]
      },
      {
        title: 'তৃতীয় অধ্যায়',
        subtitle: 'কর অবকাশ',
        sections: [
          { 
            href: '/laws/incometax2023/section/section81',
            text: 'অনুমোদিত কর অবকাশপ্রাপ্ত সত্তার আয়',
            number: '৮১',
          },
          { 
            href: '/laws/incometax2023/section/section82',
            text: 'বোর্ড কর্তৃক কর অবকাশপ্রাপ্ত সত্তা অনুমোদন',
            number: '৮২',
          },
          { 
            href: '/laws/incometax2023/section/section83',
            text: 'সহযোগী সত্তার সহিত লেনদেন',
            number: '৮৩',
          },
          { 
            href: '/laws/incometax2023/section/section84',
            text: 'অনুমোদিত কর অবকাশপ্রাপ্ত সত্তার আয় পরিগণনা',
            number: '৮৪',
          },
          { 
            href: '/laws/incometax2023/section/section85',
            text: 'কর ছাড় বাতিল বা অননুমোদন',
            number: '৮৫',
          },
        ],
      },
    ],
  },
  {
    title: 'অংশ ৭',
    subtitle: 'কর পরিশোধ',
    sections: [
      {
        title: 'প্রথম অধ্যায়',
        subtitle: 'নিবাসী হইতে কর কর্তন',
        sections: [
          { href: '/laws/incometax2023/section/section86', text: 'চাকরির আয় হইতে উৎসে কর কর্তন', number: '৮৬' },
          { href: '/laws/incometax2023/section/section87', text: 'সংসদ সদস্যদের সম্মানী হইতে কর কর্তন', number: '৮৭' },
          { href: '/laws/incometax2023/section/section88', text: 'অংশগ্রহণ তহবিল, কল্যাণ তহবিল ও শ্রমিক কল্যাণ ফাউণ্ডেশন তহবিল কর্তৃক উৎসে কর কর্তন', number: '৮৮' },
          { href: '/laws/incometax2023/section/section89', text: 'ঠিকাদার, সরবরাহকারী ইত্যাদিকে প্রদত্ত অর্থ হইতে কর কর্তন', number: '৮৯' },
          { href: '/laws/incometax2023/section/section90', text: 'সেবার ক্ষেত্রে পরিশোধ হইতে কর্তন', number: '৯০' },
          { href: '/laws/incometax2023/section/section91', text: 'স্পর্শাতীত সম্পত্তির জন্য পরিশোধিত অর্থ হইতে কর্তন', number: '৯১' },
          { href: '/laws/incometax2023/section/section92', text: 'প্রচার মাধ্যমের বিজ্ঞাপন আয় হইতে কর কর্তন', number: '৯২' },
          { href: '/laws/incometax2023/section/section93', text: 'অভিনেতা, অভিনেত্রী, প্রযোজক, ইত্যাদি ব্যক্তিকে পরিশোধিত অর্থ হইতে কর্তন', number: '৯৩' },
          { href: '/laws/incometax2023/section/section94', text: 'কমিশন, ডিসকাউন্ট, ফি, ইত্যাদি হইতে কর্তন বা উৎসে কর সংগ্রহ', number: '৯৪' },
          { href: '/laws/incometax2023/section/section95', text: 'ট্রাভেল এজেন্টের নিকট হইতে কর সংগ্রহ', number: '৯৫' },
          { href: '/laws/incometax2023/section/section96', text: 'ঋণপত্রের কমিশন হিসাবে প্রাপ্ত অর্থ হইতে কর্তন', number: '৯৬' },
          { href: '/laws/incometax2023/section/section97', text: '[স্থানীয় ঋণপত্রের বিপরীতে পরিশোধিত অর্থ হইতে কর্তন]', number: '৯৭' },
          { href: '/laws/incometax2023/section/section98', text: 'সেলুলার মোবাইল ফোন অপারেটর [, টাওয়ার শেয়ারিং কোম্পানি ইত্যাদি] কর্তৃক পরিশোধিত অর্থের উপর কর কর্তন', number: '৯৮' },
          { href: '/laws/incometax2023/section/section99', text: 'জীবন বিমা পলিসির প্রিমিয়ামের অতিরিক্ত কোনো পরিশোধ হইতে কর কর্তন', number: '৯৯' },
          { href: '/laws/incometax2023/section/section100', text: 'বিমার কমিশনের অর্থ হইতে কর্তন', number: '১০০' },
          { href: '/laws/incometax2023/section/section101', text: 'সাধারণ বিমা কোম্পানি জরিপকারীদের ফি, ইত্যাদি হইতে কর কর্তন', number: '১০১' },
          { href: '/laws/incometax2023/section/section102', text: 'সঞ্চয়ী আমানত ও স্থায়ী আমানত, ইত্যাদি হইতে কর কর্তন', number: '১০২' },
          { href: '/laws/incometax2023/section/section103', text: '[বিলুপ্ত]', number: '১০৩' },
          { href: '/laws/incometax2023/section/section104', text: 'নিবাসীর সুদ আয় হইতে কর কর্তন', number: '১০৪' },
          { href: '/laws/incometax2023/section/section105', text: 'সঞ্চয় পত্রের মুনাফা হইতে কর কর্তন', number: '১০৫' },
          { href: '/laws/incometax2023/section/section106', text: 'সিকিউরিটিজের সুদ হইতে উৎসে কর কর্তন', number: '১০৬' },
          { href: '/laws/incometax2023/section/section107', text: 'বাংলাদেশ ব্যাংক বিলের প্রকৃত মূল্যের ছাড়ের উপর উৎসে কর কর্তন', number: '১০৭' },
          { href: '/laws/incometax2023/section/section108', text: 'আন্তর্জাতিক ফোন কলের জন্য প্রাপ্ত অর্থ হইতে কর কর্তন', number: '১০৮' },
          { href: '/laws/incometax2023/section/section109', text: 'ভাড়া হইতে উৎসে কর কর্তন', number: '১০৯' },
          { href: '/laws/incometax2023/section/section110', text: 'কনভেনশন হল, কনফারেন্স সেন্টার, ইত্যাদি হইতে সেবা প্রদানের জন্য কর কর্তন', number: '১১০' },
          { href: '/laws/incometax2023/section/section111', text: 'সম্পত্তি অধিগ্রহণের ক্ষতিপূরণ হইতে উৎসে কর কর্তন', number: '১১১' },
          { href: '/laws/incometax2023/section/section112', text: 'নগদ রপ্তানি ভর্তুকির উপর উৎসে কর কর্তন', number: '১১২' },
          { href: '/laws/incometax2023/section/section113', text: '[বিলুপ্ত]', number: '১১৩' },
          { href: '/laws/incometax2023/section/section114', text: 'বিদ্যুৎ ক্রয়ের বিপরীতে কর কর্তন', number: '১১৪' },
          { href: '/laws/incometax2023/section/section115', text: 'রিয়েল এস্টেট উন্নয়নকারীর (ডেভেলপার) নিকট হইতে ভূমির মালিক কর্তৃক প্রাপ্ত আয় হইতে কর কর্তন', number: '১১৫' },
          { href: '/laws/incometax2023/section/section116', text: 'বিদেশি ক্রেতার এজেন্টকে প্রদত্ত কমিশন বা পারিশ্রমিক হইতে কর কর্তন', number: '১১৬' },
          { href: '/laws/incometax2023/section/section117', text: 'লভ্যাংশ হইতে কর কর্তন', number: '১১৭' },
          { href: '/laws/incometax2023/section/section118', text: 'লটারি, ইত্যাদি হইতে প্রাপ্ত আয় হইতে কর কর্তন', number: '১১৮' },
        ],
      },
      {
        title:'দ্বিতীয় অধ্যায়',
        subtitle:'অনিবাসীর নিকট হইতে কর কর্তন',
        sections: [
          { 
        href: '/laws/incometax2023/section/section119', 
        text: 'অনিবাসীদের আয় হইতে কর কর্তন বা সংগ্রহ', 
        number: '১১৯' 
      },
        ],
      },
      {
        title: 'তৃতীয় অধ্যায়',
        subtitle: 'উৎসে কর সংগ্রহ',
        sections: [
          { href: '/laws/incometax2023/section/section120', text: 'আমদানিকারকদের নিকট হইতে কর সংগ্রহ', number: '১২০' },
          { href: '/laws/incometax2023/section/section121', text: 'জনশক্তি রপ্তানি হইতে কর সংগ্রহ', number: '১২১' },
          { href: '/laws/incometax2023/section/section122', text: 'ক্লিয়ারিং ও ফরওয়ার্ডিং এজেন্টদের নিকট হইতে কর সংগ্রহ', number: '১২২' },
          { href: '/laws/incometax2023/section/section123', text: 'রপ্তানি আয় হইতে কর সংগ্রহ', number: '১২৩' },
          { href: '/laws/incometax2023/section/section124', text: 'কোনো সেবা, রেভিনিউ শেয়ারিং, ইত্যাদি বাবদ বিদেশ হইতে প্রেরিত আয় হইতে কর কর্তন', number: '১২৪' },
          { href: '/laws/incometax2023/section/section125', text: 'সম্পত্তি হস্তান্তর, ইত্যাদি হইতে কর সংগ্রহ', number: '১২৫' },
          { href: '/laws/incometax2023/section/section126', text: 'ডেভেলপার বা রিয়েল এস্টেট ডেভেলপারের নিকট হইতে কর সংগ্রহ', number: '১২৬' },
          { href: '/laws/incometax2023/section/section127', text: 'সরকারি স্ট্যাম্প, কোর্ট ফি, কার্টিজ পেপার বাবদ পরিশোধিত কমিশন হইতে কর সংগ্রহ', number: '১২৭' },
          { href: '/laws/incometax2023/section/section128', text: 'সম্পত্তির ইজারা হইতে কর সংগ্রহ', number: '১২৮' },
          { href: '/laws/incometax2023/section/section129', text: 'সিগারেট [উৎপাদনকারী] হইতে কর সংগ্রহ', number: '১২৯' },
          { href: '/laws/incometax2023/section/section130', text: 'ইট প্রস্তুতকারকের নিকট হইতে কর সংগ্রহ', number: '১৩০' },
          { href: '/laws/incometax2023/section/section131', text: 'ট্রেড লাইসেন্স প্রদান বা নবায়নের সময় কর সংগ্রহ', number: '১৩১' },
          { href: '/laws/incometax2023/section/section132', text: 'কোনো নিবাসীর জাহাজ ব্যবসা হইতে কর সংগ্রহ', number: '১৩২' },
          { href: '/laws/incometax2023/section/section133', text: 'প্রকাশ্য নিলামের বিক্রি হইতে কর সংগ্র', number: '১৩৩' },
          { href: '/laws/incometax2023/section/section134', text: 'শেয়ার হস্তান্তর হইতে কর সংগ্রহ', number: '১৩৪' },
          { href: '/laws/incometax2023/section/section135', text: 'সিকিউরিটিজ হস্তান্তর হইতে কর সংগ্রহ', number: '১৩৫' },
          { href: '/laws/incometax2023/section/section136', text: 'স্টক এক্সচেঞ্জের শেয়ারহোল্ডারদের শেয়ার স্থানান্তর হইতে কর সংগ্রহ', number: '১৩৬' },
          { href: '/laws/incometax2023/section/section137', text: 'স্টক এক্সচেঞ্জের সদস্যদের নিকট হইতে কর সংগ্রহ', number: '১৩৭' },
          { href: '/laws/incometax2023/section/section138', text: 'বাণিজ্যিকভাবে পরিচালিত মোটরযান হইতে কর সংগ্রহ', number: '১৩৮' },
          { href: '/laws/incometax2023/section/section139', text: 'নৌযান পরিচালনা হইতে কর সংগ্রহ', number: '১৩৯' },
        ],
      },
      {
        title: 'চতুর্থ অধ্যায়',
        subtitle: 'সাধারণ বিধানাবলি',
        sections: [
          { href: '/laws/incometax2023/section/section140', text: 'সংজ্ঞা', number: '১৪০' },
          { href: '/laws/incometax2023/section/section141', text: 'কর ব্যতীত পরিশোধ এর ক্ষেত্রে গ্রস-আপ পূর্বক কর কর্তন বা সংগ্রহ', number: '১৪১' },
          { href: '/laws/incometax2023/section/section142', text: 'উৎসে কর কর্তন বা সংগ্রহের সাধারণ বিধান', number: '১৪২' },
          { href: '/laws/incometax2023/section/section143', text: 'কর্তন, সংগ্রহ, ইত্যাদির ব্যর্থতার ফলাফল', number: '১৪৩' },
          { href: '/laws/incometax2023/section/section144', text: 'প্রকৃত কর্তন, সংগ্রহ বা পরিশোধ ব্যতীত কর কর্তন, সংগ্রহ বা পরিশোধের সার্টিফিকেট প্রদানের ফলাফল', number: '১৪৪' },
          { href: '/laws/incometax2023/section/section145', text: 'কর কর্তন, ইত্যাদির সার্টিফিকেট', number: '১৪৫' },
          { href: '/laws/incometax2023/section/section146', text: 'কর্তিত কর সরকারের অনুকূলে জমা প্রদান', number: '১৪৬' },
          { href: '/laws/incometax2023/section/section147', text: 'উৎসে কর কর্তন বা সংগ্রহ নিশ্চিতকরণ ও যাচাইকরণ', number: '১৪৭' },
          { href: '/laws/incometax2023/section/section148', text: 'অন্যান্য পদ্ধতি ক্ষুণ্ন না করিয়া কর আরোপের ক্ষমতা', number: '১৪৮' },
          { href: '/laws/incometax2023/section/section149', text: 'উৎসে কর কর্তন বা সংগ্রহের ক্ষেত্রে দায়মুক্তি', number: '১৪৯' },
          { href: '/laws/incometax2023/section/section150', text: 'উৎসে কর্তনকৃত বা সংগ্রহকৃত করের ক্রেডিট প্রদান', number: '১৫০' },
          { href: '/laws/incometax2023/section/section151', text: 'কোনো কর্তন না করিবার ক্ষেত্রে কর পরিশোধ', number: '১৫১' },
        ],
      },
      {
        title: 'পঞ্চম অধ্যায়',
        subtitle: 'অগ্রিম কর পরিশোধ',
        sections: [
          { href: '/laws/incometax2023/section/section152', text: 'সিগারেট প্রস্তুতকারকের নিকট হইতে অগ্রিম কর সংগ্রহ', number: '১৫২' },
          { href: '/laws/incometax2023/section/section153', text: '[***] মোটরযান মালিকগণের নিকট হইতে অগ্রিম কর সংগ্রহ', number: '১৫৩' },
          { href: '/laws/incometax2023/section/section154', text: 'অগ্রিম কর পরিশোধ', number: '১৫৪' },
          { href: '/laws/incometax2023/section/section155', text: 'অগ্রিম করের পরিমাণ এবং তাহা পরিশোধের সময়', number: '১৫৫' },
          { href: '/laws/incometax2023/section/section156', text: 'নূতন করদাতা কর্তৃক অগ্রিম কর পরিশোধ', number: '১৫৬' },
          { href: '/laws/incometax2023/section/section157', text: 'অগ্রিম করের কিস্তি প্রদানে ব্যর্থতা', number: '১৫৭' },
          { href: '/laws/incometax2023/section/section158', text: 'অগ্রিম করের ক্রেডিট প্রদান', number: '১৫৮' },
          { href: '/laws/incometax2023/section/section159', text: 'ব্যাখ্যা', number: '১৫৯' },
        ],
      },
      {
        title: 'ষষ্ঠ অধ্যায়',
        subtitle: 'অগ্রিম করের উপর সুদ',
        sections: [
          { href: '/laws/incometax2023/section/section160', text: 'অগ্রিম কর পরিশোধে ব্যর্থতার জন্য সুদ আরোপ', number: '১৬০' },
          { href: '/laws/incometax2023/section/section161', text: 'পরিশোধিত অতিরিক্ত অগ্রিম করের উপর সরকার কর্তৃক প্রদেয় সুদ', number: '১৬১' },
          { href: '/laws/incometax2023/section/section162', text: 'অগ্রিম কর পরিশোধের ক্ষেত্রে ঘাটতি থাকিলে উহার উপর করদাতা কর্তৃক সুদ প্রদেয়', number: '১৬২' },
        ],
      },
    ],
  },
  {
    title: 'অংশ ৮',
    subtitle: 'ন্যূনতম কর',
    sections: [
      { 
        href: '/laws/incometax2023/section/section163', 
        text: 'ন্যূনতম কর', 
        number: '১৬৩' 
      },
      { 
        href: '/laws/incometax2023/section/section164', 
        text: 'উৎসে [অধিক বা কম] কর্তিত বা সংগৃহীত কর ন্যূনতম করের ভিত্তি না হওয়া', 
        number: '১৬৪' 
      },
    ],
  },
  {
    title: 'অংশ ৯',
    subtitle: 'রিটার্ন, বিবরণী এবং দলিলাদি',
    sections: [
      {
        title: 'প্রথম অধ্যায়',
        subtitle: 'রিটার্ন এবং বিবরণী',
        sections: [
          {
            href: '/laws/incometax2023/section/section165',
            text: 'রিটার্ন',
            number: '১৬৫',
          },
          {
            href: '/laws/incometax2023/section/section166',
            text: 'রিটার্ন দাখিল',
            number: '১৬৬',
          },
          {
            href: '/laws/incometax2023/section/section167',
            text: 'পরিসম্পদ ও দায়ের বিবরণী দাখিল',
            number: '১৬৭',
          },
          {
            href: '/laws/incometax2023/section/section168',
            text: 'জীবনযাপন সংশ্লিষ্ট ব্যয় বিবরণী দাখিল',
            number: '১৬৮',
          },
          {
            href: '/laws/incometax2023/section/section169',
            text: 'রিটার্ন দাখিলের সাধারণ নিয়মাবলি',
            number: '১৬৯',
          },
          {
            href: '/laws/incometax2023/section/section170',
            text: 'স্বনির্ধারণী পদ্ধতিতে রিটার্ন দাখিল',
            number: '১৭০',
          },
          {
            href: '/laws/incometax2023/section/section171',
            text: 'রিটার্ন দাখিলের সময় ও আয়কর পরিশোধ',
            number: '১৭১',
          },
          {
            href: '/laws/incometax2023/section/section172',
            text: 'রিটার্ন দাখিলের জন্য নোটিশ',
            number: '১৭২',
          },
          {
            href: '/laws/incometax2023/section/section173',
            text: 'রিটার্ন দাখিলের তারিখে বা ইহার পূর্বে কর ও সারচার্জ পরিশোধ সংক্রান্ত',
            number: '১৭৩',
          },
          {
            href: '/laws/incometax2023/section/section174',
            text: 'নির্দিষ্ট তারিখের পরে রিটার্ন দাখিলে কর পরিগণনা',
            number: '১৭৪',
          },
          {
            href: '/laws/incometax2023/section/section175',
            text: 'সাধারণ ও সংশোধিত রিটার্ন সংক্রান্ত বিশেষ বিধানাবলি',
            number: '১৭৫',
          },
          {
            href: '/laws/incometax2023/section/section176',
            text: 'অসম্পূর্ণ রিটার্ন দাখিলের ফলাফল',
            number: '১৭৬',
          },
          {
            href: '/laws/incometax2023/section/section177',
            text: 'উৎসে করের রিটার্ন',
            number: '১৭৭',
          },
          {
            href: '/laws/incometax2023/section/section178',
            text: 'যৌথ এখতিয়ার',
            number: '১৭৮',
          },
        ],
      },
      {
        title:'দ্বিতীয় অধ্যায়',
        subtitle:'কর নির্ধারণের জন্য তথ্য উপস্থাপন',
        sections:[
        { 
            href: '/laws/incometax2023/section/section179', 
            text: 'হিসাব, দলিলাদি ইত্যাদি উপস্থাপন', 
            number: '১৭৯' 
        },
        ],
      },
    ],
  },
  {
    title: 'অংশ ১০',
    subtitle: 'কর নির্ধারণ ও অডিট',
    sections: [
      {
        href: '/laws/incometax2023/section/section180',
        text: 'স্বনির্ধারণী',
        number: '১৮০',
      },
      {
        href: '/laws/incometax2023/section/section181',
        text: 'রিটার্ন প্রসেস',
        number: '১৮১',
      },
      {
        href: '/laws/incometax2023/section/section182',
        text: 'অডিট',
        number: '১৮২',
      },
      {
        href: '/laws/incometax2023/section/section183',
        text: 'উপকর কমিশনার কর্তৃক কর নির্ধারণ',
        number: '১৮৩',
      },
      {
        href: '/laws/incometax2023/section/section184',
        text: 'সর্বোত্তম বিচারভিত্তিক কর নির্ধারণ',
        number: '১৮৪',
      },
      {
        href: '/laws/incometax2023/section/section185',
        text: 'সাময়িক কর নির্ধারণ',
        number: '১৮৫',
      },
      {
        href: '/laws/incometax2023/section/section186',
        text: 'উৎস করের রিটার্ন অডিট',
        number: '১৮৬',
      },
      {
        href: '/laws/incometax2023/section/section187',
        text: 'ফার্ম বা ব্যক্তিসংঘের কর নির্ধারণ',
        number: '১৮৭',
      },
      {
        href: '/laws/incometax2023/section/section188',
        text: 'ফার্মের গঠনতন্ত্র পরিবর্তনের ক্ষেত্রে কর নির্ধারণ',
        number: '১৮৮',
      },
      {
        href: '/laws/incometax2023/section/section189',
        text: 'উত্তরাধিকারী নূতন ফার্ম গঠনের ক্ষেত্রে কর নির্ধারণ',
        number: '১৮৯',
      },
      {
        href: '/laws/incometax2023/section/section190',
        text: 'উত্তরাধিকারসূত্রে প্রাপ্ত ব্যবসায়ের কর নির্ধারণ',
        number: '১৯০',
      },
      {
        href: '/laws/incometax2023/section/section191',
        text: 'বন্ধ ব্যবসার ক্ষেত্রে কর নির্ধারণ',
        number: '১৯১',
      },
      {
        href: '/laws/incometax2023/section/section192',
        text: 'হিন্দু অবিভক্ত পরিবারের বিভাজনের ক্ষেত্রে কর নির্ধারণ',
        number: '১৯২',
      },
      {
        href: '/laws/incometax2023/section/section193',
        text: 'বাংলাদেশ ত্যাগকারী ব্যক্তির ক্ষেত্রে কর নির্ধারণ',
        number: '১৯৩',
      },
      {
        href: '/laws/incometax2023/section/section194',
        text: 'মৃত ব্যক্তির ক্ষেত্রে আয়কর নির্ধারণ',
        number: '১৯৪',
      },
      {
        href: '/laws/incometax2023/section/section195',
        text: 'স্পটে কর নির্ধারণ',
        number: '১৯৫',
      },
      {
        href: '/laws/incometax2023/section/section196',
        text: 'কর নির্ধারণ লইয়া প্রশ্ন উত্থাপনে বাধা',
        number: '১৯৬',
      },
    ],
  },
  {
    title: 'অংশ ১১',
    subtitle: 'সময়ের সীমাবদ্ধতা',
    sections: [
      { 
        href: '/laws/incometax2023/section/section197', 
        text: 'কর নির্ধারণে সময়ের সীমাবদ্ধতা', 
        number: '১৯৭' 
      },
    ],
  },
  {
    title: 'অংশ ১২',
    subtitle: 'তথ্য সংগ্রহ',
    sections: [
      {
        title: 'প্রথম অধ্যায়',
        subtitle: 'আয়কর কর্তৃপক্ষ কর্তৃক তথ্য সংগ্রহ',
        sections: [
          {
            href: '/laws/incometax2023/section/section198',
            text: 'সংজ্ঞা',
            number: '১৯৮',
          },
          {
            href: '/laws/incometax2023/section/section199',
            text: 'তথ্য সংগ্রহে বিধানাবলির প্রয়োগ',
            number: '১৯৯',
          },
          {
            href: '/laws/incometax2023/section/section200',
            text: 'তথ্য সংগ্রহ',
            number: '২০০',
          },
          {
            href: '/laws/incometax2023/section/section201',
            text: 'স্বয়ংক্রিয়ভাবে তথ্য প্রদান',
            number: '২০১',
          },
          {
            href: '/laws/incometax2023/section/section202',
            text: 'ব্যবসায়িক রেকর্ড উপস্থাপন',
            number: '২০২',
          },
          {
            href: '/laws/incometax2023/section/section203',
            text: 'আয়ের উৎস অনুসন্ধান',
            number: '২০৩',
          },
          {
            href: '/laws/incometax2023/section/section204',
            text: 'অনুসন্ধান ও তদন্ত',
            number: '২০৪',
          },
        ],
      },
      {
        title: 'দ্বিতীয় অধ্যায়',
        subtitle: 'জরিপ, তল্লাশি ও জব্দ',
        sections: [
          {
            href: '/laws/incometax2023/section/section205',
            text: 'জরিপের ক্ষমতা',
            number: '২০৫',
          },
          {
            href: '/laws/incometax2023/section/section206',
            text: 'তল্লাশি ও জব্দ করিবার ক্ষমতা',
            number: '২০৬',
          },
          {
            href: '/laws/incometax2023/section/section207',
            text: 'জব্দকৃত আয় সম্পর্কিত রেকর্ড উপকর কমিশনারের নিকট হস্তান্তর',
            number: '২০৭',
          },
          {
            href: '/laws/incometax2023/section/section208',
            text: 'জব্দকৃত আয় সম্পর্কিত রেকর্ড সংরক্ষণের সময়সীমা',
            number: '২০৮',
          },
          {
            href: '/laws/incometax2023/section/section209',
            text: 'জব্দকৃত সম্পদের ব্যবস্থা',
            number: '২০৯',
          },
          {
            href: '/laws/incometax2023/section/section210',
            text: 'অধিকৃত সম্পত্তির ব্যবস্থা',
            number: '২১০',
          },
        ],
      },
      {
        title: 'তৃতীয় অধ্যায়',
        subtitle: 'শুনানির জন্য তলব',
        sections: [
        { 
          href: '/laws/incometax2023/section/section211', 
          text: 'শপথ, ইত্যাদি গ্রহণপূর্বক সাক্ষ্য গ্রহণের ক্ষমতা', 
          number: '২১১' 
        },
        ],
      },
    ],
  },
  {
    title: 'অংশ ১৩',
    subtitle: 'রাজস্ব ফাঁকি পুনরুদ্ধার',
    sections: [
      { 
        href: '/laws/incometax2023/section/section212', 
        text: 'কর ও অন্যান্য অঙ্ক পরিশোধ এড়াইয়া যাওয়া', 
        number: '২১২' 
      },
      { 
        href: '/laws/incometax2023/section/section213', 
        text: 'ক্রটিপূর্ণ আদেশ সংশোধনের ক্ষেত্রে পরিদর্শী অতিরিক্ত কর কমিশনারের ক্ষমতা', 
        number: '২১৩' 
      },
    ],
  },
  {
    title: 'অংশ ১৪',
    subtitle: 'বকেয়া আদায়, প্রত্যর্পণ ও সমন্বয়',
    sections: [
      {
        title: 'প্রথম অধ্যায়',
        subtitle: 'বকেয়া কর আদায়',
        sections: [
          {
            href: '/laws/incometax2023/section/section214',
            text: 'দাবির নোটিশ',
            number: '২১৪',
          },
          {
            href: '/laws/incometax2023/section/section215',
            text: 'সরাসরি আদায় ও প্রত্যর্পণ',
            number: '২১৫',
          },
          {
            href: '/laws/incometax2023/section/section216',
            text: 'কর আদায়ের জন্য সার্টিফিকেট',
            number: '২১৬',
          },
          {
            href: '/laws/incometax2023/section/section217',
            text: 'ট্যাক্স রিকোভারি অফিসার কর্তৃক আদায়ের পদ্ধতি',
            number: '২১৭',
          },
          {
            href: '/laws/incometax2023/section/section218',
            text: 'সার্টিফিকেট প্রত্যাহার এবং কার্যক্রম স্থগিতকরণের ক্ষমতা',
            number: '২১৮',
          },
          {
            href: '/laws/incometax2023/section/section219',
            text: 'আদায়ের সার্টিফিকেটের বৈধতা বিবাদযোগ্য নহে',
            number: '২১৯',
          },
          {
            href: '/laws/incometax2023/section/section220',
            text: 'জেলা কালেক্টরের মাধ্যমে কর আদায়',
            number: '২২০',
          },
          {
            href: '/laws/incometax2023/section/section221',
            text: 'আদায়ের অন্যান্য পদ্ধতি',
            number: '২২১',
          },
          {
            href: '/laws/incometax2023/section/section222',
            text: 'কর আদায়ে যুগপৎ ব্যবস্থা গ্রহণ',
            number: '২২২',
          },
        ],
      },
      {
        title:'দ্বিতীয় অধ্যায়',
        subtitle:'অন্তর্বর্তীকালীন অবরুদ্ধকরণ বা ক্রোক',
        sections: [
          { 
        href: '/laws/incometax2023/section/section223', 
        text: 'সম্পত্তির অন্তর্বর্তীকালীন অবরুদ্ধকরণ বা ক্রোক', 
        number: '২২৩' 
      },
        ],
      },
      {
        title: 'তৃতীয় অধ্যায়',
        subtitle: 'প্রত্যর্পণ ও সমন্বয়',
        sections: [
          {
            href: '/laws/incometax2023/section/section224',
            text: 'প্রত্যর্পণের অধিকার',
            number: '২২৪',
          },
          {
            href: '/laws/incometax2023/section/section225',
            text: 'দাবি সমন্বয় ও প্রত্যর্পণ',
            number: '২২৫',
          },
          {
            href: '/laws/incometax2023/section/section226',
            text: 'প্রত্যর্পণ দাবি',
            number: '২২৬',
          },
          {
            href: '/laws/incometax2023/section/section227',
            text: 'মৃত বা অক্ষম ব্যক্তির পক্ষে প্রত্যর্পণ দাবি',
            number: '২২৭',
          },
          {
            href: '/laws/incometax2023/section/section228',
            text: 'কর নির্ধারণের সঠিকতা, ইত্যাদি বিষয়ে কোনো প্রশ্ন উত্থাপন করা যাইবে না',
            number: '২২৮',
          },
          {
            href: '/laws/incometax2023/section/section229',
            text: 'আপিল আদেশের ভিত্তিতে অর্থ ফেরত',
            number: '২২৯',
          },
        ],
      },
    ],
  },
  {
    title: 'অংশ ১৫',
    subtitle: 'কর পরিহার রোধ',
    sections: [
      {
        title: 'প্রথম অধ্যায়',
        subtitle: 'কর পরিহার রোধ সংক্রান্ত সাধারণ বিধানাবলি',
        sections: [
          {
            href: '/laws/incometax2023/section/section230',
            text: 'সংজ্ঞা',
            number: '২৩০',
          },
          {
            href: '/laws/incometax2023/section/section231',
            text: 'কর সুবিধা সমন্বয়',
            number: '২৩১',
          },
          {
            href: '/laws/incometax2023/section/section232',
            text: 'সমন্বয়ের পদ্ধতি',
            number: '২৩২',
          },
        ],
      },
      {
        title: 'দ্বিতীয় অধ্যায়',
        subtitle: 'ট্রান্সফার প্রাইসিং',
        sections: [
          {
            href: '/laws/incometax2023/section/section233',
            text: 'সংজ্ঞা',
            number: '২৩৩',
          },
          {
            href: '/laws/incometax2023/section/section234',
            text: 'আর্মস লেংথ প্রাইস বিবেচনাপূর্বক আন্তর্জাতিক লেনদেন হইতে আয় নির্ধারণ',
            number: '২৩৪',
          },
          {
            href: '/laws/incometax2023/section/section235',
            text: 'আর্মস লেংথ প্রাইস পরিগণনা',
            number: '২৩৫',
          },
          {
            href: '/laws/incometax2023/section/section236',
            text: 'ট্রান্সফার প্রাইসিং কর্মচারীর নিকট প্রেরণ',
            number: '২৩৬',
          },
          {
            href: '/laws/incometax2023/section/section237',
            text: 'তথ্য, দলিলাদি ও রেকর্ড সংরক্ষণ ও রক্ষণাবেক্ষণ',
            number: '২৩৭',
          },
          {
            href: '/laws/incometax2023/section/section238',
            text: 'আন্তর্জাতিক লেনদেন সম্পর্কিত বিবরণী দাখিল',
            number: '২৩৮',
          },
          {
            href: '/laws/incometax2023/section/section239',
            text: 'অ্যাকাউন্টেন্ট হইতে প্রাপ্ত প্রতিবেদন দাখিল',
            number: '২৩৯',
          },
        ],
      },
      {
        title: 'তৃতীয় অধ্যায়',
        subtitle: 'কর পরিহার রোধ সম্পর্কিত অন্যান্য বিধান',
        sections: [
          {
            href: '/laws/incometax2023/section/section240',
            text: 'অনিবাসীর সহিত লেনদেনের মাধ্যমে কর পরিহার',
            number: '২৪০',
          },
          {
            href: '/laws/incometax2023/section/section241',
            text: 'সম্পদ হস্তান্তরের মাধ্যমে কর পরিহার',
            number: '২৪১',
          },
          {
            href: '/laws/incometax2023/section/section242',
            text: 'সিকিউরিটিজ লেনদেনের মাধ্যমে কর পরিহার',
            number: '২৪২',
          },
          {
            href: '/laws/incometax2023/section/section243',
            text: 'বাংলাদেশ ত্যাগকারী ব্যক্তির কর পরিশোধের সার্টিফিকেটের আবশ্যকতা',
            number: '২৪৩',
          },
        ],
      },
    ],
  },
  {
    title: 'অংশ ১৬',
    subtitle: 'আন্তর্জাতিক চুক্তি ব্যবস্থাপনা',
    sections: [
      { 
        title:'প্রথম অধ্যায়',
        subtitle:'কর চুক্তি',
        sections: [
          { 
        href: '/laws/incometax2023/section/section244', 
        text: 'কর চুক্তি', 
        number: '২৪৪' 
      },
        ]
      },
      {
        title: 'দ্বিতীয় অধ্যায়',
        subtitle: 'অব্যাহতি ও বৈদেশিক কর ক্রেডিট',
        sections: [
          {
            href: '/laws/incometax2023/section/section245',
            text: 'সংজ্ঞা',
            number: '২৪৫',
          },
          {
            href: '/laws/incometax2023/section/section246',
            text: 'বাংলাদেশের বাহিরে অর্জিত আয়ের জন্য অব্যাহতি',
            number: '২৪৬',
          },
          {
            href: '/laws/incometax2023/section/section247',
            text: 'বৈদেশিক কর ক্রেডিট',
            number: '২৪৭',
          },
          {
            href: '/laws/incometax2023/section/section248',
            text: 'বৈদেশিক কর সমন্বয় অনুমোদনের উপর আয় গণনার কার্যকারিতা',
            number: '২৪৮',
          },
          {
            href: '/laws/incometax2023/section/section249',
            text: 'বৈদেশিক করের ক্রেডিট দাবির সীমাবদ্ধতা',
            number: '২৪৯',
          },
          {
            href: '/laws/incometax2023/section/section250',
            text: 'আপিল',
            number: '২৫০',
          },
          {
            href: '/laws/incometax2023/section/section251',
            text: 'দ্বৈত কর চুক্তি রহিয়াছে এইরূপ ক্ষেত্রে উৎসে কর কর্তনের বিধানাবলি',
            number: '২৫১',
          },
        ],
      },
    ],
  },
  {
  title: 'অংশ ১৭',
  subtitle: 'এজেন্সি, প্রতিনিধিত্ব এবং সংশ্লিষ্ট বিষয়াদি',
  sections: [
    {
      href: '/laws/incometax2023/section/section252',
      text: 'কতিপয় ক্ষেত্রে প্রতিনিধির দায়',
      number: '২৫২',
    },
    {
      href: '/laws/incometax2023/section/section253',
      text: 'এজেন্ট হিসাবে বিবেচিত ব্যক্তি',
      number: '২৫৩',
    },
    {
      href: '/laws/incometax2023/section/section254',
      text: 'পরিশোধিত কর পুনরূদ্ধারে প্রতিনিধির অধিকার',
      number: '২৫৪',
    },
    {
      href: '/laws/incometax2023/section/section255',
      text: 'অংশীদার বা সদস্যের নিকট প্রাপ্য অপুনরুদ্ধারযোগ্য করের জন্য ফার্ম বা সংঘের দায়',
      number: '২৫৫',
    },
    {
      href: '/laws/incometax2023/section/section256',
      text: 'ফার্ম, ইত্যাদির ব্যবসা বন্ধ হইবার ক্ষেত্রে অংশীদার, প্রমুখের দায়',
      number: '২৫৬',
    },
    {
      href: '/laws/incometax2023/section/section257',
      text: 'প্রাইভেট কোম্পানির অপুনরুদ্ধারযোগ্য করের জন্য পরিচালকদের দায়',
      number: '২৫৭',
    },
    {
      href: '/laws/incometax2023/section/section258',
      text: 'অবলুপ্তির প্রক্রিয়াধীন প্রাইভেট কোম্পানির করের জন্য লিকুইডেটরের দায়',
      number: '২৫৮',
    },
    {
      href: '/laws/incometax2023/section/section259',
      text: 'অনিবাসীর শিপিং ব্যবসায়ের ক্ষেত্রে করদায়',
      number: '২৫৯',
    },
    {
      href: '/laws/incometax2023/section/section260',
      text: 'অনিবাসীর বিমান পরিবহণ ব্যবসায়ের ক্ষেত্রে করদায়',
      number: '২৬০',
    },
  ],
},
  {
  title: 'অংশ ১৮',
  subtitle: 'করদাতা নিবন্ধন',
  sections: [
    {
      href: '/laws/incometax2023/section/section261',
      text: 'করদাতা নিবন্ধন',
      number: '২৬১',
    },
    {
      href: '/laws/incometax2023/section/section262',
      text: 'করদাতার নিবন্ধন বাতিল',
      number: '২৬২',
    },
    {
      href: '/laws/incometax2023/section/section263',
      text: 'উইথহোল্ডার শনাক্তকরণ নম্বর (ডব্লিউআইএন)',
      number: '২৬৩',
    },
    {
      href: '/laws/incometax2023/section/section264',
      text: 'রিটার্ন দাখিলের প্রমাণ দাখিলের বাধ্যবাধকতা',
      number: '২৬৪',
    },
    {
      href: '/laws/incometax2023/section/section265',
      text: 'রিটার্ন দাখিলের প্রমাণ প্রদর্শন',
      number: '২৬৫',
    },
  ],
},
  {
  title: 'অংশ ১৯',
  subtitle: 'জরিমানা',
  sections: [
    {
      href: '/laws/incometax2023/section/section266',
      text: 'রিটার্ন, ইত্যাদি দাখিলে ব্যর্থতার জন্য জরিমানা',
      number: '২৬৬',
    },
    {
      href: '/laws/incometax2023/section/section267',
      text: 'বিধি দ্বারা নির্ধারিত পদ্ধতিতে হিসাব রক্ষণাবেক্ষণ না করিবার জরিমানা',
      number: '২৬৭',
    },
    {
      href: '/laws/incometax2023/section/section268',
      text: 'জাল করদাতা শনাক্তকরণ নম্বর (টিআইএন) ব্যবহারের জন্য জরিমানা',
      number: '২৬৮',
    },
    {
      href: '/laws/incometax2023/section/section269',
      text: 'অগ্রিম কর, ইত্যাদি পরিশোধে ব্যর্থতার জন্য জরিমানা',
      number: '২৬৯',
    },
    {
      href: '/laws/incometax2023/section/section270',
      text: 'নোটিশের অমান্যতার জন্য জরিমানা',
      number: '২৭০',
    },
    {
      href: '/laws/incometax2023/section/section271',
      text: 'রিটার্নের ভিত্তিতে কর পরিশোধে ব্যর্থতার জন্য জরিমানা',
      number: '২৭১',
    },
    {
      href: '/laws/incometax2023/section/section272',
      text: 'আয় গোপন করিবার জন্য জরিমানা',
      number: '২৭২',
    },
    {
      href: '/laws/incometax2023/section/section273',
      text: 'চার্টার্ড অ্যাকাউন্টেন্ট কর্তৃক জাল নিরীক্ষা প্রতিবেদন প্রণয়নের জন্য জরিমানা',
      number: '২৭৩',
    },
    {
      href: '/laws/incometax2023/section/section274',
      text: 'জাল নিরীক্ষা প্রতিবেদন দাখিলের জন্য জরিমানা',
      number: '২৭৪',
    },
    {
      href: '/laws/incometax2023/section/section275',
      text: 'কর পরিশোধে খেলাপি হইবার জরিমানা',
      number: '২৭৫',
    },
    {
      href: '/laws/incometax2023/section/section276',
      text: 'ধারা ২৩৫ এর বিধান পরিপালন না করিবার জরিমানা',
      number: '২৭৬',
    },
    {
      href: '/laws/incometax2023/section/section277',
      text: 'ধারা ২৩৭ এর বিধান পরিপালন না করিবার জরিমানা',
      number: '২৭৭',
    },
    {
      href: '/laws/incometax2023/section/section278',
      text: 'ধারা ২৩৮ এর বিধান পরিপালন না করিবার জরিমানা',
      number: '২৭৮',
    },
    {
      href: '/laws/incometax2023/section/section279',
      text: 'ধারা ২৩৯ এর বিধান পরিপালন না করিবার জরিমানা',
      number: '২৭৯',
    },
    {
      href: '/laws/incometax2023/section/section280',
      text: 'শুনানি ব্যতীত জরিমানা আরোপে নিষেধাজ্ঞা',
      number: '২৮০',
    },
    {
      href: '/laws/incometax2023/section/section281',
      text: 'জরিমানা আরোপের জন্য পরিদর্শী অতিরিক্ত কর কমিশনারের পূর্বানুমোদন',
      number: '২৮১',
    },
    {
      href: '/laws/incometax2023/section/section282',
      text: 'উপকর কমিশনারের নিকট জরিমানা আদেশ প্রেরণ',
      number: '২৮২',
    },
    {
      href: '/laws/incometax2023/section/section283',
      text: 'জরিমানা অন্য কোনো দায়ের অধিকারকে ক্ষুণ্ন করিবে না',
      number: '২৮৩',
    },
    {
      href: '/laws/incometax2023/section/section284',
      text: 'সংশোধিত আয়ের পরিমাণের ভিত্তিতে জরিমানা আদেশ সংশোধন',
      number: '২৮৪',
    },
  ],
},
  {
    title: 'অংশ ২০',
    subtitle: 'রিভিশন, আপিল ও রেফারেন্স',
    sections: [
      { 
        title:'প্রথম অধ্যায়',
        subtitle:'রিভিশন',
        sections: [
        { 
          href: '/laws/incometax2023/section/section285', 
          text: 'কমিশনারের রিভিশনের ক্ষমতা', 
          number: '২৮৫' 
        },
        ]
      },
      {
        title: 'দ্বিতীয় অধ্যায়',
        subtitle: 'আপিল এবং রেফারেন্স',
        sections: [
          {
            href: '/laws/incometax2023/section/section286',
            text: 'আপিল আয়কর কর্তৃপক্ষের নিকট আপিল',
            number: '২৮৬',
          },
          {
            href: '/laws/incometax2023/section/section287',
            text: 'আপিল দায়েরের ফরম, পদ্ধতি এবং সময়সীমা',
            number: '২৮৭',
          },
          {
            href: '/laws/incometax2023/section/section288',
            text: 'আপিল নিষ্পত্তির ক্ষেত্রে অনুসরণীয় পদ্ধতি',
            number: '২৮৮',
          },
          {
            href: '/laws/incometax2023/section/section289',
            text: 'আপিলের সিদ্ধান্ত',
            number: '২৮৯',
          },
          {
            href: '/laws/incometax2023/section/section290',
            text: 'ট্যাক্স রিকোভারি অফিসারের আদেশের বিরুদ্ধে আপিল',
            number: '২৯০',
          },
          {
            href: '/laws/incometax2023/section/section291',
            text: 'আপিল ট্রাইব্যুনালে আপিল',
            number: '২৯১',
          },
          {
            href: '/laws/incometax2023/section/section292',
            text: 'আপিল ট্রাইব্যুনাল কর্তৃক আপিল নিষ্পত্তি',
            number: '২৯২',
          },
          {
            href: '/laws/incometax2023/section/section293',
            text: 'হাইকোর্ট বিভাগে রেফারেন্স',
            number: '২৯৩',
          },
          {
            href: '/laws/incometax2023/section/section294',
            text: 'হাইকোর্ট বিভাগের সিদ্ধান্ত',
            number: '২৯৪',
          },
          {
            href: '/laws/incometax2023/section/section295',
            text: 'আপিল বিভাগে আপিল',
            number: '২৯৫',
          },
        ],
      },
      {
        title: 'তৃতীয় অধ্যায়',
        subtitle: 'বিকল্প বিরোধ নিষ্পত্তি',
        sections: [
          {
            href: '/laws/incometax2023/section/section296',
            text: 'সংজ্ঞা',
            number: '২৯৬',
          },
          {
            href: '/laws/incometax2023/section/section297',
            text: 'বিকল্প বিরোধ নিষ্পত্তি',
            number: '২৯৭',
          },
          {
            href: '/laws/incometax2023/section/section298',
            text: 'বিকল্প বিরোধ নিষ্পত্তির প্রয়োগ',
            number: '২৯৮',
          },
          {
            href: '/laws/incometax2023/section/section299',
            text: 'কমিশনারের প্রতিনিধি',
            number: '২৯৯',
          },
          {
            href: '/laws/incometax2023/section/section300',
            text: 'বিকল্প বিরোধ নিষ্পত্তির প্রক্রিয়ায় সহায়তাকারী',
            number: '৩০০',
          },
          {
            href: '/laws/incometax2023/section/section301',
            text: 'বিকল্প বিরোধ নিষ্পত্তির জন্য করদাতার অধিকার ও কর্তব্যসমূহ',
            number: '৩০১',
          },
          {
            href: '/laws/incometax2023/section/section302',
            text: 'বিকল্প বিরোধ নিষ্পত্তির মাধ্যমে কর বিরোধ নিষ্পত্তির পদ্ধতি',
            number: '৩০২',
          },
          {
            href: '/laws/incometax2023/section/section303',
            text: 'আপিল ট্রাইব্যুনাল বা হাইকোর্ট বিভাগে নিষ্পন্নাধীন আপিল বা রেফারেন্স সম্পর্কিত কার্যক্রম সাময়িক স্থগিতকরণ',
            number: '৩০৩',
          },
          {
            href: '/laws/incometax2023/section/section304',
            text: 'বিকল্প বিরোধ নিষ্পত্তি প্রক্রিয়ার সিদ্ধান্ত',
            number: '৩০৪',
          },
          {
            href: '/laws/incometax2023/section/section305',
            text: 'মতৈক্যের ফলাফল',
            number: '৩০৫',
          },
          {
            href: '/laws/incometax2023/section/section306',
            text: 'মতৈক্য না হইবার ক্ষেত্রে আপিলের সীমাবদ্ধতা',
            number: '৩০৬',
          },
          {
            href: '/laws/incometax2023/section/section307',
            text: 'মতৈক্যের পর সত্যতার প্রতিপাদন',
            number: '৩০৭',
          },
          {
            href: '/laws/incometax2023/section/section308',
            text: 'দেওয়ানি বা ফৌজদারি মামলায় বাধা',
            number: '৩০৮',
          },
        ],
      },
    ],
  },
  {
    title: 'অংশ ২১',
    subtitle: 'তথ্য সুরক্ষা',
    sections: [
      { 
        href: '/laws/incometax2023/section/section309', 
        text: 'বিবৃতি, আয়, ইত্যাদির গোপনীয়তা', 
        number: '৩০৯' 
      },
    ],
  },
  {
    title: 'অংশ ২২',
    subtitle: 'ফৌজদারি অপরাধ ও বিচার',
    sections: [
      {
        href: '/laws/incometax2023/section/section310',
        text: 'এই অংশের বিধানসমূহ অন্যান্য বিধানের সহিত সামঞ্জস্যপূর্ণ হইবে',
        number: '৩১০',
      },
      {
        href: '/laws/incometax2023/section/section311',
        text: 'তথ্য প্রদানে ব্যর্থতা এবং কতিপয় কার্য সম্পাদনে ব্যর্থতার দণ্ড',
        number: '৩১১',
      },
      {
        href: '/laws/incometax2023/section/section312',
        text: 'কর পরিহারের চেষ্টার দণ্ড',
        number: '৩১২',
      },
      {
        href: '/laws/incometax2023/section/section313',
        text: 'যাচাই সাপেক্ষে প্রমাণিত মিথ্যা বিবৃতির দণ্ড',
        number: '৩১৩',
      },
      {
        href: '/laws/incometax2023/section/section314',
        text: 'মিথ্যা সনদপত্রের দণ্ড',
        number: '৩১৪',
      },
      {
        href: '/laws/incometax2023/section/section315',
        text: 'উৎসে কর কর্তন বা সংগ্রহে ব্যর্থতা এবং তাহা সরকারি কোষাগারে জমাদানে ব্যর্থতার দণ্ড',
        number: '৩১৫',
      },
      {
        href: '/laws/incometax2023/section/section316',
        text: 'যাচাই সাপেক্ষে মিথ্যা নিরীক্ষিত বিবৃতি প্রদানের দণ্ড',
        number: '৩১৬',
      },
      {
        href: '/laws/incometax2023/section/section317',
        text: 'করদাতা শনাক্তকরণ নম্বর অসঙ্গত ব্যবহারের দণ্ড',
        number: '৩১৭',
      },
      {
        href: '/laws/incometax2023/section/section318',
        text: 'আয়কর কর্তৃপক্ষকে বাধা প্রদানের দণ্ড',
        number: '৩১৮',
      },
      {
        href: '/laws/incometax2023/section/section319',
        text: 'ক্রোক প্রতিরোধের উদ্দেশ্যে সম্পত্তি হস্তান্তরের দণ্ড',
        number: '৩১৯',
      },
      {
        href: '/laws/incometax2023/section/section320',
        text: 'ধারা ২২১ এর উপ-ধারা (৭) এর বিধান পরিপালন না করিবার দণ্ড',
        number: '৩২০',
      },
      {
        href: '/laws/incometax2023/section/section321',
        text: 'প্ররোচনার দণ্ড',
        number: '৩২১',
      },
      {
        href: '/laws/incometax2023/section/section322',
        text: 'সুরক্ষিত তথ্য প্রকাশের দণ্ড',
        number: '৩২২',
      },
      {
        href: '/laws/incometax2023/section/section323',
        text: 'কোনো কোম্পানি, ফার্ম বা ব্যক্তিসংঘ কর্তৃক অপরাধ সংঘটন',
        number: '৩২৩',
      },
      {
        href: '/laws/incometax2023/section/section324',
        text: 'মামলা পরিচালনার অনুমোদন',
        number: '৩২৪',
      },
      {
        href: '/laws/incometax2023/section/section325',
        text: 'অপরাধ আপোষের ক্ষমতা',
        number: '৩২৫',
      },
      {
        href: '/laws/incometax2023/section/section326',
        text: 'বিশেষ জজ কর্তৃক বিচার',
        number: '৩২৬',
      },
    ],
  },
  {
    title: 'অংশ ২৩',
    subtitle: 'অনুমোদিত প্রতিনিধি',
    sections: [
      { 
        href: '/laws/incometax2023/section/section327', 
        text: 'হাজিরার জন্য অনুমোদিত প্রতিনিধি', 
        number: '৩২৭' 
      },
    ],
  },
  {
    title: 'অংশ ২৪',
    subtitle: 'ইলেক্ট্রনিক কর ব্যবস্থাপনা',
    sections: [
      { 
        href: '/laws/incometax2023/section/section328', 
        text: 'ইলেক্ট্রনিক কর ব্যবস্থাপনা', 
        number: '৩২৮' 
      },
    ],
  },
  {
    title: 'অংশ ২৫',
    subtitle: 'বিবিধ',
    sections: [
      {
        href: '/laws/incometax2023/section/section329',
        text: 'আয়কর কর্তৃপক্ষকে সহায়তা প্রদান',
        number: '৩২৯',
      },
      {
        href: '/laws/incometax2023/section/section330',
        text: 'ত্রুটি সংশোধন',
        number: '৩৩০',
      },
      {
        href: '/laws/incometax2023/section/section331',
        text: 'নিকটতম টাকায় কর গণনা',
        number: '৩৩১',
      },
      {
        href: '/laws/incometax2023/section/section332',
        text: 'পরিশোধিত বা পুনরুদ্ধারকৃত অর্থের জন্য প্রদত্ত প্রমাণ',
        number: '৩৩২',
      },
      {
        href: '/laws/incometax2023/section/section333',
        text: 'তামাদির মেয়াদ গণনা',
        number: '৩৩৩',
      },
      {
        href: '/laws/incometax2023/section/section334',
        text: 'সময়সীমা বৃদ্ধি বা তামাদি প্রমার্জনের ক্ষমতা',
        number: '৩৩৪',
      },
      {
        href: '/laws/incometax2023/section/section335',
        text: 'নোটিশ জারি',
        number: '৩৩৫',
      },
      {
        href: '/laws/incometax2023/section/section336',
        text: 'কতিপয় ক্রুটির জন্য কর নির্ধারণ, ইত্যাদি ত্রুটিপূর্ণ হিসাবে বিবেচিত না করা',
        number: '৩৩৬',
      },
      {
        href: '/laws/incometax2023/section/section337',
        text: 'কোম্পানি অবসায়নের ক্ষেত্রে গৃহীত ব্যবস্থাদি',
        number: '৩৩৭',
      },
      {
        href: '/laws/incometax2023/section/section338',
        text: 'দায়মুক্তি',
        number: '৩৩৮',
      },
      {
        href: '/laws/incometax2023/section/section339',
        text: 'কর আরোপের জন্য নিষ্পন্নাধীন আইনি বিধান কার্যকরকরণ',
        number: '৩৩৯',
      },
      {
        href: '/laws/incometax2023/section/section340',
        text: 'কর্মকর্তা ও কর্মচারীর জন্য প্রণোদনা',
        number: '৩৪০',
      },
      {
        href: '/laws/incometax2023/section/section341',
        text: '[বিলুপ্ত]',
        number: '৩৪১',
      },
      {
        href: '/laws/incometax2023/section/section342',
        text: 'অসুবিধা দুরীকরণ',
        number: '৩৪২',
      },
      {
        href: '/laws/incometax2023/section/section343',
        text: 'বিধি প্রণয়নের ক্ষমতা',
        number: '৩৪৩',
      },
      {
        href: '/laws/incometax2023/section/section344',
        text: 'রহিতকরণ ও হেফাজত',
        number: '৩৪৪',
      },
      {
        href: '/laws/incometax2023/section/section345',
        text: 'ইংরেজিতে অনুদিত পাঠ প্রকাশ',
        number: '৩৪৫',
      },
    ],
  },
  {
    title: 'তফসিল',
    sections: [
      { 
        href: '/pdfs/schedule.pdf', 
        text: 'SCHEDULE',
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
    
    const extractSections = (items, levelInfo = {}) => {
      items.forEach(item => {
        if (item.sections) {
          // This is a section group with subsections
          extractSections(item.sections, {
            ...levelInfo,
            groupTitle: item.title,
            groupSubtitle: item.subtitle
          });
        } else if (item.href) {
          // This is a direct section
          sections.push({
            ...item,
            ...levelInfo,
            chapterTitle: levelInfo.chapterTitle || '',
            chapterSubtitle: levelInfo.chapterSubtitle || ''
          });
        }
      });
    };
    
    chapters.forEach(chapter => {
      extractSections(chapter.sections, {
        chapterTitle: chapter.title,
        chapterSubtitle: chapter.subtitle
      });
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
        section.groupTitle?.toLowerCase() || '',
        section.groupSubtitle?.toLowerCase() || '',
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

  // Render nested sections
  const renderSections = (sections) => {
    if (sections[0]?.sections) {
      // This is a section with subsections
      return (
        <div className="space-y-4">
          {sections.map((sectionGroup, idx) => (
            <div key={idx}>
              {sectionGroup.title && (
                <h3 className="pt-1 pb-1 mb-2 font-semibold text-center text-black bg-green-200 border-b border-blue-100 text-md">
                  {sectionGroup.title}
                </h3>
              )}
              {sectionGroup.subtitle && (
                <p className="mb-2 text-sm text-center text-gray-600">{sectionGroup.subtitle}</p>
              )}
              <ul className="space-y-1">
                {sectionGroup.sections?.map((subsection, subIdx) => (
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
      );
    } else {
      // This is a flat section
      return (
        <ul className="space-y-2">
          {sections?.map((section, idx) => (
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
      );
    }
  };

  const regularChapters = chapters.filter(ch => 
    ch.title !== 'তফসিল' && ch.title !== 'গেজেটেড অনুলিপি'
  );
  
  const specialChapters = chapters.filter(ch => 
    ch.title === 'তফসিল' || ch.title === 'গেজেটেড অনুলিপি'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="relative overflow-hidden text-white shadow-lg bg-gradient-to-r from-green-800 to-green-800">
        <div className="container px-6 py-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
            {/* Text Content */}
            <div className="flex-1 lg:pr-8">
              <h1 className="mb-2 text-2xl font-bold md:text-2xl">আয়কর আইন, ২০২৩</h1>
              <p className="text-sm opacity-90">( ২০২৩ সনের ১২ নং আইন )</p>
              
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
                                {section.groupTitle && (
                                  <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                                    {section.groupTitle}
                                  </span>
                                )}
                                {section.priority === 1 && (
                                  <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                                    Exact Match
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="mt-1 text-gray-800">{section.text}</p>
                            {section.groupTitle && (
                              <p className="mt-1 text-sm text-gray-600">{section.groupTitle}</p>
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
        <div className="p-6 mb-8 bg-white border-l-4 border-green-700 shadow-md rounded-xl">
          <h2 className="mb-3 font-semibold text-center text-black text-md">
            <sup className='text-blue-500' title='সর্বত্র উল্লিখিত "ফাইন্যান্স কোম্পানি", "ফাইন্যান্স কোম্পানিকে", "ফাইন্যান্স কোম্পানিতে" ও "ফাইন্যান্স কোম্পানির" শব্দগুলি "আর্থিক প্রতিষ্ঠান", "আর্থিক প্রতিষ্ঠানকে", "আর্থিক প্রতিষ্ঠানে" ও "আর্থিক প্রতিষ্ঠানের" শব্দগুলির পরিবর্তে অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ১৪(ক) ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর'>১</sup>
            [<sup className='text-blue-500' title='সর্বত্র উল্লিখিত "কাস্টমস আইন, ২০২৩ (২০২৩ সনের ৫৭ নং আইন)" শব্দগুলি, কমা, সংখ্যাগুলি ও বন্ধনী "Customs Act, 1969 (Act No. IV of 1969)" শব্দগুলি, কমা, সংখ্যাগুলি ও বন্ধনীর পরিবর্তে অর্থ আইন, ২০২৪ (২০২৪ সনের ৫ নং আইন) এর ১৪(গ) ধারাবলে প্রতিস্থাপিত যাহা ২০২৪ সনের ১ জুলাই হইতে কার্যকর।'>২</sup>
            <a className='text-blue-500' href='/regulations/acts/income-tax/it-ordinance-1984-amended'>Income-tax Ordinance, 1984</a> রহিতক্রমে যুগোপযোগী ও সময়োপযোগী করিয়া নূতন আইন প্রণয়নকল্পে প্রণীত আইন
          </h2>
          
          {/* Added important legal phrases */}
          <div className="p-4 my-4 text-justify border-l-4 rounded-r-lg bg-gray-50">
            <p className="italic text-black">
              যেহেতু সংবিধান (পঞ্চদশ সংশোধন) আইন, ২০১১ (২০১১ সনের ১৪ নং আইন) দ্বারা ১৯৮২ সনের ২৪ মার্চ হইতে ১৯৮৬ সনের ১১ নভেম্বর পর্যন্ত সময়ের মধ্যে সামরিক ফরমান দ্বারা জারীকৃত অধ্যাদেশসমূহের অনুমোদন ও সমর্থন সংক্রান্ত গণপ্রজাতন্ত্রী বাংলাদেশের সংবিধানের চতুর্থ তফসিলের ১৯ অনুচ্ছেদ বিলুপ্ত হওয়ায় এবং সিভিল আপিল নং ৪৮/২০১১ তে সুপ্রীম কোর্টের আপীল বিভাগ কর্তৃক প্রদত্ত রায়ে সামরিক আইনকে অসাংবিধানিক ঘোষণাপূর্বক উহার বৈধতা প্রদানকারী সংবিধান (সপ্তম সংশোধন) আইন, ১৯৮৬ (১৯৮৬ সনের ১ নং আইন) বাতিল ঘোষিত হওয়ায় উক্ত অধ্যাদেশসমূহের কার্যকারিতা লোপ পায়; এবং<br/><br/>
              যেহেতু ২০১৩ সনের ৭ নং আইন দ্বারা উক্ত অধ্যাদেশসমূহের মধ্যে কতিপয় অধ্যাদেশ কার্যকর ও বলবৎ রাখা হয়; এবং<br/><br/>
              যেহেতু উক্ত অধ্যাদেশসমূহের আবশ্যকতা ও প্রাসঙ্গিকতা পর্যালোচনা করিয়া আবশ্যক বিবেচিত অধ্যাদেশসমূহ সকল অংশীজন ও সংশ্লিষ্ট মন্ত্রণালয় বা বিভাগের মতামত গ্রহণ করিয়া প্রয়োজনীয় সংশোধন ও পরিমার্জনক্রমে বাংলা ভাষ্যে নূতন আইন প্রণয়ন করিবার জন্য সরকার সিদ্ধান্ত গ্রহণ করিয়াছে; এবং<br/><br/>
              যেহেতু আয়কর, অগ্রিম আয়কর, উৎসে কর, ন্যূনতম কর, সারচার্জ ও অন্য কোনো প্রকারের কর আরোপের ক্ষেত্র বিস্তৃতকরণ, আর্থিক শৃঙ্খলা প্রতিষ্ঠা এবং আনুষঙ্গিক অন্যান্য বিষয়ে যুগোপযোগী ও সময়োপযোগী করিয়া নূতন আইন প্রণয়ন করা আবশ্যক; এবং<br/><br/>
              যেহেতু সরকারের উপরি-বর্ণিত সিদ্ধান্তের আলোকে, <a className='text-blue-500' href='/regulations/acts/income-tax/it-ordinance-1984-amended'>Income-tax Ordinance, 1984</a> (Ordinance No. XXXVI of 1984) রহিতক্রমে যুগোপযোগী ও সময়োপযোগী করিয়া নূতন আইন প্রণয়ন করা সমীচীন ও প্রয়োজনীয়;<br/><br/>
              সেহেতু এতদ্দ্বারা নিম্নরূপ আইন করা হইল:-
            </p>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 gap-6">
          {regularChapters.map((chapter, index) => (
            <div key={index} className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
              <div className="p-4 font-bold text-black bg-gradient-to-r from-green-300 to-green-300">
                <h2 className="text-lg text-center">{chapter.title}</h2>
                <p className="text-xs text-center opacity-90">{chapter.subtitle}</p>
              </div>
              
              <div className="p-4">
                {renderSections(chapter.sections)}
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