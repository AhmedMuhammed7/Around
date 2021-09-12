/*eslint-disable */
/*import React from "react";

const Page = () => {
  const [value, setValue] = React.useState("");
  const handleValue = (e) => {
     const re = /^[0-9,.,-]+$/
     const isMoreThanMinimum = (number) => number >= -90;
     const isLessThanMaximum = number <= 90
    if (inputVal === "-") {
      setValue(inputVal);
    } else {
      if (
        (re.test(inputVal) &&
          inputVal >= -90 &&
          inputVal <= 90) ||
        inputVal === ""
      ) {
        setValue(inputVal);
      }
    }
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleValue} />
      <div>{value}</div>
    </div>
  );
};

export default Page;*/
import React from "react";

const Page = () => {
  const [value, setValue] = React.useState("");
  const handleValue = (e) => {
    const inputVal = e.target.value;
    const re = /^[0-9,.,-]+$/;
    const isMoreThanMinimum = (number) => number >= -90;
    const isLessThanMaximum = (number) => number <= 90;

    if (inputVal === "-" || inputVal === ".") setValue(inputVal);
    else {
      if (
        (re.test(inputVal) &&
          isMoreThanMinimum(inputVal) &&
          isLessThanMaximum(inputVal)) ||
        inputVal === ""
      ) {
        setValue(inputVal);
      }
    }

    // setValue(
    //   inputVal === "-" || inputVal === "."
    //     ? inputVal
    //     : (re.test(inputVal) &&
    //         isMoreThanMinimum(inputVal) &&
    //         isLessThanMaximum(inputVal)) ||
    //         inputVal === "" ? inputVal : ""
    // );

    //  setValue(
    //    inputVal === "-" || inputVal === "."
    //      ? inputVal
    //      : (re.test(inputVal) &&
    //          isMoreThanMinimum(inputVal) &&
    //          isLessThanMaximum(inputVal)) ||
    //        inputVal === ""
    //      ? inputVal
    //      : 0
    //  );
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleValue} />
      <div>{value}</div>
    </div>
  );
};

export default Page;
