// CSS
import "./NavBar.css";
// React
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="NavBar">
      <article>
        <nav className="NavBar_list-Links">
          <NavLink to="/">Ìnicio</NavLink>
          <NavLink to="/blog">Viagens</NavLink>
          <NavLink to="/discover">Descubra</NavLink>
          <NavLink to="/highlights">Destaques</NavLink>
          <NavLink to="/thisMonth">Deste Mes</NavLink>
        </nav>
        <figure>
          <img src="/public/logo/Lotus.png" alt="Logo" />
          <p>
            Lotus<strong>Trips</strong>
          </p>
        </figure>
      </article>
    </section>
  );
};

export default NavBar;
