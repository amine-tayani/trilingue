const Hero = () => {
  return (
    <>
      <section>
        <div
          className="w-full bg-center h-[600px] bg-cover"
          style={{
            backgroundImage:
              "url(src/assets/hero/hero-gradient-background.svg)",
          }}
        >
          <div className="flex justify-center mx-12">
            <div className="flex items-baseline mx-auto mt-8">
              <img
                className="h-96 lg:h-[500px]"
                src="src/assets/hero/left-leaf.svg"
              />
              <h1 className="text-white font-light text-nowrap text-5xl font-monstserrat">
                DE LA{" "}
                <span className="text-yellow-500 font-semibold">
                  MATERNELLE
                </span>
              </h1>
            </div>
            <div className="mx-auto">
              <img
                className="h-96 lg:h-[550px] object-center object-cover"
                src="src/assets/hero/fille-jump.png"
              />
            </div>
            <div className="flex mx-auto mt-8">
              <h1 className="text-white font-light tracking-wide text-nowrap text-5xl font-montserrat">
                JUSQU'AU{" "}
                <span className="text-yellow-500  font-semibold">
                  LYC&Eacute;E
                </span>
              </h1>
              <img
                className="h-96 lg:h-[500px]"
                src="src/assets/hero/right-leaf.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="mt-2 font-poppins text-[#002157] text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            BIENVENUE &Agrave;
            <br /> JEANNE D'ARC{" "}
            <span className="bg-[#fdc725] leading-relaxed text-white">
              TRILINGUE
            </span>{" "}
            SCHOOL
          </h1>
          <h2 className="text-6xl font-meowscript text-title">
            La quête de l'excellence
          </h2>
          <div className="bg-[#073d6a] h-2 w-[106px] my-4" />
        </div>
      </section>
    </>
  );
};

export default Hero;
