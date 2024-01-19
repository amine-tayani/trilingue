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
        <div className="flex flex-wrap -m-4 font-monstserrat">
          <div className=" lg:w-1/4 md:w-1/2 bg-gradient-to-b from-gray-600 to-slate-400 ">
            <div className="relative flex flex-col items-center text-center mix-blend-overlay">
              <img
                alt="right"
                className="w-full h-full object-cover object-center"
                src="/src/assets/faces/2S3A0926.png"
              />
              <div className="w-full absolute bottom-10 p-4">
                <h2 className="font-bold text-left text-5xl text-white">
                  Crèche Maternelle
                </h2>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/4 md:w-1/2 ">
            <div className="relative flex flex-col items-center text-center">
              <img
                alt="right"
                className="w-full h-full object-cover object-center"
                src="/src/assets/faces/2S3A0939.png"
              />
              <div className="w-full absolute bottom-10 p-4">
                <h2 className="font-bold text-left text-5xl text-white">
                  Primaire
                </h2>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/4 md:w-1/2 bg-gradient-to-b from-gray-600 to-slate-400 ">
            <div className="relative flex flex-col items-center text-center mix-blend-overlay">
              <img
                alt="right"
                className="w-full h-full object-cover object-center"
                src="/src/assets/faces/3124323.png"
              />
              <div className="w-full absolute bottom-10 p-4">
                <h2 className="font-bold text-left text-5xl text-white">
                  Collège
                </h2>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/4 md:w-1/2 bg-gradient-to-b from-gray-600 to-slate-400 ">
            <div className="relative flex flex-col items-center text-center mix-blend-overlay">
              <img
                alt="right"
                className="w-full h-full object-cover object-center"
                src="/src/assets/faces/2S3A0827.png"
              />
              <div className="w-full absolute bottom-10 p-4">
                <h2 className="font-bold text-left text-5xl text-white">
                  Lycée
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosCycles;
