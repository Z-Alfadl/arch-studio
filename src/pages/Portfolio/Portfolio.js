import { useState, useEffect } from "react";
import { portfolioProjects } from "../../utils/imageArrays";
import { PortfolioIndex } from "../../components/Portfolio Index";
import "./portfolio.css";
export const Portfolio = () => {
  console.log(portfolioProjects);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [source, setSource] = useState("mobile");
  useEffect(() => {
    const handleWindowResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    if (viewportWidth >= 992) {
      setSource("desktop");
    } else if (viewportWidth >= 576) {
      setSource("tablet");
    } else {
      setSource("mobile");
    }
  }, [viewportWidth]);
  return (
    <main>
      <div className="portfolio mx-auto">
        <div className="row">
          {portfolioProjects.map((project, index) => {
            return (
              <div
                className="col-12 col-lg-4 mb-3 text-center"
                key={index}
              >
                <div className="portfolio-container position-relative">
                  <div className="portfolio-image">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src={`./assets/portfolio/${source}/${project.src}`}
                        alt={project.project}
                      ></img>
                    <div className="position-absolute text-start portfolio-text">
                      <h3 className="heading-s">{project.project}</h3>
                      <p className="body">{project.date}</p>
                    </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}; //shits fucked, fix

/* <div className="container overflow-hidden">
                <div className="row  gy-4">
                    
                    {portfolioProjects.map((project, index) => {
                        return <PortfolioIndex key={index} project={project.project} date={project.date} src={project.src} />
                    })}
                </div>
            </div> */
