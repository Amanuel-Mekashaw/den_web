"use client";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import Sections from "@/app/ui/components/sections";
import KeyResponsibilityCard from "@/app/ui/components/key-responsibility-card";

export default function DataLossPreventionComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <section>
        {/* Sections */}
        <Sections
          title="How It Works"
          description="Our Data Loss Prevention solution integrates seamlessly into
                your existing IT infrastructure. It begins by identifying and
                classifying sensitive data across your network. Real-time
                monitoring tools then track data movement and usage, flagging
                any suspicious activity. Advanced analytics provide insights
                into potential threats, while policy enforcement ensures that
                only authorized users can access and manipulate critical data."
          image="../images/overview/products overview/dlpmain.drawio.png"
          backgroundGradientTo="b"
        />

        {/* Overview */}
        <div className="flex flex-col lg:px-24 lg:py:8 gap-8 py-16 px-5 bg-gradient-to-r from-denovoDarkblue to-denovoPink">
          <div className="space-y-4" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl text-center font-bold  text-denovoYellow">
              Overview
            </h2>
            <p className="text-white text-lg">
              Data Loss Prevention (DLP) encompasses a suite of tools and
              processes designed to prevent the loss, unauthorized access, and
              misuse of sensitive data. Our DLP solutions help organizations
              comply with regulations, protect their reputation, and ensure that
              critical information remains secure.
            </p>
          </div>

          <div
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center"
            data-aos="fade-up"
          >
            <KeyResponsibilityCard
              showIcon={false}
              title="Real-Time Monitoring"
              description="Our solution continuously monitors data activity to detect and respond to potential threats immediately, ensuring proactive protection."
            />
            <KeyResponsibilityCard
              showIcon={false}
              title="Data Classification"
              description="Automatically classify and categorize data based on its sensitivity level, ensuring that appropriate security measures are applied."
            />
            <KeyResponsibilityCard
              showIcon={false}
              title="Policy Enforcement"
              description="Implement and enforce security policies to control access, usage, and sharing of sensitive data, preventing unauthorized access."
            />
          </div>
        </div>

        {/* Key Features */}
        <div className="flex flex-col lg:px-24 lg:py:8 gap-8 py-16 px-5 bg-denovoDarkblue">
          <h2
            className="text-3xl md:text-4xl font-bold  text-denovoYellow"
            data-aos="fade-up"
          >
            Key Features
          </h2>

          <div
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center"
            data-aos="fade-up"
          >
            <KeyResponsibilityCard
              showIcon
              title="Real-Time Monitoring"
              description="Our solution continuously monitors data activity to detect and respond to potential threats immediately, ensuring proactive protection."
            />
            <KeyResponsibilityCard
              showIcon
              title="Data Classification"
              description="Automatically classify and categorize data based on its sensitivity level, ensuring that appropriate security measures are applied."
            />
            <KeyResponsibilityCard
              showIcon
              title="Policy Enforcement"
              description="Implement and enforce security policies to control access, usage, and sharing of sensitive data, preventing unauthorized access."
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="flex flex-col lg:px-24 lg:py:8 gap-8 py-16 px-5 bg-denovoPink">
          <h2
            className="text-3xl md:text-4xl font-bold  text-denovoYellow"
            data-aos="fade-up"
          >
            Benefits
          </h2>

          <div
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center"
            data-aos="fade-up"
          >
            <KeyResponsibilityCard
              showIcon={false}
              title="Compliance"
              description="Ensure your organization meets all relevant data protection regulations, such as GDPR, HIPAA, and CCPA, avoiding hefty fines and legal repercussions."
            />
            <KeyResponsibilityCard
              showIcon={false}
              title="Data Integrity"
              description="Protect the integrity and confidentiality of your data, ensuring that it remains accurate and unaltered from unauthorized access."
            />
            <KeyResponsibilityCard
              showIcon={false}
              title="Cost Savings"
              description="Mitigate the financial impact of data breaches by preventing them. Save on costs related to fines, legal actions, and damage to your brand's reputation."
            />
          </div>
        </div>

        {/* Call to action */}
        <section className="py-20 text-center text-balance bg-denovoDarkblue flex flex-col items-center gap-5">
          <h2 className="text-3xl font-bold text-white">
            Ready to Protect Your Data?
          </h2>
          <div className="flex justify-center">
            <a
              href="/request_demo"
              className="flex gap-3 font-medium cursor-pointer items-center rounded bg-denovoYellow text-denovoDarkblue hover:bg-opacity-90 py-[14px] px-8"
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
      </section>
    </>
  );
}
