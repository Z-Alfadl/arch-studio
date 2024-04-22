import { LinkButton } from "../Links/LinkButton";
import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="m-auto">
      <div className="d-flex flex-column flex-sm-row align-items-center footer-container">
      <div className="logo-container d-flex flex-wrap align-items-center">
      <img className="logo mx-auto" src={`${process.env.PUBLIC_URL}/assets/logo-white.svg`} alt="logo" />
      </div>
      <nav className="footer-nav-container navbar navbar-expand-sm">

        <div className="container-fluid">
          <ul style={{listStyle:"none"}} className="navbar-nav body gap-4">
            <li className="nav-item"><Link to={"/portfolio"}>Portfolio</Link></li>
            <li className="nav-item"><Link to={"/about"}>About Us</Link></li>
            <li className="nav-item"><Link to={"/contact"}>Contact</Link></li>
          </ul>
          
        </div>
      </nav>
      <LinkButton to={"portfolio"} text={"See Our Portfolio"} look={"see-portfolio-btn"} />
        </div>
    </footer>
  );
};