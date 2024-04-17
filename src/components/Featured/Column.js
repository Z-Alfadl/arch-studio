export const Column = ({index, feature}) => {
  return (
    <div className="col-12 col-md-4" key={index}>
      <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(./assets/portfolio/mobile/${feature.image})`}}>
        
      </div>
    </div>
  );
};

/* <div
      className="features col ms-auto position-relative"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(./assets/portfolio/mobile/${feature.image})`,
      }}
    >
      <p className="heading-xl position-absolute top-0 end-0 white">{number}</p>
      <div className="feature-title position-absolute bottom-0 m-5">
        <h3 className="heading-s">{feature.title}</h3>
        <a href="#" className="body project-link">
          View All Projects
        </a>
      </div>
    </div> */