import React from "react";

const MainTile = (props) => {
  const { income, expenses, salary, remaining } = props;
  return (
    <div className="border my-4 p-2 border-stone-300 rounded-lg flex justify-between">
      <div className="m-1 p-2.5 bg-green-200 rounded-md grow">
        <h2 className="text-base">income</h2>
        <div>
          <span>₹</span>
          <span className="text-2xl">{income}</span>
        </div>
      </div>
      <div className="m-1 p-2.5 bg-green-200 rounded-md grow">
        <h2 className="text-base">expenses</h2>
        <span>₹</span>
        <span className="text-2xl">{expenses}</span>
      </div>
      <div className="m-1 p-2.5 bg-green-200 rounded-md grow">
        <h2 className="text-base">salary</h2>
        <span>₹</span>
        <span className="text-2xl">{salary}</span>
      </div>
      <div className="m-1 p-2.5 bg-green-200 rounded-md grow">
        <h2 className="text-base">remaining</h2>
        <span>₹</span>
        <span className="text-2xl">{remaining}</span>
      </div>
    </div>
  );
};

export default MainTile;
