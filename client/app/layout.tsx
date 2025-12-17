import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import QueryProvider from "@/providers/QueryProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hill Estate",
  description: "A real estate platform to buy and sell properties easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Header />
          <main className="min-h-screen max-width-xs flex flex-col gap-4 md:gap-6 lg:gap-8 px-3 md:px-3 lg:px-0">
            {children}
          </main>
          <Footer/>
          <Toaster 
            position="top-center" 
            toastOptions={{
              style: {
                fontSize: '14px',
                fontWeight: '600',
                padding: '12px 16px',
                borderRadius: '8px',
                minHeight: '48px',
                maxWidth: '280px'
              },
              className: 'toast-custom',
              duration: 3000
            }}
            richColors
          />
        </QueryProvider>
      </body>
    </html>
  );
}
