export default function DataLossPrevention() {
  return (
    <section
      id="home"
      className="mx-auto relative z-40 overflow-hidden pt-28 pb-24 sm:pt-36 lg:pt-[170px] lg:pb-[120px]"
    >
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap items-center text-right">
          <div className="mx-auto w-full px-3 lg:w-1/2"
          >
            <div className="mx-auto mb-12 max-w-[530px] text-center lg:ml-0 lg:mb-0 lg:text-center">

              <h1 className="wow fadeInUp mb-5 font-heading text-2xl font-semibold dark:text-white sm:text-2xl md:text-4xl md:leading-6xl" data-wow-delay=".3s">
                <span className="inline-grid text-center"
                  data-aos="fade-right"
                >Denovo Security Data Loss Prevention (DLP)</span>
              </h1>

              <p className="wow fadeInUp mb-12 text-base dark:text-white font-semibold" data-aos="fade-left">
                This product safeguards sensitive information from loss, misuse, or unauthorized access. Denovo Security's DLP technology monitors, detects, and blocks the transmission of confidential data across various channels and devices, ensuring compliance with regulations and protecting business information.</p>
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
    </section>
  );
}