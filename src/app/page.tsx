'use client';
import 'animate.css';
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from 'next/script'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className='overflow-hidden'>
      <section
        id="home"
        className="relative z-40 overflow-hidden pt-28 pb-24 sm:pt-36 lg:pt-[170px] lg:pb-[120px]"
      >
        <div className="px-4 xl:container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-3 lg:w-1/2">
              <div
                className="mx-auto mb-12 max-w-[530px] text-center lg:ml-0 lg:mb-0 lg:text-left"
              >

                <h1
                  className="wow fadeInUp mb-5 font-heading text-2xl font-semibold dark:text-white sm:text-4xl md:text-6xl md:leading-8xl"
                  data-wow-delay=".3s"
                >
                  <span className="inline-grid" data-aos="fade-left">Building Trust From Scratch</span>

                </h1>
                <p
                  className="wow fadeInUp mb-12 text-xl text-dark-text"
                  data-wow-delay=".4s"
                >
                  Empower your business to thrive securely in the digital era. Seamlessly secure, manage, and innovate across Operational Technology (OT), information Technology (IT), and cloud environments. Elevate your security posture while safeguarding your most valuable assets.              </p>
                <div
                  className="wow fadeInUp flex flex-wrap items-center justify-center lg:justify-start"
                  data-wow-delay=".5s"
                >
                  <a
                    href="/request_demo"
                    className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8"
                  >
                    Demo on Demand
                    <span className="pl-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>

                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 relative">
              <div className="wow z-30 mx-auto w-full max-w-[700px] lg:ml-0 relative" style={{ paddingBottom: '56.25%' }}>
              <iframe src="https://player.vimeo.com/video/995913472?badge=0&amp;autopause=0&amp;transparent=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} title="denovo security"></iframe><Script src="https://player.vimeo.com/api/player.js"></Script>
              </div>
            </div>



          </div>
        </div>

        <div className="absolute top-0 right-0 -z-10">
          <svg
            width="1356"
            height="860"
            viewBox="0 0 1356 860"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5" filter="url(#filter0_f_201_2181)">
              <rect
                x="450.088"
                y="-126.709"
                width="351.515"
                height="944.108"
                transform="rotate(-34.6784 450.088 -126.709)"
                fill="url(#paint0_linear_201_2181)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_2181"
                x="0.0878906"
                y="-776.711"
                width="1726.24"
                height="1876.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="225"
                  result="effect1_foregroundBlur_201_2181"
                />
              </filter>
              <linearGradient
                id="paint0_linear_201_2181"
                x1="417.412"
                y1="59.4717"
                x2="966.334"
                y2="603.857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ABBCFF" />
                <stop offset="0.859375" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 -z-10">
          <svg
            width="1469"
            height="498"
            viewBox="0 0 1469 498"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter="url(#filter0_f_201_2182)">
              <rect
                y="450"
                width="1019"
                height="261"
                fill="url(#paint0_linear_201_2182)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_2182"
                x="-450"
                y="0"
                width="1919"
                height="1161"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="225"
                  result="effect1_foregroundBlur_201_2182"
                />
              </filter>
              <linearGradient
                id="paint0_linear_201_2182"
                x1="-94.7239"
                y1="501.47"
                x2="-65.8058"
                y2="802.2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ABBCFF" />
                <stop offset="0.859375" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      {/* <section className="px-1 py-1 sm:px-1 sm:py-1 lg overflow-x-hidden" data-aos="fade-down">
        <img src="./images/overview/core1LIST.drawio.png" className="h-auto object-cover mx-auto" alt="Denovo Core Zero Trust" />
      </section> */}



      {/* <!-- Container for demo purpose --> */}
      <section id="overview" className="py-10 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r"></div>
        <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
          <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight text-white">Denovo Core Zero Trust</h3>
            <p className="text-xl lg:text-2xl leading-8 text-white mt-6" data-aos="fade-right">
              Denovo Core Zero Trust is a comprehensive cybersecurity solution that provides a holistic approach to security. It is designed to protect your business from the most advanced cyber threats.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a href="/products/denovo-core-zero-trust" className="inline-block bg-white text-blue-600 hover:bg-gray-200 hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full lg:w-8/12 lg:pl-6 mt-8 lg:mt-0" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-lg">
              <img src="./images/overview/homepage overview/Denovo Core.drawio (1).png" className="w-full h-auto object-cover" alt="Denovo Core Zero Trust" />
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-white py-10 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-6/12 lg:pl-6 lg:pr-6 mb-6 lg:mb-0 " data-aos="fade-left">
            <div className="relative overflow-hidden rounded-lg">
              <img src="./images/overview/homepage overview/dlpmain.drawio.png" className="w-full object-cover" alt="Denovo Core Zero Trust" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <h3 className="mt-2 text-4xl lg:text-4xl font-bold tracking-tight text-gray-900">Data Loss Prevention</h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="lg:w-2/3 lg:pr-6">
                <p className="text-xl lg:text-2xl leading-8 text-gray-700 mt-6 text-center lg:text-left" data-aos="fade-right">
                  Denovo Data Loss Prevention is a comprehensive solution that helps you prevent data loss and protect sensitive information from unauthorized access.
                </p>
                <div className="flex justify-center lg:justify-start mt-6">
                  <a href="/products/data-loss-prevention" className="inline-block bg-gray-200 text-blue-600 hover:bg-white hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="overview" className="bg-gray-200 py-10 sm:py-32 relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <h3 className="mt-2 text-4xl lg:text-4xl font-bold tracking-tight text-gray-900">AI Powered Threat Analysis</h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-start mt-6">
              <div className="lg:w-2/3 lg:pr-6">
                <p className="text-xl lg:text-2xl leading-8 text-gray-700 mt-6 text-center lg:text-left" data-aos="fade-right">
                  Denovo AI Powered Threat Analysis uses machine learning algorithms to detect and respond to cyber threats in real-time.
                </p>
                <div className="flex justify-center lg:justify-start mt-6">
                  <a href="/products/ai-powered-threat-analysis" className="inline-block bg-white text-blue-600 hover:bg-gray-200 hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:pl-6" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-lg">
              <img src="./images/overview/homepage overview/AI POWERED.drawio.png" className="w-full object-cover" alt="AI Powered Threat Analysis" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Container for demo purpose --> */}
      <section id="overview" className="py-10 sm:py-32 bg-gradient-to-r text-white opacity-90 z-0">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-lg">
              <img src="./images/overview/homepage overview/AI Assisted.drawio.png" className="w-full object-cover" alt="AI Assisted Automatic policy generation" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:pl-6">
            <h3 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight text-white">AI Assisted Automatic Policy Generation (AAPG)</h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="lg:w-2/3 lg:pr-6">
                <p className="text-xl lg:text-2xl leading-8 mt-6" data-aos="fade-right">
                  Denovo AI Assisted Automatic Policy Generation (AAPG) uses machine learning algorithms to automatically generate security policies based on your organization's needs.
                </p>
                <div className="flex justify-center lg:justify-start mt-6">
                  <a href="/products/aa-policy-gen" className="inline-block bg-white text-blue-600 hover:bg-gray-200 hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hexagonal grids */}
      <section className="bg-gray-200 py-10 lg:py-16 shadow-md">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-cols-fr min-w-[300px]">
            {/* Card 1 */}
            <div className="card rounded-lg bg-white overflow-hidden shadow-lg">
              <div className="flex flex-col items-center px-6 py-8">
                <div className="flex-shrink-0 mb-4">
                  <img src="./images/overview/hexagon_logo/logo_hex_AI_AS.drawio.png" className="w-full object-cover" alt="Denovo Core Zero Trust" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">AI Assisted Automatic Policy Generation</p>
                  <div className="flex justify-center mt-4">
                    <a href="/products/aa-policy-gen" className="inline-block bg-white text-blue-600 hover:bg-gray-200 hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Duplicate the card 3 more times */}
            {/* Card 3 */}
            <div className="card rounded-lg bg-white overflow-hidden shadow-lg">
              <div className="flex flex-col items-center px-6 py-8">
                <div className="flex-shrink-0 mb-4">
                  <img src="./images/overview/hexagon_logo/logo_hexa_dlp.drawio.png" className="w-full object-cover" alt="Denovo Core Zero Trust" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">Data Loss Prevention</p>
                  <div className="flex justify-center mt-4">
                    <a href="/products/data-loss-prevention" className="inline-block bg-white text-blue-600 hover:bg-gray-200 hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card rounded-lg bg-white overflow-hidden shadow-lg">
              <div className="flex flex-col items-center px-8 py-8">
                <div className="flex-shrink-0 mb-4">
                  <img src="./images/overview/hexagon_logo/logo_hex_AI-PO.drawio.png" className="w-full object-cover" alt="Denovo Core Zero Trust" />
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">AI Powered Threat Analysis</p>
                  <div className="flex justify-center mt-4">
                    <a href="/products/ai-powered-threat-analysis" className="inline-block bg-white text-blue-600 hover:bg-gray-200 hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}