import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './HomePage'
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import PortFolio from './PortFolio'
import AboutMe from './AboutMe'
import Contact from './Contact'
import StickyNavBar from './StickyNavBar'


function App() {
  const [count, setCount] = useState(0)


  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    duration: 500,
    easing: "ease-in-out",
    // once: true,
    // mirror: true,
    // anchorPlacement: "bottom-bottom",
  });

  return (
    <>
      <div className="">
        <HomePage />

        <div>
          <StickyNavBar />
          <AboutMe />
          <PortFolio />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App
