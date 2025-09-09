'use client'

import { useState } from 'react';
import Image from "next/image";
import { FaStar, FaCartPlus, FaDollarSign, FaInfoCircle } from 'react-icons/fa';

export default function PublicationCard({ book }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-[#1a2d2f] border border-green-900/30 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book Image */}
      <div className="relative w-full h-56 sm:h-64 md:h-72">
        <Image
          src={book.image}
          alt={book.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>

      {/* Book Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-1 line-clamp-1">
          {book.name}
        </h2>
        <p className="text-sm text-gray-400 mb-2">By {book.writer}</p>
        <div className="flex items-center mb-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-300">{book.rating}</span>
        </div>
        <p className="text-lg font-bold text-green-400">
          ${book.price.toFixed(2)}
        </p>
      </div>

      {/* Hover Options */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white gap-3 p-4 transition-opacity duration-300">
          <button className="flex items-center w-full justify-center px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            <FaCartPlus className="mr-2" />
            Add to Cart
          </button>
          <button className="flex items-center w-full justify-center px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition">
            <FaDollarSign className="mr-2" />
            Subscription
          </button>
          <button className="flex items-center w-full justify-center px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
            <FaInfoCircle className="mr-2" />
            Details
          </button>
        </div>
      )}
    </div>
  );
}
