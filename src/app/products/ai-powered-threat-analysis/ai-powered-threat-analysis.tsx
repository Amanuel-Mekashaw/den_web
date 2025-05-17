"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import Sections from "@/app/ui/components/sections";
import { Car, IconNode, LucideIcon, MenuIcon } from "lucide-react";
import KeyResponsibilityCard from "@/app/ui/components/key-responsibility-card";

export default function AiThreatAnalysis() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* Hero section */}
      <div className="relative overflow-hidden bg-fixed bg-center bg-cover bg-[url('/images/hero_image.png')] z-0">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Hero content */}
        <section
          id="home"
          className="relative z-10 py-20 lg:py-36 px-4 md:px-10 lg:px-28 text-white"
        >
          <div className="xl:container mx-auto">
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <h1
                className="font-heading text-2xl sm:text-4xl md:text-5xl font-semibold text-denovoYellow wow fadeInUp"
                data-wow-delay=".3s"
              >
                Denovo Trust Horizon (DTH)
              </h1>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <div
                  className="wow fadeInUp text-xl text-white space-y-3 max-w-max"
                  data-wow-delay=".4s"
                >
                  <p>
                    Denovo Trust Horizon is the centralized, intelligent gateway
                    where all enterprise traffic converges for inspection,
                    policy enforcement, and AI-driven threat detection. Acting
                    as the core enforcement point of the Denovo Security
                    platform, Trust Horizon performs deep, real-time analysis on
                    every connection, ensuring threats are identified, sensitive
                    data is protected, and access policies are dynamically
                    enforced.
                  </p>
                  <p>
                    Through DTH, we offer unmatched visibility, precision
                    control, and simplified management — all while leveraging a
                    one-shot processing pipeline that inspects each data flow
                    only once, minimizing latency and maximizing efficiency.
                  </p>
                  <p>
                    At its core, Denovo Trust Horizon brings together four
                    powerful modules, working seamlessly to deliver intelligent,
                    adaptive, and unified security ensuring that every piece of
                    traffic is not only inspected but understood in context,
                    enabling proactive threat detection and data security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sections */}
      <Sections
        title="AI-Powered Threat Analysis Engine"
        description="The AI-Powered Threat Analysis Engine is the intelligence center of Trust Horizon, continuously
                    analyzing all traffic to build behavioral models of users and devices. Through tracking normal activity and
                    spotting anomalies the engine assigns dynamic risk scores that directly influence real-time access decisions."
        image="./images/overview/homepage overview/Denovo Core.drawio (1).png"
        backgroundGradientTo="b"
      />

      {/* Key Features */}
      <div className="flex flex-col lg:px-44 lg:py:8 gap-8 py-16 px-5 bg-denovoDarkblue">
        <h2
          className="text-3xl md:text-4xl font-bold  text-denovoYellow"
          data-aos="fade-up"
        >
          Key Features
        </h2>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center"
          data-aos="fade-up"
        >
          <KeyResponsibilityCard
            showIcon
            description="Behavioral analytics and continuous learning from live traffic and administrator feedback."
            icon={MenuIcon}
          />
          <KeyResponsibilityCard
            showIcon
            description="Generative AI for semantic detection, analyzing content in context, not just relying on signatures."
          />
          <KeyResponsibilityCard
            showIcon
            description="Predictive threat detection through evolving, adaptive models."
            styleClass="col-span-1 lg:col-span-2"
          />
        </div>
      </div>

      {/* Sections */}
      <Sections
        title="Advanced AI-Powered Data Loss Prevention (DLP) Engine"
        description="The Advanced AI-Powered DLP Engine goes beyond traditional DLP solutions, combining rule-based
                    protection with AI-driven semantic understanding to detect and stop sensitive data loss in real time."
        image="./images/overview/homepage overview/Denovo Core.drawio (1).png"
        backgroundGradientTo="r"
        alternate
      />

      {/* Key Features */}
      <div className="flex flex-col lg:px-44 lg:py:8 gap-8 py-16 px-5 bg-denovoDarkblue">
        <h2
          className="text-3xl md:text-4xl font-bold  text-denovoYellow"
          data-aos="fade-up"
        >
          Key Features
        </h2>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center"
          data-aos="fade-up"
        >
          <KeyResponsibilityCard
            showIcon
            description="Fully aligned with Trust Horizon’s single-pass inspection, ensuring no data escapes unnoticed."
            icon={MenuIcon}
          />
          <KeyResponsibilityCard
            showIcon
            description="Inline data protection, from quarantining sensitive emails to blocking unauthorized file uploads."
          />
          <KeyResponsibilityCard
            showIcon
            description="Identification of hidden sensitive data within text, file metadata, and behavioral patterns."
            styleClass="col-span-1 lg:col-span-2"
          />
        </div>
      </div>

      {/* Sections */}
      <Sections
        title="Antivirus Module"
        description="The Antivirus Module provides foundational malware detection and prevention as part of the Trust
                    Horizon pipeline. All traffic is automatically scanned for known viruses, malware, and harmful payloads,
                    ensuring that both common and emerging threats are neutralized before reaching users and systems."
        image="./images/overview/homepage overview/Denovo Core.drawio (1).png"
        backgroundGradientTo="l"
      />

      {/* Key Features */}
      <div className="flex flex-col lg:px-44 lg:py:8 gap-8 py-16 px-5 bg-denovoDarkblue">
        <h2
          className="text-3xl md:text-4xl font-bold  text-denovoYellow"
          data-aos="fade-up"
        >
          Key Features
        </h2>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center"
          data-aos="fade-up"
        >
          <KeyResponsibilityCard
            showIcon
            description="Inline malware scanning of all traffic."
            icon={MenuIcon}
          />
          <KeyResponsibilityCard
            showIcon
            description="Up-to-date signature detection to block known threats."
          />
          <KeyResponsibilityCard
            showIcon
            description="Operates as part of the unified inspection flow, with no added overhead."
            styleClass="col-span-1 lg:col-span-2"
          />
        </div>
      </div>

      {/* Sections */}
      <Sections
        title="Open Integration Module"
        description="The Open Integration Module ensures that Denovo Trust Horizon fits seamlessly into your broader
                    security ecosystem, preventing security silos and enabling powerful synergy with other tools. Built on
                    RESTful APIs and event streams, this module allows organizations to integrate Denovo with SIEM,
                    SOAR, threat intelligence feeds, and more, enabling centralized visibility and automated responses."
        backgroundGradientTo="br"
        alternate
      />

      {/* Key Features */}
      <div className="flex flex-col lg:px-44 lg:py:8 gap-8 py-16 px-5 bg-denovoDarkblue">
        <h2
          className="text-3xl md:text-4xl font-bold  text-denovoYellow"
          data-aos="fade-up"
        >
          Key Features
        </h2>

        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center"
          data-aos="fade-up"
        >
          <KeyResponsibilityCard
            showIcon
            description="Connect with SIEM platforms for centralized log aggregation and analysis."
            icon={MenuIcon}
          />
          <KeyResponsibilityCard
            showIcon
            description="Integrate with SOAR tools for automated incident response workflows."
          />
          <KeyResponsibilityCard
            showIcon
            description="Import threat intelligence feeds to strengthen Denovo's detection capabilities."
            styleClass="col-span-1 lg:col-span-2"
          />
          <KeyResponsibilityCard
            showIcon
            description="Export real-time alerts, risk scores, and incidents to third-party dashboards for deeper analysis."
          />
          <KeyResponsibilityCard
            showIcon
            description="Built on open standards, reducing integration costs and complexity while enhancing agility."
          />
        </div>
      </div>

      {/* Quoted Section */}
      <section className="bg-gradient-to-l from-denovoDarkblue via-denovoPink to-denovoPink px-10 py-20  lg:py-28 flex items-center justify-center">
        <div className="relative flex flex-col gap-2 px-5 py-10 rounded-lg shadow-xl">
          <span className="absolute top-3 left-1 text-7xl text-white text-left">
            ❝
          </span>
          <h2 className="pl-5 text-xl text-center text-white leading-8 max-w-[80ch]">
            With its modular, micro-services-driven design, Denovo Trust Horizon
            allows organizations to adapt quickly to evolving threats and
            compliance demands, integrating new capabilities without disruption.
            From deep behavioral insights and AI-powered DLP to inline malware
            defense and open interoperability, Trust Horizon forms the
            intelligent backbone of Denovo Security Zero Trust vision — securing
            every connection, every time.
          </h2>
          <span className="absolute top-[80%] right-1 text-7xl text-white text-left">
            ❞
          </span>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 text-center text-balance bg-denovoDarkblue flex flex-col items-center gap-5">
        <h2 className="text-3xl font-bold text-white">
          Ready to see Denovo Trust Horizon in action?
        </h2>
        <div className="flex justify-center">
          <a
            href="/request_demo"
            className="flex gap-3 font-medium items-center rounded bg-denovoYellow text-denovoDarkblue hover:bg-opacity-90 py-[14px] px-8"
          >
            <span>Request a demo</span>
            {/* icons */}
            <span className="">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                  fill="black"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
