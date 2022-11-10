import React from "react";

const NeedCard = (props) => {
  const { needsExpected, needsActual, needsPercentage } = props;
  return (
    <div className="text-center mx-1 my-3 p-2 bg-slate-50 rounded-md grow">
      <div id="needs" className="text-orange-600 font-medium">
        needs
      </div>
      <div className="py-4">
        <div>
          <span>₹</span>
          <span className="text-2xl font-semibold">{needsActual}</span>
        </div>
        <div className="text-sm">actual</div>
      </div>
      <div>
        <div>
          <span>₹</span>
          <span className="text-lg">{needsExpected}</span>
        </div>
        <div className="text-sm">expected</div>
      </div>
      <div className="text-lg font-semibold pt-4">
        {`${needsPercentage * 100}%`}
      </div>
    </div>
  );
};

export default NeedCard;
