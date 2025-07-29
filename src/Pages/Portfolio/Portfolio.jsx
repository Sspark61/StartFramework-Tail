import React, { useState } from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import styles from "./Portfolio.module.css";
import { TiPlus } from "react-icons/ti";
import { FaStar } from "react-icons/fa";


export default function Portfolio() {
  const [image, setImage] = useState();
  const [modalVis, setModalVis] = useState(false);
  const displayimg = (image) => {
    console.log(image);

    setImage(image);
    setModalVis(true);
  };

  const hidemodal = () => {
    setModalVis(false);
    setImage();
  };

  return (
    <div
      className="flex justify-center items-center p-5 min-h-screen mt-20 md:mt-10 lg:mt-20"
    >
      <div
        className={`${
          modalVis ? "block" : "hidden"
        } fixed w-full h-full top-0 bg-black/50 z-1 flex justify-center items-center`}
        onClick={hidemodal}
      ></div>
      <div className="z-3 fixed">
        <img src={image} alt=""/>
      </div>
      <div className="container">
        <div>
          <div className="text-center flex flex-col items-center">
            <h1 className="mt-3 uppercase text-4xl font-bold text-[#2C3E50]">
              portfolio component
            </h1>
            <div className="flex justify-center items-center mt-3 gap-4">
              <div className={`${styles.line}`}></div>
              <FaStar/>
              <div className={`${styles.line}`}></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap mt-3">
          <div className="xl:w-1/4 w-full md:w-1/3 m-4">
            <div
              className="w-fit h-fit cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-800 ease-in-out group"
              onClick={() => displayimg(port1)}
            >
              <img src={port1} alt=""/>
              <div
                className="bg-[#1ABC9C] opacity-0 absolute w-full h-full top-0 start-0 flex items-center justify-center  transition-all duration-300 ease-in-out group group-hover:opacity-80"
              >
                <TiPlus
                  className={`${styles.faPlus} text-white text-7xl`}
                />
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 w-full md:w-1/3 m-4">
            <div
              className="w-fit h-fit cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-800 ease-in-out group"
              onClick={() => displayimg(port2)}
            >
              <img src={port2} alt=""/>
              <div
                className="bg-[#1ABC9C] opacity-0 absolute w-full h-full top-0 start-0 flex items-center justify-center  transition-all duration-300 ease-in-out group group-hover:opacity-80"
              >
                <TiPlus
                  className={`${styles.faPlus} text-white text-7xl`}
                />
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 w-full md:w-1/3 m-4">
            <div
              className="w-fit h-fit cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-800 ease-in-out group"
              onClick={() => displayimg(port3)}
            >
              <img src={port3} alt=""/>
              <div
                className="bg-[#1ABC9C] opacity-0 absolute w-full h-full top-0 start-0 flex items-center justify-center  transition-all duration-300 ease-in-out group group-hover:opacity-80"
              >
                <TiPlus
                  className={`${styles.faPlus} text-white text-7xl`}
                />
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 w-full md:w-1/3 m-4">
            <div
              className="w-fit h-fit cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-800 ease-in-out group"
              onClick={() => displayimg(port1)}
            >
              <img src={port1} alt=""/>
              <div
                className="bg-[#1ABC9C] opacity-0 absolute w-full h-full top-0 start-0 flex items-center justify-center  transition-all duration-300 ease-in-out group group-hover:opacity-80"
              >
                <TiPlus
                  className={`${styles.faPlus} text-white text-7xl`}
                />
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 w-full md:w-1/3 m-4">
            <div
              className="w-fit h-fit cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-800 ease-in-out group"
              onClick={() => displayimg(port2)}
            >
              <img src={port2} alt=""/>
              <div
                className="bg-[#1ABC9C] opacity-0 absolute w-full h-full top-0 start-0 flex items-center justify-center  transition-all duration-300 ease-in-out group group-hover:opacity-80"
              >
                <TiPlus
                  className={`${styles.faPlus} text-white text-7xl`}
                />
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 w-full md:w-1/3 m-4">
            <div
              className="w-fit h-fit cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-800 ease-in-out group"
              onClick={() => displayimg(port3)}
            >
              <img src={port3} alt=""/>
              <div
                className="bg-[#1ABC9C] opacity-0 absolute w-full h-full top-0 start-0 flex items-center justify-center  transition-all duration-300 ease-in-out group group-hover:opacity-80"
              >
                <TiPlus
                  className={`${styles.faPlus} text-white text-7xl`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
