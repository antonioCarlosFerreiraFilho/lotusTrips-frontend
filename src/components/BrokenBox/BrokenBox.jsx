// CSS
import "./BrokenBox.css";
// React icons
import { IoSearchSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
// React
import { NavLink } from "react-router-dom";

const BrokenBox = () => {
  return (
    <section className="BrokenBox">
      <main>
        {/* Form Search */}
        <article>
          <form>
            <label>
              <input type="text" placeholder="Buscar..." />
            </label>
            <div className="BrokenBox_BoxiconSearch">
              <IoSearchSharp />
            </div>
          </form>
        </article>
        {/* Categories */}
        <article>
          <h2>Categorias</h2>
          <nav>
            <NavLink>Gallery Classic</NavLink>
            <NavLink>Gallery Grid</NavLink>
            <NavLink>Gallery Masonry</NavLink>
            <NavLink>Gallery Alternative</NavLink>
            <NavLink>Gallery Paris</NavLink>
            <NavLink>Gallery Italia</NavLink>
            <NavLink>Gallery Grid</NavLink>
            <NavLink>Gallery Masonry</NavLink>
            <NavLink>Gallery Alternative</NavLink>
          </nav>
        </article>
        {/* Posts Recent */}
        <article>
          <h2>Postagens Recentes</h2>
          <aside>
            <NavLink>
              <figure>
                <img src="/Banner/Banner_01.jpg" alt="Recent Post" />
              </figure>
              <div>
                <h3>França Paris</h3>
                <h3>01 / 14 / 2025</h3>
              </div>
            </NavLink>
            <NavLink>
              <figure>
                <img src="/Banner/Banner_03.jpg" alt="Recent Post" />
              </figure>
              <div>
                <h3>França Paris</h3>
                <h3>01 / 14 / 2025</h3>
              </div>
            </NavLink>
            <NavLink>
              <figure>
                <img src="/Banner/Banner_04.jpg" alt="Recent Post" />
              </figure>
              <div>
                <h3>França Paris</h3>
                <h3>01 / 14 / 2025</h3>
              </div>
            </NavLink>
            <NavLink>
              <figure>
                <img src="/Banner/Banner_06.jpg" alt="Recent Post" />
              </figure>
              <div>
                <h3>França Paris</h3>
                <h3>01 / 14 / 2025</h3>
              </div>
            </NavLink>
          </aside>
        </article>
        {/* Profile */}
        <article className="BrokenBox_Profile">
          <h2>FOLLOW US</h2>
          <aside>
            <figure>
              <img src="/Profile/Me.jpeg" alt="Imagem de Perfil" />
            </figure>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                omnis dicta, quam nisi, harum voluptatem molestiae laboriosam
              </p>
            </div>
            <ul>
              <NavLink>
                <FaInstagram className="BrokenBox_Profile-icons" />
              </NavLink>
              <NavLink>
                <MdOutlineWhatsapp className="BrokenBox_Profile-icons" />
              </NavLink>
              <NavLink>
                <FaFacebookF className="BrokenBox_Profile-icons" />
              </NavLink>
              <NavLink>
                <FaTwitter className="BrokenBox_Profile-icons" />
              </NavLink>
            </ul>
          </aside>
        </article>
        {/* Call And Email */}
        <article className="BrokenBox_Call-And-Email">
          <ul>
            <li>
              <figure>
                <IoMdCall className="BrokenBox_Call-And-Email-icons" />
              </figure>
              <h5>PHONE</h5>
              <p>+351 932 015 787</p>
            </li>
            <li>
              <figure>
                <TfiEmail className="BrokenBox_Call-And-Email-icons" />
              </figure>
              <h5>EMAIL</h5>
              <p>LotusTrips.support@gmail.com</p>
            </li>
          </ul>
        </article>
      </main>
    </section>
  );
};

export default BrokenBox;
