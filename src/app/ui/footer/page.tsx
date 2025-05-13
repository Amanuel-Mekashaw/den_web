import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="wow fadeInUp pt-14 sm:pt-20 lg:pt-[130px] bg-gradient-to-r to-[#4C458D] from-[#0C1A35] via-[#0C1A35]">
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-3/12">
            <div className="mb-20 max-w-[330px]">
              <Link href="/" className="mb-6 inline-block">
                {/* <img
                  src="../images/logo/new-logo.png"
                  alt="Denovo Security logo"
                  className="hidden h-[150px] dark:block"
                /> */}
                <Image
                  src={"/images/logo/new-logo.png"}
                  width={150}
                  height={150}
                  alt="denovo logo"
                  className="hidden h-[150px] dark:block"
                />
              </Link>

              <p className="mb-10 text-base text-dark-text">
                3301 Richmond Hwy, Alexandria, Virginia 22305, US
              </p>
              <div className="flex items-center space-x-5">
                {/* <Link
                  href="https://www.facebook.com/"
                //   name="social-link"
                  aria-label="social-link"
                  className="text-dark-text hover:text-primary dark:hover:text-white"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path
                      d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                    />
                  </svg>
                </Link> */}
                <Link
                  href="https://x.com/DenovoSecurity"
                  target="_blank"
                  //   name="social-link"
                  aria-label="social-link"
                  className="text-dark-text hover:text-primary dark:hover:text-white"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 72 72"
                    className="fill-current"
                  >
                    <path
                      d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66
			h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/denovosecurity/"
                  target="_blank"
                  //   name="social-link"
                  aria-label="social-link"
                  className="text-dark-text hover:text-primary dark:hover:text-white"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M6.93994 5.00002C6.93968 5.53046 6.72871 6.03906 6.35345 6.41394C5.97819 6.78883 5.46938 6.99929 4.93894 6.99902C4.40851 6.99876 3.89991 6.78779 3.52502 6.41253C3.15014 6.03727 2.93968 5.52846 2.93994 4.99802C2.94021 4.46759 3.15117 3.95899 3.52644 3.5841C3.9017 3.20922 4.41051 2.99876 4.94094 2.99902C5.47137 2.99929 5.97998 3.21026 6.35486 3.58552C6.72975 3.96078 6.94021 4.46959 6.93994 5.00002ZM6.99994 8.48002H2.99994V21H6.99994V8.48002ZM13.3199 8.48002H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.90002 14.9399 7.13002 13.2799 10.16L13.3199 8.48002Z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  //   name="social-link"
                  aria-label="social-link"
                  className="text-dark-text hover:text-primary dark:hover:text-white"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                    className="fill-current"
                  >
                    {/* instagram path */}
                    <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path>
                    <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                Company
              </h3>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/contact"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/career"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Careers
                    {/* <!-- <span
                      className="ml-4 rounded bg-primary py-1 px-2 font-heading text-xs text-white"
                    >
                      Hiring
                    </span> --> */}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/partnership"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Partnership
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                Products
              </h3>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/products"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/denovo-core-zero-trust"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Denovo Core Zero Trust
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/data-loss-prevention"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Data Loss Prevention(DLP)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/ai-powered-threat-analysis"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    AI powered Threat Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/aa-policy-gen"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    AI Assisted Policy Generation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 px-4 md:w-3/12 lg:w-3/12 xl:w-2/12">
            <div className="mb-20">
              <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
                Resources
              </h3>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="/papers"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Papers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/video-links"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Video Links
                  </Link>
                </li>
                <li>
                  <Link
                    href="/video-links"
                    className="font-heading text-base text-dark-text hover:text-primary dark:hover:text-white"
                  >
                    Our Web Webinars
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>
          </div>

          {/* <!-- <div
            className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-3/12 xl:w-2/12"
          >
            <div className="mb-20">
              <h3
                className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white"
              >
                Get in touch
              </h3>

              <div className="space-y-7">
                <div>
                  <p className="font-heading text-base text-dark-text">
                    Toll Free Customer Care
                  </p>
                  <Link
                    href="tel:+(1) 123 456 7890"
                    className="font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    +(1) 123 456 7890
                  </Link>
                </div>
                <div>
                  <p className="font-heading text-base text-dark-text">
                    Need live support?
                  </p>
                  <Link
                    href="mailto:support@domain.com"
                    className="font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    support@domain.com
                  </Link>
                </div>
              </div>
            </div>
          </div> --> */}

          {/* <div
            className="w-full px-4 sm:w-1/2 md:w-5/12 lg:w-5/12 xl:w-3/12"
          >
            <div className="mb-20">
              <h3
                className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white"
              >
                Newsletter
              </h3>
              <p className="mb-6 font-heading text-base text-dark-text">
                Subscribe to receive future updates
              </p>
              <form className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="pladeholder-opacity-40 w-full rounded border py-3 pl-5 pr-12 text-base text-dark-text outline-none focus:border-primary dark:border-transparent dark:bg-[#2C3443]"
                />
                <button
                  className="absolute right-0 top-0 flex h-full w-12 items-center justify-center border-l text-dark-text dark:border-[#1F2633]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    className="fill-current"
                  >
                    <path
                      d="M3.1175 1.17367L18.5025 9.63533C18.5678 9.6713 18.6223 9.72414 18.6602 9.78834C18.6982 9.85255 18.7182 9.92576 18.7182 10.0003C18.7182 10.0749 18.6982 10.1481 18.6602 10.2123C18.6223 10.2765 18.5678 10.3294 18.5025 10.3653L3.1175 18.827C3.05406 18.8619 2.98262 18.8797 2.91023 18.8785C2.83783 18.8774 2.76698 18.8575 2.70465 18.8206C2.64232 18.7838 2.59066 18.7313 2.55478 18.6684C2.51889 18.6056 2.50001 18.5344 2.5 18.462V1.53867C2.50001 1.46626 2.51889 1.39511 2.55478 1.33222C2.59066 1.26934 2.64232 1.21689 2.70465 1.18005C2.76698 1.1432 2.83783 1.12324 2.91023 1.12212C2.98262 1.121 3.05406 1.13877 3.1175 1.17367ZM4.16667 10.8337V16.3478L15.7083 10.0003L4.16667 3.65283V9.167H8.33333V10.8337H4.16667Z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div> */}
        </div>

        <div className="dark:border-[#2E333D] md:border-t">
          <div className="-mx-4 flex flex-wrap py-5 md:py-7">
            <div className="w-full px-4 md:w-1/2 lg:w-2/3">
              <div className="mb-5 flex items-center justify-center space-x-5 border-b pb-5 dark:border-[#2E333D] md:mb-0 md:justify-start md:border-0 md:pb-0">
                <Link
                  href="/privacy-policy"
                  className="font-heading text-base text-dark-text hover:text-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/support"
                  className="font-heading text-base text-dark-text hover:text-primary"
                >
                  Support
                </Link>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div>
                <p className="text-center font-heading text-base text-dark-text lg:text-right">
                  © 2024 Denovo Security. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
