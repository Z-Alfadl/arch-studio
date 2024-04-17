import { Link } from "react-router-dom";

export const Header = () => {
  
  return (
    <header className="">
      <div className="header-nav">
      <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <Link to={"/"}>
          <img src={'./assets/logo.svg'} alt="logo" className="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill="#1B1D23" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </button>
        <div className="collapse navbar-collapse " id="navbar-toggler">
          <ul className="navbar-nav ms-md-auto nav-list">
            <li className="nav-item">
              <Link to={"/portfolio"} className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    </header>
  );
};
