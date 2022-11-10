import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-[30%] my-4 p-2">
      <div className="flex gap-4 items-center w-full">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3168/3168120.png"
          alt="expense tracker"
          width="30"
        />
        <h1 className="text-center font-medium text-xl my-3 ">FLOWMONEY</h1>
      </div>
      <div className="h-0.5 bg-gray-100"></div>
      <ul className="flex flex-col m-3 mt-0 divide-y ">
        <li className="flex items-center gap-2 justify-start p-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/8042/8042206.png"
            alt="expense tracker"
            width="18"
          />
          <Link href="/">Dashboard</Link>
        </li>
        <li className="flex items-center gap-2 justify-start p-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3514/3514577.png"
            alt="expense tracker"
            width="18"
          />
          <Link href="/Needs">Needs</Link>
        </li>
        <li className="flex items-center gap-2 justify-start p-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3405/3405771.png"
            alt="expense tracker"
            width="18"
          />
          <Link href="/Wants">Wants</Link>
        </li>
        <li className="flex items-center gap-2 justify-start p-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6831/6831818.png"
            alt="expense tracker"
            width="18"
          />
          <Link href="/Investments">Investments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
