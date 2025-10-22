'use client'

import { useState } from 'react';
import PublicationCard from '@/component/publication/PublicationCard';

const books = [
  {
    id: '1',
    name: 'VAT Guide',
    writer: 'John Doe',
    image: '/Books/vatguide.jpeg',
    price: 29.99,
    rating: 4.5,
    description: 'Complete guide to Value Added Tax',
    category: 'VAT'
  },
  {
    id: '2',
    name: 'Customs Guide',
    writer: 'Jane Smith',
    image: '/Books/customguide.jpeg',
    price: 34.99,
    rating: 4.7,
    description: 'Comprehensive customs regulations guide',
    category: 'Customs'
  },
  {
    id: '3',
    name: 'Porikkha Sohayika',
    writer: 'Alice Johnson',
    image: '/Books/porikkhasohayika.jpeg',
    price: 19.99,
    rating: 4.2,
    description: 'Exam preparation guide',
    category: 'Education'
  },
  {
    id: '4',
    name: 'Bond Guide',
    writer: 'Bob Brown',
    image: '/Books/nan.jpeg',
    price: 24.99,
    rating: 4.8,
    description: 'Complete bond management guide',
    category: 'Finance'
  },
  {
    id: '5',
    name: 'Advanced Taxation',
    writer: 'Charlie Davis',
    image: '/Books/porikkhasohayika.jpeg',
    price: 15.99,
    rating: 4.0,
    description: 'Advanced taxation principles',
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
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 via-red-500 to-green-700 bg-clip-text text-transparent">
              আমাদের প্রকাশনা
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our collection of professional tax and finance guides
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-red-500 rounded-full" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBooks.map((book) => (
            <PublicationCard key={book.id} book={book} />
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No books found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
