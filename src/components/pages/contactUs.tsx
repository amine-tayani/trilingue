const ContactUs = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;

export const ContactForm = () => {
  return (
    <div
      id="contact-us"
      className="overflow-hidden bg-[#f0f1f5] py-16 px-4 sm:px-6 lg:px-8 lg:pt-24"
    >
      <div className="flex flex-col max-w-3xl lg:max-w-full lg:px-20 justify-center mx-auto ">
        <div className="text-center">
          <h2 className="text-3xl uppercase font-medium font-oswald text-[#cc1522] sm:text-6xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-footer font-monstserrat font-medium">
            <span className="font-semibold text-xl lg:leading-9">
              TEXT YOUR QUESTION DIRECTLY TO OUR ADMISSIONS TEAM
            </span>
            <br />
            Whether you're looking for answers, would like to solve a problem,
            or just want to let us know how we did, you'll find many ways to
            contact us right here. We'll help you resolve your issues quickly
            and easily.
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
                  type="text"
                  id="name"
                  required
                  className="border-gray-300 block w-full rounded-md py-3 px-4 bg-slate-300"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-lg font-medium font-monstserrat text-title"
              >
                Subject
              </label>
              <div className="mt-1">
                <input
                  id="subject"
                  required
                  type="text"
                  className="border-gray-300 block w-full rounded-md py-3 px-4 bg-slate-300"
                />
              </div>
            </div>{" "}
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
                  className="border-gray-300 block w-full rounded-md py-3 px-4 bg-slate-300"
                />
              </div>
            </div>
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
                  className="border-gray-300 block w-full rounded-md py-3 px-4 bg-slate-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-lg font-medium font-monstserrat text-title"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={4}
                  className="border-gray-300 block w-full rounded-md py-3 px-4 bg-slate-300"
                />
              </div>
            </div>
            <div className="flex justify-start sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none font-monstserrat sm:text-lg text-white bg-[#cc1522]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
