import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Beston Mobile Accessories - BestNow.pk",
  description:
    "Shop premium mobile accessories, touch glass, tools, and spare parts. Best prices on LCD, LED, TFT screens and more.",
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
