"use client";

export default function PriceBanner() {
  return (
    <div className="price-banner fixed bottom-0 left-0 right-0 z-[999] bg-yellow-400 py-2.5 px-4 flex items-center justify-center gap-2">
      <span className="text-lg">🟡</span>
      <p className="text-xs sm:text-sm text-black font-medium text-center">
        Prices are displayed only after logging in. Please log in to view the
        prices and place your order with confidence.
      </p>
    </div>
  );
}
