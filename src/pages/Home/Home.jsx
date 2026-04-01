//CSS
import "./Home.css";
//Components
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <section>
      <BannerSlider />
      <Cards />
    </section>
  );
};

export default Home;
