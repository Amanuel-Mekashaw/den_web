"use client";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import Sections from "@/app/ui/components/sections";
import KeyResponsibilityCard from "@/app/ui/components/key-responsibility-card";

export default function DenovoCoreTrustComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      //   once: true,
      mirror: true,
    });
  }, []);

  return (
    <>
      <section>
        {/* Sections */}
        <Sections
          title="How It Works"
          description="Denovo Security's Core Zero Trust framework operates by strictly verifying every access request, regardless of its origin. The framework continuously monitors network traffic and user activity, applying least-privilege access principles to ensure that users have only the access they need. Comprehensive monitoring provides visibility into access patterns and potential security incidents, allowing for prompt identification and response to threats. This approach not only enhances security but also reduces the complexity and overhead associated with traditional security models."
          image="../images/overview/homepage overview/Denovo Core.drawio (1).png"
          backgroundGradientTo="br"
        />

        {/* Overview */}
        <div className="flex flex-col lg:px-24 lg:py:24 gap-8 py-16 px-5 bg-gradient-to-l from-denovoDarkblue to-denovoPink">
          <div className="space-y-4 text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl text-center font-bold  text-denovoYellow">
              Overview
            </h2>
            <p className="text-white text-lg">
              Denovo Security's Core Zero Trust framework redefines traditional
              security models by assuming that every access request, regardless
              of its origin, could be a potential threat. This approach
              minimizes the risk of security breaches by implementing strict
              verification protocols, enforcing least-privilege access, and
              maintaining continuous monitoring. By doing so, Denovo ensures
              that your critical assets and data remain protected from
              unauthorized access.
            </p>
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
              title="Continuous Verification"
              showIcon
              description="Ensures that all access requests are continuously verified, reducing the risk of unauthorized access and potential breaches."
            />
            <KeyResponsibilityCard
              title="Least-Privilege Access"
              showIcon
              description="Enforces least-privilege access principles, ensuring that users only have access to the resources necessary for their roles."
            />
            <KeyResponsibilityCard
              title="Comprehensive Monitoring"
              showIcon
              description="Maintains comprehensive monitoring of all activities, providing visibility into access patterns and potential security incidents."
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
              title="Enhanced Security"
              description="Significantly reduces the risk of security breaches by strictly verifying all access requests and minimizing the attack surface."
            />
            <KeyResponsibilityCard
              title="Regulatory Compliance"
              description="Helps organizations meet regulatory requirements by enforcing strict access controls and maintaining comprehensive audit logs."
            />
            <KeyResponsibilityCard
              title="Operational Efficiency"
              description="Streamlines security operations by automating the verification process and reducing the need for manual intervention."
            />
          </div>
        </div>

        {/* Call to action */}
        <section className="py-20 text-center text-balance bg-denovoDarkblue flex flex-col items-center gap-5">
          <h2 className="text-3xl font-bold text-white">
            Ready to Implement Zero Trust?
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
