import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 navbar bg-neutral text-neutral-content justify-between z-30 ">
      <Link
        className="btn btn-ghost normal-case text-xl z-20 md:h-auto h-20 "
        to="/"
      >
        <StaticImage
          src="../images/Logo.jpeg"
          alt="Escape Room Park City"
          className=" w-16"
        />
      </Link>
      <button
        className="md:hidden btn btn-ghost btn-circle z-20"
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="url(#RadialGradient)"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <defs>
              <radialGradient id="RadialGradient">
                <stop offset="0%" stop-color="yellow-300" />
                <stop offset="50%" stop-color="orange-400" />
                <stop offset="100%" stop-color="red-500" />
              </radialGradient>
            </defs>

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="url(#RadialGradient)"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0} className="px-1 z-10">
            <Link to="/about" className="btn btn-ghost">
              About
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-base-100  ">
              <li>
                <a>Our Rooms</a>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <a>Dirk's Interview</a>
              </li>
            </ul>
          </li>

          <li tabIndex={0} className="px-1 z-10">
            <Link to="/contact" className="btn btn-ghost">
              Contact
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-base-100">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              className="btn bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black"
              to="/book"
            >
              Book
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Nav Dropdown */}

      <ul
        className={`md:hidden flex-col bg-neutral fixed w-3/4 h-full bottom-0 z-10 py-24 ml-48 duration-500 ${
          open ? "right-0" : "right-[-100%]"
        } `}
      >
        <li className="menu menu-vertical w-full p-1">
          <div className="collapse collapse-plus border border-base-300 bg-neutral rounded-box bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black">
            <input type="checkbox" className="w-auto h-auto" />
            <div className="collapse-title text-xl uppercase font-bold py-7 px-4 inline-block bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 ">
              About
            </div>
            <div className="collapse-content">
              <ul className="p-2 bg-inherit text-left">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to="/contact"
            className="uppercase font-bold text-xl py-7 px-3 inline-block bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent"
          >
            Contact
          </Link>
        </li>
        <Link
          to="/book"
          className="uppercase font-bold text-xl m-1 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black py-7 px-4 w-full rounded-box"
        >
          Book
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
