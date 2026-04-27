//CSS
import "./Blog.css";
//Components
import BannerTours from "../../components/BannerTours/BannerTours";
import Tours from "../../components/Tours/Tours";
import BrokenBox from "../../components/BrokenBox/BrokenBox";

const Blog = () => {
  return (
    <section className="Blog">
      <article className="Blog_BannerTours">
        <BannerTours />
      </article>
      <article className="Blog_Tours-BrokenBox">
        <div>
          <aside className="Blog_Tours">
            <Tours />
          </aside>
          <aside className="Blog_BrokenBox">
            <BrokenBox />
          </aside>
        </div>
      </article>
    </section>
  );
};

export default Blog;
