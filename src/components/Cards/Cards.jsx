// CSS
import "./Cards.css";
// React Icons
import { IoCalendarOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";
// React
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <section className="Cards">
      <main>
        {/* Cards Article */}
        <article id="Cards_Title-Description-Pri">
          <aside id="Cards_title-Initial">
            <h1>
              Most <strong>Popular</strong> Tours
            </h1>
          </aside>
          <aside id="Cards_title-Description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              commodi reiciend loremis quam itaque,{" "}
              <strong>magni corrupti quidem cum</strong>, nam nulla minima,
              porro reprehenderit beatae suscipit dolores sit. Nihil dicta
              eligendi pariatur!
            </p>
          </aside>
        </article>
        <article>
          <NavLink>
            <figure>
              <img
                src="/public/Banner/Banner_01.jpg"
                alt="Card Image, Montanha"
              />
            </figure>
            <aside>
              <div className="Cards_Title">
                <p>FROM SKAFTAFELL</p>
                <h1>Rio De Janeíro</h1>
              </div>
              <ul className="Cards_Icons-Trips">
                <li>
                  <IoCalendarOutline className="Cards_Icon" />
                  <p>Dispinivel </p>
                  <p>
                    <strong>Todo Ano</strong>
                  </p>
                </li>
                <li>
                  <RiCustomerService2Fill className="Cards_Icon" />
                  <p>Atendimento</p>
                  <p>
                    <strong>24H dos os dias</strong>
                  </p>
                </li>
                <li>
                  <IoPricetagsOutline className="Cards_Icon" />
                  <p>Valores from </p>
                  <p>
                    <strong>1450.24$</strong>
                  </p>
                </li>
              </ul>
            </aside>
            <input type="submit" value={"SAIBA MAIS"} />
          </NavLink>

          <NavLink>
            <figure>
              <img
                src="/public/Banner/Banner_02.png"
                alt="Card Image, Montanha"
              />
            </figure>
            <aside>
              <div className="Cards_Title">
                <p>FROM SKAFTAFELL</p>
                <h1>Italia Roma</h1>
              </div>
              <ul className="Cards_Icons-Trips">
                <li>
                  <IoCalendarOutline className="Cards_Icon" />
                  <p>Dispinivel </p>
                  <p>
                    <strong>Todo Ano</strong>
                  </p>
                </li>
                <li>
                  <RiCustomerService2Fill className="Cards_Icon" />
                  <p>Atendimento</p>
                  <p>
                    <strong>24H dos os dias</strong>
                  </p>
                </li>
                <li>
                  <IoPricetagsOutline className="Cards_Icon" />
                  <p>Valores from </p>
                  <p>
                    <strong>1450.24$</strong>
                  </p>
                </li>
              </ul>
            </aside>
            <input type="submit" value={"SAIBA MAIS"} />
          </NavLink>

          <NavLink>
            <figure>
              <img
                src="/public/Banner/Banner_03.jpg"
                alt="Card Image, Montanha"
              />
            </figure>
            <aside>
              <div className="Cards_Title">
                <p>FROM SKAFTAFELL</p>
                <h1>França Paris</h1>
              </div>
              <ul className="Cards_Icons-Trips">
                <li>
                  <IoCalendarOutline className="Cards_Icon" />
                  <p>Dispinivel </p>
                  <p>
                    <strong>Todo Ano</strong>
                  </p>
                </li>
                <li>
                  <RiCustomerService2Fill className="Cards_Icon" />
                  <p>Atendimento</p>
                  <p>
                    <strong>24H dos os dias</strong>
                  </p>
                </li>
                <li>
                  <IoPricetagsOutline className="Cards_Icon" />
                  <p>Valores from </p>
                  <p>
                    <strong>1450.24$</strong>
                  </p>
                </li>
              </ul>
            </aside>
            <input type="submit" value={"SAIBA MAIS"} />
          </NavLink>

          <NavLink>
            <figure>
              <img
                src="/public/Banner/Banner_04.jpg"
                alt="Card Image, Montanha"
              />
            </figure>
            <aside>
              <div className="Cards_Title">
                <p>FROM SKAFTAFELL</p>
                <h1>Japão Tokio</h1>
              </div>
              <ul className="Cards_Icons-Trips">
                <li>
                  <IoCalendarOutline className="Cards_Icon" />
                  <p>Dispinivel </p>
                  <p>
                    <strong>Todo Ano</strong>
                  </p>
                </li>
                <li>
                  <RiCustomerService2Fill className="Cards_Icon" />
                  <p>Atendimento</p>
                  <p>
                    <strong>24H dos os dias</strong>
                  </p>
                </li>
                <li>
                  <IoPricetagsOutline className="Cards_Icon" />
                  <p>Valores from </p>
                  <p>
                    <strong>1450.24$</strong>
                  </p>
                </li>
              </ul>
            </aside>
            <input type="submit" value={"SAIBA MAIS"} />
          </NavLink>

          <NavLink>
            <figure>
              <img
                src="/public/Banner/Banner_07.jpg"
                alt="Card Image, Montanha"
              />
            </figure>
            <aside>
              <div className="Cards_Title">
                <p>FROM SKAFTAFELL</p>
                <h1>Alemanha Berlim</h1>
              </div>
              <ul className="Cards_Icons-Trips">
                <li>
                  <IoCalendarOutline className="Cards_Icon" />
                  <p>Dispinivel </p>
                  <p>
                    <strong>Todo Ano</strong>
                  </p>
                </li>
                <li>
                  <RiCustomerService2Fill className="Cards_Icon" />
                  <p>Atendimento</p>
                  <p>
                    <strong>24H dos os dias</strong>
                  </p>
                </li>
                <li>
                  <IoPricetagsOutline className="Cards_Icon" />
                  <p>Valores from </p>
                  <p>
                    <strong>1450.24$</strong>
                  </p>
                </li>
              </ul>
            </aside>
            <input type="submit" value={"SAIBA MAIS"} />
          </NavLink>

          <NavLink>
            <figure>
              <img
                src="/public/Banner/Banner_05.jpg"
                alt="Card Image, Montanha"
              />
            </figure>
            <aside>
              <div className="Cards_Title">
                <p>FROM SKAFTAFELL</p>
                <h1>China Pequim</h1>
              </div>
              <ul className="Cards_Icons-Trips">
                <li>
                  <IoCalendarOutline className="Cards_Icon" />
                  <p>Dispinivel </p>
                  <p>
                    <strong>Todo Ano</strong>
                  </p>
                </li>
                <li>
                  <RiCustomerService2Fill className="Cards_Icon" />
                  <p>Atendimento</p>
                  <p>
                    <strong>24H dos os dias</strong>
                  </p>
                </li>
                <li>
                  <IoPricetagsOutline className="Cards_Icon" />
                  <p>Valores from </p>
                  <p>
                    <strong>1450.24$</strong>
                  </p>
                </li>
              </ul>
            </aside>
            <input type="submit" value={"SAIBA MAIS"} />
          </NavLink>
        </article>
      </main>
    </section>
  );
};

export default Cards;
