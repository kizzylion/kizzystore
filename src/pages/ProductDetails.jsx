import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { removeTransparentBg, headerScroll } from "../utilities/utilities";
import Button from "../components/Button";

export async function loader({ params }) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${params.productId}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function ProductDetails() {
  const { data } = useLoaderData();
  console.log(data);
  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);

  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(data.images[0]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div id="product-detail" className="h-fit w-screen py-5 md:py-10 lg:px-8">
      <section className="heading mb-8 flex flex-col px-5 md:mb-10 md:px-8">
        <div id="breadcrumb" className="flex items-center gap-2">
          <Link to="/">Home</Link>
          <span>Shop</span>
        </div>
      </section>

      <main className="grid w-full grid-cols-1 gap-12 px-5 md:grid-cols-2 lg:gap-16 lg:px-8 lg:pr-20">
        <div className="image-section @container/image-section">
          <div className="flex flex-col gap-2 @lg/image-section:grid @lg/image-section:grid-cols-[1fr_4fr]">
            <div className="image-container flex h-full w-full bg-gray-100 @lg/image-section:order-last">
              <img
                src={selectedImage}
                alt={data.title}
                className="aspect-square h-auto w-full object-cover transition-all duration-300"
              />
            </div>
            <div className="image-group flex h-full w-full gap-2 @lg/image-section:order-first @lg/image-section:mt-0 @lg/image-section:h-auto @lg/image-section:flex-col">
              {data.images.map((image, index) => (
                <button
                  className={`image-container ${
                    selectedImage === image ? "ring-4 ring-gray-500" : ""
                  } w-full transition-all duration-300`}
                  key={index}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={data.title}
                    draggable={false}
                    className="aspect-square h-auto w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="info-section flex flex-col gap-5">
          <div className="product-info mb-5 flex flex-col">
            <h1 className="title mb-2 text-4xl font-normal text-gray-950">
              {data.title}
            </h1>
            <p className="price mb-4 text-3xl font-normal text-gray-950">
              ${data.price}.00
            </p>
            <p className="description text-gray-700">{data.description}</p>
          </div>
          <div className="quantity-section mb-5 flex items-center gap-2">
            <label htmlFor="quantity" className="text-sm">
              Quantity :
            </label>
            <div className="quantity-input flex w-fit items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
              <button
                className="quantity-btn text-xl text-gray-700 transition-all duration-300 hover:text-gray-950"
                onClick={handleDecrease}
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
                  setQuantity(
                    e.target.value < 1
                      ? 1
                      : e.target.value > 10
                        ? 10
                        : e.target.value,
                  )
                }
              />
              <button
                className="quantity-btn text-xl text-gray-700 transition-all duration-300 hover:text-gray-950"
                onClick={handleIncrease}
                disabled={quantity === 10}
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </div>
          <div className="product-actions flex items-center gap-2">
            <Button type="black-outline">Add to Cart</Button>
            <Button type="black">Buy It Now</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;
