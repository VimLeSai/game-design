import React from "react";

const GamesSection = ({ title, games }) => {
  return (
    <section className="my-4 text-lg">
      <b className="block mb-3">{title}</b>
      <div className="flex flex-row items-start justify-start gap-4 overflow-x-auto text-base">
        {games.map((game) => (
          <div key={game.name} className="relative flex flex-col gap-2">
            <img className="rounded-xl w-[163px] h-[163px] object-cover" alt="" src={game.image} />
            <b className="">{game.name}</b>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
