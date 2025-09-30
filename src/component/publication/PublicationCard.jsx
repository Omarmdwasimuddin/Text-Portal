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
      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-red-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={book.image}
          alt={book.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          priority={false}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
          <button
            onClick={handleLike}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-900/80 text-gray-300 hover:bg-red-500 hover:text-white'
            }`}
          >
            <FaHeart className={`text-sm ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full bg-gray-900/80 text-gray-300 backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <FaShare className="text-sm" />
          </button>
        </div>

        {/* Category Badge */}
        {book.category && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-full">
              {book.category}
            </span>
          </div>
        )}
      </div>

      {/* Book Details */}
      <div className="p-5">
        <h3 className="font-bold text-white text-lg mb-2 line-clamp-2 leading-tight">
          {book.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3">By {book.writer}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-gray-300 font-medium">{book.rating}</span>
            <span className="text-gray-500 text-sm">/5</span>
          </div>
          
          <div className="text-right">
            <p className="text-2xl font-bold text-red-400">${book.price.toFixed(2)}</p>
          </div>
        </div>

        {book.description && (
          <p className="text-gray-400 text-sm line-clamp-2 mb-4">
            {book.description}
          </p>
        )}
      </div>

      {/* Hover Actions */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-red-900/80 backdrop-blur-sm flex flex-col justify-center items-center gap-3 p-6 transition-all duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center w-full px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-red-500/25"
        >
          <FaCartPlus className="mr-3 text-lg" />
          Add to Cart
        </button>
        
        <button
          onClick={handleRead}
          className="flex items-center justify-center w-full px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
        >
          <FaBookOpen className="mr-3 text-lg" />
          Read Preview
        </button>
        
        <button
          onClick={handleDetails}
          className="flex items-center justify-center w-full px-6 py-3 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transform hover:scale-105 transition-all duration-300"
        >
          <FaInfoCircle className="mr-3 text-lg" />
          View Details
        </button>
      </div>
    </div>
  );
}