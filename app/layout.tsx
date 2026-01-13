import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientToastProvider from "./ClientToastProvider";

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

const title = "Get Fast: Quick, Reliable Insights on Trending Topics";
const description =
  "Explore premium articles covering diverse topics. Get Fast provides reliable information, in-depth guides, and the latest analysis you can trust.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Get Fast",
  },
  description,
  keywords: [
    "Trusted Source",
    "Expert Guides",
    "Premium articles",
    "In-depth guides",
  ],
  authors: [{ name: "Ajay Chandel" }],
  creator: "Ajay Chandel",

  metadataBase: new URL(process.env.DOMAIN_NAME as string),

  openGraph: {
    title,
    description,
    url: process.env.DOMAIN_NAME as string,
    siteName: "Blog Space",
    images: [
      {
        url: "/og-image.png", // place in public/
        width: 1200,
        height: 630,
        alt: "myBlogs Open Graph Image",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:dark antialiased min-w-[300px] flex flex-col items-center box-border  overflow-x-hidden`}
      >
        {children}
        <ClientToastProvider />
      </body>
    </html>
  );
}
