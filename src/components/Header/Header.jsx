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

  useEffect(() => {
    const startEvents = setTimeout(() => {
      menuLinks();
    }, 1000);

    return () => clearTimeout(startEvents);
  }, []);

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
