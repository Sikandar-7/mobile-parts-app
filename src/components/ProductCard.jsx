"use client";
import { useState } from "react";

export default function ProductCard({ product, isLoggedIn = false }) {
  const [qty, setQty] = useState(product.qty || 1);

  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  const increase = () => {
    setQty(qty + 1);
  };

  return (
    <div className="product-card relative bg-white dark:bg-[#1e1e1e] border border-gray-100 dark:border-gray-800 rounded-md overflow-hidden group">
      {/* Stock Badge */}
      {product.stock === "high" && <div className="stock-badge" />}

      {/* Product Image */}
      <div className="relative w-full aspect-square bg-gray-50 dark:bg-[#121212] flex items-center justify-center p-3 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-[#1a1a1a] rounded flex items-center justify-center">
          <div className="text-center p-2">
            <svg
              className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-[8px] text-gray-400 dark:text-gray-500 leading-tight">
              {product.name.substring(0, 20)}
            </p>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-2 pt-2 pb-2 flex flex-col justify-between flex-1">
        <div>
          {/* Product Name */}
          <h3 className="text-[10px] lg:text-[11px] xl:text-xs font-medium leading-tight line-clamp-2 min-h-[28px] uppercase">
            {product.name}
          </h3>

          {/* Price + Quantity Row */}
          <div className="mt-1.5 flex items-center justify-between">
            <span className="text-red-500 text-[11px] lg:text-xs font-bold whitespace-nowrap">
              {isLoggedIn ? `Rs ${product.price}` : "Rs ..."}
            </span>

            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded overflow-hidden">
              <button onClick={decrease} className="w-6 h-6 flex items-center justify-center bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                −
              </button>
              <div className="w-7 h-6 flex items-center justify-center text-[11px] font-medium border-l border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e1e1e]">
                {qty}
              </div>
              <button onClick={increase} className="w-6 h-6 flex items-center justify-center bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
                +
              </button>
            </div>
          </div>
        </div>

        {/* Add to Cart */}
        <button className="w-full mt-2 bg-[#006bff] hover:bg-[#0055cc] text-white py-1.5 rounded text-[11px] font-bold transition-colors shadow-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
