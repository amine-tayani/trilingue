import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const images = [
  {
    url: "/src/assets/faces/cal-1.png",
    alt: "cal-1",
    title: "",
  },
  {
    url: "/src/assets/faces/cal-2.png",
    alt: "cal-2",
    title: "",
  },
  {
    url: "/src/assets/faces/cal-3.png",
    alt: "cal-3",
    title: "",
  },
  {
    url: "/src/assets/faces/cal-4.png",
    alt: "cal-4",
    title: "",
  },
  {
    url: "/src/assets/faces/cal-5.png",
    alt: "cal-5",
    title: "",
  },
  {
    url: "/src/assets/faces/cal-6.png",
    alt: "cal-6",
    title: "",
  },
  {
    url: "/src/assets/faces/cal-7.png",
    alt: "cal-7",
    title: "",
  },
  {
    url: "/src/assets/faces/cal-8.png",
    alt: "cal-8",
    title: "",
  },
];

const VieScolaireSection = () => {
  return (
    <section className="mb-20 mt-7">
      <div className="relative w-full h-20 bg-[rgb(227,185,33)] flex items-center justify-around mb-10">
        <img
          className="absolute left-1/4  transform -translate-x-1/2 -rotate-[80deg] overflow-hidden"
          src="src/assets/hero/left-leaf.svg"
        />
        <h1 className="font-monstserrat text-white text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
          VIE SCOLAIRE
        </h1>
      </div>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
      >
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <img
                src={image.url}
                alt={image.alt}
                className=" object-cover object-center"
              />
              <div className="w-full absolute bottom-10 p-4">
                <h2 className="font-semibold text-left text-5xl text-white font-lemonmilk">
                  {image.title}
                </h2>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default VieScolaireSection;
