export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-fixed bg-center bg-cover bg-[url('/images/hero_image.png')] z-0">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Hero content */}
      <section
        id="home"
        className="relative z-10 py-20 px-4 md:px-10 lg:px-28 text-white"
      >
        <div className="xl:container mx-auto">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <h1
              className="font-heading text-2xl sm:text-4xl md:text-5xl font-semibold text-denovoYellow wow fadeInUp"
              data-wow-delay=".3s"
            >
              Step into the future of cloud security with our AI-native
              ZeroTrust and SASE/SSE platform
            </h1>

            {/* Description */}
            <div className="flex flex-col gap-3">
              <p
                className="wow fadeInUp text-xl text-white"
                data-wow-delay=".4s"
              >
                Denovo Security is a next-generation, AI-powered cloud-based
                security solution built from scratch to protect modern
                enterprises navigating dynamic cloud, SaaS, and distributed work
                environments. Our solution unifies adaptive trust, intelligent
                data loss prevention, and AI-powered real-time threat detection.
              </p>
              <p className="uppercase text-xl font-semibold text-white">
                Delivering seamless, context-aware protection without
                complexity.
              </p>
            </div>

            {/* Call to Action */}
            <div
              className="wow fadeInUp flex justify-center lg:justify-start"
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
      </section>
    </div>
  );
}
