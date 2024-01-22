const Hero = () => {
  return (
    <div className="w-full">
      <img
        src="src/assets/hero/hero-gradient-background.svg"
        alt="Background Image"
        className="w-full relative"
      />
      <img
        src="src/assets/hero/left-leaf.svg"
        alt="Left Laurel Wreath"
        className="absolute top-52 left-5"
      />
      <img
        src="src/assets/hero/right-leaf.svg"
        alt="Right Laurel Wreath"
        className="absolute top-52 right-5"
      />
      <img
        src="src/assets/hero/fille-jump.png"
        alt="Girl Jumping"
        className="absolute inset-x-0 mx-auto top-28"
      />
      <h1 className="text-white font-light text-nowrap text-5xl font-monstserrat title-left">
        DE LA <span className="text-yellow-500 font-semibold">MATERNELLE</span>
      </h1>
      <h1 className="text-white font-light tracking-wide text-nowrap text-5xl font-montserrat title-right">
        JUSQU'AU{" "}
        <span className="text-yellow-500 font-semibold">LYC&Eacute;E</span>
      </h1>
    </div>
  );
};

export default Hero;
