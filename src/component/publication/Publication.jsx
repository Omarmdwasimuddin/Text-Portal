'use client'

import { useState } from 'react';
import PublicationCard from '@/component/publication/PublicationCard';

const books = [
  {
    id: '1',
    name: 'ভ্যাট গাইড',
    writer: 'আবু সুফিয়ান',
    image: '/Books/vatguide.jpeg',
    price: 300,
    rating: 4.5,
    description: 'মূল্য সংযোজন করের সম্পূর্ণ নির্দেশিকা',
    category: 'VAT'
  },
  {
    id: '2',
    name: 'কাস্টমস গাইড',
    writer: 'আবু সুফিয়ান',
    image: '/Books/customguide.jpeg',
    price: 299,
    rating: 4.7,
    description: 'ব্যাপক শুল্ক প্রবিধান নির্দেশিকা',
    category: 'Customs'
  },
  {
    id: '3',
    name: 'পরীক্ষা সহায়িকা',
    writer: 'আবু সুফিয়ান',
    image: '/Books/porikkhasohayika.jpeg',
    price: 299,
    rating: 4.2,
    description: 'পরীক্ষার প্রস্তুতির নির্দেশিকা',
    category: 'Education'
  },
  {
    id: '4',
    name: 'বন্ড গাইড',
    writer: 'আবু সুফিয়ান',
    image: '/Books/nan.jpeg',
    price: 199,
    rating: 4.8,
    description: 'সম্পূর্ণ বন্ড পরিচালনার গাইড',
    category: 'Finance'
  },
  {
    id: '5',
    name: 'ট্যাক্সেশন প্রিন্সিপলস',
    writer: 'আবু সুফিয়ান',
    image: '/Books/porikkhasohayika.jpeg',
    price: 250,
    rating: 4.0,
    description: 'উন্নত কর নীতি',
    category: 'Tax'
  },
];

export default function PublicationPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', ...new Set(books.map(book => book.category))].filter(Boolean);

  const filteredBooks = selectedCategory === 'all' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-white via-green-50 to-green-100">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-2xl font-bold md:text-2xl">
            <span className="text-transparent bg-gradient-to-r from-green-600 via-red-500 to-green-700 bg-clip-text">
              আমাদের প্রকাশনা
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm text-black">
            Discover our collection of professional tax and finance guides
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1 rounded-full bg-gradient-to-r from-green-600 to-red-500" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg shadow-green-400/30'
                  : 'bg-white text-red-700 border border-green-300 hover:bg-green-400'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredBooks.map((book) => (
            <PublicationCard key={book.id} book={book} />
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-500">No books found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
