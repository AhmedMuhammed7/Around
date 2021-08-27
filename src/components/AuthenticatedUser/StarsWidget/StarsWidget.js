/*eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Star, StarFill } from "react-bootstrap-icons";

const StarsWidget = ({ rate }) => {
  const starsList = [1, 2, 3, 4, 5].map((star) =>
    star <= rate ? (
      <StarFill size={13} color="#ffb15c" />
    ) : (
      <Star size={13} color="#737491" />
    )
  );
  return <div className="stars-widget">{starsList}</div>;
};

StarsWidget.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default StarsWidget;
