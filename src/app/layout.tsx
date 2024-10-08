import React from 'react';
import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext'; // Add this import
import { Header } from '@/components/Header';
import { Sidebar } from '@/app/dashboard/Sidebar'; // Update this import
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <AuthProvider>
          <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-900 text-black dark:text-white`}>
            <Header />
            <div className="flex">
              <Sidebar />
              <main className="flex-1 ml-[70px]">{children}</main>
            </div>
          </body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  );
}
