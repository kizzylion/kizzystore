import { removeTransparentBg, headerScroll } from "@/utilities/utilities";
import { useEffect, useState } from "react";
import {
  Form,
  Link,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { matchSorter } from "match-sorter";

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products?categoryId=${params.categoryId}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    let data = await response.json();
    if (q) {
      data = matchSorter(data, q, { keys: ["title"] });
    }

    return { data, q };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function CategoryProducts() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { data, q } = useLoaderData();
  const submit = useSubmit();
  const navigation = useNavigation();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const title = data[0].category.name;

  return (
    <div id="shop" className="relative h-fit w-screen py-5 md:py-10 lg:px-8">
      <section className="heading flex flex-col items-center px-5 py-8 md:px-8">
        <h1 className="text-center text-2xl font-medium capitalize md:text-4xl">
          {title ? title : "Shop"}
        </h1>
        <div
          id="breadcrumb"
          className="flex w-fit items-center gap-2 py-4 text-sm text-gray-500"
        >
          <Link to="/">Home</Link> / <Link to="/categories">Categories</Link> /{" "}
          <span className="text-gray-900">{title}</span>
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <div className="filter-section sticky top-[4.55rem] z-[100] mb-4 flex w-full items-center justify-between bg-white/40 px-5 py-3 backdrop-blur-sm md:px-8">
          <button
            className="flex items-center gap-2 text-lg font-medium"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <i className="bi bi-sliders2"></i> Filter
          </button>
          <Form
            role="search"
            className="searchbox border-1 relative w-40 rounded-lg border border-gray-400 px-3 py-[0.2em] outline-gray-400 ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-gray-900 lg:flex"
          >
            <i
              className={`${searching ? "invisible" : ""} bi bi-search pr-2 text-base text-gray-500`}
            ></i>
            <input
              id="q"
              name="q"
              aria-label="Search product"
              type="search"
              placeholder="Search"
              defaultValue={q}
              onChange={(event) => {
                const isFirstSearch = q === null;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
              className={`${searching ? "loading" : ""} hidden border-none bg-transparent text-sm outline-none md:flex`}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
          </Form>
        </div>
        <div className="relative flex h-fit px-5 md:mb-10 md:px-8">
          <aside
            className={`sticky top-[7.7rem] z-[100] h-full min-h-fit w-full bg-gray-50 transition-all duration-300 ease-in-out md:w-1/4 ${
              isFilterOpen ? "flex translate-x-0" : "hidden -translate-x-full"
            }`}
          >
            <h2 className="text-lg font-medium">Categories</h2>
          </aside>
          <main className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {data
              .filter(
                (product) =>
                  product.title != "New Product" &&
                  !product.images[0].includes(
                    "https://example.com/image.jpg",
                  ) &&
                  !product.images[0].includes(
                    "https://placeimg.com/640/480/any",
                  ),
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
