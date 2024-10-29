import Social from "../Social";

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay overlay-65 scrollSpysection "
        style={{
          backgroundImage: `url(${"/img/banner/fullstack.jpg"})`,
          backgroundSize: "contain",
        }}
      >

        {/* End particle animation */}
        <div >
          <div className="row full-screen">
            <div className="col-lg-12" >
              <div className="hb-typo text-center bg-[#0E0F11] pt-10">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hi There, I'm
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Sajid Jaber
                </h1>
                <div>
                  <div className="nav ht-list justify-content-center">
                    <span
                      className="font-alt"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="150"
                    >
                     Full Stack Web Designer
                    </span>{" "}
                    <span
                      className="font-alt"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      App Developer
                    </span>
                    <span
                      className="font-alt"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="250"
                    >
                      UI/UX Designer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}


        <Social />
        {/* End social slide  */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
