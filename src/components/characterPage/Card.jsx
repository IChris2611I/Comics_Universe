import Batman from "../../assets/Batman.png";
import gothamBackground from "../../assets/gotham.png";

const Card = () => {
  return (
    <div className="relative overflow-hidden transition-transform rounded-md w-36 h-6/6 transform-gpu hover:scale-105">
      <div
        className="absolute inset-0 object-cover bg-cover rounded-md"
        style={{ backgroundImage: `url(${gothamBackground})`, opacity: 0.6 }}
      ></div>

      <div className="absolute inset-0 flex">
        <h2 className="w-1/4 h-full m-2 font-bold text-neutral-300">BATMAN</h2>

        <img src={Batman} alt="Batman" className="w-4/5 h-full ml-5 " />
      </div>
    </div>
  );
};

export default Card;
