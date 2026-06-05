import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adagakufes.com"),
  title: "あだち大学フェス",
  description: "足立区5大学合同学園祭 あだち大学フェス公式サイト",
  openGraph: {
    title: "あだち大学フェス",
    images: ["/ogp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "あだち大学フェス",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f7f0e3] bg-[url('/logo/logo.png')] bg-repeat-y bg-center">
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
