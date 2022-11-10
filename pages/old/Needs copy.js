import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Investments from "../Investments";
import Wants from "../Wants";
import React from "react";
const Needs = () => {
  return (
    <div className="flex justify-between max-w-7xl pt-2 px-3 mx-auto">
      <Head>
        <title>Needs | FlowMoney App</title>
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
      <div className="w-full">
        <div className="border-4 my-4 p-2 border-orange-100 rounded-lg flex flex-col justify-between">
          <div className="text-left mx-1 my-3 p-2 pb-3 border-b  border-slate-300 w-full">
            <div
              id="needs"
              className="px-1 text-base flex flex-row items-center justify-between"
            >
              <div className="w-36">needs</div>
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
          {/* <!-- Need list --> */}
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/2515/2515183.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">food</span>
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
                src="https://cdn-icons-png.flaticon.com/512/2603/2603710.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">rent</span>
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
                src="https://cdn-icons-png.flaticon.com/512/2985/2985698.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">electricity</span>
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
                src="https://cdn-icons-png.flaticon.com/512/280/280259.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">mobile</span>
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
                src="https://cdn-icons-png.flaticon.com/512/7223/7223203.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">clothes</span>
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
                src="https://cdn-icons-png.flaticon.com/512/2134/2134868.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">transport</span>
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
                src="https://cdn-icons-png.flaticon.com/512/1052/1052856.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">bills</span>
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
                src="https://cdn-icons-png.flaticon.com/512/1198/1198299.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">EMI</span>
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
                src="https://cdn-icons-png.flaticon.com/512/3257/3257334.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">TDS</span>
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
                src="https://cdn-icons-png.flaticon.com/512/3088/3088425.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">family</span>
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
                src="https://cdn-icons-png.flaticon.com/512/1655/1655086.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">lending</span>
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
                src="https://cdn-icons-png.flaticon.com/512/1721/1721929.png"
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

export default Needs;
