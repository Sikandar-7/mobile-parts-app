"use client";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FilterSidebar from "@/components/FilterSidebar";
import MobileFilterTabs from "@/components/MobileFilterTabs";
import MobileSocialIcons from "@/components/MobileSocialIcons";
import ProductGrid from "@/components/ProductGrid";
import PriceBanner from "@/components/PriceBanner";
import ChatButton from "@/components/ChatButton";
import AppInstallBar from "@/components/AppInstallBar";
import BottomNav from "@/components/BottomNav";
import { products } from "@/data/products";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    priceRange: null,
  });
  const [mobileTab, setMobileTab] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => 
          (p.name && p.name.toLowerCase().includes(q)) || 
          (p.description && p.description.toLowerCase().includes(q))
      );
    }

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.brand) {
      result = result.filter((p) => p.brand === filters.brand);
    }
    if (filters.priceRange) {
      result = result.filter(
        (p) =>
          p.price >= filters.priceRange.min &&
          p.price < filters.priceRange.max
      );
    }

    return result;
  }, [filters, searchQuery]);

  const clearFilters = () => {
    setFilters({ category: "", brand: "", priceRange: null });
    setMobileTab("");
    setSearchQuery("");
  };

  return (
    <main className="flex-1 pb-20 md:pb-12 relative w-full overflow-x-hidden">
      {/* Header */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* App Install Bar (Mobile Only - positioned under header) */}
      <AppInstallBar />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Mobile Social Icons */}
      <MobileSocialIcons />

      {/* Mobile Filter Tabs */}
      <MobileFilterTabs
        activeTab={mobileTab}
        setActiveTab={setMobileTab}
        filters={filters}
        setFilters={setFilters}
        onClear={clearFilters}
      />

      {/* Desktop Filter Button */}
      <div className="hidden md:block px-6 xl:px-10 pt-4">
        <button
          onClick={() => setFilterOpen(true)}
          className="px-5 py-2 text-sm border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          id="filter-button"
        >
          Filter
        </button>
      </div>

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />

      {/* Product Count */}
      {(filters.category || filters.brand || filters.priceRange) && (
        <div className="px-6 xl:px-10 pt-3">
          <p className="text-xs text-gray-500">
            Showing {filteredProducts.length} products
            {filters.category && (
              <span className="ml-1">
                in <strong>{filters.category}</strong>
              </span>
            )}
            {filters.brand && (
              <span className="ml-1">
                by <strong>{filters.brand}</strong>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="ml-2 text-[#006bff] hover:underline"
            >
              Clear all
            </button>
          </p>
        </div>
      )}

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />

      {/* Chat Button */}
      <ChatButton />

      {/* Price Banner */}
      <PriceBanner />

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </main>
  );
}
