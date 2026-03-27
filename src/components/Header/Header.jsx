// CSS
import "./Header.css";
// React
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
// Components
import Navbar from "../NavBar/NavBar";

const Header = () => {
  // Menu Animaded
  function MenuAnimaded() {
    const Line = document.querySelector(".Header_Menu-line");
    Line.classList.toggle("active");
  }

  return (
    <section className="Header">
      <article>
        <NavLink>
          <figure>
            <img src="/public/logo/Logo.png" alt="logo" />
          </figure>
          <p>
            Lotus<strong>Trips</strong>
          </p>
        </NavLink>
        <nav>
          <i onClick={MenuAnimaded}>
            <span className="Header_Menu-line"></span>
          </i>
        </nav>
      </article>
      <aside>
        <Navbar />
      </aside>
    </section>
  );
};

export default Header;
