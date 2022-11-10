import React from "react";

const WantCard = (props) => {
  const { wantsExpected, wantsActual, wantsPercentage } = props;
  return (
    <div className="text-center mx-1 my-3 p-2 bg-slate-50 rounded-md grow">
      <div id="wants" className="text-blue-500 font-medium">
        wants
      </div>
      <div className="py-4">
        <div>
          <span>₹</span>
          <span className="text-2xl font-semibold">{wantsActual}</span>
        </div>
        <div className="text-sm">actual</div>
      </div>
      <div>
        <div>
          <span>₹</span>
          <span className="text-lg">{wantsExpected}</span>
        </div>
        <div className="text-sm">expected</div>
      </div>
      <div className="text-lg font-semibold pt-4">
        {`${wantsPercentage * 100}%`}
      </div>
    </div>
  );
};

export default WantCard;
