import { Outlet, useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ReactGA from "react-ga4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Default styles
import HeadingBanner from "../components/HeadingBanner";
import { useEffect, useState } from "react";
import CartSection from "../components/CartSection";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views whenever the location changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  const [cartItems, setCartItems] = useState([
    // { id: 15, price: 10, quantity: 1 },
    // { id: 20, price: 20, quantity: 2 },
    // { id: 21, price: 30, quantity: 1 },
    // { id: 22, price: 40, quantity: 1 },
    // { id: 23, price: 50, quantity: 1 },
  ]);

  const handleAddToCart = (product, selectedQuantity = 1) => {
    //Clean up the image url
    const productImage = product.images[0]
      .replace(/^\[\\?"|\\?"\]$/g, "")
      .replace(/^\["|"\]$/g, "");

    // Find if the product already exists in the cart
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      // If the product already exists, update the quantity
      existingCartItem.quantity += selectedQuantity;

      // Update the cart items state
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? existingCartItem : item,
        ),
      );
    } else {
      // If the product does not exist, add it to the cart
      const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: selectedQuantity,
        image: productImage,
      };
      setCartItems((prevCartItems) => [...prevCartItems, cartItem]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId),
    );
  };

  // Add state for cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add toggle function
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="relative">
      <HeadingBanner />
      <Heading cartItems={cartItems} onCartClick={toggleCart} />
      <main className="relative">
        <Outlet
          context={{ handleAddToCart, cartItems, toggleCart, setCartItems }}
        />
      </main>

      {/* Collapsible cart aside */}
      <aside
        className={`fixed right-0 top-0 z-[100] h-full w-96 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CartSection
          cartItems={cartItems}
          setCartItems={setCartItems}
          onClose={() => setIsCartOpen(false)}
          handleRemoveFromCart={handleRemoveFromCart}
          toggleCart={toggleCart}
        />
      </aside>

      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black bg-opacity-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        closeButton={false}
        stacked={true}
        limit={3}
      />
    </div>
  );
};

export default Root;
