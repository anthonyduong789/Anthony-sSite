import HomePage from "./HomePage";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import StickyNavBar from "./StickyNavBar";
import meImage from "./assets/me.png";

function App() {
  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    duration: 500,
    // easing: "ease-in-out",
    easing: "ease-in-out-cubic",
    once: true,
    mirror: true,
    // anchorPlacement: "bottom-bottom",
  });

  return (
    <>
      <div className="">
        <HomePage src={meImage} />
        <div>
          <StickyNavBar />
          <AboutMe />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
