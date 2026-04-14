//CSS
import "./Home.css";
//Components
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import CarouselBestTour from "../../components/CarouselBestTour/CarouselBestTour";
import Cards from "../../components/Cards/Cards";
import CallTour from "../../components/CallTour/CallTour";

const Home = () => {
  return (
    <section>
      {/* HOME */}
      <BannerSlider />
      <Cards />
      <CarouselBestTour />
      <CallTour />
    </section>
  );
};

export default Home;
