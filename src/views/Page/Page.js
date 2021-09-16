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
  const handleLangtiude = (e) => {
    const inputVal = e.target.value;
    const rgex = /^[0-9,.,-]+$/;
    const isMoreThanMinimum = (number) => number >= -90;
    const isLessThanMaximum = (number) => number <= 90;

    if (inputVal === "-" || inputVal === ".") handleChange(e);
    else {
      if (
        (rgex.test(inputVal) &&
          isMoreThanMinimum(inputVal) &&
          isLessThanMaximum(inputVal)) ||
        inputVal === ""
      ) {
        formik.handleChange(e);
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

export default Page;
