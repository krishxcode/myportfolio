function Project() {
  return (
    <div className="h-full md:h-[70vh] w-full px-6 md:px-20 py-6 md:py-10">
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-10">
        <div className="text-white">
          <h2
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="text-4xl md:text-5xl font-semibold mb-4 md:mb-0"
          >
            Featured Projects
          </h2>
          <hr className="bg-red-500 h-1 border-none w-24 mx-auto md:mx-0" />
        </div>
        <button
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          className="mt-4 md:mt-0 px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-600 transition duration-300"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { src: "/image/pic1.png", title: "The Vintage" },
          { src: "/image/pic2.png", title: "The Vintage" },
          { src: "/image/pic4.png", title: "The Vintage" },
        ].map((project, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="bg-zinc-900 p-5 rounded-md hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-zinc-800"
          >
            <img
              className="h-[200px] md:h-[250px] w-full rounded-md mb-2 object-cover"
              src={project.src}
              alt={project.title}
            />
            <h3 className="text-white font-bold text-xl mb-2">
              {project.title}
            </h3>
            <a className="text-red-500 hover:underline" href="#">
              Know More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
