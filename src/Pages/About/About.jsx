import React from "react";
import styles from "./About.module.css";
import { FaStar } from "react-icons/fa";

export default function About() {
  return (
    <div
      className="bg-[#1ABC9C] flex justify-center items-center min-h-screen text-white"
    >
      <div className="container">
        <div>
          <div className="text-center flex flex-col items-center">
            <h1 className="mt-3 uppercase font-semibold text-4xl">
              about component
            </h1>
            <div className="flex justify-center items-center mt-3 gap-4">
              <div className={`${styles.line}`}></div>
              <FaStar />
              <div className={`${styles.line}`}></div>
            </div>
            <div className="flex mt-3 text-start flex-col md:flex-row  justify-center items-center gap-3">
              <p className="m-3 w-10/12 md:w-1/3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="m-3 w-10/12 md:w-1/3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
