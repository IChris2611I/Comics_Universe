const CircleIcons = () => {
  const iconNames = [null, null, null, null];

  return (
    <div className="flex">
      {iconNames.map((index) => (
        <div
          key={index}
          className="flex w-6 h-6 mr-1 bg-[#39e991] rounded-full"
        ></div>
      ))}
    </div>
  );
};

export default CircleIcons;
