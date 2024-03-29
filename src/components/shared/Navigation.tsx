import { cn } from "../../utils/cn";
import { NavLink } from "react-router-dom";

export function Navigation() {
  const menuItems = [
    {
      id: 1,
      slug: "home",
      path: "/",
    },
    {
      id: 2,
      slug: "Our School",
      path: "/school",
    },
    {
      id: 3,
      slug: "Learning",
      path: "/learning",
    },
    {
      id: 4,
      slug: "Admissions",
      path: "/admissions",
    },
    {
      id: 5,
      slug: "School Life",
      path: "/school-life",
    },
    {
      id: 6,
      slug: "News & Events",
      path: "/news",
    },
    {
      id: 7,
      slug: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <header>
      <nav className=" py-4 font-monstserrat">
        <div className="flex flex-wrap justify-around items-center mx-3 max-w-screen-2xl">
          <a href="/" className="flex items-center">
            <img src="/src/assets/logo-trilingue.svg" alt="trilingue logo" />
          </a>
          <div className="flex items-center">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-neutral-900 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "block py-2 pr-4 pl-3 rounded text-footer lg:p-0.5 font-medium",
                        {
                          "bg-[#cc1522] rounded-lg text-neutral-100 lg:py-0.5 lg:px-1.5":
                            isActive,
                        }
                      )
                    }
                  >
                    {item.slug}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-white text-xl font-medium rounded px-4 lg:px-2 py-2 lg:py-3.5 mr-2 bg-red-600 focus:outline-none hover:bg-red-500"
                >
                  Enroll Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
