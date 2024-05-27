import Logo from "../components/characterPage/Logo";
import Card from "../components/characterPage/Card";

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
          <div className="my-10 text-white ml-7">
            <Logo />
          </div>
          <div className="flex-grow m-7">
            <div className="flex flex-col items-start w-1/4">
              <h1 className="mb-5 text-white text-8xl ">WONDER WOMAN</h1>
              <p className="w-[485px] text-justify text-base text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                quod cum, odit commodi maxime nostrum? Minima vero odio
                voluptatem repellat hic ipsa facere deleniti odit pariatur
                iusto? Id, blanditiis modi! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Nobis quod cum, odit commodi
                maxime nostrum? Minima vero odio voluptatem repellat hic ipsa
                facere deleniti odit pariatur iusto? Id, blanditiis modi! Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Nobis quod
                cum, odit commodi maxime nostrum? Minima vero odio voluptatem
                repellat hic ipsa facere deleniti odit pariatur iusto? Id,
                blanditiis modi!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center mb-20 ml-7 h-60">
            <Card />
          </div>
        </div>
        <div className="w-1/5 max-h-full border-l-2 border-[#ffffff22] flex-grow-0">
          <div className="h-20 border-b-2 border-[#ffffff22] text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
