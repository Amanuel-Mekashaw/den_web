"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import Sections from "@/app/ui/components/sections";
import { Car, IconNode, LucideIcon, MenuIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function PolicyGen() {
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
                Denovo Core
              </h1>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <div
                  className="wow fadeInUp text-xl text-white space-y-3 max-w-max"
                  data-wow-delay=".4s"
                >
                  <p>
                    Denovo Core is the AI-powered engine behind our Zero Trust
                    security model, continuously evaluating and enforcing every
                    access request in real time. At its heart are the Denovo
                  </p>
                  <p>
                    Centralized Policy Orchestrator and Adaptive Trust
                    Enforcement Core, working together to deliver a
                    next-generation solution that is intelligent, adaptive, and
                    seamless, for organizations that demand security without
                    compromise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sections */}
      <Sections
        title="Centralized Policy Orchestrator (CPO)"
        quote="Designed to simplify security management without compromising control or visibility."
        description="The Centralized Policy Orchestrator serves as the control plane for the entire Denovo Security platform,
                    giving administrators a single, unified interface to define, update, and enforce security policies across all
                    components. Through this layer, organizations can ensure that security rules and configurations are
                    consistently applied, no matter how complex or distributed their architecture is."
        image="./images/overview/homepage overview/Denovo Core.drawio (1).png"
        backgroundGradientTo="b"
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
          <Card
            description="Instant policy propagation to the policy enforcement node (Trust Horizon), 
                        enforcing consistent
                        protection across all traffic and environments."
            icon={MenuIcon}
          />
          <Card
            description="Integration with third party identity providers for role-based and risk-based 
                        policies tailored to
                        users and organizational needs."
          />
          <Card
            description="Policy Management Console to easily create and distribute rules, 
                        including access controls, content filtering, DLP, and compliance requirements."
            styleClass="col-span-1 lg:col-span-2 "
          />
          <Card
            description="Centralized event and log consolidation to streamline trend analysis, compliance audits, and
                        incident investigations, all from one place."
          />
          <Card
            description="Automated reporting and anomaly indication, making it easier to identify potential risks, optimize
                        policies, and accelerate incident response."
          />
        </div>
      </div>

      {/* Section */}
      <Sections
        title="Adaptive Trust Enforcement Core (ATEC)"
        quote="Always watching, always learning, always protecting"
        description="The Adaptive Trust Enforcement Core is where real-time decisions are made, dynamically adjusting user
                    privileges and access levels based on continuous, AI-driven analysis. Unlike traditional role-based models,
                    ATEC re-calibrates trust moment to moment, factoring in behavior, context, and signals from
                    across the environment."
        image="./images/overview/homepage overview/Denovo Core.drawio (1).png"
        backgroundGradientTo="r"
        alternate
      />

      {/* Key Features */}
      <div className="flex flex-col gap-8 lg:px-44 py-16 px-5 bg-ebony">
        <h2
          className="text-3xl md:text-4xl font-bold text-denovoYellow"
          data-aos="fade-up"
        >
          Key Features
        </h2>

        <div
          className="w-full grid grid-cols-1 gap-5 place-items-center md:grid-cols-2"
          data-aos="fade-up"
        >
          <Card
            description="Dynamic access control, with the ability to challenge users for additional authentication, restrict
                        actions, or block access when risk is detected."
            icon={MenuIcon}
          />
          <Card description="Micro-segmentation that limits lateral movement, confining attacks to minimal, isolated zones if compromised." />
          <Card description="Insider threat mitigation through advanced AI-powered monitoring, flagging suspicious behavior in real-time." />
          <Card description="User-friendly enforcement, ensuring legitimate users are not slowed down when operating within expected, low-risk behaviors." />
        </div>
      </div>

      {/* Call to action */}
      <section className="py-20 text-center text-balance bg-denovoDarkblue flex flex-col items-center gap-5">
        <h2 className="text-3xl font-bold text-white">
          Ready to see Denovo Core in action?
        </h2>
        <div className="flex justify-center">
          <a
            href="/request_demo"
            className="flex gap-3 font-medium items-center rounded bg-denovoYellow text-denovoDarkblue hover:bg-opacity-90 py-[14px] px-8"
          >
            <span>Demo on Demand</span>
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

type CardT = {
  title?: string;
  description: string;
  icon?: LucideIcon;
  styleClass?: string;
};

function Card({ title, description, icon: Icon, styleClass }: CardT) {
  return (
    <div
      className={twMerge(
        "w-full h-full  space-y-3 dark:bg-gray-800 p-10 rounded shadow-md",
        "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-denovoDarkblue to-denovoPink",
        "overflow-hidden hover:scale-[105%] transition-all delay-200 ease-in-out cursor-pointer",
        "shadow-[5px_10px_20px_rgba(0,0,0,0.5)]",
        styleClass ? styleClass : ""
      )}
    >
      <div className="size-14 p-1 rounded-full bg-gray-100 flex justify-center items-center">
        {Icon && <Icon />}
      </div>
      {title && <p className="w-full font-bold text-lg text-white">{title}</p>}
      <p className="w-full text-white dark:text-gray-300 text-lg">
        {description}
      </p>
    </div>
  );
}
