function HomePage() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/background.png')" }}
    >
      <div className="absolute inset-0 bg-slate-800 opacity-90"></div>
      <div className="relative z-10"></div>
    </div>
  );
}

export default HomePage;
