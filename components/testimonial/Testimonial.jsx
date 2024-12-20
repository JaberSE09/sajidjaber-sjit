"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `  I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Nancy Byers",
      rating: "5.0",
    },
    {
      imageName: "team-2",
      desc: `  I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Jara Afsari",
      rating: "4.8",
    },
    {
      imageName: "team-4",
      desc: `  I design and develop services for customers of all sizes,
      specializing in creating stylish, modern websites, web services
      and online stores.`,
      reviewerName: "Janiaya kiaram",
      rating: "5.0",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div className="testmonial-box media" key={i}>
            <div className="avatar">
              <Image
                width={638}
                height={690}
                style={{ height: "fit-content" }}
                src={`/img/testimonial/${val.imageName}.jpg`}
                alt="review comments"
              />
            </div>
            {/* End avatar */}
            <div className="testmonial-text media-body">
              <p>{val.desc}</p>
              <div className="testmonial-info">
                <h6>{val.reviewerName}</h6>
                <div className="rating-value">
                  <i className="ti-star"></i>
                  <span>{val.rating}</span>
                </div>
              </div>
            </div>
            {/* End testimonial-text */}
          </div>
        ))}
      </Slider>
    </>
  );
}
