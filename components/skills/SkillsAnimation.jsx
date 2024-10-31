"use client";
import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row justify-content-center">
        {/* Education Section */}
        <div className="col-lg-4 my-3" data-aos="fade-right" data-aos-duration="1200">
          <div className="sm-title text-center">
            <h4 className="font-alt">Education</h4>
          </div>
          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2013-2017</span>
              <h6>
                Computer Science - B.S.
                <br /> Web Development - Minor
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
              <h6>Software Engineer - Bootcamp</h6>
              <p>SpringBoard</p>
            </li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="col-lg-4 my-3" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
          <div className="sm-title text-center">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2017-2017</span>
              <h6>Web Developer - Intern</h6>
              <p>Marketing Metrics</p>
            </li>
            <li>
              <span className="theme-bg">2016-2018</span>
              <h6>Web Technician</h6>
              <p>Cudahy PC</p>
            </li>
            <li>
              <span className="theme-bg">2018-Present</span>
              <h6>Web Developer</h6>
              <p>Freelancer</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Section in a dedicated 5-column row */}
      <div className="row mt-4 color-white">
        {/* Front-End Development */}
        <div className="col-lg-2 col-sm-6 my-3 text-center dark-bg p-10 m-2" data-aos="fade-up" data-aos-duration="1200">
          <div className="sm-title">
            <h6 className="font-weight-bold">Front-End Development</h6>
          </div>
          <ul className="skill-list text-center">
            <li>Next.js</li>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3 (SASS, CSS Modules)</li>
            <li>Responsive Design</li>
            <li>Tailwind CSS, Bootstrap</li>
          </ul>
        </div>

        {/* Back-End Development */}
        <div className="col-lg-2 col-sm-6 my-3 text-center dark-bg p-10 m-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          <div className="sm-title">
            <h6 className="font-weight-bold">Back-End Development</h6>
          </div>
          <ul className="skill-list text-center">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs & GraphQL</li>
            <li>Authentication (JWT, OAuth)</li>
            <li>SSR & SSG with Next.js</li>
          </ul>
        </div>

        {/* Database Management */}
        <div className="col-lg-2 col-sm-6 my-3 text-center dark-bg p-10 m-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          <div className="sm-title">
            <h6 className="font-weight-bold">Database Management</h6>
          </div>
          <ul className="skill-list text-center">
            <li>SQL/MySQL, PostgreSQL</li>
            <li>NoSQL (MongoDB, Firebase)</li>
            <li>ORM tools (Prisma, Sequelize)</li>
          </ul>
        </div>

        {/* DevOps & Deployment */}
        <div className="col-lg-2 col-sm-6 my-3 text-center dark-bg p-10 m-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <div className="sm-title">
            <h6 className="font-weight-bold">DevOps & Deployment</h6>
          </div>
          <ul className="skill-list text-center">
            <li>Git/GitHub</li>
            <li>CI/CD Pipelines</li>
            <li>Docker & Kubernetes</li>
            <li>Cloud Services (AWS, Vercel, DigitalOcean)</li>
            <li>Linux/Unix systems</li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="col-lg-2 col-sm-6 my-3 text-center dark-bg p-10 m-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
          <div className="sm-title">
            <h6 className="font-weight-bold">Other Skills</h6>
          </div>
          <ul className="skill-list text-left">
            <li>Agile/Scrum</li>
            <li>Unit & Integration Testing (Jest, Cypress)</li>
            <li>Collaboration & Communication</li>
            <li>Project Management (JIRA, Trello)</li>
            <li>Problem-Solving & Analytical Skills</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
