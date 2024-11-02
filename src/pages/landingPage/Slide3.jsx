import Button from "../../components/Button";

function Slide3() {
  return (
    <div id="slide3" className="slides slide relative flex">
      <div className="content my-auto flex h-fit flex-col items-center justify-center">
        <p className="mb-2 text-center text-sm lg:mt-10">NEW ARRIVALS</p>
        <h2 className="mb-5 text-center text-6xl">Looks Good</h2>
        <p className="mb-8 text-center text-lg">
          Slip into the good looking, laid back essentials
        </p>
        <Button type="primary">SHOP NOW</Button>
      </div>
    </div>
  );
}

export default Slide3;
