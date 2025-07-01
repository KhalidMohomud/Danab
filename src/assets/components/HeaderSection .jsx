// HeaderSection.jsx
import React from "react";
import { BsArchive } from "react-icons/bs";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = ({ darkMode, toggleDarkMode }) => (
  <>
    {/* Top Icons */}
    <div className="flex justify-between items-center mb-4">
      <div className="flex-1 flex justify-center">
        <div className="w-17 h-17 bg-white dark:bg-gray-800 rounded-full shadow flex items-center justify-center">
          <BsArchive className="text-pink-500 dark:text-purple-300 h-20 w-10" />
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow flex items-center justify-center"
      >
        <FontAwesomeIcon
          icon={faMoon}
          className="text-purple-600 dark:text-purple-300"
        />
      </button>
    </div>

    {/* Header */}
    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-xl text-center py-6 shadow-lg">
      <h1 className="text-xl font-extrabold leading-tight">
        Danab - Cafe Castello
        <br />
        Taleex
      </h1>
      <p className="text-sm font-light">Dooro muddoada kugu habboon</p>
    </div>
  </>
);

export default HeaderSection;
