import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonMenu() {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-white text-center">
        Click For the Details
      </h1>
      <div>
        <PokemonCard />
      </div>
    </section>
  );
}
