import PokemonListSidebar from "./components/PokemonListSidebar.jsx";

export default function PokemonDetailCard() {
  return (
    <div className="relative w-full max-w-6xl mx-auto">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl opacity-50"></div>

      {/* Main Card */}
      <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/10">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#001950] to-blue-800 text-white">
          <div className="flex items-center gap-4">
            <span className="bg-black px-3 py-1 rounded-lg font-mono text-sm">
              #009
            </span>
            <h2 className="text-xl font-bold tracking-wide">
              Samurott
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <span className="opacity-80">Drill Pokémon</span>
            <span className="bg-blue-500 px-2 py-1 rounded-md font-semibold">
              WATER
            </span>
            <span className="bg-gray-800 px-2 py-1 rounded-md font-semibold">
              DARK
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-6">

            {/* Image */}
            <div className="flex justify-center items-center bg-white/10 rounded-2xl w-full md:w-[320px] h-[320px] border border-white/20">
              <span className="text-white/50">Image ici</span>
            </div>

            {/* Infos */}
            <div className="flex flex-col gap-6 flex-1 text-right">

              {/* Stats */}
              <div className="flex justify-end gap-10 bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <div>
                  <p className="text-sm text-gray-200">Weight</p>
                  <p className="text-2xl font-bold text-white">128.1 lbs</p>
                </div>
                <div>
                  <p className="text-sm text-gray-200">Height</p>
                  <p className="text-2xl font-bold text-white">4'11"</p>
                </div>
              </div>

        {/* Foods */}
<div>
  <h3 className="text-sm text-gray-300 mb-2">
    Preferred Foods
  </h3>

  {/* Liste dynamique */}
  {/*
    Tu peux changer facilement les images ici
  */}
  {(() => {
    const foods = [
      { name: "Oran Berry", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/oran-berry.png" },
      { name: "Sitrus Berry", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sitrus-berry.png" },
      { name: "Pecha Berry", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pecha-berry.png" },
      { name: "Mystic Water", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mystic-water.png" }
    ];

    return (
      <div className="flex justify-end gap-3 bg-white/20 p-3 rounded-lg border border-white/20">
        {foods.map((food, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center w-10 h-10 bg-white/30 rounded-lg hover:scale-110 transition"
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-8 h-8"
            />

            {/* Tooltip */}
            <span className="absolute bottom-[-22px] text-xs text-white opacity-0 group-hover:opacity-100 transition">
              {food.name}
            </span>
          </div>
        ))}
      </div>
    );
  })()}
</div>

              {/* Item */}
              <div>
                <h3 className="text-sm text-gray-300 mb-2">
                  Carried Item
                </h3>
                <div className="bg-white/30 text-white px-4 py-2 rounded-lg border border-white/20">
                  Quick Claw
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* Description */}
            <div className="flex-1 bg-gradient-to-br from-gray-700 to-gray-900 text-white p-4 rounded-2xl shadow-inner">
              <p className="text-sm leading-relaxed">
                Steeled by battles and sharpened by time, this rare form of Samurott
                is the result of evolution in the ancient Hisui region...
              </p>
            </div>

            {/* Research */}
            <div className="w-full md:w-[180px] bg-white text-gray-800 rounded-2xl flex flex-col items-center justify-center relative shadow-lg">
              <span className="absolute -top-3 bg-gray-800 text-white px-3 py-1 text-xs rounded-full">
                Research Lv.
              </span>
              <span className="text-4xl font-extrabold">10</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}