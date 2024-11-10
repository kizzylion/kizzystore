import Button from "./Button";
import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import { notify } from "@/utilities/utilities";

function ProductCard({ product }) {
  const { handleAddToCart } = useOutletContext();
  const onClick = (e) => {
    e.preventDefault();
    notify("Added to cart", "success");
    handleAddToCart(product);
  };
  return (
    <Link to={`/shop/${product.id}`} className="card flex h-full flex-col">
      <div className="image-container mb-3 aspect-[1/1] h-auto w-full overflow-hidden bg-gray-100">
        <img
          src={
            product.images[0]
              .replace(/^\[\\?"|\\?"\]$/g, "")
              .replace(/^\["|"\]$/g, "")
            // product.images[0].startsWith('["') &&
            // product.images[0].endsWith('"]')
            //   ? product.images[0].slice(2, -2)
            //   : product.images[0]
          }
          alt={product.title}
          loading="lazy"
          draggable="false"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-content mb-1 text-center">
        <h3 className="mb-3 text-base font-normal capitalize text-gray-900">
          {product.title}
        </h3>
        <p className="text-lg text-gray-900">${product.price}.00</p>
      </div>
      <div className="action-container mt-auto px-2 text-center">
        <Button type="cart" onClick={onClick}>
          Add to Cart
        </Button>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
