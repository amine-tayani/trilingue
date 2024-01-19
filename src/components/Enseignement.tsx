const Enseignement = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row py-20">
        <div className="relative w-1/2">
          <img alt="shape" src="/src/assets/shape.svg" />
        </div>
        <div className="ml-8 mt-10 font-monstserrat">
          <h1 className="mt-2 uppercase text-[#2c5177] text-nowrap text-2xl font-bold sm:text-3xl md:text-3xl lg:text-[37pt]">
            <span className="text-[#f1c40f]">Un enseignement</span>{" "}
            <div className="inline-flex h-[41px] ps-2 bg-[#2c5177] text-white w-[530px]">
              trilingue
            </div>
            <br />
            <span className="text-[#f1c40f] leading-[1.3]">
              d’excellence de
            </span>{" "}
            la crèche au lycée
          </h1>
          <div className="grid grid-cols-2 place-content-center ">
            <img
              className="object-center object-contain w-[600px] -translate-x-0 lg:-translate-x-96 mt-4"
              src="/src/assets/BAC2023.jpg"
              alt="bac 2023 picture"
            />
            <div className="max-w-xl mt-20">
              <p className="md:text-md lg:text-xl text-[#00204d] font-montserrat">
                L’enseignement trilingue adopté par notre établissement aide nos
                élèves à développer une meilleure sensibilité communicative dans
                un environnement plurilingue et multiculturel. Jeanne D’Arc
                Trilingue School a toujours veillé à inculqué à ses apprenants,
                l’adhésion aux valeurs universelles et cultive en eux l’art de
                la cohabitation avec les citoyens du monde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enseignement;
