import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SideMenuSection = ({ onClose, isSideMenuOpen }) => {
  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isSideMenuOpen]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex w-full px-4">
        {/* <div className="heading flex w-full items-center justify-between border-b border-gray-700 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Menu</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </div> */}
      </div>

      <div className="cart-items flex flex-col items-start overflow-y-auto p-4">
        <Link
          to="/"
          onClick={onClose}
          className="block w-full border-b border-gray-500 px-[14px] py-4 text-xl uppercase text-gray-900 hover:bg-gray-200"
        >
          Home
        </Link>
        <Link
          to="/shop"
          onClick={onClose}
          className="block w-full border-b border-gray-500 px-[14px] py-4 text-xl uppercase text-gray-900 hover:bg-gray-200"
        >
          Shop
        </Link>
        <Link
          to="/categories"
          onClick={onClose}
          className="block w-full border-b border-gray-500 px-[14px] py-4 text-xl uppercase text-gray-900 hover:bg-gray-200"
        >
          Categories
        </Link>
      </div>
    </div>
  );
};

export default SideMenuSection;

SideMenuSection.propTypes = {
  onClose: PropTypes.func.isRequired,
  isSideMenuOpen: PropTypes.any,
};
