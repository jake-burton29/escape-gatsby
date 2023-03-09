import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar bg-neutral text-neutral-content justify-between ">
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
            fill="none"
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
            fill="none"
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
        className={`md:hidden flex-col bg-neutral absolute w-3/4 h-full bottom-0 z-10 py-24 ml-48 duration-500 ${
          open ? "right-0" : "right-[-100%]"
        } `}
      >
        <li className="menu menu-vertical ">
          <Link
            to="/about"
            className="uppercase font-bold text-xl py-7 px-3 inline-block bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="uppercase font-bold text-xl py-7 px-3 inline-block bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-transparent"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

<button className="collapse max-w-5 " tabIndex={0}>
  <div className="collapse-title text-xl font-medium pr-0 ">
    <label className="btn btn-circle swap swap-rotate ">
      {/* <!-- this hidden checkbox controls the state --> */}
      <input type="checkbox" className="opacity-0" />

      {/* <!-- hamburger icon --> */}
      <svg
        className="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      {/* <!-- close icon --> */}
      <svg
        className="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  </div>
  <div className="collapse-content">
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</button>;
