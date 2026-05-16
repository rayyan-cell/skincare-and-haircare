import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlowGuide - Personalized Skincare & Haircare for South Asian Skin",
  description: "Get personalized skincare and haircare recommendations designed specifically for South Asian skin tones and climate. Science-backed, beginner-friendly, and affordable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
