import { Link } from "react-router-dom";
import Logo from "../components/characterPage/Logo";
import Card from "../components/characterPage/Card";
import WonderWoman from "../assets/WonderWoman.png";

const CharacterPage = () => {
  return (
    <div className="h-screen bg-[#03223D] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover opacity-5"
        style={{ backgroundImage: "url('/src/assets/bgWW.png')" }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50 to-neutral-950 opacity-10"></div>
      <div className="relative flex h-full overflow-hidden">
        <div className="flex flex-col flex-grow w-4/5 max-h-full">
          <div className="w-1/6 px-20 my-10 text-white ml-7">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="flex h-full px-20">
            <div className="flex flex-col w-4/6 m-7">
              <div className="flex flex-col justify-around w-full h-full overflow-hidden leading-7 text-justify text-white">
                <h1 className=" text-8xl">WONDER WOMAN</h1>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis quod cum, odit commodi maxime nostrum? Minima vero odio
                  voluptatem repellat hic ipsa facere deleniti odit pariatur
                  iusto? Id, blanditiis modi! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit.
                </p>{" "}
                <p>
                  Nobis quod cum, odit commodi maxime nostrum? Minima vero odio
                  voluptatem repellat hic ipsa facere deleniti odit pariatur
                  iusto? Id, blanditiis modi! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Nobis quod cum, odit commodi
                  maxime nostrum? Minima vero odio voluptatem repellat hic ipsa
                  facere deleniti odit pariatur iusto? Id, blanditiis modi!
                </p>
              </div>
              <div className=" h-60">
                <Card />
              </div>
            </div>
            <div className="flex justify-center w-full h-full ">
              <img
                src={WonderWoman}
                alt="Wonder Woman"
                className="h-full bg-no-repeat bg-fix"
              />
            </div>
          </div>
        </div>
        <div className="w-1/5 max-h-full border-l-2 border-[#ffffff22] flex-grow-0">
          <div className="h-20 border-b-2 border-[#ffffff22] text-white">
            test
          </div>
          <div>test</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
