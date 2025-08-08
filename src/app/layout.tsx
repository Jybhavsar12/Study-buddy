import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/lib/auth'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Buddy - Find Your Perfect Study Partner",
  description: "Connect with fellow students, organize study sessions, and master your subjects together with collaborative tools.",
  keywords: "study, education, collaboration, students, learning",
  authors: [{ name: "Study Buddy Team" }],
  openGraph: {
    title: "Study Buddy - Collaborative Learning Platform",
    description: "Find your perfect study partner and excel together",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
