import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({ type = "primary", children, to = "/" }) => {
  if (type === "primary") {
    return (
      <Link
        to={to}
        className="flex h-fit w-fit cursor-pointer flex-nowrap text-nowrap bg-white px-8 py-[0.75em] text-center text-sm font-semibold text-black transition-colors duration-300 hover:bg-gray-950 hover:text-white"
      >
        {children}
      </Link>
    );
  }
  if (type === "secondary") {
    return (
      <Link
        to={to}
        className="flex h-fit w-fit cursor-pointer flex-nowrap text-nowrap border border-white bg-transparent px-4 py-[0.5em] text-center text-sm text-white transition-colors duration-300 lg:px-8 lg:py-[0.75em] lg:text-base"
      >
        {children}
      </Link>
    );
  }
  if (type === "black") {
    return (
      <button className="flex h-fit w-fit cursor-pointer flex-nowrap text-nowrap bg-gray-950 px-8 py-[0.75em] text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-900 hover:text-white">
        {children}
      </button>
    );
  }
  if (type === "black-outline") {
    return (
      <button className="flex h-fit w-fit cursor-pointer flex-nowrap text-nowrap border border-gray-950 bg-transparent px-8 py-[0.75em] text-center text-sm font-semibold text-gray-950 transition-colors duration-300 hover:bg-gray-950 hover:text-white">
        {children}
      </button>
    );
  }
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default Button;
