const Header = () => {
  return (
    <section>
      <div className=" flex flex-col items-center justify-center">
        <h1 className="mt-2 font-poppins text-title text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-[53px]">
          BIENVENUE &Agrave;
          <br /> JEANNE D'ARC{" "}
          <span className="bg-fyellow leading-relaxed text-white">
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
  );
};

export default Header;
