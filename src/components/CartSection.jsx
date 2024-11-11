import PropTypes from "prop-types";
import { loader as productDetailsLoader } from "../routes/ProductDetails";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { notify } from "../utilities/utilities";

function CartItem({
  cartItem,
  setCartItems,
  productData,
  handleRemoveFromCart,
  onClose,
}) {
  const { title, price, images } = productData;
  console.log(productData);
  const quantity = cartItem.quantity;

  const handleIncreaseQuantity = () => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: quantity + 1 } : item,
      );
    });
  };
  const handleDecreaseQuantity = () => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: quantity - 1 } : item,
      );
    });
  };

  return (
    <div className="cart-item grid h-fit w-full grid-cols-[auto_1fr] gap-4 border-b border-gray-200 py-6">
      <div className="flex size-24 overflow-hidden rounded-md bg-gray-100">
        <img
          className="h-full w-full object-cover"
          src={images[0]
            .replace(/^\[\\?"|\\?"\]$/g, "")
            .replace(/^\["|"\]$/g, "")}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Link
          to={`/shop/${cartItem.id}`}
          onClick={() => onClose()}
          className="text-lg capitalize leading-relaxed text-gray-800"
        >
          {title}
        </Link>

        <p className="mb-3 text-xl text-gray-700">${price}</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="quantity-input flex w-fit items-center gap-2 rounded-md border border-gray-300 px-2 py-1 text-sm">
            <button
              className="quantity-btn text-xl text-gray-700 transition-all duration-300 hover:text-gray-950"
              onClick={handleDecreaseQuantity}
              disabled={quantity === 1}
            >
              <i className="bi bi-dash"></i>
            </button>
            <input
              type="text"
              id="quantity"
              min="1"
              max="10"
              inputMode="numeric"
              value={quantity}
              className="flex w-10 text-center"
              onChange={(e) =>
                setCartItems((prevCartItems) => {
                  return prevCartItems.map((item) =>
                    item.id === cartItem.id
                      ? {
                          ...item,
                          quantity:
                            e.target.value < 1
                              ? 1
                              : e.target.value > 10
                                ? 10
                                : e.target.value,
                        }
                      : item,
                  );
                })
              }
            />
            <button
              className="quantity-btn text-xl text-gray-700 transition-all duration-300 hover:text-gray-950"
              onClick={handleIncreaseQuantity}
              disabled={quantity === 10}
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
          <button
            className="text-sm text-gray-700"
            onClick={() => {
              notify("Item removed from cart", "success");
              handleRemoveFromCart(cartItem.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
const CartSection = ({
  cartItems,
  setCartItems,
  onClose,
  handleRemoveFromCart,
  toggleCart,
}) => {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const details = {};
      for (const item of cartItems) {
        const { data } = await productDetailsLoader({
          params: { productId: item.id },
        });
        details[item.id] = data;
      }
      setProductDetails(details);
    };

    fetchProductDetails();
  }, [cartItems]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex w-full px-4">
        <div className="heading flex w-full items-center justify-between border-b border-gray-700 py-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <span className="text-sm text-gray-500">
              ({cartItems.length} items)
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="cart-items flex-1 overflow-y-auto p-4">
            {cartItems.map(
              (cartItem) =>
                productDetails[cartItem.id] && (
                  <CartItem
                    cartItem={cartItem}
                    key={cartItem.id}
                    setCartItems={setCartItems}
                    productData={productDetails[cartItem.id]}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ),
            )}
          </div>
          <div className="subtotal flex w-full flex-col items-center justify-between px-4 pb-8">
            <div className="flex w-full items-center justify-between gap-2 border-t border-gray-700 py-4">
              <p className="text-lg font-semibold">Subtotal</p>
              <p className="text-xl font-semibold">
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0,
                )}
              </p>
            </div>
            <Link
              to="/checkout"
              className="w-full rounded-md bg-gray-900 py-2 text-center text-white transition-all duration-300 hover:bg-gray-800 focus:bg-gray-800"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
      {cartItems.length == 0 && (
        <div className="cart-items flex flex-col items-center overflow-y-auto p-4">
          <h3 className="mb-8 text-2xl font-normal">Your cart is empty</h3>
          <p className="mb-6 text-gray-600">Not sure where to start?</p>
          <Link
            to="/shop"
            onClick={toggleCart}
            className="block w-fit border border-gray-950 px-[14px] py-2 uppercase text-gray-900 hover:bg-gray-200"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSection;

CartSection.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  toggleCart: PropTypes.function,
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  setCartItems: PropTypes.func.isRequired,
  productData: PropTypes.object.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  onClose: PropTypes.func,
};
