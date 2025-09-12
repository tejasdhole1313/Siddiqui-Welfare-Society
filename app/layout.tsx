import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer";
import EmailSection from "@/components/email";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' 
    ? process.env.NEXTAUTH_URL || 'https://yourdomain.com' 
    : 'http://localhost:3000'),
  title: "Siddiqui Welfare Society - Empowering Communities",
  description: "Empowering communities through education, medical aid, and support programs. Join us in making a difference.",
  icons: {
    icon: './footer.png',
  },
  openGraph: {
    title: "Siddiqui Welfare Society - Empowering Communities",
    description: "Empowering communities through education, medical aid, and support programs. Join us in making a difference.",
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Siddiqui Welfare Society - Empowering Communities",
    description: "Empowering communities through education, medical aid, and support programs. Join us in making a difference.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
