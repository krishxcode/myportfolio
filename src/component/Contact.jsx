function Contact() {
  return (
    <div className="text-white px-7 py-6 md:px-20 md:py-10 h-full">
      <div className="top bg-zinc-900 w-full h-full md:h-[300px] px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-center ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="md:w-1/2 p-4 md:p-10 md:h-[250px] md:text-left "
        >
          <h1 className="text-2xl  md:text-5xl font-bold mb-4 md:mb-5">
            Lets work together on <br /> your next{" "}
            <span className="text-red-500 ">project</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 font-semibold md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nisi blanditiis quos ipsum obcaecati nulla consectetur eligendi
            numquam facere. Consectetur.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="md:w-1/2 mt-4 md:mt-0 pr-10 md:text-right pb-10"
        >
          <a
            href="#contact-form"
            className="px-6 py-2 md:px-6 md:py-3 bg-red-500 border-none text-white rounded-md font-semibold hover:bg-red-600 transition duration-300"
          >
            CONTACT
          </a>
        </div>
      </div>

      <div className="bottom mt-6 md:mt-10">
        {/* Additional content can be added here */}
        <div className="upper flex flex-col justify-center items-center text-center">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-xl md:text-2xl font-bold mb-6 tracking-widest text-zinc-500"
          >
            www.KrishxCodeWebsite.Com
          </h2>
          <ul
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="flex justify-center items-center text-center gap-5 "
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
