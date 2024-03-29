import { Transition } from "@headlessui/react";
import { useState } from "react";
import React from "react";
function RoomCardBack() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Transition show={isShowing}>
      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      ></Transition.Child>

      {/* Sliding sidebar */}
      <Transition.Child
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      ></Transition.Child>
    </Transition>
  );
}
export default RoomCardBack;
