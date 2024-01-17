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
          <div className="flex justify-center">
            <div className="flex mx-auto mt-8">
              <img
                className="h-96 lg:h-[500px]"
                src="src/assets/hero/left-leaf.svg"
              />
              <h1 className="text-white self-end text-5xl font-semibold">
                DE LA <span className="text-yellow-500">MATERNELLE</span>
              </h1>
            </div>
            <div className="mx-auto">
              <img
                className="h-96 lg:h-[550px] object-center object-cover"
                src="src/assets/hero/fille-jump.png"
              />
            </div>
            <div className="flex mx-auto mt-8">
              <h1 className="text-white text-5xl font-montserrat font-semibold">
                JUSQU'AU <span className="text-yellow-500">LYC&Eacute;E</span>
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
        <div className="relative flex justify-center">
          <h1 className="mt-2 text-gray-900 text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            BIENVENUE &Agrave;
            <br /> JEANNE D'ARC
            <span className="text-yellow-500"> TRILINGUE</span> SCHOOL
          </h1>
        </div>
        <h1></h1>
      </section>
    </>
  );
};

export default Hero;
