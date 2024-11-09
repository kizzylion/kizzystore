import { removeTransparentBg, headerScroll } from "@/utilities/utilities";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CategorySection from "./landingPage/CategorySection";

function AllCategoriesPage() {
  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);

  return (
    <div
      id="AllCategoriesPage"
      className="h-fit w-screen py-5 md:py-10 lg:px-8"
    >
      <section className="heading flex flex-col items-center px-5 py-8 md:px-8">
        <h1 className="text-center text-2xl font-medium capitalize md:text-4xl">
          All Categories
        </h1>
        <div
          id="breadcrumb"
          className="flex w-fit items-center gap-2 py-4 text-sm text-gray-500"
        >
          <Link to="/">Home</Link> /
          <span className="text-gray-900">Categories</span>
        </div>
      </section>
      <main>
        <CategorySection />
      </main>
    </div>
  );
}

export default AllCategoriesPage;
