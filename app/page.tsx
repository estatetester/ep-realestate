import { Metadata } from "next";
import React, { lazy } from "react";

import VideoPlayer from "@/components/video-player";
import Contact from "@/components/contact";
import About from "@/components/about";

const Headline = lazy(() => import("@/components/headline"));
const Rent = lazy(() => import("@/components/rent"));
const Clients = lazy(() => import("@/components/clients"));

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Helping You Get More For Your Real Estate",
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Headline />
      <Contact />
      <About />
      <VideoPlayer />
      <Rent />
      <Clients />
    </main>
  );
}
