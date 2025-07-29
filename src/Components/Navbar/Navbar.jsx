import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={`${styles.navbar} w-full fixed top-0 left-0 p-3.5`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          className="text-white uppercase text-xl md:text-2xl lg:text-3xl"
          to=""
        >
          start framework
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 uppercase">
            <li>
              <NavLink
                to="About"
                className={(check) =>
                  check.isActive
                    ? `${styles.active} nav-link text-white p-2 transition-all duration-300`
                    : "nav-link text-white p-2 transition-all duration-300`"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Portfolio"
                className={(check) =>
                  check.isActive
                    ? `${styles.active} nav-link text-white p-2 transition-all duration-300`
                    : "nav-link text-white p-2 transition-all duration-300`"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Contact"
                className={(check) =>
                  check.isActive
                    ? `${styles.active} nav-link text-white p-2 transition-all duration-300`
                    : "nav-link text-white p-2 transition-all duration-300`"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
