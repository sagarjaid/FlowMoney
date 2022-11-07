import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Investments from "./Investments";
import Needs from "./Needs";
import React from "react";

const Wants = () => {
  return (
    <div className="flex justify-between max-w-7xl pt-2 px-3 mx-auto">
      <Head>
        <title>Create Next App</title>
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
        <div className="border-4 my-4 p-2 border-blue-100 rounded-lg flex flex-col justify-between">
          <div className="text-left mx-1 my-3 p-2 pb-3 border-b  border-slate-300 w-full">
            <div
              id="wants"
              className="px-1 text-base flex flex-row items-center justify-between"
            >
              <div className="w-36">wants</div>
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
          {/* <!-- want list --> */}
          <div className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-36">
              <img
                className="inline"
                src="https://cdn-icons-png.flaticon.com/512/1068/1068671.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">car</span>
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
                src="https://cdn-icons-png.flaticon.com/512/2543/2543266.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">ecom</span>
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
                src="https://cdn-icons-png.flaticon.com/512/1180/1180304.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">phone</span>
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
                src="https://cdn-icons-png.flaticon.com/512/2082/2082063.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">dining</span>
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
                src="https://cdn-icons-png.flaticon.com/512/920/920562.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">drinks</span>
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
                src="https://cdn-icons-png.flaticon.com/512/1710/1710249.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">leisure</span>
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
                src="https://cdn-icons-png.flaticon.com/512/3387/3387223.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">startup</span>
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
                src="https://cdn-icons-png.flaticon.com/512/761/761505.png"
                alt="food"
                width="20"
              />
              <span className="ml-1">travel</span>
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

export default Wants;
