import { portfolioProjects } from "../../utils/imageArrays";
import "./portfolio.css";
import { useViewPort } from "../../utils/Context";
export const Portfolio = () => {
  const { source} = useViewPort();
  
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
                        src={`${process.env.PUBLIC_URL}/assets/portfolio/${source}/${project.src}`}
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
};
