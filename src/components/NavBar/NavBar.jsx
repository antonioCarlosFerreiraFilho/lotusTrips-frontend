// CSS
import "./NavBar.css";
// React
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="NavBar">
      <article>
        <nav>
          <NavLink to="/">Ìnicio</NavLink>
          <NavLink to="/trips">Viagens</NavLink>
          <NavLink to="/discover">Descubra</NavLink>
          <NavLink to="/highlights">Destaques</NavLink>
          <NavLink to="/thisMonth">Deste Mes</NavLink>
        </nav>
        <figure>
          <img src="/public/logo/Logo.png" alt="Logo" />
        </figure>
      </article>
    </section>
  );
};

export default NavBar;
