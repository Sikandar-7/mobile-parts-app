import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Chaudary Mobile Parts",
  description:
    "Shop premium mobile accessories, touch glass, tools, and spare parts. Best prices on LCD, LED, TFT screens and more.",
  icons: {
    icon: "/site-logo.webp?v=2",
    shortcut: "/site-logo.webp?v=2",
    apple: "/site-logo.webp?v=2",
  },
  openGraph: {
    images: [{ url: "/site-logo.webp" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
