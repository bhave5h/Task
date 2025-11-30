import React from "react";
import Dither from "./Dither";

const Header = ({ username }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 py-4 gap-6">

      <div>
        <h1 className="text-2xl md:text-3xl font-medium text-white leading-snug">
          Hello,
          <br />
          <span className="text-3xl md:text-4xl font-bold text-white">
            {username}
          </span>
        </h1>
        <p className="text-dark-muted text-sm md:text-base mt-1">
          Welcome back to your dashboard.
        </p>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">

        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full p-1">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <button className="flex items-center gap-2 bg-red-400 text-lg text-black px-4 py-2 rounded-xl font-bold">
          <span className="text-sm md:text-base">Log Out</span>
        </button>

      </div>
    </div>
  );
};

export default Header;
