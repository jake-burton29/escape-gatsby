import { GatsbyImage } from "gatsby-plugin-image";

import React from "react";

const RoomCard = (props) => {
  return (
    <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-3xl my-3 ">
      <div className="md:flex md:bg-slate-300 sm:bg-slate-100">
        <div className="md:shrink-0">
          <GatsbyImage
            className="h-fit w-full  md:h-full md:w-48"
            image={props.imageData}
            alt={props.alt}
          />
        </div>
        <div className="p-4 bg-slate-300">
          <h2 className="card-title text-bold bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent">
            {props.title}
          </h2>
          <p className="block mt-1 text-lg leading-tight font-medium text-black ">
            {props.players}
            <br />
            {props.length}
            <br />
            {props.cost}
          </p>
          <div className="card-actions justify-end pt-2">
            <button className="btn border-none bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black">
              Book
            </button>
            <button className="btn border-none bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
