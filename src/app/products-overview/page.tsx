import Link from 'next/link';


export default function ProductsOverview() {
  return (
    <section id="blog" className="pt-[240px]">
      <div className='my-auto'>
        <section className='mx-auto text-center'>
          <h1 className="wow fadeInUp mb-5 font-heading text-4xl font-semibold dark:text-white">
            <span className="inline-grid"
            >Denovo Core Products </span>
          </h1>
        </section>
      </div>



      <div className="px-4 xl:container" data-aos="fade-up">
        <div className="w-full border-b pb-20 dark:border-[#2E333D]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10">
                <div className="relative mb-8 overflow-hidden rounded">
                  <Link href="/denovo-core-zero-trust" className="block">
                    <img
                      src="./images/blog/image-1.jpg"
                      alt="blog-image"
                      className="w-full"
                    />
                  </Link>
                  <Link href="/denovo-core-zero-trust">
                    <span
                      className="absolute top-5 left-5 rounded bg-primary py-[6px] px-4 font-heading text-sm font-medium text-white"
                    >
                      Learn more
                    </span>
                  </Link>
                </div>
                <div>
                  <h3>
                    <Link
                      href="/denovo-core-zero-trust"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Denovo Core Zero Trust
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".3s">
                <div className="relative mb-8 overflow-hidden rounded">
                  <Link href="/browser-isolation" className="block">
                    <img
                      src="./images/blog/image-2.jpg"
                      alt="blog-image"
                      className="w-full"
                    />
                  </Link>
                  <Link href="/browser-isolation">
                    <span
                      className="absolute top-5 left-5 rounded bg-primary py-[6px] px-4 font-heading text-sm font-medium text-white"
                    >
                      Learn more
                    </span>
                  </Link>
                </div>
                <div>
                  <h3>
                    <Link
                      href="/browser-isolation"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Browser Isolation
                    </Link>

                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".4s">
                <div className="relative mb-8 overflow-hidden rounded">
                  <Link href="/data-loss-prevention" className="block">
                    <img
                      src="./images/blog/image-3.jpg"
                      alt="blog-image"
                      className="w-full"
                    />
                  </Link>
                  <Link href="/data-loss-prevention">
                    <span
                      className="absolute top-5 left-5 rounded bg-primary py-[6px] px-4 font-heading text-sm font-medium text-white"
                    >
                      Learn more
                    </span>
                  </Link>
                </div>
                <div>
                  <h3>
                    <Link
                      href="/data-loss-prevention"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Data Loss prevention(DLP)
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".2s">
                <div className="relative mb-8 overflow-hidden rounded">
                  <Link href="/ai-powered-threat-analysis" className="block">
                    <img
                      src="./images/blog/image-1.jpg"
                      alt="blog-image"
                      className="w-full"
                    />
                  </Link>
                  <Link href="/ai-powered-threat-analysis">
                    <span
                      className="absolute top-5 left-5 rounded bg-primary py-[6px] px-4 font-heading text-sm font-medium text-white"
                    >
                      Learn more
                    </span>
                  </Link>
                </div>
                <div>
                  <h3>
                    <Link
                      href="/ai-powered-threat-analysis"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                      AI powered Threat Analysis
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mb-10" data-wow-delay=".3s">
                <div className="relative mb-8 overflow-hidden rounded">
                  <Link href="/aa-policy-gen" className="block">
                    <img
                      src="./images/blog/image-2.jpg"
                      alt="blog-image"
                      className="w-full"
                    />
                  </Link>
                  <Link href="/aa-policy-gen">
                    <span
                      className="absolute top-5 left-5 rounded bg-primary py-[6px] px-4 font-heading text-sm font-medium text-white"
                    >
                      Learn more
                    </span>
                  </Link>
                </div>
                <div>
                  <div className="mb-4 flex items-center">
                  </div>
                  <h3>
                    <Link
                      href="/aa-policy-gen"
                      className="font-heading text-xl font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                    >
                      AI Assisted Policy Gen
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}