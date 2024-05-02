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
                data-aos="fade-up"
                style={{ lineHeight: '1.2', letterSpacing: '-1px', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))', textShadow: '0 0 10px rgba(0,0,0,0.5)', }}
              >
                Denovo Products <br />
              </h1>
              <span className='inline-grid text-2xl font-heading text-pretty'
                data-aos="fade-down"
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
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg" className="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold text-white">Denovo Core Zero Trust
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
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg" className="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
              <h3 className="mb-4 text-2xl font-bold text-white">Browser Isolation</h3>
              <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                Published <u>12.01.2022</u> by
                <a href="#!">Anna Doe</a>
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
                dui, sit amet rutrum enim massa in ante. Curabitur in justo at
                lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
                vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
                vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
                tortor finibus, a eleifend lectus dictum. Cras tempor convallis
                magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
                imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
                at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
                felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
                iaculis est vehicula ut.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap"
            data-aos="fade-up"

          >
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6" data-aos="fade-up">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg" className="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6" data-aos="fade-left">
              <h3 className="mb-4 text-2xl font-bold text-white">Data Loss Prevention</h3>
              <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
                Published <u>10.01.2022</u> by
                <a href="#!">Joe Svan</a>
              </p>
              <p className="text-neutral-500 dark:text-neutral-300">
                Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
                tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
                Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
                augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue
                sem finibus eleifend egestas eu metus. Sed ut dolor id magna
                rutrum ultrices ut eget libero. Duis vel porttitor odio. Ut
                pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
                dignissim malesuada, lacus lorem commodo leo, tristique blandit
                ante mi id metus. Integer et vehicula leo, vitae interdum lectus.
                Praesent nulla purus, commodo at euismod nec, blandit ultrices
                erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae
                justo. Nulla condimentum hendrerit leo, in feugiat ipsum
                condimentum ac. Maecenas sed blandit dolor.
              </p>
            </div>
          </div>
          <br />
        </section>
      </div>
    </section>
  );
}