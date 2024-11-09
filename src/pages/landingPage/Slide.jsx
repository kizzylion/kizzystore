import { Link } from "react-router-dom";
import Button from "../../components/Button";
import PropTypes from "prop-types";

function Slide({ info }) {
  return (
    <div id={`slide${info.key}`} className="slides slide relative flex">
      <div className="content my-auto flex h-fit flex-col items-center justify-center">
        <p className="label text-center text-sm uppercase lg:mt-10">
          {info.label}
        </p>
        <h2 className="title text-center">{info.title}</h2>
        <p className="subtitle text-center text-lg">{info.subtitle}</p>

        <Button type="primary" to={info.href}>
          {info.buttonText}
        </Button>
      </div>
    </div>
  );
}

Slide.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Slide;
