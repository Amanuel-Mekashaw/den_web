'use client';
import Link from 'next/link';

export default function ProductsOverview() {

  return (
    <section id="blog" className="pt-[100px]">

      <div className="relative overflow-hidden bg-cover bg-no-repeat custom-filter" style={{
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
      </div>
      <br />
      <span className="text-white mb-2 text-4xl font-medium leading-tight text-center block"
        data-aos="fade-up"
      >
        How Denovo Products safeguard your organization's data and network.      </span>
      <section className="container mx-auto my-24 px-6 md:flex md:flex-wrap md:justify-center">

        <div className="w-full md:w-1/2 lg:w-1/3 p-4">

          <div className="card rounded-lg shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface border">

            <div className="p-6">
              <div
                className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
              >
                <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.49988 2.00012C1.77602 2.00012 1.99988 1.77626 1.99988 1.50012C1.99988 1.22398 1.77602 1.00012 1.49988 1.00012C1.22374 1.00012 0.999878 1.22398 0.999878 1.50012C0.999878 1.77626 1.22374 2.00012 1.49988 2.00012ZM4.49988 2.00012C4.77602 2.00012 4.99988 1.77626 4.99988 1.50012C4.99988 1.22398 4.77602 1.00012 4.49988 1.00012C4.22374 1.00012 3.99988 1.22398 3.99988 1.50012C3.99988 1.77626 4.22374 2.00012 4.49988 2.00012ZM7.99988 1.50012C7.99988 1.77626 7.77602 2.00012 7.49988 2.00012C7.22374 2.00012 6.99988 1.77626 6.99988 1.50012C6.99988 1.22398 7.22374 1.00012 7.49988 1.00012C7.77602 1.00012 7.99988 1.22398 7.99988 1.50012ZM10.4999 2.00012C10.776 2.00012 10.9999 1.77626 10.9999 1.50012C10.9999 1.22398 10.776 1.00012 10.4999 1.00012C10.2237 1.00012 9.99988 1.22398 9.99988 1.50012C9.99988 1.77626 10.2237 2.00012 10.4999 2.00012ZM13.9999 1.50012C13.9999 1.77626 13.776 2.00012 13.4999 2.00012C13.2237 2.00012 12.9999 1.77626 12.9999 1.50012C12.9999 1.22398 13.2237 1.00012 13.4999 1.00012C13.776 1.00012 13.9999 1.22398 13.9999 1.50012ZM1.49988 14.0001C1.77602 14.0001 1.99988 13.7763 1.99988 13.5001C1.99988 13.224 1.77602 13.0001 1.49988 13.0001C1.22374 13.0001 0.999878 13.224 0.999878 13.5001C0.999878 13.7763 1.22374 14.0001 1.49988 14.0001ZM1.99988 10.5001C1.99988 10.7763 1.77602 11.0001 1.49988 11.0001C1.22374 11.0001 0.999878 10.7763 0.999878 10.5001C0.999878 10.224 1.22374 10.0001 1.49988 10.0001C1.77602 10.0001 1.99988 10.224 1.99988 10.5001ZM1.49988 8.00012C1.77602 8.00012 1.99988 7.77626 1.99988 7.50012C1.99988 7.22398 1.77602 7.00012 1.49988 7.00012C1.22374 7.00012 0.999878 7.22398 0.999878 7.50012C0.999878 7.77626 1.22374 8.00012 1.49988 8.00012ZM1.99988 4.50012C1.99988 4.77626 1.77602 5.00012 1.49988 5.00012C1.22374 5.00012 0.999878 4.77626 0.999878 4.50012C0.999878 4.22398 1.22374 4.00012 1.49988 4.00012C1.77602 4.00012 1.99988 4.22398 1.99988 4.50012ZM13.4999 11.0001C13.776 11.0001 13.9999 10.7763 13.9999 10.5001C13.9999 10.224 13.776 10.0001 13.4999 10.0001C13.2237 10.0001 12.9999 10.224 12.9999 10.5001C12.9999 10.7763 13.2237 11.0001 13.4999 11.0001ZM13.9999 7.50012C13.9999 7.77626 13.776 8.00012 13.4999 8.00012C13.2237 8.00012 12.9999 7.77626 12.9999 7.50012C12.9999 7.22398 13.2237 7.00012 13.4999 7.00012C13.776 7.00012 13.9999 7.22398 13.9999 7.50012ZM13.4999 5.00012C13.776 5.00012 13.9999 4.77626 13.9999 4.50012C13.9999 4.22398 13.776 4.00012 13.4999 4.00012C13.2237 4.00012 12.9999 4.22398 12.9999 4.50012C12.9999 4.77626 13.2237 5.00012 13.4999 5.00012ZM4.99988 13.5001C4.99988 13.7763 4.77602 14.0001 4.49988 14.0001C4.22374 14.0001 3.99988 13.7763 3.99988 13.5001C3.99988 13.224 4.22374 13.0001 4.49988 13.0001C4.77602 13.0001 4.99988 13.224 4.99988 13.5001ZM7.49988 14.0001C7.77602 14.0001 7.99988 13.7763 7.99988 13.5001C7.99988 13.224 7.77602 13.0001 7.49988 13.0001C7.22374 13.0001 6.99988 13.224 6.99988 13.5001C6.99988 13.7763 7.22374 14.0001 7.49988 14.0001ZM10.9999 13.5001C10.9999 13.7763 10.776 14.0001 10.4999 14.0001C10.2237 14.0001 9.99988 13.7763 9.99988 13.5001C9.99988 13.224 10.2237 13.0001 10.4999 13.0001C10.776 13.0001 10.9999 13.224 10.9999 13.5001ZM13.4999 14.0001C13.776 14.0001 13.9999 13.7763 13.9999 13.5001C13.9999 13.224 13.776 13.0001 13.4999 13.0001C13.2237 13.0001 12.9999 13.224 12.9999 13.5001C12.9999 13.7763 13.2237 14.0001 13.4999 14.0001ZM3.99988 5.00012C3.99988 4.44784 4.44759 4.00012 4.99988 4.00012H9.99988C10.5522 4.00012 10.9999 4.44784 10.9999 5.00012V10.0001C10.9999 10.5524 10.5522 11.0001 9.99988 11.0001H4.99988C4.44759 11.0001 3.99988 10.5524 3.99988 10.0001V5.00012ZM4.99988 5.00012H9.99988V10.0001H4.99988V5.00012Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </div>
              <h5 className="mb-2 text-2xl font-medium leading-tight">
                Advanced Encryption
              </h5>
              <p className="mb-4 text-base">
                Denovo products employ state-of-the-art encryption to protect your data from unauthorized access.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="card rounded-lg shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface border">
            <div className="p-6">
              <div
                className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
              >
                <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </div>
              <h5 className="mb-2 text-2xl font-medium leading-tight">
                Continuous Monitoring
              </h5>
              <p className="mb-4 text-base">
                Denovo products continuously monitor your network for any suspicious activity, ensuring that your data is always secure.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="card rounded-lg shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface border">
            <div className="p-6">
              <div
                className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]"
              >
                <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

              </div>
              <h5 className="mb-2 text-2xl font-medium leading-tight">
                Secure Access
              </h5>
              <p className="mb-4 text-base">
                Denovo products ensure that only authorized users have access to your network, preventing unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </section>




      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="mb-16 flex flex-wrap"
            data-aos="fade-up"
          >
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6" data-aos="fade-right" >
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="./images/overview/core.jpg" className="w-full" alt="Louvre" data-aos="zoom-in" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-white text-center">Denovo Core Zero Trust
              </h3>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
                vulputate. Ut vulputate est non quam dignissim elementum. Donec a
                ullamcorper diam.
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                nulla saepe rerum aspernatur odio amet perferendis tempora
                mollitia? Ratione unde magni omnis quaerat blanditiis cumque
                dolore placeat rem dignissimos?
              </p>
            </div>
          </div>

          <div className="mb-16 flex flex-wrap lg:flex-row-reverse" data-aos="fade-up"
          >
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6" data-aos="fade-right">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="./images/overview/browser.jpg" className="w-full" alt="Louvre" data-aos="zoom-in" />
                <Link href="/products-overview/browser-isolation">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
              <h3 className="mb-4 text-2xl font-bold text-white text-center">Browser Isolation</h3>
              <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-300">
                <p className='font-heading text-pretty text-xl' data-aos="type-right">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Provide an additional layer of security by segregating browsing activities from the local network and devices.
                </p>
                <br />
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Web sessions are executed in a secure, remote environment, shielding users from web-based threats and reducing the risk of malware infections.
                </p>
                <br />
                <p className='font-heading text-pretty text-xl'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="inline-block w-5 h-5 mr-2 fill-current text-blue-400">
                    <path d="M20.121 4.828a2 2 0 0 0-2.828 0l-9.9 9.9-3.535-3.535a2 2 0 1 0-2.828 2.828l5.657 5.657a2 2 0 0 0 2.828 0l11.314-11.314a2 2 0 0 0 0-2.828z" />
                  </svg>
                  Effective safeguard against malware infections originating from internet browsing, by isolating web sessions and preventing malicious code from reaching user endpoints.
                </p>
                <br />
                {/* add a learnmore link */}
                <Link href='/products-overview/browser-isolation'>
                  <span className='text-primary hover:text-primary-600 text-xl'>Learn more
                  </span>
                </Link>
              </ul>
            </div>

          </div>

          <div className="flex flex-wrap"
            data-aos="fade-up"

          >
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6" data-aos="fade-right">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="./images/overview/data.jpg" className="w-full" alt="Louvre" data-aos="zoom-in" />
                <a href="/products-overview/data-loss-prevention">
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
                <Link href='/products-overview/data-loss-prevention'>
                  <span className='text-primary hover:text-primary-600 text-xl'>Learn more
                  </span>
                </Link>
              </ul>
            </div>
          </div>
          <br />
        </section>
      </div>
    </section>
  );
}