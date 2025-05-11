type SectionT = {
  title: string;
  quote?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  alternate?: boolean;
  imageFadeStyle?: string;
  descriptionFadeStyle?: string;
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
};

export default function Sections({
  title,
  quote,
  description,
  image,
  imageAlt = title,
  alternate,
  descriptionFadeStyle = "fade-left",
  imageFadeStyle = "fade-right",
}: SectionT) {
  return (
    <section className="bg-gradient-to-b from-denovoDarkblue to-denovoPink px-5 py-10 space-y-3">
      {alternate && (
        <>
          {/* Title */}
          <h3 className="text-yellow-400 w-full text-center mt-2 text-4xl lg:text-5xl font-bold tracking-tight">
            Denovo Core {title}
          </h3>

          {/* Content */}
          <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-center relative z-10">
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
              />
            </>
          </div>
        </>
      )}

      <>
        {/* Title */}
        <h3 className="text-yellow-400 w-full text-center mt-2 text-4xl lg:text-5xl font-bold tracking-tight">
          Denovo Core {title}
        </h3>

        {/* Content */}
        <div className="container mx-auto flex flex-col lg:flex-row gap-6 items-center relative z-10">
          <>
            <TextContent
              quote={quote}
              description={description}
              descriptionFadeStyle={descriptionFadeStyle}
            />
            <IllustrationImage
              image={image}
              imageAlt={imageAlt ? imageAlt : title}
              imageFadeStyle={imageFadeStyle}
            />
          </>
        </div>
      </>
    </section>
  );
}

function TextContent({
  quote,
  description,
  descriptionFadeStyle,
}: TextContentT) {
  return (
    <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left space-y-3">
      <div className="flex flex-col gap-3">
        {quote && (
          <p className="text-xl text-white" data-eos={descriptionFadeStyle}>
            “{quote}”
          </p>
        )}
        <p
          className="text-xl lg:text-2xl leading-8 text-white"
          data-aos={descriptionFadeStyle}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function IllustrationImage({ image, imageAlt, imageFadeStyle }: ImageT) {
  return (
    <div
      className="w-full lg:w-8/12 lg:pl-6 mt-8 lg:mt-0"
      data-aos={imageFadeStyle}
    >
      <div className="overflow-hidden border-yellow-400 border-[6px] rounded-[30px] shadow-[8px_10px_0px_rgba(250,204,21,1)]">
        <img src={image} className="p-5 w-full object-cover" alt={imageAlt} />
      </div>
    </div>
  );
}
