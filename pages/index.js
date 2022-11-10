import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Investments from "./Investments";
import Needs from "./Needs";
import Wants from "./Wants";
import { useState, useEffect } from "react";
import MainTile from "../components/MainTile";
import NeedCard from "../components/NeedCard";
import WantCard from "../components/WantCard";
import InvestmentCard from "../components/InvestmentCard";
import AddTransaction from "../components/AddTransaction";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [selectedDropdown, setSelectedDropdown] = useState("Needs");
  const [selectedDropdownName, setSelectedDropdownName] = useState("");
  const [transactionValue, setTransactionValue] = useState(0);
  const [monthData, setMonthData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

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

        setTimeout(() => {
          getData();
          console.log("getData called inside setTimeout");
        }, 1500);

        setIsSubmit(true);
        setTransactionValue(0);
        setSelectedDropdownName("");
      });
  };

  const getData = () => {
    let url =
      "https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/november2022Api/month";
    // let url = "https://jsonplaceholder.typicode.com/posts/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // Do something with the data
        setMonthData(json.month);
        console.log(json.month);
      });
  };

  useEffect(() => {
    getData();
    console.log("getData called");
  }, []);

  return (
    <>
      {monthData &&
        monthData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between max-w-7xl pt-2 px-3 mx-auto"
            >
              <Head>
                <title>FlowMoney App</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>

              <Sidebar />

              <div div className="w-full">
                <MainTile
                  income={item.totalIncome}
                  expenses={item.totalSpentThisMonth}
                  salary={item.endingSalary}
                  remaining={item.totalRemainingThisMonth}
                />
                {/* <!-- 2nd section --> */}
                <div className="border my-4 p-2 border-red-200 rounded-lg flex flex-col sm:flex-row justify-between">
                  {/* <!-- needs --> */}
                  <NeedCard
                    needsExpected={item.needsExpected}
                    needsActual={item.needsActual}
                    needsPercentage={item.needsPercentage}
                  />
                  {/* want */}
                  <WantCard
                    wantsExpected={item.wantsExpected}
                    wantsActual={item.wantsActual}
                    wantsPercentage={item.wantsPercentage}
                  />
                  {/* <!-- investments --> */}
                  <InvestmentCard
                    investmentsExpected={item.investmentsExpected}
                    investmentsActual={item.investmentsActual}
                    investmentsPercentage={item.investmentsPercentage}
                  />
                </div>
              </div>
              <AddTransaction
                month={item.month}
                year={item.year}
                handleSubmit={handleSubmit}
                selectedDropdown={selectedDropdown}
                handleSelectedDropdown={handleSelectedDropdown}
                selectedDropdownName={selectedDropdownName}
                handleSelectedDropdownName={handleSelectedDropdownName}
                transactionValue={transactionValue}
                handleTransactionValue={handleTransactionValue}
              />
            </div>
          );
        })}
    </>
  );
};

export default Home;
