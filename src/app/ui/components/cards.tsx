type CardT = {
  image: string;
  title: string;
  href: string;
};

export default function Cards({ image, title, href }: CardT) {
  return (
    <div
      className="card rounded-lg  border-2 shadow-lg
                    bg-ebony
                    overflow-hidden text-white 
                    hover:scale-[105%] transition-transform delay-200 ease-in-out cursor-pointer"
    >
      <div className="flex flex-col items-center px-6 py-8">
        <div className="flex-shrink-0 mb-4">
          <img
            src={
              image || "./images/overview/hexagon_logo/logo_hexa_dlp.drawio.png"
            }
            className="w-full object-cover"
            alt={title}
          />
        </div>
        <div className="text-center">
          <p className="text-2xl font-semibold">{title}</p>
          <div className="flex justify-center mt-4">
            <a
              href={href}
              className="inline-block bg-white text-blue-600 hover:bg-gray-200 hover:text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
