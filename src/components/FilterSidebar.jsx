"use client";
import { categories, brands, priceRanges } from "@/data/products";

export default function FilterSidebar({ isOpen, onClose, filters, setFilters }) {
  const handleCategoryChange = (cat) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === cat ? "" : cat,
    }));
  };

  const handleBrandChange = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brand: prev.brand === brand ? "" : brand,
    }));
  };

  const handlePriceChange = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRange:
        prev.priceRange?.label === range.label ? null : range,
    }));
  };

  const handleCancel = () => {
    setFilters({ category: "", brand: "", priceRange: null });
    onClose();
  };

  const handleSubmit = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[10000] filter-overlay"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white z-[10001] overflow-y-auto filter-sidebar shadow-2xl"
        style={{
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-5">Filters</h2>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">
              Categories
            </h3>
            <div className="space-y-2.5">
              {categories.map((cat) => (
                <label
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1e1e1e] p-2 rounded transition-colors"
                >
                  <span className="text-sm">{cat}</span>
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      filters.category === cat
                        ? "border-[#006bff] bg-[#006bff]"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.category === cat && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </label>
              ))}
              <button className="text-[#006bff] text-sm mt-1 hover:underline">
                View All
              </button>
            </div>
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">
              Brands
            </h3>
            <div className="space-y-2.5">
              {brands.map((brand) => (
                <label
                  key={brand}
                  onClick={() => handleBrandChange(brand)}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1e1e1e] p-2 rounded transition-colors"
                >
                  <span className="text-sm">{brand}</span>
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      filters.brand === brand
                        ? "border-[#006bff] bg-[#006bff]"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.brand === brand && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </label>
              ))}
              <button className="text-[#006bff] text-sm mt-1 hover:underline">
                View All
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 pb-1 border-b border-gray-200">
              Price
            </h3>
            <div className="space-y-2.5">
              {priceRanges.map((range) => (
                <label
                  key={range.label}
                  onClick={() => handlePriceChange(range)}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1e1e1e] p-2 rounded transition-colors"
                >
                  <span className="text-sm">{range.label}</span>
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      filters.priceRange?.label === range.label
                        ? "border-[#006bff] bg-[#006bff]"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.priceRange?.label === range.label && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="sticky bottom-0 flex gap-3 p-4 bg-white border-t border-gray-200">
          <button
            onClick={handleCancel}
            className="flex-1 py-2.5 rounded-lg bg-[#b0b0b0] text-white font-medium text-sm hover:bg-[#999] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 py-2.5 rounded-lg bg-[#006bff] text-white font-medium text-sm hover:bg-[#0055cc] transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
