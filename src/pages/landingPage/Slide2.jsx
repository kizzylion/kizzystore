import Button from "../../components/Button";

function Slide2() {
  return (
    <div id="slide2" className="slides slide relative flex">
      <div className="content my-auto flex h-fit flex-col items-center justify-center">
        <p className="mb-2 text-center text-sm lg:mt-10">LAST CHANCE SALES</p>
        <h2 className="mb-5 text-center text-6xl">Smart Home Technologies</h2>
        <p className="mb-8 text-center text-lg">
          Create your dream home with our smart home technologies
        </p>
        <Button type="primary">BUY NOW</Button>
      </div>
    </div>
  );
}

export default Slide2;
