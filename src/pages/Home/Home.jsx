//CSS
import "./Home.css";
//Components
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import Cards from "../../components/Cards/Cards";
import CallTour from "../../components/CallTour/CallTour";

const Home = () => {
  return (
    <section>
      <BannerSlider />
      <Cards />
      <CallTour />
    </section>
  );
};

export default Home;
