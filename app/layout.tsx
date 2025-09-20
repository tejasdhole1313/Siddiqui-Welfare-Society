import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer";
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
      <body >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
