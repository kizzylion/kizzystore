import Button from "../../components/Button";

function Slide1() {
  return (
    <div id="slide1" className="slides slide relative flex">
      <div className="content my-auto flex h-fit flex-col items-center justify-center">
        <p className="mb-2 text-center text-sm lg:mt-10">INTRODUCTION</p>
        <h2 className="mb-5 text-center text-6xl">The Summer Collection</h2>
        <p className="mb-8 text-center text-lg">
          Effortless piece to bring in the new
        </p>
        <Button type="primary">SHOP NOW</Button>
      </div>
    </div>
  );
}

export default Slide1;
