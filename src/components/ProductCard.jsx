import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/shop/${product.id}`} className="card">
      <div className="image-container mb-3 aspect-[1/1] h-auto w-full overflow-hidden bg-gray-100">
        <img
          src={
            product.images[0].replace(/^\[\\?"|\\?"\]$/g, "")
            // product.images[0].startsWith('["') &&
            // product.images[0].endsWith('"]')
            //   ? product.images[0].slice(2, -2)
            //   : product.images[0]
          }
          alt={product.title}
          loading="lazy"
          draggable="false"
        />
      </div>
      <div className="text-content text-center">
        <h3 className="mb-3 text-base font-normal capitalize text-gray-900">
          {product.title}
        </h3>
        <p className="text-lg text-gray-900">${product.price}.00</p>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
