import { useEffect } from "react";
import Hero from "./Hero";
import RichText from "./RichText";
import CategorySection from "./CategorySection";
import {
  addTransparentBg,
  headerScroll,
  removeTransparentBg,
} from "@/utilities/utilities";

function LandingPage() {
  useEffect(() => {
    addTransparentBg();
    window.addEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
      window.removeEventListener("scroll", headerScroll);
    };
  }, []);
  return (
    <main className="-mt-24 h-fit w-screen">
      <Hero />
      <RichText>
        <p className="mx-auto text-lg">
          From relaxed designs to awesome development, there’s many a timeless
          staple to gain from kizzy .
        </p>
      </RichText>
      <CategorySection />
    </main>
  );
}

export default LandingPage;
