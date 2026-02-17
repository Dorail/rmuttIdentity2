import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import GlobalAssessment from "@/components/layout/GlobalAssessment";
import FallingMeteors from "@/components/ui/FallingMeteors";

export const metadata: Metadata = {
  title: "SafeSexSafeMind",
  description: "แพลตฟอร์มให้ความรู้เชิงลึกเกี่ยวกับการตั้งครรภ์ไม่พร้อม การคุมกำเนิด และเพศศึกษาที่ถูกต้อง เหมาะสำหรับนักศึกษาและวัยรุ่น เพื่อการวางแผนชีวิตและการตัดสินใจที่มั่นใจ",
  icons: {
    icon: [
      { url: '/fav/favicon.ico' },
      { url: '/fav/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/fav/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/fav/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/fav/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/fav/apple-touch-icon.png' },
    ],
  },
  manifest: '/fav/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: '"Prompt", sans-serif' }}
      >
        <Navbar />
        <ScrollProgress />

        {/* Global Ambient Background */}
        <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] animate-blob will-change-transform backface-hidden" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 will-change-transform backface-hidden" />
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000 will-change-transform backface-hidden" />
        </div>



        {children}
        <GlobalAssessment />
        <FallingMeteors />
        <Footer />
      </body>
    </html>
  );
}
