"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const bannerSlides = [
  {
    id: 1,
    bgColor: "#1a1a1a",
    bgImage: "linear-gradient(135deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%)",
    title: "ORIGINAL",
    subtitle: "SUNLÔNG",
    description: "COLOR SCREEN",
    highlight: "DISC UP TO",
    offer: "BUY 10",
    offerBig: "Get 1 Free",
    ctaText: "BUY NOW!",
    accentColor: "#FFD600",
    texturedBg: true,
  },
  {
    id: 2,
    bgColor: "#c62828",
    bgImage: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 40%, #c62828 60%, #b71c1c 100%)",
    title: "100% Real authentic",
    subtitle: "ROYAL",
    description: "FALCON",
    highlight: "Proudly in Best Quality",
    offer: "",
    offerBig: "",
    ctaText: "BUY NOW",
    accentColor: "#c62828",
    texturedBg: false,
  },
  {
    id: 3,
    bgColor: "#0d0d0d",
    bgImage: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #333 100%)",
    title: "PREMIUM",
    subtitle: "TOUCH GLASS",
    description: "COLLECTION",
    highlight: "BEST PRICES",
    offer: "UP TO",
    offerBig: "50% OFF",
    ctaText: "SHOP NOW",
    accentColor: "#22c55e",
    texturedBg: true,
  },
];

export default function HeroBanner() {
  return (
    <div className="hero-swiper w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
        style={{ height: "auto" }}
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full flex items-center overflow-hidden"
              style={{
                background: slide.bgImage,
                minHeight: "180px",
                height: "clamp(180px, 25vw, 350px)",
              }}
            >
              {/* Textured overlay for dark banners */}
              {slide.texturedBg && (
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                  }}
                />
              )}

              {/* Left Content */}
              <div className="relative z-10 flex-1 px-6 md:px-12 lg:px-16 py-6">
                <p className="text-white text-xs md:text-sm lg:text-base font-medium tracking-wide uppercase">
                  {slide.title}
                </p>
                <h2
                  className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-none mt-1"
                  style={{ color: slide.accentColor }}
                >
                  {slide.subtitle}
                </h2>
                <p className="text-white text-sm md:text-lg lg:text-2xl font-medium mt-0">
                  {slide.description}
                </p>
                <button
                  className="mt-3 md:mt-4 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-bold rounded-sm"
                  style={{
                    backgroundColor: slide.accentColor,
                    color: slide.accentColor === "#FFD600" ? "#000" : "#fff",
                  }}
                >
                  {slide.ctaText} ↗
                </button>
              </div>

              {/* Center - Product visual */}
              <div className="hidden sm:flex flex-1 items-center justify-center relative">
                <div className="relative">
                  {/* Podium/pedestal effect */}
                  <div className="w-32 md:w-48 lg:w-56 h-24 md:h-36 lg:h-44 bg-gradient-to-t from-gray-300 to-gray-100 rounded-t-full mx-auto opacity-70" />
                  <div className="absolute bottom-0 w-40 md:w-56 lg:w-64 h-3 bg-gray-400/50 rounded-full blur-sm mx-auto left-1/2 -translate-x-1/2" />
                </div>
              </div>

              {/* Right Content */}
              {slide.offer && (
                <div className="hidden sm:flex flex-1 flex-col items-start justify-center px-6 md:px-10">
                  <p className="text-white text-xs md:text-sm uppercase tracking-wide">
                    {slide.highlight}
                  </p>
                  <p className="text-white text-lg md:text-2xl lg:text-3xl font-bold">
                    {slide.offer}
                  </p>
                  <p
                    className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-none"
                    style={{ color: slide.accentColor }}
                  >
                    {slide.offerBig}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
