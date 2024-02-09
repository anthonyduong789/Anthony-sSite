import React from "react";
import FamilyBulliesCard from "./assets/FamilyBullies/FamilyBulliesCard.png";
import FamilyBullies1 from "./assets/FamilyBullies/FamilyBullies1.png";
import FamilyBullies2 from "./assets/FamilyBullies/FamilyBullies2.png";
import FamilyBullies3 from "./assets/FamilyBullies/FamilyBullies3.png";

import LearningSiteCardImage from "./assets/LearningSite/LearningSiteCardImage.png";
import LearningSiteCard from "./assets/LearningSite/LearningSite1.png";
import LearningSiteCard2 from "./assets/LearningSite/LearningSite2.png";

import HitchLogo from "./assets/Hitch/HitchLogo.png";
import Hitch1 from "./assets/Hitch/Hitch1.png";
import Hitch2 from "./assets/Hitch/Hitch2.png";
import Hitch3 from "./assets/Hitch/Hitch3.png";
import Hitch4 from "./assets/Hitch/Hitch4.png";
import Hitch5 from "./assets/Hitch/Hitch5.png";

// import Hitch from './assets/Hitch/Hitch1.png';
import { OrbitProgress } from "react-loading-indicators";
import { useState, useEffect } from "react";

import "./Portfolio.scss";

const CardImage = [FamilyBulliesCard, HitchLogo, LearningSiteCardImage];
const CardTitle = [
  "Business Site for a Frenchie Dog and Breeding Business",
  "Hitch",
  "Learning Site",
];
const CardDescription = [
  "Developed a web application for a French Bulldog breeding business\nin San Diego using Tailwind CSS, React, and Firebase.",
  "Mobile app designed for drivers to share their planned routes with potential riders. This platform enables passengers to request to join trips if the driver's destination aligns closely with their own desired route.",
  "Scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process. This Site includes such tools to improve memory  along with other tools as well. ",
];
const CardAnimationDelay = ["200", "300", "400"];

const GroupImages = [
  [FamilyBulliesCard, FamilyBullies3, FamilyBullies1, FamilyBullies2],
  [HitchLogo, Hitch1, Hitch2, Hitch3, Hitch4, Hitch5],
  [LearningSiteCardImage, LearningSiteCard, LearningSiteCard2],
];

const ModalName = ["Family Bullies", "Hitch", "Learning Site"];

const ModalDescription = [
  "Developed a full-stack web application for a French Bulldog breeding business in San Diego, leveraging Tailwind CSS, React, and Firebase. Designed an intuitive admin panel for efficient management of dog listings and integrated Google Analytics for enhanced user engagement insights. This project significantly streamlined business operations and improved online customer interaction.",
  "Mobile app designed for drivers to share their planned routes with potential riders. This platform enables passengers to request to join trips if the driver's destination aligns closely with their own desired route. This system offers drivers the opportunity to earn extra income by accommodating passengers on journeys they are already undertaking. My application used React-Native for the frontend and a Node.js as the backend with a SQL Database.",
  "Scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process whether it be for learning an instrument or language. Gap-Tech is a simple, easy-to-use web-app that allows users to customize their practice sessions with random pauses. In addition, has other useful tools to help with focus. ",
];

const Card = ({ image, title, description, handleButtonClick, index }) => {
  return (
    <div
      class=" bg-white border border-gray-200 rounded-lg  h-fit shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
      data-aos="zoom-in-up"
      data-aos-delay={`${index * 100 + 200}`}
    >
      <a href="#">
        <img
          class="rounded-t-lg w-full "
          src={image}
          alt=""
          // style={{ height: "200px"}}

          // style={{ minHeight: "200px" }}
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div
          onClick={handleButtonClick}
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer "
        >
          See More
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function PortFolio() {
  // const [modalActive, setModalActive] = useState(false);
  const [modalClass, setModalClass] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [animation, setAnimation] = useState(false);
  const [modalName, setModalName] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [link, setLink] = useState("");

  const [ImageWidth, setImageWidth] = useState("w-full lg:4/12");

  const animationOn = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 720) {
      setAnimation(false);
      setIsActive(false);
      document.body.classList.remove("no-scroll");
    } else {
      setAnimation(true);
      setModalClass("");
      setIsActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", animationOn); // Add this to handle window resize
    // Initial check in case the component is already in view when loaded
    animationOn();
    return () => {
      window.removeEventListener("resize", animationOn); // Remove this to handle window resize
    };
  }, []);

  const handleButtonClick = (group) => {
    setModalImages(GroupImages[group]);
    setModalName(ModalName[group]);
    setModalDescription(ModalDescription[group]);
    setIsActive(true);

    document.body.classList.add("no-scroll");
    setModalClass("one");
    if (group === 1) {
      setImageWidth("300px");
    } else {
      setImageWidth("");
    }
  };

  function ImageLoader({ image, ImageWidth }) {
    const [isLoading, setIsLoading] = useState(true);

    function handleImageLoad() {
      setIsLoading(false);
    }

    return (
      <div>
        {isLoading && (
          <OrbitProgress
            variant="track-disc"
            color="#599bdd"
            size="medium"
            text=""
            textColor=""
          />
        )}
        <img
          alt="Description"
          onLoad={handleImageLoad}
          className="m-0 mb-5 w-full lg:"
          src={image}
          // loading="lazy"
          style={{
            display: isLoading ? "none" : "block",
            maxWidth: { ImageWidth },
          }}
        />
      </div>
    );
  }

  const handleModalClick = () => {
    document.body.classList.remove("no-scroll");

    if (animation) {
      setModalClass(modalClass + " out"); // Adds 'out' class for animation or other purposes

      setTimeout(() => {
        setIsActive(false);
        setModalClass("");
      }, 1300);
    } else {
      setIsActive(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      {isActive ? (
        <div id="modal-container" className={modalClass}>
          <div class="modal-background">
            <div class="modal">
              <div class="exitdiv sticky top-0 w-full bg-white ">
                <div></div>
                <h1 class="ModalNameFont color-homeBackground justify-self-center">
                  {modalName}
                </h1>{" "}
                <div className="justify-self-end mr-5">
                  <h3
                    onClick={handleModalClick}
                    class=" close float-right cursor-pointer "
                  >
                    close
                  </h3>
                </div>
              </div>

              <div class="content">
                <div class="ScrollContainer">
                  <div class="w-full ">
                    <p
                      class="mb-3 font-normal text-gray-400 text-lg lg:text-2xl lg:ml-12"
                      style={{ maxWidth: "700px" }}
                    >
                      {modalDescription}
                    </p>
                  </div>

                  {modalImages.map((image) => (
                    <ImageLoader image={image} ImageWidth={ImageWidth} />
                  ))}

                  <div className="ScrollContainerBottom">dkljlkajflksj</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="container" id="projects">
        <div
          className="lg: max-w-xl px-12 mt-8"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <h2 class="text-4xl font-extrabold ">Past Projects</h2>
          <p class="my-4 text-lg text-gray-500">
            Here are some of the projects I have worked on in the past. Let me
            know if you would like to know more!
          </p>
        </div>
        <div className="flex flex-grow-1 row justify-center items-center">
          <div className="ResponsiveContainer md:px-7 justify-center">
            {CardImage.map((image, index) => {
              return (
                <Card
                  image={image}
                  title={CardTitle[index]}
                  description={CardDescription[index]}
                  handleButtonClick={() => {
                    handleButtonClick(index);
                  }}
                  index={index}

                  // data-aos-delay={CardAnimationDelay[index]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
