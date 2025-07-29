import React from "react";
import avatar from "../../assets/avataaars.svg";
import styles from "./Home.module.css";
import { FaStar } from "react-icons/fa";


export default function Home() {
  return (
    <div className="bg-[#1abc9c] text-white flex justify-center items-center min-h-screen w-full">
      <div>
        <div>
          <div className="text-center flex flex-col items-center">
            <img src={avatar} alt="Avatar" className={`${styles.avatar}`}/>
            <h1 className="mt-3 uppercase font-bold text-5xl">Start FrameWork</h1>
            <div className="flex justify-center items-center mt-3 gap-4">
              <div className={`${styles.line}`}></div>
              <FaStar/>
              <div className={`${styles.line}`}></div>
            </div>
            <h3 className="mt-3">Graphic Artist - Web Designer - Illustrator</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
