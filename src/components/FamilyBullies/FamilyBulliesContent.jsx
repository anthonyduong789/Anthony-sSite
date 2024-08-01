import BasicModalContent from "../portfolio/BasicModalContent";
import FamilyBulliesCard from "../../assets/FamilyBullies/FamilyBulliesCard.png";
import FamilyBullies1 from "../../assets/FamilyBullies/FamilyBullies1.png";
import FamilyBullies2 from "../../assets/FamilyBullies/FamilyBullies2.png";
import FamilyBullies3 from "../../assets/FamilyBullies/FamilyBullies3.png";

const images = [
  FamilyBulliesCard,
  FamilyBullies3,
  FamilyBullies1,
  FamilyBullies2,
];

const FamilyBulliesContent = () => {
  const description =
    "Developed a full-stack web application for a French Bulldog breeding business in San Diego, leveraging Tailwind CSS, React, and Firebase. Designed an intuitive admin panel for efficient management of dog listings and integrated Google Analytics for enhanced user engagement insights. This project significantly streamlined business operations and improved online customer interaction.";
  return (
    <>
      <BasicModalContent
        modalDescription={description}
        modalImages={images}
        ImageWidth={""}
        q
      />
    </>
  );
};

export default FamilyBulliesContent;
