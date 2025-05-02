import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home/landingPage.tsx";
import Gallery from "./pages/Gallery/index.tsx";
import About from "./pages/About/index.tsx";
import MarketPlace from "./pages/MarketPlace.tsx";
import Partners from "./pages/Partners.tsx";
import Contact from "./pages/Contact/index.tsx";
import Blog from "./pages/Blog.tsx";
import Waitlist from "./pages/Waitlist/index.tsx";
import VideoDetails from "./pages/Gallery/VideoDetails.tsx";
import Archive from "./pages/Gallery/Archive.tsx";

const GeneralRoute = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<VideoDetails />} />
          <Route path="/gallery/archive" element={<Archive />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </Layout>
    </>
  );
};

export default GeneralRoute;
