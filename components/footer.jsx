const Footer = () => {
  return (
    <footer className="footer bg-white relative pt-1">
      <div className="px-10 w-full">
        <div className="sm:flex sm:mt-8 w-full">
          <div className="mt8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                About us
              </span>
              <span className=" text-black rounded-md text-sm ">
                We are a team of nurses, doctors, technologists and executives
                dedicated to help nurses find jobs that they love.
              </span>
              <span className="text-black  rounded-md text-sm ">
                All copy rights Reserved &copy; 2020 - Health Explore
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Sitemap
              </span>
              <span>
                <a
                  href="#"
                  className="text-black rounded-md text-sm hover:text-blue-500"
                >
                  Nurses
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-black rounded-md text-sm hover:text-blue-500"
                >
                  Employers
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-black rounded-md text-sm hover:text-blue-500"
                >
                  Social networking
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-black rounded-md text-sm hover:text-blue-500"
                >
                  Jobs
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Privacy
              </span>
              <span>
                <a
                  href="#"
                  className="text-black rounded-md text-sm hover:text-blue-500"
                >
                  Terms of use
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-black rounded-md text-sm hover:text-blue-500"
                >
                  Privacy policy
                </a>
              </span>
              <span>
                <a
                  href="#"
                  className="text-black rounded-md text-sm hover:text-blue-500"
                >
                  Cookie policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
