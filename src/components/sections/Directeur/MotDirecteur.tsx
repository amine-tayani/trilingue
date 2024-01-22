import Header from "./Header";

const MotDeDirecteur = () => {
  return (
    <>
      <Header />
      <section className="container flex flex-col lg:flex-row lg:space-x-8 items-center">
        <div className="py-12 px-8 w-full mt-10 lg:mt-0 lg:px-32 bg-title lg:w-4/6 relative">
          <h1 className="max-w-2xl mb-4 text-4xl font-semibold md:text-5xl font-oswald xl:text-[30pt] text-white">
            MOT DU DIRECTEUR
          </h1>

          <p className="max-w-sm lg:max-w-xl mb-6 font-monstserrat lg:mt-8 text-gray-100 text-left lg:mb-8 md:text-lg lg:text-[19px]">
            Chers parents,
            <br /> Fondé en 1921, notre établissement scolaire perpétue une
            tradition marquée par la quete de l'excellence dans tous nos
            projets. Nous proposons une pédagogie éducative basée sur la
            réussite, l'épanouissment, la responsabilisation et la confiance
            afin de préparer ,activement ,nos éleves au monde de demain.{" "}
            <a className="text-fyellow text-lg md:text-xl font-medium hover:text-fyellow/90 cursor-pointer">
              Lire la suite
            </a>
          </p>
          <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-center text-white hover:scale-105 font-monstserrat">
            <img src="src/assets/Circled-Play.svg" className="mr-2" />
            PLAY VIDEO
          </button>
        </div>

        <img
          src="src/assets/directeur.png"
          alt="directeur"
          className="h-[400px] lg:absolute lg:right-52 mt-8 lg:mt-0 "
        />
      </section>
    </>
  );
};

export default MotDeDirecteur;
