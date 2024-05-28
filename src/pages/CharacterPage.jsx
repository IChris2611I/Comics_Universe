import { Link } from "react-router-dom";
import {
  Logo,
  Card,
  PersonalInformationList,
  CircleIcons,
} from "../components";
import { WonderWoman, Background_WonderWoman } from "../assets";
import { PersonalDescription, PersonalCharacterInformation } from "../data";

const CharacterPage = () => {
  const { Name, DescrisptionA, DescrisptionB } = PersonalDescription[0];

  return (
    <div className="h-screen bg-[#03223D] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover opacity-5"
        style={{ backgroundImage: `url(${Background_WonderWoman})` }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50 to-neutral-950 opacity-10"></div>
      <div className="relative flex h-full overflow-hidden">
        <div className="flex flex-col flex-grow w-4/5 h-full">
          <div className="w-1/6 px-20 my-10 text-white ml-7">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="flex h-full px-15">
            <div className="flex flex-col w-5/6 m-10">
              <div className="flex flex-col w-full h-full gap-10 leading-7 text-justify text-white">
                <h1 className="font-bold text-8xl font-poestsen">{Name}</h1>
                <p className="text-l">{DescrisptionA}</p>
                <p className="text-l">{DescrisptionB}</p>
              </div>
              <div className="flex gap-5 h-60">
                <Card />
                <Card />
                <Card />
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
        <div className="flex flex-col w-1/5 h-full border-l-2 border-[#ffffff22]">
          <div className="pl-10 flex items-center h-20 border-b-2 border-[#ffffff22] text-white">
            <h1 className="mr-5">More Informations : </h1>
            <CircleIcons />
          </div>
          <div className="p-10">
            <div className="flex flex-col gap-10 text-[#ffffff22]">
              <PersonalInformationList info={PersonalCharacterInformation[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
