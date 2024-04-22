import { useState } from "react";
import { Slides } from "./Slides";
import { LinkButton } from "../Links/LinkButton";
import { useViewPort } from "../../utils/Context";

export const Paramour = () => {
  const { viewport, source } = useViewPort();
  const heroSlides = [
    {
      id: 0,
      title: "Project Paramour",
      text: "Project made for an art museum near Southwest London, Project Paramour is a statement of bold, modern architecture.",
      image: "paramour.jpg",
    },
    {
      id: 1,
      title: "Seraph Station",
      text: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
      image: "seraph.jpg",
    },
    {
      id: 2,
      title: "Federal II Tower",
      text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
      image: "federal.jpg",
    },
    {
      id: 3,
      title: "Trinity Bank Tower",
      text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
      image: "trinity.jpg",
    },
  ];

  
  const [currentSlide, setCurrentSlide] = useState(heroSlides[0]);
  
  const handleClick = (e) => {
    // set the background image of the paramour div to the current slide
    if (currentSlide === 3) {
      setCurrentSlide(heroSlides[0]);
    } else {
      setCurrentSlide(heroSlides[e.target.value - 1]);
    }
  };
 
  

  return (
    <div className=" position-relative">
      <div
        className="paramour"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.01%), rgba(0, 0, 0, 40.0%) ),url(${process.env.PUBLIC_URL}/assets/home/${source}/image-hero-${currentSlide.image})`,
        }}
      >
        <div className="paramour-text">
          <h1 className="heading-l text-light">{currentSlide.title}</h1>
          <p className="body">{currentSlide.text}</p>
          <LinkButton
            to={"portfolio"}
            text={"See Our Portfolio"}
            look={"see-portfolio-btn"}
          />
        </div>
      </div>
      {
        viewport > 768 ? (
          <Slides
            slides={heroSlides}
            currentSlide={currentSlide}
            handleClick={handleClick}
          />
        ) : null
      }
    </div>
  );
};