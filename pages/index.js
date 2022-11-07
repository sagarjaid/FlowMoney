import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Investments from "./Investments";
import Needs from "./Needs";
import Wants from "./Wants";
import { useState } from "react";

const Home = () => {
  const [selectedDropdown, setSelectedDropdown] = useState("Needs");
  const [selectedDropdownName, setSelectedDropdownName] = useState("");
  const [transactionValue, setTransactionValue] = useState(0);
  const [newTransaction, setNewTransaction] = useState({});

  const handleTransactionValue = (e) => {
    setTransactionValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectedDropdown = (e) => {
    setSelectedDropdown(e.target.value);
    setTransactionValue(0);
    console.log(e.target.value);
  };

  const handleSelectedDropdownName = (e) => {
    setSelectedDropdownName(e.target.value);
    setTransactionValue(0);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit got clicked");

    let ApiName = selectedDropdown.toLowerCase();
    let getUrl = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/november2022Api/${ApiName}`;
    fetch(getUrl)
      .then((response) => response.json())
      .then((json) => {
        // Do something with the data

        console.log(json, "json");
        let [DataArrkey, DataArrValue] = Object.entries(json)[0];
        console.log(DataArrkey, "DataArrkey");
        console.log(DataArrValue, "DataArrValue");
        let newTrans = parseInt(transactionValue);
        let itemId;

        let item = DataArrValue.find((item) => {
          // newTrans =  parseInt(transactionValue);
          itemId = item.id;

          if (item.wants === selectedDropdownName) {
            return item.wants === selectedDropdownName;
          }
          if (item.needs === selectedDropdownName) {
            return item.needs === selectedDropdownName;
          }
          if (item.investments === selectedDropdownName) {
            return item.investments === selectedDropdownName;
          }
          // return (
          //   item?.wants ||
          //   item?.needs ||
          //   item?.investments === selectedDropdownName
          // );
        });

        console.log(item, "item");
        let newTranNum = item.transation1;
        let TranstionNumber = 0;

        if (!newTranNum) {
          TranstionNumber = 1;
        }
        if (newTranNum) {
          TranstionNumber = Object.keys(item).length - 4 + 1;
        }

        let newTranstionNumber = `transation${TranstionNumber}`;

        console.log(TranstionNumber, "TranstionNumber");

        console.log(newTrans, "newTrans");
        console.log(typeof newTrans, "typeof newTrans");
        console.log(itemId, "itemId");

        let putUrl = `https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/november2022Api/${ApiName}/${itemId}`;

        let body;

        if (ApiName === "needs") {
          body = {
            need: {
              ...item,
              actual: null,
            },
          };
          body.need[`${newTranstionNumber}`] = newTrans;

          console.log(body, "needs body");
        }

        if (ApiName === "investments") {
          body = {
            investment: {
              ...item,
              actual: null,
            },
          };
          body.investment[`${newTranstionNumber}`] = newTrans;

          console.log(body, "Investments body");
        }

        if (ApiName === "wants") {
          body = {
            want: {
              ...item,
              actual: null,
            },
          };
          body.want[`${newTranstionNumber}`] = newTrans;

          console.log(body, "wants body");
        }

        fetch(putUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((json) => {
            // Do something with object
            console.log(json, "last json");
          });
      });
  };
  return (
    <div className="flex justify-between max-w-7xl pt-2 px-3 mx-auto">
      <Head>
        <title>FlowMoney App</title>
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
        <div className="border my-4 p-2 border-stone-300 rounded-lg flex justify-between">
          <div className="m-1 p-2.5 bg-rose-200 rounded-md grow">
            <h2 className="text-base">income</h2>
            <div>
              <span>₹</span>
              <span className="text-2xl">116000</span>
            </div>
          </div>
          <div className="m-1 p-2.5 bg-green-200 rounded-md grow">
            <h2 className="text-base">expenses</h2>
            <span>₹</span>
            <span className="text-2xl">116000</span>
          </div>
        </div>
        {/* <!-- 2nd section --> */}
        <div className="border my-4 p-2 border-red-200 rounded-lg flex flex-col sm:flex-row justify-between">
          {/* <!-- needs --> */}
          <div className="text-center mx-1 my-3 p-2 bg-slate-50 rounded-md grow">
            <div id="needs" className="text-orange-600 font-medium">
              needs
            </div>
            <div className="py-4">
              <div>
                <span>₹</span>
                <span className="text-2xl font-semibold">32000</span>
              </div>
              <div className="text-sm">actual</div>
            </div>
            <div>
              <div>
                <span>₹</span>
                <span className="text-lg">46480</span>
              </div>
              <div className="text-sm">expected</div>
            </div>
            <div className="text-lg font-semibold pt-4">40%</div>
          </div>
          {/* want */}
          <div className="text-center mx-1 my-3 p-2 bg-slate-50  rounded-md grow">
            <div id="needs" className="text-blue-500 font-medium">
              wants
            </div>
            <div className="py-4">
              <div>
                <span>₹</span>
                <span className="text-2xl font-semibold">50000</span>
              </div>
              <div className="text-sm">actual</div>
            </div>
            <div>
              <div>
                <span>₹</span>
                <span className="text-lg">39878</span>
              </div>
              <div className="text-sm">expected</div>
            </div>
            <div className="text-lg font-semibold pt-4">25%</div>
          </div>
          {/* <!-- investments --> */}
          <div className="text-center mx-1 my-3 p-2 bg-slate-50 rounded-md grow">
            <div id="needs" className="text-green-500 font-medium">
              investments
            </div>
            <div className="py-4">
              <div>
                <span>₹</span>
                <span className="text-2xl font-semibold">29000</span>
              </div>
              <div className="text-sm">actual</div>
            </div>
            <div>
              <div>
                <span>₹</span>
                <span className="text-lg">43999</span>
              </div>
              <div className="text-sm">expected</div>
            </div>
            <div className="text-lg font-semibold pt-4">35%</div>
          </div>
        </div>
        {/* <Needs />
            <Wants />
            <Investments /> */}
      </div>

      <div className="w-[40%] my-4 p-2">
        <div className="relative w-full lg:max-w-sm">
          <form onSubmit={handleSubmit}>
            <select
              value={selectedDropdown}
              onChange={handleSelectedDropdown}
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option value="Needs">Needs</option>
              <option value="Wants">Want</option>
              <option value="Investments">Investment</option>
            </select>

            <select
              value={selectedDropdownName}
              onChange={handleSelectedDropdownName}
              className="w-full p-2.5 my-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            >
              <option>Select entry</option>
              {selectedDropdown === "Needs" ? (
                <optgroup label="needs">
                  <option value="Food">Food</option>
                  <option value="Rent">Rent</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Transport">Transport</option>
                  <option value="Bills">Bills</option>
                  <option value="EMI">EMI</option>
                  <option value="Health">Health</option>
                  <option value="Insurance">Insurance</option>
                  <option value="TDS">TDS</option>
                  <option value="Family">Family</option>
                  <option value="Lending">Lending</option>
                  <option value="Other">Other</option>
                </optgroup>
              ) : selectedDropdown === "Wants" ? (
                <optgroup label="wants">
                  <option value="Car">Car</option>
                  <option value="ecom">ecom</option>
                  <option value="Phone">Phone</option>
                  <option value="Bills">Bills</option>
                  <option value="Dining Out">Dining Out</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Leisure">Leisure</option>
                  <option value="Startup">Startup</option>
                  <option value="Travel">Travel</option>
                  <option value="Other">Other</option>
                </optgroup>
              ) : (
                <optgroup label="Investments">
                  <option value="PPF">PPF</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Emergency Fund">Emergency Fund</option>
                  <option value="Future Family Fund">Future Family Fund</option>
                  <option value="NPS">NPS</option>
                  <option value="MF">MF</option>
                  <option value="Stocks">Stocks</option>
                  <option value="Home">Home</option>
                  <option value="Gold">Gold</option>
                  <option value="Crypto">Crypto</option>
                  <option value="Tyke">Tyke</option>
                </optgroup>
              )}
            </select>

            <input
              type="text"
              placeholder="Enter Amount"
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              value={transactionValue}
              onChange={handleTransactionValue}
            />
            <button className="w-full p-2.5 text-white my-2 bg-blue-500 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              Submit
            </button>
          </form>
          {selectedDropdown}
          {selectedDropdownName}
          {transactionValue}
        </div>
      </div>
    </div>
  );
};

export default Home;
