import React, { useState } from "react";
import { useNavigate } from "react-router"; // import useNavigate
import { Heart, ArrowLeftRight } from "lucide-react";

const ProductCard = ({
  image,
  title,
  link,
  colors,
  rating,
  currentPrice,
  oldPrice,
  saveAmount,
  badges = [],
}) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  const navigate = useNavigate(); // hook to navigate to other routes

  const handleAddToCart = () => {
    // Navigate to your custom alert page
    navigate("/cart-alert"); // replace with your alert page route
  };

  return (
    <div className="relative bg-white rounded-lg p-4 w-[220px] flex flex-col h-[380px] shadow-sm">
      
      {/* Icons */}
      <div className="flex items-center gap-4 mt-0 py-0 ml-35">
        <button onClick={() => setIsWishlist(!isWishlist)} className="text-gray-600 hover:text-red-500">
          <Heart fill={isWishlist ? 'red' : 'none'} className="w-5 h-5" />
        </button>
        <button onClick={() => setIsCompared(!isCompared)} className="text-gray-600 hover:text-indigo-600">
          <ArrowLeftRight className="w-5 h-5" />
        </button>
      </div>

      {/* Badges */}
      <div className="absolute top-2 left-2 flex gap-1 z-10">
        {badges.includes("Sale") && (
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">Sale</span>
        )}
        {badges.includes("Hot") && (
          <span className="bg-yellow-400 text-white text-xs px-2 py-0.5 rounded">Hot</span>
        )}
      </div>

      {/* Product Info */}
      <a href={link} className="flex flex-col flex-grow">
        <img 
          src={image}
          alt={title}
          className="w-full h-36 object-contain mb-2"
        />
        <h4 className="text-sm font-medium leading-snug">{title}</h4>
        <div className="text-xs text-gray-500">{colors || <span>&nbsp;</span>}</div>
        <div className="text-xs text-gray-500">{rating || <span>&nbsp;</span>}</div>

        <div className="text-sm font-bold mt-1">{currentPrice} BDT</div>
        {oldPrice ? (
          <>
            <div className="text-xs text-red-500 line-through">{oldPrice}</div>
            <div className="text-green-600 text-xs">Save: {saveAmount}</div>
          </>
        ) : (
          <>
            <div className="min-h-[16px] text-xs">&nbsp;</div>
            <div className="min-h-[16px] text-xs">&nbsp;</div>
          </>
        )}
      </a>

      {/* Add to Cart Button */}
      <div className="mt-auto pt-3">
        <button
          onClick={handleAddToCart}
          className="bg-indigo-600 text-white w-full py-2 text-sm rounded hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
