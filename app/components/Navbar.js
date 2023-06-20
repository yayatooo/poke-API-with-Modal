import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between px-32 py-8">
      <div className="w-2/12">
        <img src="./logopokemon.png" />
      </div>
      <input
        type="search"
        placeholder="Search Your Pokemon"
        className="rounded-full my-4 text-center border-blue-800 text-black"
      />
    </nav>
  );
};

export default Navbar;
