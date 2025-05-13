"use client";

import React from "react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Sections from "./ui/components/sections";
import Cards from "./ui/components/cards";
import HeroSection from "./ui/components/hero-section";

import "animate.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero section */}
      <HeroSection />

      <section className="flex flex-col">
        <Sections
          title="Denovo Core"
          quote="Built for Intelligent, Adaptive Zero Trust Security"
          description="Denovo Core Zero Trust is a comprehensive cybersecurity
                    solution that provides a holistic approach to security. It
                    is designed to protect your business from the most advanced
                    cyber threats"
          image="./images/overview/homepage overview/Denovo Core.drawio (1).png"
          imageAlt="Denovo Core"
          backgroundGradientTo="b"
          learnMoreHref="#"
        />

        <Sections
          title="Denovo Trust Horizon"
          quote="Every connection is inspected, analyzed, and secured in one intelligent flow"
          description="Denovo Trust Horizon is the intelligent inspection and enforcement gateway where all traffic is analyzed
                    in real time. Acting as a centralized control point, Trust Horizon delivers deep visibility, precise policy
                    enforcement, and AI-powered threat analysis, all through a unified, one-shot processing pipeline. From
                    advanced malware detection to context-aware DLP, Trust Horizon ensures every connection is secure,efficient, and adaptive to evolving threats."
          image="./images/overview/homepage overview/Denovo Core.drawio (1).png"
          imageAlt="Denovo Trust Core image"
          alternate
          backgroundGradientTo="br"
          learnMoreHref="#"
        />

        {/* Denovo Architecture */}
        <section className="relative bg-gray-100 flex flex-col gap-8 py-10">
          {/* TODO overlay maybe remove */}
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          {/* title */}
          <h3 className="text-denovoDarkblue z-10 text-balance w-full text-center mt-2 text-4xl lg:text-5xl font-bold tracking-tight">
            Denovo Architecture
          </h3>
          <img
            className="p-10 object-contain"
            src="./images/overview/homepage overview/Diagram_architecture.png"
            alt=""
          />
        </section>
      </section>

      {/* Cards */}
      <section
        className="bg-gradient-to-r from-denovoDarkblue  to-denovoPink
                  py-10 sm:py-32 px-10 relative overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-cols-fr min-w-[300px]">
          {/* Card 1 */}
          <Cards
            title="AI Assisted Automatic Policy Generation"
            image="./images/overview/hexagon_logo/logo_hex_AI_AS.drawio.png"
            href="/products/aa-policy-gen"
          />

          <Cards
            title="Data Loss Prevention"
            image="./images/overview/hexagon_logo/logo_hexa_dlp.drawio.png"
            href="/products/data-loss-prevention"
          />

          <Cards
            title="AI Powered Threat Analysis"
            image="./images/overview/hexagon_logo/logo_hex_AI-PO.drawio.png"
            href="/products/ai-powered-threat-analysis"
          />
        </div>
      </section>
    </div>
  );
}
