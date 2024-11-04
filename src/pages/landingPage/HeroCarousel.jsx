import { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import {
  DotButton,
  useDotButton,
} from "../../components/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../components/EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

function HeroCarousel(props) {
  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000 }),
  ]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div
      ref={emblaRef}
      className="embla-viewport relative h-fit w-full overflow-hidden"
    >
      <div className="embla-container relative flex min-h-fit">
        {slides.map((slide, index) => (
          <div className="embla-slide fade-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
      <div className="embla__dots absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <div className="mr-2 size-fit">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            <i className="bi bi-chevron-left text-xl text-white"></i>
          </PrevButton>
        </div>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? "--selected" : "",
            )}
          />
        ))}
        <div className="ml-2 size-fit">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
            <i className="bi bi-chevron-right text-xl text-white"></i>
          </NextButton>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;

HeroCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.element).isRequired,
  options: PropTypes.object,
};
