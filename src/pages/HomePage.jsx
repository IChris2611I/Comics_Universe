import SearchBar from "../components/HomePage/Searchbar/SearchBar";

const HomePage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/src/assets/background.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
      <div className="flex flex-col items-center justify-start h-full relative z-20 gap-10 text-white max-w-screen-xl mx-auto p-8">
        <div className="text-center text-slate-200 pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Welcome to the ultimate destination for all DC and Marvel
            characters!
          </h1>
          <p className="text-lg lg:text-xl text-gray-300">
            Dive into a treasure trove of information about your favorite heroes
            and villains from the iconic universes of DC Comics and Marvel
            Entertainment. Discover their origins, powers, allies, enemies, and
            epic battles as you immerse yourself in the rich world of superhero
            lore.
          </p>
        </div>
        <div className="w-full mt-8">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
