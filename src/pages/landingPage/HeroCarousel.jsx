import { useCallback } from "react";
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

import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const slidesArray = [<Slide1 />, <Slide2 />, <Slide3 />];

function HeroCarousel(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
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
      className="embla-viewport relative h-[90vh] w-full overflow-hidden md:h-[65vh]"
    >
      <div className="embla-container flex h-full">
        {slidesArray.map((slide, index) => (
          <div className="embla-slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
      <div className="embla__dots absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
          <i className="bi bi-chevron-left text-xl text-white"></i>
        </PrevButton>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? "embla__dot--selected" : "",
            )}
          />
        ))}
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
          <i className="bi bi-chevron-right text-xl text-white"></i>
        </NextButton>
      </div>
    </div>
  );
}

export default HeroCarousel;
