import React from "react";

const Card = (props) => {
  const { title, expected, actual, Arr } = props;

  console.log(props);
  return (
    <div className="w-full">
      <div className="border-4 my-4 p-2 border-orange-100 rounded-lg flex flex-col justify-between">
        <div className="text-left mx-1 my-3 p-2 pb-3 border-b  border-slate-300 w-full">
          <div
            id={title}
            className="px-1 text-base flex flex-row items-center justify-between"
          >
            <div className="w-36">{title}</div>
            <div className="w-36 text-center">
              <div>
                <span>₹</span>
                <span className="text-lg">{expected}</span>
              </div>
              <div className="text-sm">expected</div>
            </div>
            <div className="w-36 text-center">
              <div>
                <span>₹</span>
                <span className="text-lg">{actual}</span>
              </div>
              <div className="text-sm">actual</div>
            </div>
            <div className="w-36 text-center hidden sm:block">
              last transition
            </div>
          </div>
        </div>

        {/* <!-- Need list --> */}

        {Arr.map((item) => {
          const ls = Object.keys(item);
          const lastTransition = ls[ls.length - 2];
          console.log(lastTransition);
          return (
            <div
              key={item.id}
              className="text-left m-1 p-4 bg-slate-50 rounded-3xl w-full flex flex-row items-center justify-between"
            >
              <div className="flex items-center w-36">
                <img
                  className="inline"
                  src="https://cdn-icons-png.flaticon.com/512/1721/1721929.png"
                  alt="food"
                  width="20"
                />
                <span className="ml-1">
                  {title === "needs"
                    ? item.needs
                    : title === "wants"
                    ? item.wants
                    : item.investments}
                </span>
              </div>
              <div className="w-36 text-center">
                <span>₹</span>
                <span>{item.expected}</span>
              </div>
              <div className="w-36 text-center">
                <span>₹</span>
                <span>{item.actual}</span>
              </div>
              <div className="w-36 text-center hidden sm:block">
                <span>₹</span>
                <span>{item.lastTransition || 0}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
