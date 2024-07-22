import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { METADATA } from "@/config/metadata";

import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
  ),
  title: {
    default: "Estate",
    template: "%s | Real Estate",
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.authors.name,
    url: METADATA.authors.url,
  },
  creator: METADATA.creator,
  openGraph: {
    type: "website",
    url: METADATA.openGraph.url,
    title: METADATA.openGraph.title,
    locale: METADATA.openGraph.locale,
    siteName: METADATA.openGraph.siteName,
    description: METADATA.openGraph.description,
    images: [
      {
        url: METADATA.openGraph.images.url,
        width: 1200,
        height: 630,
        alt: METADATA.openGraph.images.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
    images: [`${METADATA.siteUrl}/og.png`],
    creator: "@abdurrozaqf_",
  },
  manifest: METADATA.manifest,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        <main className="w-full flex-1 scroll-smooth transition-all duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
