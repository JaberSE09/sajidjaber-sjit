import Social from "../Social";

const Slider = () => {
  return (
    <>
      {/* Home Banner */}
      <section
        id="home"
        className="home-banner overlay overlay-65 scrollSpysection"
        style={{
          backgroundImage: `url(${"/img/banner/fullstack.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Adding padding-top to prevent overlap with the navbar */}
        <div className="h-screen flex flex-col justify-start items-center pt-24 md:pt-36">
          <div className="w-full max-w-3xl text-center px-6 md:px-12 bg-[#0E0F11]/80 rounded-lg py-8 md:py-10">
            <h6
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-base md:text-lg text-gray-200"
            >
              Hi There, I'm
            </h6>
            <h1
              className="font-alt text-3xl md:text-5xl font-semibold text-white mt-2 md:mt-4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Sajid Jaber
            </h1>
            <div className="flex flex-col md:flex-row justify-center mt-6 space-y-2 md:space-y-0 md:space-x-6">
              <span
                className="font-alt text-base md:text-lg text-gray-300"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                Full Stack Web Designer
              </span>
              <span
                className="font-alt text-base md:text-lg text-gray-300"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                App Developer
              </span>
              <span
                className="font-alt text-base md:text-lg text-gray-300"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="250"
              >
                UI/UX Designer
              </span>
            </div>
          </div>
        </div>

        <Social />
        {/* End social slide */}
      </section>
      {/* End Home Banner */}
    </>
  );
};

export default Slider;
