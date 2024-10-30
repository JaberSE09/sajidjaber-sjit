import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="img-box dark-img-box">
            <Image
              width={900}
              height={1099}
              style={{ height: "fit-content" }}
              src="/img/about/skills.jpg"
              alt="skills"
            />
          </div>
        </div>

        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-dealay="100"
        >
          <div className="typo-box about-me">
            <h3>Sajid Jaber</h3>
            <h5>
              A Lead <span className="color-theme">Next JS Full Stack Developer</span> based in{" "}
              <span className="color-theme">USA</span>
            </h5>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>
            <div className="row about-list">
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <Link
                className="px-btn px-btn-theme"
                href="/resume/resume.pdf"
                download
              >
                Download CV
              </Link>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
