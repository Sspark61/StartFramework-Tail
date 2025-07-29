import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
      <div className="flex flex-col w-full">
        <div
          className="bg-[#2C3E50] p-12 text-white flex justify-center items-center flex-col gap-10 md:gap-36 md:flex-row"
        >
          <div className="text-center md:w-1/3">
            <h1 className="uppercase font-semibold">Location</h1>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
          </div>
          <div className="text-center md:w-1/3">
            <h1 className="uppercase font-semibold">Around The Web</h1>
            <div className="flex justify-center gap-4 mt-2">
              <FaFacebook className="text-white text-2xl" />
              <FaTwitter className="text-white text-2xl" />
              <FaLinkedinIn className="text-white text-2xl" />
              <FaGoogle className="text-white text-2xl" />
            </div>
          </div>
          <div className="text-center md:w-1/3">
            <h1 className="uppercase font-semibold">about freelancer</h1>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
        <div className="bg-[#17212A] p-3.5 text-center text-white">
          <p>
            Copyright © Your Website 2025
          </p>
        </div>
      </div>
  );
}
