const CharacterPage = () => {
  return (
    <div className="w-screen h-screen bg-[#03223D]">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover opacity-10"
        style={{ backgroundImage: "url('/src/assets/bgWW.png')" }}
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-50  to-neutral-950 opacity-20">
          <div className="flex h-screen">
            <div className="w-4/5 max-h-full grow">
              <div className="h-20 text-white">test</div>
            </div>
            <div className="w-1/5 max-h-full border-l-2 border-[#A4A4A4] grow0  ">
              <div className="h-20 border-b-2 border-[#A4A4A4] text-white">
                test2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
