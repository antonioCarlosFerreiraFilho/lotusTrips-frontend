//CSS
import "./CarouselBestTour.css";
//REACT
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
//REACT ICONS
import { FaStar } from "react-icons/fa";
//HOOKS
import { useScroll } from "../../hooks/useScroll";

const CarouselBestTour = () => {
  function ScrollCarrossel() {
    //const banner = document.getElementById("BannerCarousel");

    let counter = 0;
    const maxLength = 3;

    const box = document.getElementById("CarouselBestTour-Scroll");
    const cards = document.querySelectorAll(".CardCarousel");

    // Loop
    const nextBox = () => {
      counter++;

      cards[counter].classList.add("BannerCarousel");
      if (counter >= maxLength) {
        counter = 0;
      }

      box.style.transform = `translateX(${-counter * 25}%)`;
    };

    setInterval(() => {
      nextBox();
    }, 4000);
  }

  useEffect(() => {
    const Time = setTimeout(() => {
      ScrollCarrossel();
    }, 1000);

    return () => clearTimeout(Time);
  }, []);

  return (
    <main>
      <section className="CarouselBestTour">
        {/* Boxes */}
        <aside>
          {/* card-carrossel */}
          <article>
            {/* Card-Scrroll */}
            <nav id="CarouselBestTour-Scroll">
              {/* box-transition */}
              <NavLink
                id="CarouselBestTour-transition"
                className="CardCarousel"
              >
                <figure>
                  <img src="./Banner/Banner_03.jpg" alt="Paris, Françã" />
                  <div></div>
                </figure>
                <ul>
                  <li>
                    <h1>França</h1>
                  </li>
                  <li>
                    <h2>Paris</h2>
                  </li>
                  <li className="CarouselBestTour_Icons-stars">
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corrupti veniam incidunt ipsam aliquam molestias sint
                    </p>
                  </li>
                </ul>
              </NavLink>
              <NavLink
                id="CarouselBestTour-transition"
                className="CardCarousel"
              >
                <figure>
                  <img src="./Banner/Banner_02.png" alt="Paris, Françã" />
                  <div></div>
                </figure>
                <ul>
                  <li>
                    <h1>Italía</h1>
                  </li>
                  <li>
                    <h2>Roma</h2>
                  </li>
                  <li className="CarouselBestTour_Icons-stars">
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corrupti veniam incidunt ipsam aliquam molestias sint
                    </p>
                  </li>
                </ul>
              </NavLink>
              <NavLink
                id="CarouselBestTour-transition"
                className="CardCarousel"
              >
                <figure>
                  <img src="./Banner/Banner_04.jpg" alt="Paris, Françã" />
                  <div></div>
                </figure>
                <ul>
                  <li>
                    <h1>Japão</h1>
                  </li>
                  <li>
                    <h2>Tokyo</h2>
                  </li>
                  <li className="CarouselBestTour_Icons-stars">
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corrupti veniam incidunt ipsam aliquam molestias sint
                    </p>
                  </li>
                </ul>
              </NavLink>
              <NavLink
                id="CarouselBestTour-transition"
                className="CardCarousel"
              >
                <figure>
                  <img src="./Banner/Banner_01.jpg" alt="Paris, Françã" />
                  <div></div>
                </figure>
                <ul>
                  <li>
                    <h1>Brasil</h1>
                  </li>
                  <li>
                    <h2>Rio de Janeiro</h2>
                  </li>
                  <li className="CarouselBestTour_Icons-stars">
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                    <FaStar className="CarouselBestTour_Icons" />
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corrupti veniam incidunt ipsam aliquam molestias sint
                    </p>
                  </li>
                </ul>
              </NavLink>
            </nav>
          </article>
        </aside>
      </section>
    </main>
  );
};

export default CarouselBestTour;
