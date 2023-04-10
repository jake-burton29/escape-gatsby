import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import MapButton from "./MapButton";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 navbar bg-neutral text-neutral-content justify-between z-30 pt-[constant(safe-area-inset-top)]">
      <Link
        className="btn btn-ghost normal-case text-xl z-20 md:h-auto h-20 "
        to="/"
      >
        <StaticImage
          src="../images/Logo.jpeg"
          alt="Escape Room Park City"
          className=" w-16"
          loading="lazy"
        />
      </Link>
      <button
        className="md:hidden btn btn-circle z-20 text-orange-400 border-orange-400"
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/location">Location</Link>
              </li>
              <li>
                <Link to="/sanitation">Sanitation & Health</Link>
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
                <a href="tel:4356040556">Call Us</a>
              </li>
              <li>
                <Link to="/contact">Email us</Link>
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
        className={`md:hidden flex-col bg-neutral fixed w-3/4 h-full bottom-0 z-10 py-24 ml-48 duration-500 overflow-y-scroll ${
          open ? "right-0" : "right-[-100%]"
        } `}
      >
        <li className="menu menu-vertical w-full p-2 m-1">
          <div className="collapse collapse-plus border border-orange-300 bg-neutral rounded-box text-orange-400">
            <input type="checkbox" className="w-auto h-auto" />
            <div className="collapse-title text-xl uppercase font-bold py-7 px-4 inline-block bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 ">
              About
            </div>
            <div className="collapse-content">
              <ul className="p-2 bg-inherit text-left text-lg">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/reviews">Reviews</Link>
                </li>
                <li>
                  <Link to="/sanitation">Sanitation & Health</Link>
                </li>
                <li>
                  <Link to="/location">Location</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="collapse collapse-plus border border-orange-300 bg-neutral rounded-box text-orange-400">
            <input type="checkbox" className="w-auto h-auto" />
            <div className="collapse-title text-xl uppercase font-bold py-7 px-4 inline-block bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 ">
              Contact
            </div>
            <div className="collapse-content">
              <ul className="p-2 bg-inherit text-left text-lg">
                <li>
                  <a href="tel:4356040556">Call Us</a>
                </li>
                <li>
                  <Link to="/contact">Message Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="button-group flex justify-center w-auto h-auto mt-3 gap-3">
            <a
              href="tel:4356040556"
              className="btn btn-circle border border-orange-300 text-orange-400 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512 512"
                className="w-8 h-8"
              >
                <path
                  fill="currentColor"
                  d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480Z"
                />
              </svg>
            </a>
            <MapButton
              address={"136 Heber Ave #207, Park City, UT 84068"}
            ></MapButton>
          </div>
          <progress
            className="progress bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 w-auto m-6"
            value={0}
            max="100"
          ></progress>
          <Link
            to="/book"
            className="uppercase font-bold text-center text-3xl m-1 ml-auto mr-auto bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black py-7 px-4 w-7/12 rounded-box textarea-md"
          >
            Book
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
