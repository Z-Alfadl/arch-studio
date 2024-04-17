import { LinkButton } from "../Links/LinkButton"

export const About = () => {
    return (
        <div className="about-img mx-auto d-flex" style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(./assets/home/desktop/image-small-team.jpg)`}}>
           <div className="position-relative about-text m-auto">
                <h2 className="heading-m about-title">Small team, <br></br> big ideas.</h2>
                <LinkButton to={"about"} text={"About Us"} look={"about-btn"}/>
           </div>
        </div>
    )
}