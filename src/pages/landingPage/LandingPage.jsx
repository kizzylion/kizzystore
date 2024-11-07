import { useEffect } from "react";
import Hero from "./Hero";
import RichText from "./RichText";
import CategorySection from "./CategorySection";
import { addTransparentBg } from "@/utilities/utilities";

function headerScroll() {
  const header = document.getElementById("header");
  if (header) {
    header.classList.toggle("transparent-bg", window.scrollY < 100);
  }
}

function LandingPage() {
  useEffect(() => {
    addTransparentBg();
    window.addEventListener("scroll", headerScroll);
  }, []);
  return (
    <div className="-mt-24 h-fit w-screen">
      <Hero />
      <RichText>
        <p className="mx-auto text-lg">
          From relaxed designs to awesome development, there’s many a timeless
          staple to gain from kizzy .
        </p>
      </RichText>
      <CategorySection />
    </div>
  );
}

export default LandingPage;
