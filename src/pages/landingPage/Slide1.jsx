import Button from "../../components/Button";

function Slide1() {
  return (
    <div id="slide1" className="slides slide relative flex">
      <div className="content my-auto flex h-fit flex-col items-center justify-center">
        <p className="label text-center text-sm lg:mt-10">INTRODUCTION</p>
        <h2 className="title text-center">The Summer Collection</h2>
        <p className="subtitle text-center text-lg">
          Effortless piece to bring in the new
        </p>
        <Button type="primary">SHOP NOW</Button>
      </div>
    </div>
  );
}

export default Slide1;
