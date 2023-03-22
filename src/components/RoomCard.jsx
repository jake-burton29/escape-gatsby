import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useState } from "react";
import { useTimeoutFn } from "react-use";
import React from "react";
import { Transition } from "@headlessui/react";

const RoomCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // let [, , resetIsFlipped] = useTimeoutFn(() => setIsFlipped(true), 500);
  return (
    <Transition
      show={!isFlipped}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {!isFlipped ? (
        <div className="max-w-md mx-auto rounded-xl shadow-neutral shadow-lg overflow-hidden md:max-w-3xl my-3 group">
          <div className="md:flex md:bg-neutral sm:bg-slate-100">
            <div className="md:shrink-0">
              <GatsbyImage
                loading="lazy"
                className="h-fit w-full  md:h-full md:w-48"
                image={props.imageData}
                alt={props.alt}
              />
            </div>
            <div className="p-4 bg-neutral">
              <h2 className="card-title text-bold bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent">
                {props.title}
              </h2>
              <p className="block mt-1 text-lg leading-tight font-medium text-gray-400 ">
                {props.players}
                <br />
                {props.length}
                <br />
                {props.cost}
              </p>
              <div className="card-actions justify-end pt-2">
                <Link
                  to="/book"
                  className="btn border-none bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black"
                >
                  Book
                </Link>
                <button
                  id="moreInfo"
                  className="btn border-none bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black "
                  onClick={() => {
                    setIsFlipped(!isFlipped);
                  }}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto rounded-xl shadow-neutral shadow-lg overflow-hidden md:max-w-3xl my-3 group">
          <div className="md:flex md:bg-neutral sm:bg-slate-100">
            <div className="md:shrink-0">
              <GatsbyImage
                loading="lazy"
                className="h-fit w-full  md:h-full md:w-48"
                image={props.imageData}
                alt={props.alt}
              />
            </div>
            <div className="p-4 bg-neutral">
              <h2 className="card-title text-bold bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent">
                {props.title}
              </h2>
              <p className="block mt-1 text-lg leading-tight font-medium text-gray-400 "></p>
              <div className="card-actions justify-end pt-2">
                <Link
                  to="/book"
                  className="btn border-none bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black"
                >
                  Book
                </Link>
                <button
                  id="moreInfo"
                  className="btn border-none bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black "
                  onClick={() => {
                    setIsFlipped(!isFlipped);
                  }}
                >
                  Less Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default RoomCard;
