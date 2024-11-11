import { useEffect } from "react";
import Hero from "./Hero";
import RichText from "./RichText";
import CategorySection from "./CategorySection";
import {
  addTransparentBg,
  headerScroll,
  removeTransparentBg,
} from "@/utilities/utilities";
import SaveUpSection from "./SaveUpSection";

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
    <main className="-mt-[4.55rem] h-fit w-screen">
      <Hero />
      <RichText>
        <p className="mx-auto text-lg">
          From relaxed designs to awesome development, there’s many a timeless
          staple to gain from kizzy .
        </p>
      </RichText>
      <div className="h-fit w-full lg:px-8">
        <CategorySection />
      </div>
      <RichText>
        <p className="mx-auto text-lg">
          This store is a demonstration of my design and development skill.
          Designed and Developed by Kizito.
        </p>
      </RichText>
      <SaveUpSection />
    </main>
  );
}

export default LandingPage;
