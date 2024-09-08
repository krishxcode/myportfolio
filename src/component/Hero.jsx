import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"
import website from "/image/coder.svg";
const Hero = () => {
  return (
    <div className="container  px-6 md:px-6 py-10 md:py-20 mx-auto h-full md:h-[80vh] flex flex-col lg:flex-row items-center mb-0 md:mb-0 md:gap-0 gap-20">
      {/* Left Side: Text Content */}
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 order-2 md:order-1 
       
       
       flex flex-col items-center justify-between text-center md:text-left p-2
       
       "
      >
        <div className="w-full gap-3 ">
          <h1 className="text-3xl md:text-2xl lg:text-3xl font-semibold text-white dark:text-white mb-5">
            Hello, I’m Kishan
            <br />
            <span className="text-white text-5xl md:text-7xl lg:text-8xl font-bold">
              Web{" "}
              <span className="text-red-600">
                <Typewriter
                  options={{
                    strings: ["Designer", "Developer",],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-500 text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            beatae error laborum ab amet sunt recusandae? Reiciendis natus
            perspiciatis optio.
          </p>
          <button className="mt-6 px-5 py-3 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            <Link to="/resume">Download CV</Link>
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        className="w-full lg:w-1/2 flex items-center justify-center order-1 md:order-2"
      >
        <img
          className="w-full md:w-[600px] lg:w-[800px] md:h-[600px] lg:h-[800px] h-auto"
          src={website}
          alt="Web Designer Illustration"
        />
      </div>
    </div>
  );
};

export default Hero;
