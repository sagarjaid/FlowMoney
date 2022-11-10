import React from "react";
import Options from "./Options";
import { NeedsArr, WantsArr, InvestmentsArr } from "./selectData";

const AddTransaction = (props) => {
  const {
    month,
    year,
    handleSubmit,
    selectedDropdown,
    handleSelectedDropdown,
    selectedDropdownName,
    handleSelectedDropdownName,
    transactionValue,
    handleTransactionValue,
  } = props;

  return (
    <div className="w-[40%] my-4 p-2">
      <div className="relative w-full lg:max-w-sm">
        <h3 className="pb-2.5">{`${month} ${year}`}</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <select
            value={selectedDropdown}
            onChange={(e) => handleSelectedDropdown(e)}
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            <option value="Needs">Needs ↓</option>
            <option value="Wants">Want ↓</option>
            <option value="Investments">Investment ↓</option>
          </select>

          <select
            value={selectedDropdownName}
            onChange={(e) => handleSelectedDropdownName(e)}
            className="w-full p-2.5 my-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            <option>Select entry ↓</option>
            {selectedDropdown === "Needs" ? (
              <Options Arr={NeedsArr} labelName="needs" />
            ) : selectedDropdown === "Wants" ? (
              <Options Arr={WantsArr} labelName="wants" />
            ) : (
              <Options Arr={InvestmentsArr} labelName="investments" />
            )}
          </select>
          <input
            type="text"
            placeholder="Enter Amount"
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            value={transactionValue}
            onChange={(e) => handleTransactionValue(e)}
          />

          {/* <div className=" flex justify-evenly gap-1 items-center text-center w-full h-max">
            <span
              onClick={() => {
                handleAdd(100);
              }}
              className="w-full py-2 text-black my-2 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 cursor-pointer"
            >
              +100
            </span>
            <span
              onClick={() => {
                handleAdd(500);
              }}
              className="w-full py-2 text-black my-2  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 cursor-pointer"
            >
              +500
            </span>

            <span
              onClick={() => {
                handleAdd(1000);
              }}
              className="w-full py-2 text-black my-2  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 cursor-pointer"
            >
              +1000
            </span>
          </div> */}

          <button className="w-full p-2.5 text-white my-2 bg-blue-500 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            Add Record
          </button>
        </form>
        <p className="text-sm">{`${selectedDropdown} >> ${
          selectedDropdownName || "Select entry"
        } >> ₹ ${transactionValue}`}</p>
      </div>
    </div>
  );
};

export default AddTransaction;
