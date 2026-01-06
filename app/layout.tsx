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
    default: "Hollywood Run Club | Los Angeles",
    template: "%s | Hollywood Run Club",
  },
  description: "Free weekly runs through Griffith Park. Every Tuesday at 6:30 PM. All paces welcome.",
  applicationName: "Hollywood Run Club",
  metadataBase: new URL("https://hollywoodrunclub.com"),
  keywords: ["los angeles run club", "la run club", "hollywood run club", "hollywood running group", "los feliz run club", "los feliz running", "griffith park running", "griffith park run club", "la running group", "free run club la", "running club near me", "los angeles running", "silver lake run club", "east hollywood running", "echo park running"],
  openGraph: {
    title: "Hollywood Run Club",
    description: "Free weekly runs through Griffith Park. Every Tuesday at 6:30 PM. All paces welcome.",
    url: "https://hollywoodrunclub.com",
    siteName: "Hollywood Run Club",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hollywood Run Club",
    description: "Free weekly runs through Griffith Park. Every Tuesday at 6:30 PM. All paces welcome.",
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
