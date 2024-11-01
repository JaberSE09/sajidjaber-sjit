import Slider from "@/components/slider/SliderFourAnimation";
import About from "@/components/about/AboutDarkAnimation";
import Service from "@/components/service/ServiceAnimation";
import Skills from "@/components/skills/SkillsAnimation";
import Portfolio from "@/components/portfolio/PortfolioAnimation";
import Testimonial from "@/components/testimonial/TestimonialAnimation";
import Blog from "@/components/blog/BlogAnimation";
import Contact from "@/components/contact/ContactAnimation";
import Footer from "@/components/footer/FooterAnimation";
import HeaderFluid from "@/components/header/HeaderFluid";

export const metadata = {
  title: "Portfolio - Sajid Jaber",
  description: "Portfolio - Sajid Jaber",
};
const HomeFour = () => {
  return (
    <div className="home-dark">
      <HeaderFluid />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section
        id="about"
        className="section about-section after-left-section scrollSpysection"
      >
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      <section
        id="services"
        className="section services-section gray-bg scrollSpysection"
      >
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Services</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}

      <section id="work" className="section gray-bg scrollSpysection">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      {/* <div className="section testimonial">
        <div className="container">
          <Testimonial />
        </div>
      </div> */}
      {/* End testimonial */}

      {/* Blog */}
      {/* <section id="blog" className="section gray-bg scrollSpysection">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Recent articles</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          <Blog />
        </div>
      </section> */}
      {/*  End Blog */}

      {/* Contact */}
      <section
        id="contact"
        className="section after-left-section scrollSpysection"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact us</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div
                  className="sm-title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h4 className="font-alt">Get in touch</h4>
                  <p>
                    Always available for freelancing if the right project comes
                    along, Feel free to contact me.
                  </p>
                </div>

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">Based In USA</span>
                </div>
                {/* End .col */}
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};

export default HomeFour;
