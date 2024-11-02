import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({ type = "primary", children }) => {
  if (type === "primary") {
    return (
      <Link
        to="/shop"
        className="button bg-white px-8 py-[0.75em] text-center font-semibold text-black transition-colors duration-300 hover:bg-gray-950 hover:text-white"
      >
        {children}
      </Link>
    );
  }
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
