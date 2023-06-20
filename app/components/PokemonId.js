import React from "react";

const PokemonId = ({ setOpenModal, pokemonActive }) => {
  console.log(pokemonActive);

  return (
    <section className="fixed inset-0 z-40 flex items-center justify-center bg-gray-500 bg-opacity-90 backdrop-blur-sm">
      <div className="bg-white w-6/12 rounded-lg text-black font-semibold flex justify-center">
        <div className="w-5/12 p-6">
          <h1 className="text-center py-4">{pokemonActive.name}</h1>
          <img src={pokemonActive.sprites.other.dream_world.front_default} />
        </div>
        <div className="w-5/12 p-8 flex flex-col gap-y-2 justify-end">
          <h2>{pokemonActive.types[0].type.name}</h2>
          <h2>Weight : {pokemonActive.weight}</h2>
          <h2>Height : {pokemonActive.height}</h2>
          <h2>Attack : {pokemonActive.stats[1].base_stat}</h2>
          <h2>Defend : {pokemonActive.stats[2].base_stat}</h2>
          <h2>Special Attack : {pokemonActive.stats[3].base_stat}</h2>
        </div>
        <div className="h-10 ml-4">
          <button className="mt-2" onClick={() => setOpenModal(false)}>
            <img src="./x.svg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PokemonId;
