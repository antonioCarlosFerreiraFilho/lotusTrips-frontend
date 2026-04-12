//CSS
import "./Home.css";
//Components
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import RelatedTour from "../../components/RelatedTour/RelatedTour";
import Cards from "../../components/Cards/Cards";
import CallTour from "../../components/CallTour/CallTour";

const Home = () => {
  return (
    <section>
      <BannerSlider />
      <RelatedTour />
      <Cards />
      <CallTour />
    </section>
  );
};

export default Home;
