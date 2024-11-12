import { Link } from "react-router-dom";

function SaveUp() {
  return (
    <div className="cta flex h-fit w-full max-w-7xl bg-orange-50 px-4 py-8 @container/save-up md:px-8">
      <div className="flex h-fit w-full flex-col items-center justify-center gap-7 border border-orange-900 px-5 py-10 text-orange-900 @md/save-up:flex-row md:flex-row md:px-8">
        <div className="flex h-fit w-full justify-center">
          <div className="box-1 flex w-fit flex-col gap-2">
            <h3 className="text-xl md:text-2xl">
              Save up to <br />
            </h3>
            <h3 className="flex w-fit items-center gap-2">
              <span className="text-9xl md:text-[10.875rem]">50</span>
              <span className="flex h-fit flex-col text-center">
                <span className="text-4xl">%</span>
                <span className="text-5xl">off</span>
              </span>
            </h3>
            <p className="text-sm">
              *On select styles only. Limited Supply. T&C’s apply.
            </p>
          </div>
        </div>
        <div className="divider flex h-[1px] w-14 bg-orange-900 md:h-full md:w-[1px]"></div>
        <div className="flex h-fit w-full justify-center">
          <div className="box-2 flex h-fit w-fit flex-col">
            <h3 className="mb-4 text-xl">Last Chance Sale</h3>
            <p className="mb-10 text-xs">
              Sales ends December 30 at ⏱ 23:59 WAT | use code LAST
            </p>
            <Link
              to="/shop"
              className="w-fit bg-orange-900 px-4 py-[14px] text-white"
            >
              SHOP THE SALE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaveUpSection() {
  return (
    <section className="h-fit w-full lg:px-8">
      <div className="flex h-fit w-full px-4 md:px-8">
        <SaveUp />
      </div>
    </section>
  );
}

export default SaveUpSection;
