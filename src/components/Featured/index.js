import { LinkButton } from "../Links/LinkButton";
import { useViewPort } from "../../utils/Context";
export const Featured = () => {
  const { viewport, source } = useViewPort();
  const featured = [
    {
      project: "del-sol",
      title: "Project Del Sol",
      image: "image-del-sol.jpg",
    },
    {
      project: "228b",
      title: "228B Tower",
      image: "image-228b.jpg",
    },
    {
      project: "prototype",
      title: "Le Prototype",
      image: "image-prototype.jpg",
    },
  ];
  return (
    <div className="feature mx-auto">
      <div className="feature-heading d-flex justify-content-between">
        <h2 className="heading-m">Featured</h2>
        {source !== "mobile" ? (
          <LinkButton to="/portfolio" text="See All" look="featured-btn" />
        ) : null}
      </div>

      <div className="row mx-auto">
        {featured.map((feature, index) => {
          return (
            <div
              className="col-12 col-lg-4 mb-3 position-relative  text-center"
              key={index}
            >
              <div className="feature-img">
                <a href="/portfolio" className="body project-link">

                {viewport > 576 ? (
                  <p className=" position-absolute feature-index">
                    {index + 1}
                  </p>
                ) : null}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/portfolio/${source}/${feature.image}`}
                  alt={feature.title}
                  className="img-fluid"
                />
                <div className="position-absolute text-start feature-text">
                  <h3>{feature.title}</h3>
                  View All Projects
                </div>
                </a>
              </div>
            </div>
          );
        })}
        {source === "mobile" ? (
          <LinkButton to="/portfolio" text="See All" look="see-portfolio-btn" />
        ) : null}
      </div>
    </div>
  );
};
