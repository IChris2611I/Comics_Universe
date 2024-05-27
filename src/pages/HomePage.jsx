import { Link } from "react-router-dom";
import SearchBar from "../components/HomePage/Searchbar/SearchBar";
import { homePageData } from "../data/contante/homePageData";

const HomePage = () => {
  const { title, description } = homePageData[0];

  return (
    <div
      className="relative h-screen bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/src/assets/background.png')" }}
    >
      <div className="absolute inset-0 z-10 bg-black opacity-90"></div>
      <div className="relative z-20 flex flex-col items-center justify-start h-full max-w-screen-xl gap-10 p-8 mx-auto text-white">
        <div className="pt-20 text-center text-slate-200">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-gray-300 lg:text-xl">{description}</p>
        </div>
        <div className="w-full mt-8">
          <SearchBar />
        </div>
        <Link
          to="characterPage"
          className="inline-block px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Character Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
