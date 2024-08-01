import PropTypes from "prop-types";
export const Card = ({
  image,
  title,
  description,
  handleButtonClick,
}) => {
  return (
    <div
      className="cursor-pointer bg-white border border-gray-200 rounded-lg  h-fit shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
      onClick={handleButtonClick}
    >
      <img className="rounded-t-lg w-full " src={image} alt="" />
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

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
