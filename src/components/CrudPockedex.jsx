import { useState } from 'react';
import { list } from './PokemonListSidebar.jsx';

export default function PokemonListRight() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showPokemon, setShowPokemon] = useState(false);

  const [pokemonList, setPokemonList] = useState(list);

  const [newPokemonName, setNewPokemonName] = useState("");

  // 👉 READ (déjà existant)
  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowPokemon(true);
  };

  // 👉 CREATE
  const addPokemon = () => {
    if (!newPokemonName) return;

    const newPokemon = {
      id: Date.now(),
      name: newPokemonName,
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      number: String(pokemonList.length + 1).padStart(3, '0'),
      type: "UNKNOWN",
      selected: false
    };

    setPokemonList([...pokemonList, newPokemon]);
    setNewPokemonName("");
  };

  // 👉 DELETE
  const deletePokemon = (id) => {
    setPokemonList(pokemonList.filter(p => p.id !== id));
    if (selectedPokemon?.id === id) {
      setSelectedPokemon(null);
      setShowPokemon(false);
    }
  };

  // 👉 UPDATE
  const updatePokemon = (id) => {
    const newName = prompt("Nouveau nom ?");
    if (!newName) return;

    setPokemonList(
      pokemonList.map(p =>
        p.id === id ? { ...p, name: newName } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-transparent" style={{backgroundImage: "url('Image/pixelart sunset.gif')"}}>

      {/* 👁️ DETAILS */}
      <div className="lg:col-span-2">
        {showPokemon && selectedPokemon ? (
          <div className="bg-transparent w-auto h-auto rounded-xl absolute left-14 top-24 z-30">
            <h2 className="text-4xl font-bold text-white mb-4">
              {selectedPokemon.number}
            </h2>
            <img src={selectedPokemon.image} alt={selectedPokemon.name} className='h-26 w-52' />
            <p className="text-white">{selectedPokemon.name}</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md h-full flex items-center justify-center p-6">
            <p className="text-gray-500 text-lg">Sélectionnez un Pokémon</p>
          </div>
        )}
      </div>

      {/* ➕ AJOUT */}
      <div className="p-4">
        <input
          type="text"
          value={newPokemonName}
          onChange={(e) => setNewPokemonName(e.target.value)}
          placeholder="Nom du Pokémon"
          className="border p-2 mr-2"
        />
        <button onClick={addPokemon} className="bg-blue-500 text-white px-3 py-2 rounded">
          Ajouter
        </button>
      </div>

      {/* 📋 LISTE */}
      <div className="max-h-[70vh] overflow-y-auto">
        <div className="bg-white/25 shadow-md p-6 text-black font-bold">
          <h1 className="text-2xl font-bold text-gray-400 mb-6">Les Pokémon</h1>

          <div className="space-y-3">
            {pokemonList.map((pokemon) => (
              <div
                key={pokemon.id}
                className="flex items-center p-3 rounded-lg hover:bg-gray-100"
              >
                <span
                  onClick={() => handlePokemonClick(pokemon)}
                  className="cursor-pointer"
                >
                  {pokemon.name}
                </span>

                <span className="ml-auto text-sm text-gray-500 mr-4">
                  {pokemon.number}
                </span>

                {/* ✏️ UPDATE */}
                <button
                  onClick={() => updatePokemon(pokemon.id)}
                  className="text-yellow-500 mr-2"
                >
                  ✏️
                </button>

                {/* ❌ DELETE */}
                <button
                  onClick={() => deletePokemon(pokemon.id)}
                  className="text-red-500"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}