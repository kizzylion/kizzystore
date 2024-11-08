import { Link } from "react-router-dom";
import "./CategoryCard.scss";
import PropTypes from "prop-types";

function CategoryCard({ name, description, image }) {
  return (
    <Link
      to={`/category/${name}`}
      className="@container/categoryCard card relative isolate flex aspect-[1/1.33] h-auto w-full flex-col bg-gray-200 p-8"
    >
      <div className="card-content mt-auto flex h-fit flex-col gap-4 text-left text-white">
        <h3 className="@sm/categoryCard:text-4xl card-name text-2xl font-semibold">
          {name}
        </h3>
        <h4 className="@sm/categoryCard:text-lg card-description text-lg text-gray-100">
          {description}
        </h4>
      </div>

      <button
        type="button"
        className="mt-9 block w-fit border-b border-white pb-2 text-white"
      >
        Shop now
      </button>

      <div className="card-image absolute inset-0 -z-10">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
    </Link>
  );
}

export default CategoryCard;

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
