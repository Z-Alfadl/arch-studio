import { Leaders } from "../../components/Leaders/Leaders";
import { useViewPort } from "../../utils/Context";
import "./about.css";
export const About = () => {
    const {viewport, source} = useViewPort();
  return (
    <main>
      <section id="hero-section">
        <div id="about-hero">
          <img
            src={`${process.env.PUBLIC_URL}/assets/about/${source}/image-hero.jpg`}
            alt="About Hero"
            className="about-hero img-fluid"
          />
        </div>
        <div className="about ps-5" id="pro-team">
            {viewport > 576 ? <h1 className="heading-xl position-absolute">About</h1> : null}
            {viewport > 576 ? <hr /> : null}
          <h2 className="heading-m">Your team of professionals</h2>

          <p className="body">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </section>
      <section className="about" id="heritage">
        <div id="heritage-text">
        <hr />
            <h2 className="heading-m">Our <br />Heritage</h2>
            <p className="body">
              Founded in 2007, we started as a trio of architects. Our complimentary
              skills and relentless attention to detail turned Arch into one of the
              most sought after boutique firms in the country. Speciliazing in Urban
              Design allowed us to focus on creating exceptional structures that
              live in harmony with their surroundings. We consider every detail from
              every surrounding element to inform our designs. Our small team of
              world-class professionals provides input on every project.
            </p>
        </div>
        {viewport > 992 ? <img src={`${process.env.PUBLIC_URL}/assets/about/${source}/image-heritage.jpg`} alt="Heritage" className="heritage-img" /> : null}
      </section>
      <Leaders />
    </main>
  );
};
