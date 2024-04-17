import { useViewPort } from "../../utils/Context";

export const Welcome = () => {
  const {viewport} = useViewPort();
  return (
    <div className="position-relative welcome">
      {viewport >= 576 ? (
        <h1 className="heading-xl position-relative welcome-banner">Welcome</h1>
      ) : null}
      <div className="d-flex flex-column  welcome-paragraph">
        <h2 className="heading-m">Welcome to Arch Studio</h2>
        <p className="body flex-fill text-left welcome-text">
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
          <br />
          <br />
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
          <br />
          <br />
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>
     {viewport > 992 ? <img
        src="./assets/home/desktop/image-welcome.jpg"
        alt="welcome"
        className="welcome-img position-absolute img-fluid"
      /> : null}
    </div>
  );
};

//work on css for welcome section
//add media queries for welcome section
//base on mobile first, then standardize quries for tablet and desktop
// ensure img is displayed properly on desktop