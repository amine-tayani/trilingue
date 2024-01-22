const Raisons = () => {
  return (
    <section className="font-montserrat mb-10">
      <div className="mx-auto">
        <div className="flex justify-center items-center text-center w-full">
          <img alt="left" src="/src/assets/left-vect.svg" />
          <h1 className="mt-2 font-poppins text-title text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            6 RAISONS
            <br /> POUR NOUS CHOISIR
          </h1>
          <img alt="right" src="/src/assets/right-vect.svg" />
        </div>
      </div>
      <div className="relative flex flex-col justify-center w-full lg:h-[900px]">
        <img
          alt="image"
          src="/src/assets/Forme.jpg"
          className="object-center object-contain"
        />
        <div className="w-full hidden absolute pt-72 lg:grid lg:grid-cols-2 lg:place-items-center lg:gap-20 font-monstserrat font-bold">
          <div className="space-y-16">
            <div className="h-24 bg-[url('/src/assets/bg/white.svg')] max-w-xs ">
              <div className="flex items-center space-x-4 py-4 px-4 ">
                <img alt="image" src="/src/assets/icons/004-anniversary.svg" />
                <p className="text-center text-balance text-title">
                  100 ans d’histoire et d’expertise en éducation
                </p>
              </div>
            </div>
            <div className="h-24 bg-[url('/src/assets/bg/red.svg')] max-w-xs -ml-28">
              <div className="flex items-center space-x-4 py-4 px-4 ">
                <img
                  alt="image"
                  src="/src/assets/icons/002-project-management.svg"
                />
                <p className="text-white text-center">
                  Une pédagogie bienveillante et innovative
                </p>
              </div>
            </div>
            <div className="h-24 bg-[url('/src/assets/bg/cyan.svg')] max-w-xs ">
              <div className="flex items-center space-x-4 py-4 px-4 ">
                <h1 className="font-oswald text-5xl text-white">XXI</h1>
                <p className="text-white text-center text-balance">
                  Une éducation du 21ème siècle alliant excellence et
                  épanouissem
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-16">
            <div className="h-24 bg-[url('/src/assets/bg/orange.svg')] max-w-xs ">
              <div className="flex items-center space-x-4 py-4 px-4 ">
                <img alt="image" src="/src/assets/icons/003-values.svg" />
                <p className="text-title text-center text-balance">
                  Des valeurs humaines au coeur de l’éducation
                </p>
              </div>
            </div>
            <div className="h-24 bg-[url('/src/assets/bg/green.svg')] max-w-xs ml-32 pb-10">
              <div className="flex items-center space-x-4 py-4 px-4 ">
                <img alt="image" src="/src/assets/icons/005-target.svg" />
                <p className="text-title text-center text-balance">
                  Un enseignement personnalisée et centre autour de l’enfant
                </p>
              </div>
            </div>
            <div className="h-24 bg-[url('/src/assets/bg/pink.svg')] max-w-xs ">
              <div className="flex items-center space-x-4 py-4 px-4 ">
                <img alt="image" src="/src/assets/icons/001-earth-globe.svg" />
                <p className="text-white text-center text-balance ">
                  Une ouverture au monde: Un programme d’excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Raisons;
