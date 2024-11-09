import CountdownBanner from "@/components/CountdownBanner";

import HeroCarousel from "@/pages/landingPage/HeroCarousel";
import "./Hero.scss";

import slide1bg from "@/assets/slide1bg.jpg";
import slide2bg from "@/assets/slide2bg.jpg";
import slide3bg from "@/assets/slide3bg.jpg";
import Slide from "./Slide";

const slidesInfo = [
  {
    label: "INTRODUCTION",
    title: "The Summer Collection",
    subtitle: "Effortless piece to bring in the new",
    buttonText: "SHOP NOW",
    bg: slide1bg,
    key: 1,
    href: "/shop",
  },
  {
    label: "Last Chance Sale",
    title: "Smart Home Technology",
    subtitle: "Create your dream home with smart home technology",
    buttonText: "SHOP NOW",
    bg: slide2bg,
    key: 2,
    href: "/shop",
  },
  {
    label: "NEW ARRIVALS",
    title: "Looks Good",
    subtitle: "Slip into the good looking, laid back essentials",
    buttonText: "SHOP NOW",
    bg: slide3bg,
    key: 3,
    href: "/shop",
  },
];
const slidesArray = slidesInfo.map((info) => (
  <Slide key={info.key} info={info} />
));

function Hero() {
  return (
    <section
      id="hero"
      className="flex h-fit w-full flex-col text-white lg:h-auto"
    >
      <HeroCarousel slides={slidesArray} />
      <div className="w-full bg-gray-800">
        <CountdownBanner />
      </div>
    </section>
  );
}

export default Hero;
