"use client";
import { CgWebsite,CgPerformance  } from "react-icons/cg";
import { IoApps } from "react-icons/io5";
import {FaMobileAlt,FaDatabase,FaServer  } from "react-icons/fa";
const ServiceContent = [
  {
    icon: <CgWebsite />,
    title: "Custom Website Development",
    descriptions: `Building fully customized websites from scratch, tailored to the client's specific needs and brand identity. This can range from simple informational sites to complex, dynamic web applications.`,
    animationDealy: "",
  },
  {
    icon:<FaMobileAlt />,
    title: " UX/UI Design",
    descriptions: `Designing user-friendly, visually appealing interfaces that enhance the user experience, ensuring that the website is both functional and engaging.`,
    animationDealy: "100",
  },
  {
    icon: <CgPerformance />,
    title: "Performance Optimization",
    descriptions: `Improving website speed, reducing page load times, and optimizing for performance by minimizing file sizes, leveraging caching, and utilizing content delivery networks (CDNs).`,
    animationDealy: "200",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    descriptions: `Designing and managing databases to ensure efficient storage and retrieval of data, as well as optimizing queries for faster response times and scalability.`,
    animationDealy: "300",
  },
  {
    icon: <FaServer />,
    title: "Web Hosting & Domain Management",
    descriptions: `Assisting clients with choosing the right hosting plan, setting up servers, managing domains, and ensuring that the website is always available online with minimal downtime.`,
    animationDealy: "400",
  },
  {
    icon: <IoApps />,
    title: "App Development",
    descriptions: `I create fast, secure, and user-friendly mobile and web apps with seamless integration, offering complete support from design to deployment for a smooth user experience across devices.`,
    animationDealy: "500",
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-dealay={val.animationDealy}
          >
            <div className="feature-box-01">
              <div>
                <div className="icon">
                  <i>{val.icon}</i>
                </div>
                <div className="feature-content">
                  <h5>{val.title}</h5>
                  <p>{val.descriptions}</p>
                </div>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
        {/* End .col */}
      </div>
    </>
  );
}
