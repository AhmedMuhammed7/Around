/*eslint-disable*/
import React, { useRef, useEffect } from "react";
import { arrayOf, element, func, oneOfType, oneOf } from "prop-types";
import { isIdentical } from "../../utils/validations/helpers";
import "./overlay.scss";

export const Overlay = ({ setMode, children, position }) => {
  const transitionElm = useRef();

  const handleCancel = (e) => {
    const clientX = e.clientX;
    const leftPos = transitionElm.current.getBoundingClientRect().left;
    const rightPos = transitionElm.current.getBoundingClientRect().right;

    if (isIdentical(position, "r") && clientX < leftPos) setMode(false);
    if (isIdentical(position, "l") && clientX > rightPos) setMode(false);
  };
  const positionClassName = () =>
    isIdentical(position, "r") ? "inRight" : "inLeft";
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "visible");
  }, []);
  return (
    <div
      className="overlay position-absolute  end-0 w-100"
      style={{
        height: window.innerHeight + "px",
        top: window.pageYOffset + "px",
      }}
      onClick={handleCancel}
    >
      <div className="position-relative w-100 h-100 ">
        <div
          className={`transition-elm position-absolute bg-light top-0 h-100 ${positionClassName()}`}
          ref={transitionElm}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Overlay.propTypes = {
  setMode: func,
  children: oneOfType([arrayOf(element), element]),
  position: oneOf(["l", "r"]),
};
