import React from "react";

function Listitems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming ",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telgu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Freebird",
  ];
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-4">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className=" flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 mb-4"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Listitems;
