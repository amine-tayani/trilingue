const MotDeDirecteur = () => {
  return (
    <section className="container">
      <div className="grid max-w-screen-xl lg:max-w-screen-2xl py-8 mx-auto lg:mx-0 xl:gap-0 lg:py-16 lg:grid-cols-16">
        <div className="mr-auto lg:col-span-11 z-10 relative bg-[#073d6a] w-[833px] h-[431.55px]">
          <div className="py-8 px-32">
            <h1 className="max-w-2xl mb-4 text-4xl font-semibold md:text-5xl font-oswald xl:text-[30pt] text-white">
              MOT DU DIRECTEUR
            </h1>

            <p className="max-w-2xl lg:max-w-xl mb-6 font-monstserrat text-gray-100 text-left lg:mb-8 md:text-lg lg:text-[19px]">
              Chers parents,
              <br /> Fondé en 1921, notre établissement scolaire perpétue une
              tradition marquée par la quete de l'excellence dans tous nos
              projets. Nous proposons une pédagogie éducative basée sur la
              réussite, l'épanouissment, la responsabilisation et la confiance
              afin de préparer ,activement ,nos éleves au monde de demain.{" "}
              <a className="text-yellow-600 text-xl">Lire la suite</a>
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              <img src="src/assets/Circled-Play.svg" className="mr-2" />
              PLAY VIDEO
            </a>
          </div>
        </div>

        <div className="flex absolute lg:right-0 lg:-translate-x-96 z-50 col-span-0 lg:mt-9 lg:col-span-5 lg:flex">
          <img src="src/assets/directeur.png" alt="directeur" className="" />
        </div>
      </div>
    </section>
  );
};

export default MotDeDirecteur;
