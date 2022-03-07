import "./NavbarElements.css";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.png";

const Navbar = ({ toggle, setOpenTable }) => {
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
                <button
                  className="buttonNavbar"
                  onClick={() => setOpenTable("standings")}
                >
                  Liga CronBowl
                </button>
              </li>
              <li>
                <button
                  className="buttonNavbar"
                  onClick={() => setOpenTable("teams")}
                >
                  Equipos
                </button>
              </li>
              <li>
                <button className="buttonNavbar">Ligas Anteriores</button>
              </li>
              <li>
                <button className="buttonNavbar">Estadisticas</button>
              </li>
              <li>
                <button className="buttonNavbar">Salon de la Fama</button>
              </li>
            </ul>
          </div>
          <button className="side buttonNavbar" onClick={toggle}>
            <FaBars />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
