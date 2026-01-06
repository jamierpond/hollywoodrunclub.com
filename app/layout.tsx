import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Hollywood Run Club | Best LA Run Club | Los Angeles Running Group",
    template: "%s | Hollywood Run Club",
  },
  description: "Los Angeles' best free run club. Weekly runs through Griffith Park every Tuesday at 6:30 PM. All paces welcome. Join LA's friendliest running community.",
  applicationName: "Hollywood Run Club",
  metadataBase: new URL("https://hollywoodrunclub.com"),
  keywords: ["los angeles run club", "la run club", "best run club los angeles", "hollywood run club", "griffith park running", "la running group", "free run club la", "running club near me", "los angeles running"],
  openGraph: {
    title: "Hollywood Run Club | Best Run Club in Los Angeles",
    description: "Los Angeles' best free run club. Weekly runs through Griffith Park every Tuesday at 6:30 PM. All paces welcome.",
    url: "https://hollywoodrunclub.com",
    siteName: "Hollywood Run Club",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollywood Run Club | Best LA Run Club",
    description: "Los Angeles' best free run club. Weekly runs through Griffith Park every Tuesday at 6:30 PM. All paces welcome.",
  },
  appleWebApp: {
    title: "Hollywood Run Club",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon", sizes: "256x256", type: "image/png" },
    ],
    apple: "/apple-icon",
  },
  alternates: {
    canonical: "https://hollywoodrunclub.com",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
