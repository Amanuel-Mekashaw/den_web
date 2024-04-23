'use client';
import 'animate.css';
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
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
                <span
                  className="wow fadeInUp mb-8 inline-block rounded-full bg-primary bg-opacity-5 py-[10px] px-5 font-heading text-base text-primary dark:bg-white dark:bg-opacity-10 dark:text-white"
                  data-wow-delay=".2s"
                >
                  <span
                    className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"
                  ></span>
                  Denovo Security
                </span>
                <h1
                  className="wow 
                fadeInUp mb-5 font-heading text-2xl font-semibold dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]"
                  data-wow-delay=".3s"
                >
                  Secure Your Business with Denovo Security
                </h1>
                <p
                  className="wow fadeInUp mb-12 text-base text-dark-text"
                  data-wow-delay=".4s"
                >
                  Empower your business to thrive securely in the digital era. Seamlessly secure, manage, and innovate across Operational Technology (OT), information Technology (IT), and cloud environments. Elevate your security posture while safeguarding your most valuable assets.              </p>
                <div
                  className="wow fadeInUp flex flex-wrap items-center justify-center lg:justify-start"
                  data-wow-delay=".5s"
                >
                  <a
                    href="#features"
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
                  <a
                    href="#about"
                    className="inline-flex items-center rounded py-[14px] px-8 font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    <span className="pr-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path
                          d="M19.376 12.416L8.777 19.482C8.70171 19.5321 8.61423 19.5608 8.52389 19.5652C8.43355 19.5695 8.34373 19.5492 8.264 19.5065C8.18427 19.4639 8.1176 19.4003 8.07111 19.3228C8.02462 19.2452 8.00005 19.1564 8 19.066V4.934C8.00005 4.84356 8.02462 4.75482 8.07111 4.67724C8.1176 4.59966 8.18427 4.53615 8.264 4.49346C8.34373 4.45077 8.43355 4.43051 8.52389 4.43483C8.61423 4.43915 8.70171 4.46789 8.777 4.518L19.376 11.584C19.4445 11.6297 19.5006 11.6915 19.5395 11.7641C19.5783 11.8367 19.5986 11.9177 19.5986 12C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3085 19.4445 12.3703 19.376 12.416Z"
                        />
                      </svg>
                    </span>
                    How it Work
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInRight relative z-30 mx-auto h-[560px] w-full max-w-[700px] lg:ml-0"
                data-wow-delay=".3s"
              >
                <div className="absolute top-0 right-0 lg:w-11/12">
                  <img src="./images/hero/image-2.jpg" alt="hero-image" />
                </div>
                <div className="absolute left-0 bottom-0 z-10">
                  <img src="./images/hero/image-1.jpg" alt="hero-image" />
                  <div
                    className="absolute -top-6 -right-6 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"
                  ></div>
                </div>
                <div className="absolute left-0 bottom-0">
                  <svg
                    width="72"
                    height="38"
                    viewBox="0 0 72 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                      fill="#4A6CF7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0035 11.9726C59.6808 11.6895 57.4524 12.6321 55.1508 14.6049C51.3631 17.8514 44.7908 19.4664 38.8668 14.6196C36.329 12.5432 34.117 12.2149 32.2894 12.5195C30.3972 12.8349 28.8057 13.8437 27.5547 14.6776C25.5734 15.9985 23.3915 17.3866 20.8786 17.7123C18.2847 18.0485 15.515 17.2431 12.3598 14.6138C9.71804 12.4123 7.45748 11.9889 5.72104 12.256C3.94436 12.5294 2.56003 13.5501 1.76341 14.4915C1.40666 14.9131 0.775686 14.9657 0.354079 14.609C-0.0675277 14.2522 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6412 5.41692 10.2793C7.80979 9.91114 10.6326 10.571 13.6402 13.0774C16.485 15.4481 18.7154 15.976 20.6215 15.7289C22.6086 15.4713 24.4266 14.3594 26.4453 13.0136L27 13.8456L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5467C34.383 10.143 37.1711 10.648 40.1333 13.0716C45.1548 17.1801 50.6369 15.8397 53.8492 13.0863C56.3795 10.9176 59.1512 9.61012 62.2455 9.98733C65.3089 10.3608 68.4333 12.357 71.7557 16.1906C72.1174 16.608 72.0723 17.2395 71.655 17.6012C71.2376 17.9629 70.606 17.9178 70.2443 17.5005C67.0668 13.834 64.3571 12.2595 62.0035 11.9726Z"
                      fill="#4A6CF7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0035 21.8954C59.6808 21.6123 57.4524 22.5548 55.1508 24.5276C51.3631 27.7742 44.7908 29.3892 38.8668 24.5423C36.329 22.4659 34.117 22.1377 32.2894 22.4423C30.3972 22.7576 28.8057 23.7664 27.5547 24.6004C25.5734 25.9213 23.3915 27.3093 20.8786 27.6351C18.2847 27.9713 15.515 27.1659 12.3598 24.5366C9.71804 22.3351 7.45748 21.9117 5.72104 22.1788C3.94436 22.4521 2.56003 23.4728 1.76341 24.4143C1.40666 24.8359 0.775686 24.8885 0.354079 24.5318C-0.0675277 24.175 -0.120109 23.544 0.236635 23.1224C1.27334 21.8972 3.0643 20.564 5.41692 20.2021C7.80979 19.8339 10.6326 20.4938 13.6402 23.0002C16.485 25.3708 18.7154 25.8988 20.6215 25.6517C22.6086 25.3941 24.4266 24.2821 26.4453 22.9363L27 23.7684L26.4453 22.9363C27.6943 22.1036 29.6028 20.8624 31.9606 20.4695C34.383 20.0658 37.1711 20.5708 40.1333 22.9944C45.1548 27.1029 50.6369 25.7624 53.8492 23.0091C56.3795 20.8403 59.1512 19.5329 62.2455 19.9101C65.3089 20.2835 68.4333 22.2798 71.7557 26.1134C72.1174 26.5307 72.0723 27.1623 71.655 27.524C71.2376 27.8857 70.606 27.8406 70.2443 27.4232C67.0668 23.7568 64.3571 22.1823 62.0035 21.8954Z"
                      fill="#4A6CF7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.697 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0605 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5579C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5745C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3923C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0257 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0362C72.1174 36.4535 72.0723 37.0851 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z"
                      fill="#4A6CF7"
                    />
                  </svg>
                </div>
                <div className="absolute left-1/2 bottom-0">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.9"
                      d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z"
                      fill="url(#paint0_angular_300_926)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_angular_300_926"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(60 60) rotate(90) scale(60)"
                      >
                        <stop colorstop-="#4A6CF7" />
                        <stop offset="1" stopColor="#111722" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 -z-10 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40 bg-noise-pattern"
        ></div>
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
      <section id="features" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          {/* <!-- Section Title --> */}
          <div
            className="wow fadeInUp relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16"
            data-wow-delay=".2s"
          >
            <span className="title"> FEATURES </span>
            <h2
              className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]"
            >
              Our Unique & Awesome Core Features
            </h2>
            <p className="text-base text-dark-text">
              In today's ever-evolving threat landscape, effective cybersecurity solutions require multi-pronged approaches. <b>Denovo Security</b> offers a comprehensive suite of cybersecurity solutions that are designed to protect your business from the most advanced cyber threats.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center" data-aos="fade-up">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".2s"
              >
                <div
                  className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path
                      d="M3.66663 23.8333H14.6666V38.5H3.66663V23.8333ZM16.5 5.5H27.5V38.5H16.5V5.5Z"
                    />
                    <path
                      opacity="0.5"
                      d="M29.3333 14.6667H40.3333V38.5H29.3333V14.6667Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="mb-3 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl md:mb-5"
                  >
                    Denovo Core Zero Trust
                  </h3>
                  <p className="text-base text-dark-text">
                    Denovo Core Zero Trust is a comprehensive cybersecurity solution that provides a holistic approach to security. It is designed to protect your business from the most advanced cyber threats.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".25s"
              >
                <div
                  className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path
                      d="M22.9424 2.39982L39.0226 12.0468C39.1585 12.1282 39.271 12.2434 39.3492 12.3813C39.4273 12.5191 39.4684 12.6749 39.4684 12.8333C39.4684 12.9918 39.4273 13.1475 39.3492 13.2854C39.271 13.4232 39.1585 13.5384 39.0226 13.6198L22.0001 23.8333L4.97756 13.6198C4.84161 13.5384 4.72908 13.4232 4.65094 13.2854C4.57281 13.1475 4.53174 12.9918 4.53174 12.8333C4.53174 12.6749 4.57281 12.5191 4.65094 12.3813C4.72908 12.2434 4.84161 12.1282 4.97756 12.0468L21.0559 2.39982C21.341 2.22851 21.6674 2.138 22.0001 2.138C22.3327 2.138 22.6591 2.22851 22.9442 2.39982H22.9424Z"
                    />
                    <path
                      opacity="0.5"
                      d="M36.8189 19.2501L39.0226 20.5719C39.1585 20.6533 39.271 20.7685 39.3492 20.9064C39.4273 21.0442 39.4684 21.1999 39.4684 21.3584C39.4684 21.5168 39.4273 21.6726 39.3492 21.8104C39.271 21.9483 39.1585 22.0635 39.0226 22.1449L22.0001 32.3584L4.97756 22.1449C4.84161 22.0635 4.72908 21.9483 4.65094 21.8104C4.57281 21.6726 4.53174 21.5168 4.53174 21.3584C4.53174 21.1999 4.57281 21.0442 4.65094 20.9064C4.72908 20.7685 4.84161 20.6533 4.97756 20.5719L7.18123 19.2501L22.0001 28.1417L36.8189 19.2501ZM36.8189 27.8667L39.0226 29.1886C39.1585 29.2699 39.271 29.3852 39.3492 29.523C39.4273 29.6609 39.4684 29.8166 39.4684 29.9751C39.4684 30.1335 39.4273 30.2893 39.3492 30.4271C39.271 30.5649 39.1585 30.6802 39.0226 30.7616L22.9442 40.4086C22.6591 40.5799 22.3327 40.6704 22.0001 40.6704C21.6674 40.6704 21.341 40.5799 21.0559 40.4086L4.97756 30.7616C4.84161 30.6802 4.72908 30.5649 4.65094 30.4271C4.57281 30.2893 4.53174 30.1335 4.53174 29.9751C4.53174 29.8166 4.57281 29.6609 4.65094 29.523C4.72908 29.3852 4.84161 29.2699 4.97756 29.1886L7.18123 27.8667L22.0001 36.7584L36.8189 27.8667Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="mb-3 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl md:mb-5"
                  >
                    Browser Isolation
                  </h3>
                  <p className="text-base text-dark-text">
                    Denovo Browser Isolation protects your organization from web-based threats by isolating web content in a secure container.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".3s"
              >
                <div
                  className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path
                      d="M36.6667 40.3334H7.33333C6.8471 40.3334 6.38079 40.1402 6.03697 39.7964C5.69315 39.4526 5.5 38.9863 5.5 38.5V14.6667H38.5V38.5C38.5 38.9863 38.3068 39.4526 37.963 39.7964C37.6192 40.1402 37.1529 40.3334 36.6667 40.3334ZM12.8333 20.1667V27.5H20.1667V20.1667H12.8333ZM12.8333 31.1667V34.8334H31.1667V31.1667H12.8333ZM23.8333 22V25.6667H31.1667V22H23.8333Z"
                    />
                    <path
                      opacity="0.5"
                      d="M38.5 11H5.5V5.49996C5.5 5.01373 5.69315 4.54741 6.03697 4.2036C6.38079 3.85978 6.8471 3.66663 7.33333 3.66663H36.6667C37.1529 3.66663 37.6192 3.85978 37.963 4.2036C38.3068 4.54741 38.5 5.01373 38.5 5.49996V11Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="mb-3 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl md:mb-5"
                  >
                    Data Loss Prevention(DLP)
                  </h3>
                  <p className="text-base text-dark-text">
                    Denovo Data Loss Prevention (DLP) is a comprehensive solution that helps you prevent data loss and protect sensitive information from unauthorized access.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".35s"
              >
                <div
                  className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path
                      d="M22 3.66663C32.1255 3.66663 40.3333 11.8745 40.3333 22C40.3333 32.1255 32.1255 40.3333 22 40.3333C11.8745 40.3333 3.66663 32.1255 3.66663 22C3.66663 11.8745 11.8745 3.66663 22 3.66663ZM22 7.33329C13.9003 7.33329 7.33329 13.9003 7.33329 22C7.33329 30.0996 13.9003 36.6666 22 36.6666C30.0996 36.6666 36.6666 30.0996 36.6666 22C36.6666 13.9003 30.0996 7.33329 22 7.33329ZM29.777 11.6288L32.3711 14.2211L25.5438 21.0521C25.6245 21.3546 25.6666 21.6718 25.6666 22C25.6666 24.0258 24.0258 25.6666 22 25.6666C19.9741 25.6666 18.3333 24.0258 18.3333 22C18.3333 19.9741 19.9741 18.3333 22 18.3333C22.3281 18.3333 22.6453 18.3755 22.9478 18.4561L29.7788 11.6288H29.777Z"
                    />
                    <path
                      opacity="0.5"
                      d="M22 9.16663C23.8663 9.16663 25.6391 9.56446 27.2396 10.2813L24.3741 13.145C23.617 12.9433 22.8213 12.8333 22 12.8333C16.9381 12.8333 12.8333 16.9381 12.8333 22C12.8333 24.53 13.86 26.8216 15.5173 28.4826L12.925 31.075L12.639 30.7798C10.4866 28.4845 9.16663 25.3953 9.16663 22C9.16663 14.9123 14.9123 9.16663 22 9.16663ZM33.7186 16.7621C34.4336 18.3608 34.8333 20.1355 34.8333 22C34.8333 25.5438 33.396 28.7521 31.075 31.075L28.4826 28.4826C30.14 26.8216 31.1666 24.53 31.1666 22C31.1666 21.1786 31.0585 20.383 30.855 19.6258L33.7186 16.7621Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="mb-3 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl md:mb-5"
                  >
                    AI Powered Threat Analysis
                  </h3>
                  <p className="text-base text-dark-text">
                    Denovo AI Powered Threat Analysis uses machine learning algorithms to detect and respond to cyber threats in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".4s"
              >
                <div
                  className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path
                      d="M25.6667 38.5H7.33333C6.8471 38.5 6.38079 38.3068 6.03697 37.963C5.69315 37.6192 5.5 37.1529 5.5 36.6667V18.3333H25.6667V38.5ZM38.5 14.6667H5.5V7.33333C5.5 6.8471 5.69315 6.38079 6.03697 6.03697C6.38079 5.69315 6.8471 5.5 7.33333 5.5H36.6667C37.1529 5.5 37.6192 5.69315 37.963 6.03697C38.3068 6.38079 38.5 6.8471 38.5 7.33333V14.6667Z"
                    />
                    <path
                      opacity="0.5"
                      d="M29.3334 38.5V18.3334H38.5V36.6667C38.5 37.1529 38.3069 37.6193 37.9631 37.9631C37.6193 38.3069 37.1529 38.5 36.6667 38.5H29.3334Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="mb-3 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl md:mb-5"
                  >
                    AI assisted Automatic policy generation(AAPG)
                  </h3>
                  <p className="text-base text-dark-text">
                    Denovo AI assisted Automatic policy generation(AAPG) uses machine learning algorithms to automatically generate security policies based on your organization's needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto max-w-[380px] text-center md:mb-16"
                data-wow-delay=".45s"
              >
                <div
                  className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path
                      opacity="0.5"
                      d="M10.0154 8.12714C13.3421 5.24452 17.598 3.6605 21.9999 3.66664C32.1254 3.66664 40.3332 11.8745 40.3332 22C40.3332 25.916 39.1049 29.546 37.0149 32.5233L31.1665 22H36.6665C36.6668 19.1246 35.8218 16.3126 34.2368 13.9136C32.6517 11.5146 30.3964 9.63443 27.7514 8.50687C25.1063 7.37931 22.1882 7.0541 19.3598 7.57168C16.5314 8.08926 13.9175 9.42679 11.8432 11.418L10.0154 8.12714Z"
                    />
                    <path
                      d="M33.9843 35.8729C30.6576 38.7555 26.4017 40.3395 21.9998 40.3333C11.8743 40.3333 3.6665 32.1255 3.6665 22C3.6665 18.084 4.89484 14.454 6.98484 11.4767L12.8332 22H7.33317C7.33293 24.8754 8.17788 27.6874 9.76295 30.0864C11.348 32.4854 13.6033 34.3656 16.2483 35.4931C18.8934 36.6207 21.8115 36.9459 24.6399 36.4283C27.4683 35.9107 30.0822 34.5732 32.1565 32.582L33.9843 35.8729Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="mb-3 font-heading text-xl font-medium text-dark dark:text-white sm:text-2xl md:mb-5"
                  >
                    Ease of Use
                  </h3>
                  <p className="text-base text-dark-text">
                    Our solutions are designed to be easy to use and deploy, so you can focus on running your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}