import PropTypes from "prop-types";
import CountdownBanner from "@/components/CountdownBanner";

import HeroCarousel from "@/pages/landingPage/HeroCarousel";
import "./Hero.scss";

import "./Hero.scss";

import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const slidesArray = [
  <Slide1 key={1} />,
  <Slide2 key={2} />,
  <Slide3 key={3} />,
];

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

Hero.propTypes = {};

export default Hero;
