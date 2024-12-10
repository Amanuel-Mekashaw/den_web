'use client';
import Link from 'next/link';

export default function ProductsOverview() {

  return (
    <section id="blog" className="pt-[200px]">

      {/* <div className="relative overflow-hidden bg-cover bg-no-repeat custom-filter" style={{
        backgroundPosition: '50%',
        // backgroundImage: "url('./images/hero/hero-sec-pro1.jpg')",
        height: '500px',
      }}>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl"
                data-aos="fade-right"
                style={{ lineHeight: '1.2', letterSpacing: '-1px', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))', textShadow: '0 0 10px rgba(0,0,0,0.5)', }}
              >
                Denovo Products <br />
              </h1>
              <span className='inline-grid text-2xl font-heading text-pretty'
                data-aos="fade-right"
                style={{ lineHeight: '1.2', letterSpacing: '-1px', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))', textShadow: '0 0 10px rgba(0,0,0,0.5)', }}
              >
                Denovo offers a range of products that are designed to help you secure your organization's
                <span className='inline-grid text-2xl'
                  style={{ lineHeight: '1.2', letterSpacing: '-1px', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))', textShadow: '0 0 10px rgba(0,0,0,0.5)', }}
                >data and network.</span>
              </span>
              <br />
              <br />
              <a
                href="#features"
                className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8"
                data-aos="fade-right"
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
      </div> */}
      <br />
      <span className="text-white mb-2 text-4xl font-medium leading-tight text-center block"
        data-aos="fade-up"
      >
        Denovo Products safeguard your organization's data and network.
      </span>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="mb-16 flex flex-wrap"
            data-aos="fade-up"
          >
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6" data-aos="fade-right" >
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="./images/overview/homepage overview/Denovo Core.drawio (1).png" className="w-full" alt="Louvre" data-aos="zoom-in" />
                <a href="/products/denovo-core-zero-trust">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-white text-center">Denovo Core Zero Trust
              </h3>
              <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-300">
                <p className='font-heading text-pretty text-xl' data-aos="type-right">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Denovo Core Zero Trust offers an all-encompassing approach to security.
                </p>
                <br />
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  The solution provides a holistic strategy for addressing security needs.
                </p>
                <br />
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  It is designed to protect businesses from the most sophisticated cyber threats.
                </p>
                <br />
                {/* add a learnmore link */}
                <Link href='/products/denovo-core-zero-trust'>
                  <span className='text-primary hover:text-primary-600 text-xl'>Learn more
                  </span>
                </Link>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap "
            data-aos="fade-up"

          >
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6" data-aos="fade-right">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="./images/overview/products overview/dlpmain.drawio.png" className="w-full" alt="Louvre" data-aos="zoom-in" />
                <a href="/products/data-loss-prevention">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6" data-aos="fade-left">
              <h3 className="mb-4 text-2xl font-bold text-white text-center">Data Loss Prevention</h3>
              <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-300">
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Safeguard sensitive information from loss, misuse, or unauthorized access.
                </p>
                <br />
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Monitor, detect, and block transmission of confidential data across various channels and devices.
                </p>
                <br />
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Ensure compaliance with regulations and protecting business information.
                </p>
                <br />
                {/* add a learnmore link */}
                <Link href='/products/data-loss-prevention'>
                  <span className='text-primary hover:text-primary-600 text-xl'>Learn more
                  </span>
                </Link>
              </ul>
            </div>
          </div>


          <br />
        </section>
      </div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap lg:flex-row-reverse"
            data-aos="fade-up"
          >
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6" data-aos="fade-right">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="./images/overview/homepage overview/Denovo Core.drawio (1).png" className="w-full" alt="Louvre" data-aos="zoom-in" />
                <a href="/products/ai-powered-threat-analysis">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6" data-aos="fade-left">
              <h3 className="mb-4 text-2xl font-bold text-white text-center">Denovo Security AI-Powered Threat Analysis</h3>
              <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-300">
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Detect and respond to threats in real-time using AI-powered threat analysis.
                </p>
                <br />
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Enhance your security posture with advanced threat detection and response capabilities.
                </p>
                <br />
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Minimize the risk of data breaches and enhancing response capabilities
                </p>
                <br />
                {/* add a learnmore link */}
                <Link href='/products/ai-powered-threat-analysis'>
                  <span className='text-primary hover:text-primary-600 text-xl'>Learn more
                  </span>
                </Link>
              </ul>
            </div>
          </div>


          <br />
        </section>
        <div className="flex flex-wrap "
          data-aos="fade-up"

        >
          <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6" data-aos="fade-right">
            <div
              className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="./images/overview/homepage overview/AI Assisted.drawio.png" className="w-full" alt="Louvre" data-aos="zoom-in" />
              <a href="/products/aa-policy-gen">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                </div>
              </a>
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6" data-aos="fade-left">
            <h3 className="mb-4 text-2xl font-bold text-white text-center">AI Assisted Automatic Policy Generation (AAPG)</h3>
            <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-300">
              <p className='font-heading text-pretty text-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                  <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                </svg>
                Denovo AI Assisted Automatic Policy Generation (AAPG) leverages artificial intelligence.
              </p>
              <br />
              <p className='font-heading text-pretty text-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                  <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                </svg>
                It uses machine learning algorithms to create security policies.
              </p>
              <br />
              <p className='font-heading text-pretty text-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                  <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                </svg>
                The policies are automatically generated to fit your organization's specific needs.
              </p>
              <br />
              {/* add a learnmore link */}
              <Link href='/products/aa-policy-gen'>
                <span className='text-primary hover:text-primary-600 text-xl'>Learn more
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}