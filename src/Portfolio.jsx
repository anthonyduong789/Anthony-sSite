import {  useDispatch } from "react-redux";
import {
  showModal,
} from "./reducers/userInteraction";

import LearningModal from "./components/LearningSite/LearningModal";
import HitchModalContent from "./components/Hitch/HitchModalContent";
import FamilyBulliesContent from "./components/FamilyBullies/FamilyBulliesContent";
import FamilyBulliesCard from "./assets/FamilyBullies/FamilyBulliesCard.png";
import LearningSiteCardImage from "./assets/LearningSite/LearningSiteCardImage.png";

import HitchLogo from "./assets/Hitch/HitchLogo.png";

import SolutionsUnifiedLogo from "./assets/SolutionsUnified/SolutionsUnifiedLogo.png";

// import Hitch from './assets/Hitch/Hitch1.png';
import { useState, } from "react";
import "./Portfolio.scss";
import ModalTemplate from "./components/portfolio/ModalTemplate";
import { Card } from "./components/Card";

const CardInfo = {
  "Solutions Unified (Internship)": {
    cardImage: SolutionsUnifiedLogo,
    title: "Solutions Unified (Internship)",
    description:
      "Work with a start-up that focuses on streamlining Medical-Device manufacturing. While I was there, I was able to work on their Environment Site and build out admin controls for their Members page and Products Page.",
    modalTitle: "Solutions Unified",
    // modalContent: <FamilyBulliesContent />,
  },
  "Business Site for a Frenchie Dog and Breeding Business": {
    cardImage: FamilyBulliesCard,
    title: "Business Site for a Frenchie Dog and Breeding Business",
    description:
      "Developed a web application for a French Bulldog breeding business\nin San Diego using Tailwind CSS, React, and Firebase.",

    modalTitle: "Family Bullies",
    modalContent: <FamilyBulliesContent />,
  },
  Hitch: {
    cardImage: HitchLogo,
    title: "Hitch",
    description:
      "Mobile app designed for drivers to share their planned routes with potential riders. This platform enables passengers to request to join trips if the driver's destination aligns closely with their own desired route.",
    modalTitle: "Hitch",
    modalContent: <HitchModalContent />,
  },

  "Learning Site": {
    cardImage: LearningSiteCardImage,
    title: "Learning Site",
    description:
      "Scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process. This Site includes such tools to improve memory  along with other tools as well.",
    modalTitle: "Learning Site",
    modalContent: <LearningModal />,
  },
};

export default function PortFolio() {
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const dispatch = useDispatch();

  const OpenModal = (key) => {
    setModalTitle(CardInfo[key].modalTitle);
    setModalContent(CardInfo[key].modalContent);
    dispatch(showModal());
   
  };



  return (
    <section className="w-full min-h-screen flex items-center justify-center">
    {/* where the modal will be displayed */}
      <ModalTemplate modalName={modalTitle}>{modalContent}</ModalTemplate>

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
            {Object.keys(CardInfo).map((title, index) => {
              return (
                <Card
                  key={index}
                  image={CardInfo[title].cardImage}
                  title={title}
                  description={CardInfo[title].description}
                  handleButtonClick={() => {
                    OpenModal(title);
                  }}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

