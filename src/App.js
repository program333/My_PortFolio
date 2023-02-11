import "./App.scss";

import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import About from "./container/about";
import Contact from "./container/contact";
import Home from "./container/home";
import Portfolio from "./container/portfolio";
import Skills from "./container/skills";
import Navbar from "./components/navBar";
import particlesConfig from "./helpers/particlesConfig";
import Theme from "./components/theme";
import Footer from "./footer";
import ScrollToTop from "./ScrollTop";
function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === "/";
  console.log(location);

  return (
    <div className="App">
      {/* particle js */}
      {renderParticleJsIfCurrentPageIsHomePage && (
        <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
      )}

      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>

      {/* main page content */}
      <div className="App__main-content-wrapper">
        <Theme />
        <ScrollToTop />
        <Routes>
          {/* create all routes */}
          
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
