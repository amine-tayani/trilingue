import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cn } from "../../utils/cn";

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
    title: (
      <>
        <span className="text-title">A</span>ctivités{" "}
        <span className="text-title">S</span>portives
      </>
    ),
  },
  {
    url: "/src/assets/faces/cal-2.png",
    alt: "cal-2",
    title: (
      <>
        <span className="text-title">A</span>ctivités{" "}
        <span className="text-title">C</span>ulturels
      </>
    ),
  },
  {
    url: "/src/assets/faces/cal-3.png",
    alt: "cal-3",
    title: (
      <>
        <span className="text-title">A</span>ctivités{" "}
        <span className="text-title">E</span>xtrascolaires
      </>
    ),
  },
  {
    url: "/src/assets/faces/cal-4.png",
    alt: "cal-4",
    title: (
      <>
        <span className="text-title">A</span>ctivités{" "}
        <span className="text-title">S</span>ociales
      </>
    ),
  },
  {
    url: "/src/assets/faces/cal-5.png",
    alt: "cal-5",
    title: (
      <>
        <span className="text-title">S</span>orties{" "}
        <span className="text-title">S</span>colaires
      </>
    ),
  },
  {
    url: "/src/assets/faces/cal-6.png",
    alt: "cal-6",
    title: (
      <>
        <span className="text-title">V</span>oyage A{" "}
        <span className="text-title">L'</span>Etranger
      </>
    ),
  },
  {
    url: "/src/assets/faces/cal-7.png",
    alt: "cal-7",
    title: (
      <>
        <span className="text-title">S</span>ummer{" "}
        <span className="text-title">C</span>amp
      </>
    ),
  },
  {
    url: "/src/assets/faces/cal-8.png",
    alt: "cal-8",
    title: (
      <>
        <span className="text-title">R</span>OBOTIQUE
      </>
    ),
  },
];

const VieScolaireSection = () => {
  return (
    <section className="mb-10 mt-7">
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
              <div className="w-full z-50 absolute bottom-10 p-4">
                <h2
                  className={cn(
                    "font-semibold text-white text-left text-5xl font-lemonmilk uppercase"
                  )}
                >
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
