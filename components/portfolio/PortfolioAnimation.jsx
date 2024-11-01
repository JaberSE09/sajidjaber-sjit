"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import { useEffect, useState } from "react";

const tabList = ["All", "Business", "Personal"];
const AllPortfolioContent = [
  {
    categories: ["Business", "All"],
    img: "/img/portfolio/jimmyjay.png",
    title: "Next Js Landing Page", 
    subTitle: "Jimmy Jay Limo",
    alterText: "Jimmy Jay Limo",
    githubLink: "https://github.com/JaberSE09/jimmycab",
    portfolioLink:
      "https://www.jimmyjayluxuryshuttleandlimoservice.com/",
  }
];

const PortfolioAnimation = () => {
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const [filteredItems, setFilteredItems] = useState(AllPortfolioContent);
  useEffect(() => {
    if (currentTab == "All") {
      setFilteredItems(AllPortfolioContent);
    } else {
      const filtered = [
        ...AllPortfolioContent.filter((elm) =>
          elm.categories.includes(currentTab)
        ),
      ];
      setFilteredItems(filtered);
    }
  }, [currentTab]);
  return (
    <div className="positon-relative">
      <div className="portfolio-filter-01">
        <div
          className="filter d-flex flex-wrap justify-content-start mr-3"
          style={{
            columnGap: "12px",
            cursor: "pointer",
            width: "fit-content",
            margin: "0px auto",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          {tabList.map((val, i) => (
            <div
              key={i}
              onClick={() => setCurrentTab(val)}
              className={`react-tabs__tab portfolio-tab ${
                currentTab == val ? "active" : ""
              } fs-6" key={i}`}
            >
              {val}
            </div>
          ))}
        </div>
        {/* End tablist */}

        <Gallery>
          <div className="portfolio-content row lightbox-gallery">
            {filteredItems.map((val, i) => (
              <div
                className="col-sm-6 col-lg-4 grid-item product"
                key={i}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="portfolio-box-01">
                  <div className="portfolio-img">
                    <div className="portfolio-info">
                      <h5>
                        <a
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {val.title}
                        </a>
                      </h5>
                      <span>{val.subTitle}</span>
                    </div>
                    {/* End .portfolio-info */}
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={336}
                      height={458}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={440}
                          height={600}
                          style={{ height: "fit-content" }}
                          src={val.img}
                          alt="Shoot"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      )}
                    </Item>
                    <a
                      href={val.portfolioLink}
                      className="portfolio-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ti-link"></span>
                    </a>
                    <a
                      href={val.githubLink}
                      className="github-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ti-github"></span>
                    </a>
                    {/* End .portfolio-icon */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End list wrapper */}
        </Gallery>
        {/* End tabpanel */}
      </div>
    </div>
  );
};

export default PortfolioAnimation;
