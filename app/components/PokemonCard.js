"use client";
import React, { useEffect, useState } from "react";
import PokemonId from "./PokemonId";

export default function PokemonCard() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=25"
  );
  const [openModal, setOpenModal] = useState(false);
  const [pokemonActive, setPokemonActive] = useState({});

  const showModal = () => {
    setOpenModal(true);
  };

  const getAllData = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function getDataObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setPokemonData((currentlist) => [...currentlist, data]);
        await pokemonData.sort((a, b) => a.id - b.id);
      });
    }

    getDataObject(data.results);
    await console.log(pokemonData);
  };

  useEffect(() => {
    getAllData();
  }, []);

  // function getDataObject berfunsi untul mengambil data dari state loadMore berupa array dari keseluruhan Pokemon yang diminta
  // state pokemonActive untuk mengambil data berupa Object dari array pokemonData dan di oper ke Modals

  return (
    <>
      <section className="w-10/12 mx-auto flex gap-6 py-12 flex-wrap justify-center">
        {pokemonData.map((data, index) => {
          return (
            <div
              className="w-56 h-72 bg-white p-6 rounded-lg cursor-pointer"
              key={index}
              onClick={showModal}
            >
              <p className="text-black">#0{data.id}</p>
              <img
                src={data.sprites.other.dream_world.front_default}
                className="w-40 h-40 mx-auto"
              />
              <h2 className="text-black text-center py-2 font-semibold">
                {data.name}
              </h2>
              <button
                className="text-white py-1 px-2 text-center font-semibold bg-black rounded-lg"
                onClick={() => {
                  setPokemonActive(data);
                  setOpenModal(true);
                }}
              >
                Details
              </button>
            </div>
          );
        })}
      </section>
      <div className="w-5/12 mx-auto flex justify-center">
        <button
          className="px-6 py-2 bg-white rounded-lg text-black font-semibold"
          onClick={() => getAllData()}
        >
          Load More
        </button>
      </div>
      {openModal && (
        <PokemonId setOpenModal={setOpenModal} pokemonActive={pokemonActive} />
      )}
    </>
  );
}
