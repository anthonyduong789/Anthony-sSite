import PropTypes from "prop-types";
import ImageLoader from "../ImageLoader";



const BasicModalContent = ({modalDescription, modalImages, ImageWidth}) => {
  return (
    <>
      <div className="w-full p-8">
        <p
          className="mb-1 font-normal text-black text-lg lg:text-2xl lg:ml-12"
          style={{ maxWidth: "700px" }}
        >
          {modalDescription}
        </p>
        
      </div>

      {modalImages.map((image, index) => (
        <ImageLoader key={index} image={image} ImageWidth={ImageWidth} />
      ))}
    </>
  );
};

export default BasicModalContent;

BasicModalContent.propTypes = {
  modalDescription: PropTypes.string.isRequired,
  modalImages: PropTypes.array,
  ImageWidth: PropTypes.string,
};