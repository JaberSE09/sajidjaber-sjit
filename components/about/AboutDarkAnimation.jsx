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
              Full Stack Developer &amp; Founder of{" "}
              <span className="color-theme">SJ IT LLC</span> — Milwaukee, WI
            </h5>
            <p>
              7+ years building modern web apps, SaaS platforms, and digital
              solutions for 50+ clients across industries. I specialize in
              Next.js 15, React, TypeScript, and AI-powered applications —
              delivering fast, scalable products with clean code and real
              business impact.
            </p>
            <div className="row about-list">
              <div className="col-sm-6">
                <ul>
                  <li>
                    <span>Experience</span>
                    <strong>7+ Years</strong>
                  </li>
                  <li>
                    <span>Clients Served</span>
                    <strong>50+</strong>
                  </li>
                  <li>
                    <span>Projects Delivered</span>
                    <strong>50+</strong>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul>
                  <li>
                    <span>Location</span>
                    <strong>Milwaukee, WI</strong>
                  </li>
                  <li>
                    <span>Availability</span>
                    <strong>Open to Work</strong>
                  </li>
                  <li>
                    <span>Email</span>
                    <strong>info@mysjit.com</strong>
                  </li>
                </ul>
              </div>
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <Link
                className="px-btn px-btn-theme"
                href="/resume/resume.pdf"
                target="_blank"
                download
              >
                Download CV
              </Link>
              <Link
                className="px-btn px-btn-white ml-3"
                href="https://meetings-na2.hubspot.com/sajid-jaber"
                target="_blank"
                style={{ marginLeft: "12px" }}
              >
                Book a Call
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
