import PropTypes from "prop-types";

import HeroCarousel from "@/pages/landingPage/HeroCarousel";
import "./Hero.scss";

import "./Hero.scss";

function Hero() {
  return (
    <section id="hero" className="h-screen w-full bg-gray-950 text-white">
      <HeroCarousel />
      <div className="h-20 w-full bg-gray-800"></div>
    </section>
  );
}

Hero.propTypes = {};

export default Hero;
