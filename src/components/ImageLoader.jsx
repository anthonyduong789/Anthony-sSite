import PropTypes from "prop-types";
import { useState, } from "react";

import { OrbitProgress } from "react-loading-indicators";
  const ImageLoader = ({ image, ImageWidth }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
      setIsLoading(false);
    };

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
  };
  export default ImageLoader;

  ImageLoader.propTypes = {
    image: PropTypes.string,
    ImageWidth: PropTypes.string,
  };