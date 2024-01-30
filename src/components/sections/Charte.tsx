const Charte = () => {
  return (
    <section className="font-montserrat">
      <div className=" mx-auto mt-12">
        <div className="flex justify-center items-center text-center w-full">
          <img alt="left" src="/src/assets/left-vect.svg" />
          <h1 className="mt-2 font-poppins text-title text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            NOTRE CHARTE
          </h1>
          <img alt="right" src="/src/assets/right-vect.svg" />
        </div>

        <div className="relative grid place-content-center w-full">
          <img
            alt="image"
            src="/src/assets/pattern.jpg"
            className="object-center"
          />
          <div className="absolute lg:top-40 top-0 inset-x-0 lg:p-8 text-title">
            <div className="flex flex-row justify-around mt-20 font-monstserrat font-medium text-center text-balance">
              <div className="flex flex-col space-y-12 max-w-xs md:max-w-sm">
                <div className="hover:bg-[url(/src/assets/splash.svg)] bg-cover bg-center">
                  <p className="text-sm lg:text-2xl hover:font-semibold">
                    Assurer à l’enfant une sécurité affective et physique
                  </p>
                </div>
                <div className="hover:bg-[url(/src/assets/splash.svg)] bg-cover bg-center">
                  <p className="text-sm lg:text-2xl hover:font-semibold">
                    Respecter les rythmes et repères de l’enfant
                  </p>
                </div>
                <div className="hover:bg-[url(/src/assets/splash.svg)] bg-cover bg-center">
                  <p className="text-sm lg:text-2xl hover:font-semibold">
                    Garantir à chacun
                    <br /> des soins individualisés
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-12 max-w-xs md:max-w-sm mt-12">
                <div className="hover:bg-[url(/src/assets/splash.svg)] bg-cover bg-center">
                  <p className="text-sm lg:text-2xl hover:font-semibold">
                    Favoriser l’éveil et l’autonomie de l’enfant
                  </p>
                </div>
                <div className="hover:bg-[url(/src/assets/splash.svg)] bg-cover bg-center">
                  <p className="text-sm lg:text-2xl hover:font-semibold">
                    Soutenir l’enfant dans ses émotions et ses désirs
                  </p>
                </div>
                <div className="hover:bg-[url(/src/assets/splash.svg)] bg-cover bg-center">
                  <p className="text-sm lg:text-2xl hover:font-semibold">
                    Situer les parents au centre de notre projet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charte;
