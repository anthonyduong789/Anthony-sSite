import ModalTemplate from "../portfolio/ModalTemplate";
import BasicModalContent from "../portfolio/BasicModalContent";
import LearningSiteCardImage from "../../assets/LearningSite/LearningSiteCardImage.png";
import LearningSiteCard from "../../assets/LearningSite/LearningSite1.png";
import LearningSiteCard2 from "../../assets/LearningSite/LearningSite2.png";

const images = [LearningSiteCardImage, LearningSiteCard, LearningSiteCard2];

const LearningModal = () => {
  const description =
    "Scientific studies have shown that incorporating random 10-second pauses into practice sessions can significantly speed up the learning process whether it be for learning an instrument or language. Gap-Tech is a simple, easy-to-use web-app that allows users to customize their practice sessions with random pauses. In addition, has other useful tools to help with focus.";
  return (
    <>
      <BasicModalContent
        modalDescription={description}
        modalImages={images}
        ImageWidth={"w-1/2"}
        q
      />
    </>
  );
};

export default LearningModal;
