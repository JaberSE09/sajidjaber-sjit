"use client";
const Skills = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2013-2017</span>
              <h6>
                Computer Science - B.S.
                <br /> Web Developnment - Minor{" "}
              </h6>
              <p>University of Wisconsin-Whitewater</p>
            </li>

            <li>
              <span className="dark-bg">2022-2022</span>
              <h6>Web Development - Certificate</h6>
              <p>University of Wisconsin-Madison</p>
            </li>

            <li>
              <span className="dark-bg">2023-2024</span>
              <h6>Softwre Engineer - Bootcamp</h6>
              <p>SpringBoard</p>
            </li>
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2010-2012</span>
              <h6>Software Engineer</h6>
              <p>Furious Design Institute</p>
            </li>

            <li>
              <span className="theme-bg">2010-2012</span>
              <h6>Android Developer</h6>
              <p>Ketlimte Design Ltd.</p>
            </li>

            <li>
              <span className="theme-bg">2010-2012</span>
              <h6>Rubby Developer</h6>
              <p>Randara Institute Academy</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 ml-auto my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>React js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>WordPress</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 75 + "%" }}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Vue js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 86 + "%" }}
                >
                  <span>86%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>UI/UX</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 88 + "%" }}
                >
                  <span>88%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>CSS3</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
