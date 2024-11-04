import Button from "../../components/Button";

function Slide3() {
  return (
    <div id="slide3" className="slides slide relative flex">
      <div className="content my-auto flex h-fit flex-col items-center justify-center">
        <p className="label text-center text-sm lg:mt-10">NEW ARRIVALS</p>
        <h2 className="title text-center">Looks Good</h2>
        <p className="subtitle text-center text-lg">
          Slip into the good looking, laid back essentials
        </p>
        <Button type="primary">SHOP NOW</Button>
      </div>
    </div>
  );
}

export default Slide3;
