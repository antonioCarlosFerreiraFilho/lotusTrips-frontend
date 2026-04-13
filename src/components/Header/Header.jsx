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

    const Menu = document.querySelector(".NavBar");
    Menu.classList.toggle("NavBarJS");
  }

  // Menu List Links Animaded
  function menuLinks() {
    const Menu = document.querySelector(".NavBar");
    const Line = document.querySelector(".Header_Menu-line");
    const MenuListLinks = document.querySelector(".NavBar_list-Links");

    MenuListLinks.addEventListener("click", () => {
      if (Line.classList.contains("active")) {
        Line.classList.remove("active");
      }

      if (Menu.classList.contains("NavBarJS")) {
        Menu.classList.remove("NavBarJS");
      }
    });
  }

  // Header Scroll
  function headerScroll() {
    const Header = document.querySelector(".Header");
    const PositionIni = 10;

    window.addEventListener("scroll", () => {
      if (window.scrollY >= PositionIni) {
        Header.classList.add("HeaderJS");
      } else {
        Header.classList.remove("HeaderJS");
      }
    });
  }

  useEffect(() => {
    const startEvents = setTimeout(() => {
      menuLinks();
      headerScroll();
    }, 1000);

    return () => clearTimeout(startEvents);
  }, []);

  return (
    <section className="Header">
      <article>
        <NavLink>
          <figure>
            <img src="/public/logo/Lotus.png" alt="logo" />
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
        <span>
          <ul>
            <li>
              <NavLink to="/">Ìnicio</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Viagens</NavLink>
            </li>
            <li>
              <NavLink to="/discover">Descubra</NavLink>
            </li>
            <li>
              <NavLink to="/highlights">Destaques</NavLink>
            </li>
          </ul>
        </span>
      </article>
      <aside>
        <Navbar />
      </aside>
    </section>
  );
};

export default Header;
