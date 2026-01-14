'use client'

import { useState } from 'react';
import Image from "next/image";
import { 
  FaStar, 
  FaCartPlus, 
  FaBookOpen, 
  FaInfoCircle,
  FaHeart,
  FaShare 
} from 'react-icons/fa';

export default function PublicationCard({ book }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log('Added to cart:', book.name);
  };

  const handleRead = (e) => {
    e.stopPropagation();
    console.log('Read book:', book.name);
  };

  const handleDetails = (e) => {
    e.stopPropagation();
    console.log('Show details:', book.name);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    console.log('Share book:', book.name);
  };

  return (
    <div
      className="relative overflow-hidden transition-all duration-500 bg-white border border-green-800 shadow-md group rounded-2xl hover:shadow-xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={book.image}
          alt={book.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent group-hover:opacity-100" />

        {/* Actions */}
        <div className="absolute flex flex-col gap-2 transition-all duration-300 delay-200 opacity-0 top-3 right-3 group-hover:opacity-100">
          <button
            onClick={handleLike}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-green-700 hover:bg-red-500 hover:text-white border border-green-300'
            }`}
          >
            <FaHeart className="text-sm" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 text-green-700 transition-all duration-300 bg-white border border-green-300 rounded-full hover:bg-green-600 hover:text-white"
          >
            <FaShare className="text-sm" />
          </button>
        </div>

        {/* Category Badge */}
        {book.category && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium text-white bg-green-600 rounded-full shadow-md">
              {book.category}
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold leading-tight text-gray-800 line-clamp-2">
          {book.name}
        </h3>
        
        <p className="mb-3 text-xs text-gray-500">{book.writer}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <FaStar className="text-sm text-yellow-400" />
            <span className="font-medium text-green-700">{book.rating}</span>
            <span className="text-sm text-gray-500">/5</span>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-green-700">৳{book.price.toFixed(2)}</p>
          </div>
        </div>

        {book.description && (
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {book.description}
          </p>
        )}
      </div>

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/90 to-red-900/80 backdrop-blur-sm flex flex-col justify-center items-center gap-3 p-6 transition-all duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-green-600 shadow-lg rounded-xl hover:bg-green-700 hover:scale-105 shadow-green-400/25"
        >
          <FaCartPlus className="mr-3 text-lg" />
          Add to Cart
        </button>
        
        <button
          onClick={handleRead}
          className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-red-500 shadow-lg rounded-xl hover:bg-red-600 hover:scale-105 shadow-red-400/25"
        >
          <FaBookOpen className="mr-3 text-lg" />
          Read Preview
        </button>
        
        <button
          onClick={handleDetails}
          className="flex items-center justify-center w-full px-6 py-3 font-semibold text-green-700 transition-all duration-300 transform bg-white border border-green-300 rounded-xl hover:bg-green-50 hover:scale-105"
        >
          <FaInfoCircle className="mr-3 text-lg" />
          View Details
        </button>
      </div>
    </div>
  );
}
