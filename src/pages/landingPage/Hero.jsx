import PropTypes from "prop-types";
import CountdownBanner from "@/components/CountdownBanner";

import HeroCarousel from "@/pages/landingPage/HeroCarousel";
import "./Hero.scss";

import "./Hero.scss";

function Hero() {
  return (
    <section
      id="hero"
      className="flex h-fit w-full flex-col text-white lg:h-auto"
    >
      <HeroCarousel />
      <div className="w-full bg-gray-800">
        <CountdownBanner />
      </div>
    </section>
  );
}

Hero.propTypes = {};

export default Hero;
