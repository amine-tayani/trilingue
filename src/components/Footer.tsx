import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="flex items-end w-full min-h-screen">
      <footer className="w-full text-gray-700 bg-[#103157]">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <a className="flex items-center px-2 bg-white justify-center font-medium text-gray-900 title-font md:justify-start">
              <img src="/src/assets/logo-trilingue.svg" alt="trilingue logo" />
            </a>
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="bg-yellow-500 px-2 w-28">
                <h2 className="mb-3 text-2xl font-medium text-white title-fon">
                  SITEMAP
                </h2>
              </div>

              <nav className="mb-10 list-none">
                <li className="mt-6">
                  <a className="text-white font-monstserrat text-xs font-medium">
                    Admissions
                  </a>
                </li>
                <li className="mt-6">
                  <a className="text-white font-monstserrat text-xs font-medium">
                    Gallerie
                  </a>
                </li>
                <li className="mt-6">
                  <a className="text-white font-monstserrat text-xs font-medium">
                    Recrutement
                  </a>
                </li>
                <li className="mt-6">
                  <a className="text-white font-monstserrat text-xs font-medium">
                    Inscriptions
                  </a>
                </li>
                <li className="mt-6">
                  <a className="text-white font-monstserrat text-xs font-medium">
                    School Policies
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="bg-yellow-500 px-2 w-28">
                <h2 className="mb-3 text-2xl font-medium text-white">
                  SUPPORT
                </h2>
              </div>
              <nav className="mb-10 list-none">
                <li className="mt-6">
                  <a className="text-white font-monstserrat text-xs font-medium">
                    Contact Support
                  </a>
                </li>
                <li className="mt-6">
                  <a className="text-white font-monstserrat text-xs font-medium">
                    Help Resources
                  </a>
                </li>
                <li className="mt-6">
                  <a className="text-white font-monstserrat text-xs font-medium">
                    Release Updates
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <div className="bg-yellow-500 px-2 w-44">
                <h2 className="mb-3 text-2xl font-medium text-white">
                  SUIVEZ NOUS
                </h2>
              </div>
              <Socials />
            </div>
          </div>
        </div>
        <div className="bg-yellow-500">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-xs font-semibold text-gray-700 uppercase font-monstserrat xl:text-center">
              © 2020 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
