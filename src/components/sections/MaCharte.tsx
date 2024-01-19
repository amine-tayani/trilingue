const MaCharte = () => {
  return (
    <section className=" font-montserrat">
      <div className="container mx-auto">
        <div className="flex justify-center items-center text-center w-full mb-10">
          <img alt="left" src="/src/assets/left-vect.svg" />
          <h1 className="mt-2 font-poppins text-title text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            NOTRE CHARTE
          </h1>
          <img alt="right" src="/src/assets/right-vect.svg" />
        </div>

        <div className="pattern-container relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 bg-pattern bg-cover bg-center" />

          <div className="relative z-10 p-8 text-title">
            <div className="flex flex-col md:flex-row justify-around mt-20 font-monstserrat font-medium text-center text-balance">
              <div className="flex flex-col space-y-12 max-w-xs md:max-w-sm">
                <p className="text-sm lg:text-2xl ">
                  Assurer à l’enfant une sécurité affective et physique
                </p>
                <p className="text-sm lg:text-2xl">
                  Respecter les rythmes et repères de l’enfant
                </p>
                <div
                  className="bg-svg bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("/src/assets/splash.svg")',
                  }}
                >
                  <p className="text-sm lg:text-2xl font-semibold">
                    Garantir à chacun des soins individualisés
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-12 max-w-xs md:max-w-sm mt-12">
                <p className="text-sm lg:text-2xl ">
                  Favoriser l’éveil et l’autonomie de l’enfant
                </p>
                <p className="text-sm lg:text-2xl ">
                  Soutenir l’enfant dans ses émotions et ses désirs
                </p>
                <p className="text-sm lg:text-2xl">
                  Situer les parents au centre de notre projet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaCharte;