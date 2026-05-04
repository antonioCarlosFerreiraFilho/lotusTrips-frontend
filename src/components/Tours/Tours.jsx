//CSS
import "./Tours.css";
//REACT
import { NavLink } from "react-router-dom";
//REACT ICONS
import { IoCalendarSharp } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";

const Tours = () => {
  return (
    <section className="Tours">
      <main>
        <article className="Tours_Card">
          <NavLink>
            <figure>
              <img src="/Banner/Banner_02.png" alt="Paisagem, Paris" />
            </figure>
            <h1>Holiday, Resort</h1>
            <h2>Las Terrazas Resort</h2>
            <div>
              <IoCalendarSharp className="Tours_Card_icon" />
              <p>Janeiro 14, 2026</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              voluptates enim velit dolorum porro sequi corrupti possimus magnam
              quis! Voluptatem vitae maxime possimus sed. Quidem laboriosam
              incidunt soluta repellat voluptate.
            </p>
            <ul>
              <li>
                <IoIosArrowDropright className="Tours_Card_icon-arrow" />
              </li>
              <li>
                <p>Saiba Mais.....</p>
              </li>
            </ul>
          </NavLink>
          <NavLink>
            <figure>
              <img src="/Banner/Banner_03.jpg" alt="Paisagem, Paris" />
            </figure>
            <h1>Holiday, Resort</h1>
            <h2>Las Terrazas Resort</h2>
            <div>
              <IoCalendarSharp className="Tours_Card_icon" />
              <p>Janeiro 14, 2026</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              voluptates enim velit dolorum porro sequi corrupti possimus magnam
              quis! Voluptatem vitae maxime possimus sed. Quidem laboriosam
              incidunt soluta repellat voluptate.
            </p>
            <ul>
              <li>
                <IoIosArrowDropright className="Tours_Card_icon-arrow" />
              </li>
              <li>
                <p>Saiba Mais.....</p>
              </li>
            </ul>
          </NavLink>
          <NavLink>
            <figure>
              <img src="/Banner/Banner_06.jpg" alt="Paisagem, Paris" />
            </figure>
            <h1>Holiday, Resort</h1>
            <h2>Las Terrazas Resort</h2>
            <div>
              <IoCalendarSharp className="Tours_Card_icon" />
              <p>Janeiro 14, 2026</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              voluptates enim velit dolorum porro sequi corrupti possimus magnam
              quis! Voluptatem vitae maxime possimus sed. Quidem laboriosam
              incidunt soluta repellat voluptate.
            </p>
            <ul>
              <li>
                <IoIosArrowDropright className="Tours_Card_icon-arrow" />
              </li>
              <li>
                <p>Saiba Mais.....</p>
              </li>
            </ul>
          </NavLink>
          <NavLink>
            <figure>
              <img src="/Banner/Banner_05.jpg" alt="Paisagem, Paris" />
            </figure>
            <h1>Holiday, Resort</h1>
            <h2>Las Terrazas Resort</h2>
            <div>
              <IoCalendarSharp className="Tours_Card_icon" />
              <p>Janeiro 14, 2026</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              voluptates enim velit dolorum porro sequi corrupti possimus magnam
              quis! Voluptatem vitae maxime possimus sed. Quidem laboriosam
              incidunt soluta repellat voluptate.
            </p>
            <ul>
              <li>
                <IoIosArrowDropright className="Tours_Card_icon-arrow" />
              </li>
              <li>
                <p>Saiba Mais.....</p>
              </li>
            </ul>
          </NavLink>
        </article>
      </main>
      <aside>
        <div>
          <h4>1</h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>4</h4>
        </div>
      </aside>
    </section>
  );
};

export default Tours;
