'use client'

import PublicationCard from '@/component/publication/PublicationCard';

// Dummy data for books (replace with actual data from database/Prisma)
const books = [
  {
    id: '1',
    name: 'VAT Guide',
    writer: 'John Doe',
    image: '/Books/vatguide.jpeg',
    price: 29.99,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Customs Guide',
    writer: 'Jane Smith',
    image: '/Books/customguide.jpeg',
    price: 34.99,
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Porikkha Sohayika',
    writer: 'Alice Johnson',
    image: '/Books/custom&vat-porikkhasohayika.jpeg',
    price: 19.99,
    rating: 4.2,
  },
  {
    id: '4',
    name: 'Bond Guide',
    writer: 'Bob Brown',
    image: '/Books/nan.jpeg',
    price: 24.99,
    rating: 4.8,
  },
  {
    id: '5',
    name: 'Others',
    writer: 'Charlie Davis',
    image: '/Books/custom&vat-porikkhaprostoti.jpeg',
    price: 15.99,
    rating: 4.0,
  },
];

export default function Publication() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Publications
      </span>
      <div className="mt-2 flex justify-center">
        <span className="inline-block w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
      </div>
    </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <PublicationCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}