import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Needs from "./Needs";
import Wants from "./Wants";
import React from "react";

const Investments = () => {
  return (
    <div className="flex justify-between max-w-7xl pt-2 px-3 mx-auto">
      <Head>
        <title>Investments | FlowMoney App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[30%] my-4 p-2">
        <div className="flex items-center w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7461/7461968.png"
            alt="expense tracker"
            width="30"
          />
          <h1 className="text-center font-medium text-xl my-3">
            expense tracker
          </h1>
        </div>
        <ul className="flex flex-col m-3">
          <li className="p-2">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="p-2">
            <Link href="/Needs">Needs</Link>
          </li>
          <li className="p-2">
            <Link href="/Wants">Wants</Link>
          </li>
          <li className="p-2">
            <Link href="/Investments">Investments</Link>
          </li>
        </ul>
      </div>
      <div div className="w-full">
        <div className="border-4 my-4 p-2 border-green-100 rounded-lg flex flex-col justify-between">
          <div className="text-left mx-1 my-3 p-2 pb-3 border-b  border-slate-300 w-full">
            <div
              id="needs"
              className="px-1 text-base flex flex-row items-center justify-between"
            >
              <div className="w-36">investments</div>
              <div className="w-36 text-center">
                <div>
                  <span>₹</span>
                  <span className="text-lg">46480</span>
                </div>
                <div className="text-sm">expected</div>
              </div>
              <div className="w-36 text-center">
                <div>
                  <span>₹</span>
                  <span className="text-lg">32000</span>
                </div>
                <div className="text-sm">actual</div>
              </div>
              <div className="w-36 text-center hidden sm:block">
                last transition
              </div>
            </div>
          </div>
          {/* <!-- Investment list  --> */}
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/702/702010.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">PPF</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/1962/1962578.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">insurance</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/3063/3063206.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">EF</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/940/940643.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">FFF</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/1172/1172857.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">NPS</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/5180/5180856.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">MF</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/7169/7169339.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">stocks</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/2544/2544087.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">home</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/3275/3275697.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">gold</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/2100/2100958.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">crypto</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/2196/2196259.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">tyke</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/2196/2196259.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">other</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center">
              <span>₹</span>
              <span>46480</span>
            </div>
            <div className="w-36 text-center hidden sm:block">
              <span>₹</span>
              <span>500</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] my-4 p-2">
        <div className="relative w-full lg:max-w-sm">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Needs</option>
            <option>Want</option>
            <option>Investment</option>
          </select>

          <select className="w-full p-2.5 my-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Select any</option>
            <option>Laravel 9 with React</option>
            <option>React with Tailwind CSS</option>
            <option>React With Headless UI</option>
          </select>

          <input
            type="text"
            placeholder="Enter Amount"
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Investments;
