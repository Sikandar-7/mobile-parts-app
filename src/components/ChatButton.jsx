"use client";

export default function ChatButton() {
  return (
    <button
      className="fixed bottom-[80px] md:bottom-16 right-4 z-[998] w-[52px] h-[52px] rounded-full bg-[#006bff] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Chat with us"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 5.84 2 10.5c0 2.54 1.34 4.81 3.44 6.3V22l3.48-1.99c.98.24 2.01.37 3.08.37 5.52 0 10-3.84 10-8.5S17.52 2 12 2zM8 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    </button>
  );
}
