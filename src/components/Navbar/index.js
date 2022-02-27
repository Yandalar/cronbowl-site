import "./NavbarElements.css";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";

const Navbar = ({ toggle, openClose }) => {
  return (
    <>
      <div className="navContainer">
        <div className="topnav">
          <div className="logoContainer">
            <a className="logo" href="#home">
              <img src={logo} alt="logo" />
              <h1>CRON Bowl</h1>
            </a>
          </div>
          <div className="menuContainer">
            <ul className="navMenu">
              <li>
                <button onClick={openClose}>Liga CronBowl</button>
              </li>
              <li>
                <button>Equipos</button>
              </li>
              <li>
                <button>Ligas Anteriores</button>
              </li>
              <li>
                <button>Estadisticas</button>
              </li>
              <li>
                <button>Salon de la Fama</button>
              </li>
            </ul>
          </div>
          <button className="side" onClick={toggle}>
            <FaBars />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
