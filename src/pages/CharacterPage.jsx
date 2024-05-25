const CharacterPage = () => {
  return (
    <div className="w-screen h-screen bg-[#03223D] relative">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover opacity-5"
        style={{ backgroundImage: "url('/src/assets/bgWW.png')" }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50  to-neutral-950 opacity-10"></div>
      <div className="relative flex h-full">
        <div className="flex-grow w-4/5 max-h-full">
          <div className="h-20 text-white">test</div>
        </div>
        <div className="w-1/5 max-h-full border-l-2 border-[#ffffff22] flex-grow-0">
          <div className="h-20 border-b-2 border-[#ffffff22] text-white">
            test2
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
