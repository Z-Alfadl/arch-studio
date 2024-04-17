export const Column = ({index, feature}) => {
  return (
    <div className="col-12 col-md-4" key={index}>
      <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${process.env.PUBLIC_URL}/assets/portfolio/mobile/${feature.image})`}}>
        
      </div>
    </div>
  );
};

