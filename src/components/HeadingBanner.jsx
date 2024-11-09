import { Link } from "react-router-dom";
import { useCallback } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

function HeadingBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section
      id="heading-banner"
      className="z-[100] flex h-fit w-full bg-gray-950"
    >
      <div className="content mx-auto my-3 flex h-fit w-full max-w-xl px-5 md:px-8">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
          <i className="bi bi-chevron-left text-sm text-gray-400"></i>
        </PrevButton>
        <div
          ref={emblaRef}
          className="embla-viewport relative mx-auto flex h-fit w-[80%] overflow-hidden"
        >
          <div className="embla-container flex h-fit w-full items-center">
            <p className="w-full min-w-full text-center text-xs font-medium text-white">
              All Demo Products and Images provided by{" "}
              <Link className="underline">Kizito</Link>
            </p>
            <p className="w-full min-w-full text-center text-xs font-medium text-white">
              Free worldwide shipping on orders over $100
            </p>
            <p className="w-full min-w-full text-center text-xs font-medium text-white">
              The best prices for the best products
            </p>
            <p className="w-full min-w-full text-center text-xs font-medium text-white">
              This is a demo store to show my development skill
            </p>
          </div>
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
          <i className="bi bi-chevron-right text-sm text-gray-400"></i>
        </NextButton>
      </div>
    </section>
  );
}

export default HeadingBanner;
