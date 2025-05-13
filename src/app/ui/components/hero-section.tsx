export default function HeroSection() {
  return (
    <>
      <div className="relative overflow-hidden lg:px-20">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <img
          className="absolute inset-0 -z-10 w-full h-full object-cover"
          src="./images/hero_image.png"
          alt="banner image"
        />

        {/* Hero section Text */}
        <section id="home" className="overflow-hidden py-20 lg:px-20 relative">
          <div className="xl:container p-0">
            <div className="">
              {/* Hero Text content */}
              <div className="flex flex-col gap-8 mx-auto text-center lg:ml-0 lg:mb-0 lg:text-left z-30">
                <h1
                  className="wow fadeInUp font-heading text-2xl font-semibold dark:text-white sm:text-4xl md:text-4xl md:leading-6xl"
                  data-wow-delay=".3s"
                >
                  <span
                    className="inline-grid md:w-[70%] text-denovoYellow"
                    data-aos="fade-left"
                  >
                    Step into the future of cloud security with our AI-native
                    ZeroTrust and SASE/SSE platform
                  </span>
                </h1>
                {/* decription and quote */}
                <div className="flex flex-col gap-3 px-5 md:p-0">
                  <p
                    className="wow fadeInUp text-xl text-white"
                    data-wow-delay=".4s"
                  >
                    Denovo Security is a next-generation, AI-powered cloud based
                    security solution built from scratch to protect modern
                    enterprises navigating dynamic cloud, SaaS, and distributed
                    work environments. Our solution unifies adaptive trust,
                    intelligent data loss prevention, and AI powered real-time
                    threat detection.
                  </p>
                  <p className="uppercase text-center lg:text-left text-xl font-semibold text-white">
                    Delivering seamless, context-aware protection without
                    complexity.
                  </p>
                </div>

                {/* Demo o demand */}
                <div
                  className="wow fadeInUp flex flex-wrap items-center justify-center lg:justify-start"
                  data-wow-delay=".5s"
                >
                  <a
                    href="/request_demo"
                    className="inline-flex items-center rounded bg-denovoYellow py-[10px] px-6 font-heading text-denovoDarkblue hover:bg-opacity-90 md:py-[14px] md:px-8"
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
                          fill="black"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* SVG blue blur */}
          {/* <div className="absolute top-0 right-0">
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
      <div className="absolute bottom-0 left-0">
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
      </div> */}
        </section>
      </div>
    </>
  );
}
