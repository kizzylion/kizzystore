import { Outlet, useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import ReactGA from "react-ga4";

import HeadingBanner from "../components/HeadingBanner";
import { useEffect, useState } from "react";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views whenever the location changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
    console.log("Tracked page view:", location.pathname); // Log for debugging
  }, [location]);

  const [cartItems, setCartItems] = useState([]);

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
      setCartItems([...cartItems, cartItem]);
    }
  };

  return (
    <>
      <HeadingBanner />
      <Heading cartItems={cartItems} />
      <div className="relative">
        <Outlet context={{ handleAddToCart, cartItems }} />
      </div>
    </>
  );
};

export default Root;
