import React, { useState } from 'react';
import { useNavigate } from "react-router"; // <-- Add this at top

import {
  Heart,
  ArrowLeftRight,
  MapPin,
  Truck,
  DollarSign,
  RotateCcw,
  Ban,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import img1 from "../Images/i.jpg";
import img2 from "../Images/watch.png";
import img3 from "../Images/am.jpg";

const thumbnails = [img1, img2, img3];

const ProductHero = () => {
  const [mainImage, setMainImage] = useState(img1);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  const navigate = useNavigate(); // <-- Initialize navigate


  const handleQuantity = (type) => {
    if (type === "inc") setQuantity((prev) => prev + 1);
    else setQuantity((prev) => Math.max(1, prev - 1));
  };

  const showPrevThumbnail = () => {
    const newIndex = thumbnailIndex === 0 ? thumbnails.length - 1 : thumbnailIndex - 1;
    setThumbnailIndex(newIndex);
    setMainImage(thumbnails[newIndex]);
  };

  const showNextThumbnail = () => {
    const newIndex = thumbnailIndex === thumbnails.length - 1 ? 0 : thumbnailIndex + 1;
    setThumbnailIndex(newIndex);
    setMainImage(thumbnails[newIndex]);
  };

  return (
    <div className="bg-[#f4f4f4] px-40 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4 space-x-2">
        <button
          onClick={() => navigate("/")}
          className="hover:underline hover:font-bold hover:text-emerald-800 text-gray-600"
        >
          Home
        </button>
        <span>&gt;</span>

        <button
          onClick={() => navigate("/electronics")}
          className="hover:underline hover:font-bold hover:text-emerald-800 text-gray-600"
        >
          Electronics
        </button>
        <span>&gt;</span>

        <button
          onClick={() => navigate("/electronics")}
          className="hover:underline hover:font-bold hover:text-emerald-800 text-gray-600"
        >
          Headphone
        </button>
        <span>&gt;</span>

        <span className="text-gray-800 font-medium">
          Beats Pro Over-Ear Headphones - Black
        </span>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Main Image */}
        <div>
          <div className="relative mb-4 group w-full h-[320px] bg-white border rounded flex items-center justify-center">
            <img
              src={mainImage}
              alt="Main Product"
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <button className="absolute bottom-2 right-2 text-gray-500">
              <Maximize2 size={16} />
            </button>
          </div>

          {/* Single Thumbnail View with Arrows */}
          <div className="flex items-center justify-between mt-2">
            <button onClick={showPrevThumbnail} className="p-1 rounded hover:bg-gray-200">
              <ChevronLeft />
            </button>
            <div className="w-16 h-16 overflow-hidden">
              <img
                src={thumbnails[thumbnailIndex]}
                alt="Thumbnail"
                className="w-full h-full object-cover rounded border"
              />
            </div>
            <button onClick={showNextThumbnail} className="p-1 rounded hover:bg-gray-200">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Middle: Product Info */}
        <div className='px-15'>
          <h2 className=" text-xl font-semibold text-gray-800 mb-2">
            Beats Pro Over-Ear Headphones - Black
          </h2>

          <div className="flex items-center gap-2 text-sm text-orange-500 mb-2">
            ★★★★★ <span className="text-gray-600">(3)</span>
          </div>

          <div className="text-sm text-gray-700 mb-1">Brand: <span className="text-blue-600">No Brand</span></div>
          <div className="text-sm text-green-600 font-medium mb-3">Stock Available</div>

          <div className="text-lg font-bold text-gray-500 line-through">2000.00 BDT</div>
          <div className="text-lg font-bold text-gray-900">
            1900.00 BDT <span className="text-sm text-red-500 ml-2">Save: 100.00 BDT</span>
          </div>

          <div className="mt-3 text-sm text-gray-800">
            Color: <span className=" text-black font-bold">Black</span>
          </div>

          <div className="mt-3 text-sm text-amber-700 font-bold">
            Shop Name: <button className='hover:text-green-600'>ABC Shop</button>
          </div>

          {/* Icons */}
          <div className="mt-5 flex items-center gap-4">
            <button onClick={() => setIsWishlist(!isWishlist)} className="text-gray-600 hover:text-red-500">
              <Heart fill={isWishlist ? 'red' : 'none'} className="w-5 h-5" />
            </button>
            <button onClick={() => setIsCompared(!isCompared)} className="text-gray-600 hover:text-indigo-600">
              <ArrowLeftRight className="w-5 h-5"/>
            </button>
          </div>

          {/* Quantity Box */}
          <div className="mt-6 border-t pt-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-gray-800">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantity("dec")}
                  className="w-8 h-8 border rounded flex items-center justify-center text-lg"
                >
                  −
                </button>
                <span className="text-base">{quantity}</span>
                <button
                  onClick={() => handleQuantity("inc")}
                  className="w-8 h-8 border rounded flex items-center justify-center text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white font-semibold text-sm px-6 py-2 rounded hover:bg-purple-700">
                Buy Now
              </button>
              <button className="bg-yellow-500 text-white font-semibold text-sm px-6 py-2 rounded hover:bg-yellow-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Right: Delivery Info */}
        <div className="px-10 text-sm text-gray-700 space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 mt-1" />
              <div>
                <p>Nurbag, Siddirganj, Narayanganj<br />House No. 102</p>
              </div>
            </div>
            <span className="text-blue-600 font-semibold cursor-pointer">Change</span>
          </div>

          <div className="flex gap-2">
            <Truck className="w-4 h-4 mt-1" />
            <p>Standard Delivery<br /><span className="text-gray-500">Guaranteed by 2–4 days</span> - 60 BDT</p>
          </div>

          <div className="flex gap-2">
            <DollarSign className="w-4 h-4 mt-1" />
            <p>Cash on Delivery Available</p>
          </div>

          <div className="flex gap-2">
            <RotateCcw className="w-4 h-4 mt-1" />
            <p>Return & Warranty<br /><span className="text-gray-500">7 Days Returns</span></p>
          </div>

          <div className="flex gap-2">
            <Ban className="w-4 h-4 mt-1" />
            <p>Warranty not available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
