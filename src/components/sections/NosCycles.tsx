const NosCycles = () => {
  return (
    <section className="text-gray-600 font-montserrat font-bold">
      <div className="container mx-auto">
        <div className="flex justify-center items-center text-center w-full mb-10">
          <img alt="left" src="/src/assets/left-vect.svg" />
          <h1 className="mt-2 font-poppins text-title text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-4">
            Nos Cycles
          </h1>
          <img alt="right" src="/src/assets/right-vect.svg" />
        </div>
        <div className="lg:-m-6 mt-2 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-monstserrat">
          <div className="relative cursor-pointer item-has-image">
            <div className="absolute w-full h-full bg-[rgba(8,98,56,0.57)]">
              <h2 className="font-bold absolute bottom-0 mb-8 ml-4 text-left text-5xl text-white">
                Crèche Maternelle
              </h2>
            </div>
            <img
              alt="image-1"
              className="object-cover w-full h-full mix-blend-soft-light "
              src="/src/assets/faces/2S3A0926.png"
            />
          </div>

          <div className="relative cursor-pointer item-has-image">
            <div className="absolute w-full h-full bg-[rgb(137,38,45,0.57)]">
              <h2 className="font-bold absolute bottom-0 mb-8 ml-4 text-left text-5xl text-white">
                Primaire
              </h2>
            </div>
            <img
              alt="image-2"
              className="object-cover w-full h-full mix-blend-soft-light"
              src="/src/assets/faces/2S3A0939.png"
            />
          </div>
          <div className="relative cursor-pointer item-has-image">
            <div className="absolute w-full h-full bg-[rgb(14,107,135,0.57)]">
              <h2 className="font-bold absolute bottom-0 mb-8 ml-4 text-left text-5xl text-white">
                Collège
              </h2>
            </div>
            <img
              alt="image-3"
              className="object-cover w-full h-full mix-blend-soft-light "
              src="/src/assets/faces/3124323.png"
            />
          </div>
          <div className="relative cursor-pointer item-has-image">
            <div className="absolute w-full h-full bg-[rgb(67,36,129,0.57)] ">
              <h2 className="font-bold absolute bottom-0 mb-8 ml-4 text-left text-5xl text-white">
                Lycée
              </h2>
            </div>
            <img
              alt="image-4"
              className="object-cover w-full h-full mix-blend-soft-light"
              src="/src/assets/faces/2S3A0827.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosCycles;
