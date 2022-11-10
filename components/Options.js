import React from "react";

const Options = (props) => {
  const { Arr, labelName } = props;
  return (
    <optgroup label={labelName}>
      {Arr &&
        Arr.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
    </optgroup>
  );
};

export default Options;
