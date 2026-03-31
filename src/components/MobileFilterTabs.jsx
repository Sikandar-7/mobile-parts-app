"use client";

import { categories, brands } from "@/data/products";

export default function MobileFilterTabs({ activeTab, setActiveTab, filters, setFilters, onClear }) {
  
  const handleCategory = (c) => setFilters((f) => ({ ...f, category: f.category === c ? "" : c }));
  const handleBrand = (b) => setFilters((f) => ({ ...f, brand: f.brand === b ? "" : b }));
  const handlePrice = (e) => {
    const val = Number(e.target.value);
    setFilters((f) => ({ ...f, priceRange: val > 0 ? { min: 0, max: val } : null }));
  };

  return (
    <div className="md:hidden w-full bg-white dark:bg-[#121212] flex flex-col items-stretch">
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 px-4 py-3 min-w-max border-t border-b border-gray-100 dark:border-gray-800">
          
          {/* Filter By Label */}
          <div className="px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[11px] font-medium pointer-events-none">
            Filter By:
          </div>

          {/* Price Tab */}
          <button
            onClick={() => setActiveTab(activeTab === "price" ? "" : "price")}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              activeTab === "price" ? "text-[#006bff]" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            Price
          </button>

          {/* Category Tab */}
          <button
            onClick={() => setActiveTab(activeTab === "category" ? "" : "category")}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              activeTab === "category" ? "text-[#006bff]" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            Category
          </button>

          {/* Brands Tab */}
          <button
            onClick={() => setActiveTab(activeTab === "brands" ? "" : "brands")}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              activeTab === "brands" ? "text-[#006bff]" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Brands
          </button>

          {/* Clear */}
          <button
            onClick={onClear}
            className="flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors ml-1"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Dropdown Container with slide animation */}
      <div 
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
          activeTab ? "max-h-[300px] border-b border-gray-100 dark:border-gray-800" : "max-h-0"
        }`}
      >
        {/* Category Dropdown */}
        {activeTab === "category" && (
          <div className="px-4 py-3 bg-white dark:bg-[#121212] grid grid-cols-2 gap-y-3 max-h-[250px] overflow-y-auto scrollbar-hide">
            {categories.map((c) => (
              <label key={c} className="flex items-center gap-2 cursor-pointer w-max">
                <div className={`flex-shrink-0 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${filters.category === c ? 'border-[#006bff]' : 'border-gray-400 dark:border-gray-500'}`}>
                  {filters.category === c && <div className="w-2 h-2 rounded-full bg-[#006bff]"></div>}
                </div>
                <input type="radio" className="hidden" checked={filters.category === c} onChange={() => handleCategory(c)} />
                <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300 uppercase">{c}</span>
              </label>
            ))}
          </div>
        )}

        {/* Brand Dropdown */}
        {activeTab === "brands" && (
          <div className="px-4 py-3 bg-white dark:bg-[#121212] grid grid-cols-2 gap-y-3 max-h-[250px] overflow-y-auto scrollbar-hide">
            {brands.map((b) => (
              <label key={b} className="flex items-center gap-2 cursor-pointer w-max">
                <div className={`flex-shrink-0 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${filters.brand === b ? 'border-[#006bff]' : 'border-gray-400 dark:border-gray-500'}`}>
                  {filters.brand === b && <div className="w-2 h-2 rounded-full bg-[#006bff]"></div>}
                </div>
                <input type="radio" className="hidden" checked={filters.brand === b} onChange={() => handleBrand(b)} />
                <span className="text-[10px] font-medium text-gray-700 dark:text-gray-300 uppercase">{b}</span>
              </label>
            ))}
          </div>
        )}

        {/* Price Dropdown */}
        {activeTab === "price" && (
          <div className="px-6 py-4 bg-white dark:bg-[#121212]">
            <input 
              type="range" 
              min="0" 
              max="100000" 
              step="1000"
              value={filters.priceRange ? filters.priceRange.max : 100000} 
              onChange={handlePrice}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#006bff]"
            />
            <div className="flex justify-between items-center text-[10px] text-gray-500 mt-3 font-medium px-1">
              <span>0</span>
              <span className="text-[#006bff] font-bold text-xs">{filters.priceRange ? filters.priceRange.max : 100000}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
