const Admission = () => {
  return (
    <div>
      <AdmissionForm />
    </div>
  );
};

export default Admission;

export const AdmissionForm = () => {
  return (
    <div
      id="contact-us"
      className="overflow-hidden bg-[#f0f1f5] py-16 px-4 sm:px-6 lg:px-8 lg:pt-24"
    >
      <div className="flex flex-col max-w-3xl lg:max-w-full lg:px-20 justify-center mx-auto ">
        <div className="text-center">
          <div className="flex items-center md:max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase font-medium font-oswald text-[#cc1522] ">
              become part of the team at jeanne d'arc british school
            </h2>
          </div>

          <p className="mt-4 md:text-lg leading-6 text-footer font-monstserrat font-medium">
            Jeanne D'Arc British School are proud to say that we recruit
            teaching stuff with a passion for lifelong learning and the desire
            to share that passion with students, colleagues and the community.
            Our teaching staff come to us from a wide range of countries and
            boast between them a vast range of skills and experiences.
          </p>
        </div>
        <div className="mt-12">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 mx-4 lg:mx-20">
            <div className="sm:col-span-1">
              <label
                htmlFor="name"
                className="block text-lg font-medium font-monstserrat text-title"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  name="name"
                  type="text"
                  id="name"
                  autoComplete="organization"
                  required
                  className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm bg-slate-400"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-lg font-medium font-monstserrat text-title"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  id="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm bg-slate-400"
                />
              </div>
            </div>{" "}
            <div className="sm:col-span-1">
              <label
                htmlFor="phone"
                className="block text-lg font-medium font-monstserrat text-title"
              >
                Phone
              </label>
              <div className="mt-1">
                <input
                  name="phone"
                  type="text"
                  id="phone"
                  autoComplete="phone"
                  required
                  className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm bg-slate-400"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="position"
                className="block text-lg font-medium font-monstserrat text-title"
              >
                Position
              </label>
              <div className="mt-1">
                <input
                  name="Position"
                  id="Position"
                  required
                  type="Position"
                  autoComplete="Position"
                  className="border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm bg-slate-400"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="resume"
                className="block text-lg font-medium font-monstserrat text-title"
              >
                Upload resume
                <div className="flex flex-col items-center justify-center border-gray-300 w-full rounded-md py-3 px-4 bg-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 mb-2 text-gray-100"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>

                  <p className="font-monstserrat text-sm text-gray-100 font-medium">
                    Upload a file
                  </p>
                  <input type="file" id="resume" className="hidden" />
                </div>
              </label>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="resume"
                className="block text-lg font-medium font-monstserrat text-title"
              >
                Any Other Documents to Upload
                <div className="flex flex-col items-center justify-center border-gray-300 w-full rounded-md py-3 px-4 bg-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 mb-2 text-gray-100"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>

                  <p className="font-monstserrat text-sm text-gray-100 font-medium">
                    Upload a file
                  </p>
                  <input type="file" id="resume" className="hidden" />
                </div>
              </label>
            </div>
            <div className="flex justify-start sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none font-monstserrat sm:text-lg text-white bg-[#cc1522]"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
