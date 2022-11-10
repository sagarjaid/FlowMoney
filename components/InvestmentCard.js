import React from "react";

const InvestmentCard = (props) => {
  const { investmentsExpected, investmentsActual, investmentsPercentage } =
    props;
  return (
    <div className="text-center mx-1 my-3 p-2 bg-slate-50 rounded-md grow">
      <div id="investments" className="text-green-500  font-medium">
        investments
      </div>
      <div className="py-4">
        <div>
          <span>₹</span>
          <span className="text-2xl font-semibold">{investmentsActual}</span>
        </div>
        <div className="text-sm">actual</div>
      </div>
      <div>
        <div>
          <span>₹</span>
          <span className="text-lg">{investmentsExpected}</span>
        </div>
        <div className="text-sm">expected</div>
      </div>
      <div className="text-lg font-semibold pt-4">
        {`${investmentsPercentage * 100}%`}
      </div>
    </div>
  );
};

export default InvestmentCard;
