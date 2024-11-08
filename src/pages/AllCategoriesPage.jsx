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
      <section className="heading mb-8 flex flex-col px-5 md:mb-10 md:px-8">
        <div id="breadcrumb" className="mb-8 flex items-center gap-2 py-4">
          <Link to="/">Home</Link>
          <span>Categories</span>
        </div>
        <h1 className="text-center text-4xl font-medium">All Categories</h1>
      </section>
      <main>
        <CategorySection />
      </main>
    </div>
  );
}

export default AllCategoriesPage;
