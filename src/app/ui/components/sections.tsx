import Image from "next/image";
import Link from "next/link";

type SectionT = {
  title: string;
  quote?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  alternate?: boolean;
  imageFadeStyle?: string;
  descriptionFadeStyle?: string;
  backgroundGradientTo: "b" | "t" | "l" | "r" | "tr" | "tl" | "br" | "bl";
  learnMoreHref: string;
};

type ImageT = {
  image?: string;
  imageAlt?: string;
  imageFadeStyle?: string;
};

type TextContentT = {
  quote?: string;
  description: string;
  descriptionFadeStyle?: string;
  learnMoreHref: string;
};

export default function Sections({
  title,
  quote,
  description,
  image,
  imageAlt = title,
  alternate,
  backgroundGradientTo = "b",
  descriptionFadeStyle = "fade-left",
  imageFadeStyle = "fade-right",
  learnMoreHref,
}: SectionT) {
  return (
    <section
      className={`bg-gradient-to-${backgroundGradientTo} from-denovoDarkblue to-denovoPink px-5 lg:px-24 py-16 max-h-fit flex flex-col gap-5 lg:gap-8`}
    >
      {alternate ? (
        <>
          {/* Title */}
          <h3 className="text-yellow-400 text-balance w-full text-center mt-2 text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h3>

          {/* Content */}
          <div className="container flex flex-col gap-6 items-start justify-start lg:flex-row lg:gap-20">
            <>
              <IllustrationImage
                image={image}
                imageAlt={imageAlt}
                imageFadeStyle={imageFadeStyle}
              />
              <TextContent
                quote={quote}
                description={description}
                descriptionFadeStyle={descriptionFadeStyle}
                learnMoreHref={learnMoreHref}
              />
            </>
          </div>
        </>
      ) : (
        <>
          {/* Title */}
          <h3 className="text-yellow-400 text-balance w-full text-center mt-2 text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h3>

          {/* Content */}
          <div className="container mx-auto flex flex-col justify-start gap-6 lg:flex-row lg:gap-20 items-start relative z-10">
            <>
              <TextContent
                quote={quote}
                description={description}
                descriptionFadeStyle={descriptionFadeStyle}
                learnMoreHref={learnMoreHref}
              />
              <IllustrationImage
                image={image}
                imageAlt={imageAlt ? imageAlt : title}
                imageFadeStyle={imageFadeStyle}
              />
            </>
          </div>
        </>
      )}
    </section>
  );
}

function TextContent({
  quote,
  description,
  descriptionFadeStyle,
  learnMoreHref,
}: TextContentT) {
  return (
    <div className="w-full lg:w-6/12 text-center lg:text-left">
      <div className="flex flex-col gap-8">
        {quote && <p className="text-xl text-white">“{quote}”</p>}
        <p
          className="text-xl lg:text-2xl leading-10 text-white w-full"
          data-aos={descriptionFadeStyle}
        >
          {description}
        </p>

        {/* Learn more button */}
        <div
          className="wow fadeInUp flex flex-wrap items-center justify-center lg:justify-start"
          data-wow-delay=".5s"
        >
          <a
            href={learnMoreHref}
            className="inline-flex items-center rounded bg-denovoYellow py-[10px] px-6 font-heading text-denovoDarkblue hover:bg-opacity-90 md:py-[14px] md:px-8"
          >
            <span className="font-semibold text-lg">Learn more</span>
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
  );
}

function IllustrationImage({ image, imageAlt, imageFadeStyle }: ImageT) {
  return (
    <div
      className="w-full max-w-[400px] lg:max-w-[500px] lg:mt-0"
      data-aos={imageFadeStyle}
    >
      <div className="overflow-hidden border-yellow-400 border-[6px] rounded-[30px] shadow-[8px_10px_0px_rgba(250,204,21,1)]">
        <img src={image} className="p-5  h-auto object-cover" alt={imageAlt} />
      </div>
    </div>
  );
}
