import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Investments from "./Investments";
import Wants from "./Wants";
import React from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

import { useState, useEffect } from "react";
const Needs = () => {
  const [needsData, setNeedsData] = useState();
  const [title, setTitle] = useState("needs");
  const [total, setTotal] = useState([]);
  const getData = () => {
    let url =
      "https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/november2022Api/needs";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // Do something with the data
        const data = json.needs;
        setNeedsData(data.slice(1, -2));
        setTotal(data.slice(-2)[0]);
        console.log(data, "data");
        console.log(data.slice(1, -2), "setNeedsData");
        console.log(data.slice(-2), "setTotal");
      });
  };

  useEffect(() => {
    getData();
    console.log("getData called");
  }, []);

  return (
    <>
      <div className="flex justify-between max-w-7xl pt-2 px-3 mx-auto">
        <Sidebar />
        {needsData && total && (
          <Card
            title={title}
            expected={total.expected}
            actual={total.actual}
            total={total}
            Arr={needsData}
          />
        )}
        {console.log(total)}

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
    </>
  );
};

export default Needs;
