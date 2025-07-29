import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaStar } from "react-icons/fa";

export default function Contact() {
  const [nameFocused, setNameFocused] = useState(false);
  const [ageFocused, setAgeFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const handleFocus = (e) => {
    if (e.target.name === "username") {
      const value = e.target.value;
      setNameFocused(value.trim() !== "");
    } else if (e.target.name === "userage") {
      const value = e.target.value;
      setAgeFocused(value.trim() !== "");
    } else if (e.target.name === "useremail") {
      const value = e.target.value;
      setEmailFocused(value.trim() !== "");
    } else if (e.target.name === "userpassword") {
      const value = e.target.value;
      setPassFocused(value.trim() !== "");
    }
  };
  return (
    <div className="flex justify-center items-center p-5 min-h-screen mt-5 w-full">
      <div className="w-full md:w-8/12 lg:w-1/2">
        <div>
          <div className="w-full text-center flex flex-col items-center">
            <h1 className="mt-3 uppercase text-4xl font-bold">
              contact section
            </h1>
            <div className="flex justify-center items-center mt-3 gap-4">
              <div className={`${styles.line}`}></div>
              <FaStar />
              <div className={`${styles.line}`}></div>
            </div>
          </div>
        </div>
        <form
          action=""
          className="w-full p-3 mx-auto mt-5 flex flex-col justify-start"
        >
          <label
            htmlFor="username"
            className={`relative w-full  ${nameFocused ? "top-0" : "top-10"}`}
          >
            User Name :
          </label>
          <input
            type="text"
            id="username"
            className="border-b-1 border-gray-300 bg-white py-3 relative outline-0"
            placeholder="User Name"
            name="username"
            onChange={handleFocus}
          />
          <label
            htmlFor="userage"
            className={`relative w-100  ${
              ageFocused ? "top-0" : "top-10"
            }`}
          >
            User Age :
          </label>
          <input
            type="text"
            id="userage"
            className="border-b-1 border-gray-300 bg-white py-3 relative outline-0"
            placeholder="User Age"
            name="userage"
            onChange={handleFocus}
          />
          <label
            htmlFor="useremail"
            className={`relative w-100  ${
              emailFocused ? "top-0" : "top-10"
            }`}
          >
            User Email :
          </label>
          <input
            type="text"
            id="useremail"
            className="border-b-1 border-gray-300 bg-white py-3 relative outline-0"
            placeholder="User Email"
            name="useremail"
            onChange={handleFocus}
          />
          <label
            htmlFor="userpassword"
            className={`relative w-100  ${
              passFocused ? "top-0" : "top-10"
            }`}
          >
            User Password :
          </label>
          <input
            type="text"
            id="userpassword"
            className="border-b-1 border-gray-300 bg-white py-3 relative outline-0"
            placeholder="User Password"
            name="userpassword"
            onChange={handleFocus}
          />
          <button className="bg-[#1abc9c] btn mt-4 text-white rounded-2xl w-1/2 md:w-1/4 h-10">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
