import BasicModalContent from "../portfolio/BasicModalContent";
import HitchLogo from "../../assets/Hitch/HitchLogo.png";
import Hitch1 from "../../assets/Hitch/Hitch1.png";
import Hitch2 from "../../assets/Hitch/Hitch2.png";
import Hitch3 from "../../assets/Hitch/Hitch3.png";
import Hitch4 from "../../assets/Hitch/Hitch4.png";
import Hitch5 from "../../assets/Hitch/Hitch5.png";

const images = [HitchLogo, Hitch1, Hitch2, Hitch3, Hitch4, Hitch5];

const HitchModalContent = () => {
  const description =
    "Mobile app designed for drivers to share their planned routes with potential riders. This platform enables passengers to request to join trips if the driver's destination aligns closely with their own desired route. This system offers drivers the opportunity to earn extra income by accommodating passengers on journeys they are already undertaking. My application used React-Native for the frontend and a Node.js as the backend with a SQL Database.";
  return (
    <>
      <BasicModalContent
        modalDescription={description}
        modalImages={images}
        ImageWidth={"300px"}
        q
      />
    </>
  );
};

export default HitchModalContent;
