//react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
// Components
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
