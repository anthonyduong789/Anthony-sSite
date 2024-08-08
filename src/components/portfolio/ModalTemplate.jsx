import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { XIcon } from "@primer/octicons-react";
import "../../Portfolio";
import {
  closeModalWithAnimation,
  defaultState,
} from "../../reducers/userInteraction";

import PropTypes from "prop-types";

/**
 * Renders a modal template.
 *
 * @param {string} modalName - The name of the modal.
 * @returns {JSX.Element} The rendered modal template.
 */
const ModalTemplate = ({ modalName, children }) => {
  const [animation, setAnimation] = useState(false);
  const modalContainer = useSelector(
    (state) => state.userInteraction.modalContainer
  );
  const modalActive = useSelector((state) => state.userInteraction.modalActive);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    // if animation is on, close with animation for different screen sizes
    if (animation) {
      dispatch(closeModalWithAnimation());
      setTimeout(() => {
        dispatch(defaultState());
      }, 1300);
    } else {
      dispatch(defaultState());
    }
  };

  const animationOn = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 720) {
      setAnimation(false);
    } else {
      setAnimation(true);
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

  return (
    <>
      {modalActive ? (
        <div id="modal-container" className={modalContainer}>
          <div className="modal-background  transition-opacity">
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
                <div className="ScrollContainer">{children}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ModalTemplate;

ModalTemplate.propTypes = {
  modalName: PropTypes.string,
  animation: PropTypes.bool,
  children: PropTypes.node,
};
