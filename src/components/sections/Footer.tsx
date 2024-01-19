import Socials from "../shared/Socials";

const Footer = () => {
  return (
    <div className="flex items-end w-full min-h-screen">
      <footer className="w-full text-gray-700 bg-footer">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center px-2 bg-white justify-center font-medium text-gray-900 title-font md:justify-start">
              <img src="/src/assets/logo-trilingue.svg" alt="trilingue logo" />
            </a>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="bg-fyellow px-2 w-28">
                <h2 className="mb-3 text-2xl font-medium text-white">
                  SITEMAP
                </h2>
              </div>

              <nav className="mb-10 list-none font-monstserrat text-white">
                <li className="mt-6">
                  <a className=" text-[13px]">Admissions</a>
                </li>
                <li className="mt-6">
                  <a className=" text-[13px]">Gallerie</a>
                </li>
                <li className="mt-6">
                  <a className=" text-[13px]">Recrutement</a>
                </li>
                <li className="mt-6">
                  <a className=" text-[13px]">Inscriptions</a>
                </li>
                <li className="mt-6">
                  <a className=" text-[13px]">School Policies</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2 ">
              <div className="bg-fyellow px-2 w-32">
                <h2 className="mb-3 text-2xl font-medium text-white ps-0.5">
                  CONTACT
                </h2>
              </div>
              <nav className="mb-10 list-none font-monstserrat text-white">
                <li className="mt-8">
                  <a className=" text-[13px]">
                    <aside className="flex items-start space-x-3">
                      <img
                        alt="footer address icon"
                        src="/src/assets/footer/address.svg"
                      />
                      <p>
                        Jeanne D’Arc International School
                        <br /> N°57 Boulevard Moulay Youssef, <br />
                        Anfa - Casablanca
                      </p>
                    </aside>
                  </a>
                </li>
                <li className="mt-12">
                  <a className="text-[13px]">
                    <aside className="flex space-x-3">
                      <img
                        alt="footer address icon"
                        src="/src/assets/footer/Phone.svg"
                      />
                      <p className="text-nowrap">
                        +212 522 22 01 70 - +212 642 56 23 28
                      </p>
                    </aside>
                  </a>
                </li>
                <li className="mt-12">
                  <a className=" text-[13px]">
                    <aside className="flex space-x-3">
                      <img
                        alt="footer address icon"
                        src="/src/assets/footer/Letter.svg"
                      />
                      <p>contact@jeannedarcinternational.ma</p>
                    </aside>
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/4 lg:mx-20 md:w-1/2">
              <div className="bg-fyellow px-2 w-[170px]">
                <h2 className="mb-3 text-2xl font-medium text-white">
                  SUIVEZ NOUS
                </h2>
              </div>
              <div className="mt-12">
                <Socials />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-fyellow">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-xs font-semibold text-gray-700 uppercase xl:text-center">
              © 2023 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
