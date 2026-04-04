// CSS
import "./CallTour.css";
// React
import { NavLink } from "react-router-dom";

const CallTour = () => {
  return (
    <section className="CallTour">
      <figure>
        <article>
          <aside>
            <h2>The Most Awarded</h2>
            <p>Adventure</p>
            <h3>The Company in Europe</h3>
          </aside>
          <nav>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quidem dolorum quia ad qui unde officiis est delectus aliquam,
              facere maxime quasi, vero quod nihil ut ipsum! Ea, repellat
              dolores?
            </p>
            <NavLink>Ligue e Planejaremos isso juntos!.</NavLink>
          </nav>
        </article>
      </figure>
    </section>
  );
};

export default CallTour;
