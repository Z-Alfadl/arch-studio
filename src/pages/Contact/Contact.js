import { useState } from "react";
import { useViewPort } from "../../utils/Context";
import { GMap } from "../../components/Maps/GMap";
import { LeafMap } from "../../components/Maps/LeafMap";
import "./contact.css";
import { ContactForm } from "./ContactForm";
export const Contact = () => {
  const { viewport, source } = useViewPort();
  const [center, setCenter] = useState([
     34.307826092925396,
    -90.59790380643479,
  ]);
  const [gCenter, setGCenter] = useState({lat: 34.307826092925396, lng: -90.59790380643479});

  const handleClick = (e) => {
    let coordinates = e.target.value.split(",")
    setCenter(coordinates);
    setGCenter({lat: parseFloat(coordinates[0]), lng: parseFloat(coordinates[1])});
  };
  return (
    <main>
      <section id="hero-section" >
        <div id="contact-hero">
          <img
            src={`${process.env.PUBLIC_URL}/assets/contact/${source}/image-hero.jpg`}
            alt="Contact Hero"
            className="contact-hero img-fluid"
          />
        </div>
        <div className="contact ps-5" id="contact-call">
          {viewport > 576 ? (
            <h1 className="heading-xl position-absolute">Contact</h1>
          ) : null}
          {viewport > 576 ? <hr /> : null}
          <h2 className="heading-m" id="contact-call-h">
            Tell us about your project
          </h2>

          <p className="body">
            We'd love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </section>
      <section id="contact-details">
        <hr />
        <div className="d-lg-flex justify-content-between">
          <h2 className="heading-l">
            Contact <br /> Details
          </h2>
          <div className="office-location d-md-flex flex-lg-column justify-content-between">
            <div>
              <h3 className="heading-sm">Main Office</h3>
              <ul className="body">
                <li>
                  <strong>Mail:</strong> archone@mail.com
                </li>
                <li>
                  <strong>Address:</strong> 435 Union Ave, Knoxville Tennessee
                </li>
                <li>
                  <strong>Phone:</strong> 123-456-3451
                </li>
              </ul>
            </div>
            <button
              id="main-office"
              className="body view-on-map"
              value="35.964444501002475, -83.92014290990828"
              onClick={handleClick}
            >
              View on Map
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="20"
                className="right-icon ms-4"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" stroke="currentColor" />
                </g>
              </svg>
            </button>
          </div>
          <div className="office-location d-md-flex flex-lg-column justify-content-between">
            <div>
              <h3 className="heading-sm">Office II</h3>
              <ul className="body">
                <li>
                  <strong>Email:</strong> archtwo@mail.com
                </li>
                <li>
                  <strong>Address:</strong> 10901 Seagoville Rd TX
                </li>
                <li>
                  <strong>Phone:</strong> 832-123-4321
                </li>
              </ul>
            </div>
            <button
              id="second-office"
              className="body view-on-map"
              value="32.70533113620866, -96.6384445594109"
              onClick={handleClick}
            >
              View on Map
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="20"
                className="right-icon ms-4"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" stroke="currentColor" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section id="map-section">
        {process.env.REACT_APP_GOOGLE_MAP_KEY === undefined ? <LeafMap center={center} />
        : <GMap center={gCenter} />
        }
      </section>
      <section id="contact-form" className="d-lg-flex justify-content-between">
        <h2 className="heading-l">
          Connect
          <br /> with us
        </h2>
        <ContactForm />
      </section>
    </main>
  );
};
