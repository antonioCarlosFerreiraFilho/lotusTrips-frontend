//CSS
import "./BannerTours.css";
//React
import { NavLink } from "react-router-dom";

const BannerTours = () => {
  return (
    <section className="BannerTours">
      <figure>
        <aside>
          <NavLink>Inìcio /</NavLink>
          <NavLink>Viagens</NavLink>
        </aside>
      </figure>
    </section>
  );
};

export default BannerTours;
