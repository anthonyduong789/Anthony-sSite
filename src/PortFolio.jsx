import PropTypes from "prop-types";
import React from "react";
import FamilyBulliesCard from "./assets/FamilyBullies/FamilyBulliesCard.png";
import FamilyBullies1 from "./assets/FamilyBullies/FamilyBullies1.png";
import FamilyBullies2 from "./assets/FamilyBullies/FamilyBullies2.png";
import FamilyBullies3 from "./assets/FamilyBullies/FamilyBullies3.png";
import { XIcon } from "@primer/octicons-react";
import ImageLoader from "./components/ImageLoader";

import LearningSiteCardImage from "./assets/LearningSite/LearningSiteCardImage.png";
import LearningSiteCard from "./assets/LearningSite/LearningSite1.png";
import LearningSiteCard2 from "./assets/LearningSite/LearningSite2.png";

import HitchLogo from "./assets/Hitch/HitchLogo.png";
import Hitch1 from "./assets/Hitch/Hitch1.png";
import Hitch2 from "./assets/Hitch/Hitch2.png";
import Hitch3 from "./assets/Hitch/Hitch3.png";
import Hitch4 from "./assets/Hitch/Hitch4.png";
import Hitch5 from "./assets/Hitch/Hitch5.png";

import SolutionsUnifiedLogo from "./assets/SolutionsUnified/SolutionsUnifiedLogo.png";

// import Hitch from './assets/Hitch/Hitch1.png';
import { OrbitProgress } from "react-loading-indicators";
import { useState, useEffect } from "react";

import "./Portfolio.scss";

const CardImage = [
  SolutionsUnifiedLogo,
  FamilyBulliesCard,
  HitchLogo,
  LearningSiteCardImage,
];
const CardTitle = [
 `Solutions Unified (Internship)`,
  "Business Site for a Frenchie Dog and Breeding Business",
  "Hitch",
  "Learning Site",
];
const CardDescription = [
  `
  Work with a start-up that focuses on streamlining Medical-Device manufacturing. While I was there, I was 
  able to work on their Environment Site and build out admin controls for their Members page and Products Page. 
  `,

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

const SolutionsUnifiedDescription = `
  Example of things worked out in Solutions Unified.
  1. Products Page: This page was built to help manage all Products for an organization. 
  the main utility of the this page was to help manage the products and their respective information and versioning
  as well as provide a DMR. A (DMR) or device master record  contains all of the information and specifications 
  needed to produce a medical device from start to finish.
`;

const ModalDescription = [
  SolutionsUnifiedDescription,
  "Developed a full-stack web application for a French Bulldog breeding business in San Diego, leveraging Tailwind CSS, React, and Firebase. Designed an intuitive admin panel for efficient management of dog listings and integrated Google Analytics for enhanced user engagement insights. This project significantly streamlined business operations and improved online customer interaction.",
  "Mobile app designed for drivers to share their planned routes with potential riders. This platform enables passengers to request to join trips if the driver's destination aligns closely with their own desired route. This system offers drivers the opportunity to earn extra income by accommodating passengers on journeys they are already undertaking. My application used React-Native for the frontend and a Node.js as the backend with a SQL Database.",
  "Scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process whether it be for learning an instrument or language. Gap-Tech is a simple, easy-to-use web-app that allows users to customize their practice sessions with random pauses. In addition, has other useful tools to help with focus. ",
];

const Card = ({ image, title, description, handleButtonClick, index }) => {
  return (
    <div
      className="cursor-pointer bg-white border border-gray-200 rounded-lg  h-fit shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
      onClick={handleButtonClick}
    >
      <img
        className="rounded-t-lg w-full "
        src={image}
        alt=""
        // style={{ height: "200px"}}

        // style={{ minHeight: "200px" }}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div
          onClick={handleButtonClick}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer "
        >
          See More
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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

  const handleModalClose = () => {
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
          <div className="modal-background bg-gray-500 bg-opacity-75 transition-opacity">
            <div className="modal ">
              <div className="bg-gray-100 text-neutral-700 font-medium md:text-lg p-3 border-b border-neutral-300 flex sm:text-md">
                {modalName}
                <button
                  type="button"
                  className="ml-auto"
                  onClick={handleModalClose}
                >
                  <XIcon size={24} />
                </button>
              </div>

              <div className="content">
                <div className="ScrollContainer">
                  <div className="w-full p-8">
                    <p
                      className="mb-1 font-normal text-black text-lg lg:text-2xl lg:ml-12"
                      style={{ maxWidth: "700px" }}
                    >
                      {modalDescription}
                    </p>
                  </div>

                  {modalImages.map((image, index) => (
                    <ImageLoader
                      key={index}
                      image={image}
                      ImageWidth={ImageWidth}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="container" id="projects">
        <div className="lg: max-w-xl px-12 mt-8">
          <h2 className="text-4xl font-extrabold ">
            Past Projects & Experience
          </h2>
          <p className="my-4 text-lg text-gray-500">
            Here are some of the projects I have worked on in the past. Let me
            know if you would like to know more!
          </p>
        </div>
        <div className="flex flex-grow-1 row justify-center items-center">
          <div className="ResponsiveContainer md:px-7 justify-center">
            {CardImage.map((image, index) => {
              return (
                <Card
                  key={index}
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

Card.prototype = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  handleButtonClick: PropTypes.func,
  index: PropTypes.number,
};
