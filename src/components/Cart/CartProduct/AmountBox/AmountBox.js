/*eslint-disable*/
import React from "react";
import "./amount-box.scss";
import { number, func, object } from "prop-types";
import { connect } from "react-redux";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import { updateAmount } from "../../../../actions/cart";
import { isInRange } from "../../../../utils/validations/helpers";
const AmountBox = ({
  amount,
  size_id,
  color_id,
  updateAmount,
  id,
  removeBtnRef,
}) => {
  const handleIncreaseAmount = () =>
    isInRange(amount, 0, 49) &&
    updateAmount({ id, size_id, color_id, quantity: amount + 1 });

  const handleDecreaseAmount = () =>
    isInRange(amount, 1, 50)
      ? updateAmount({ id, size_id, color_id, quantity: amount - 1 })
      : removeBtnRef.click()

  return (
    <div className="amount-box d-flex px-2 align-items-center">
      <div>
        <input
          type="text"
          className="w-100 color-text-1"
          value={amount}
          min={0}
          max={100}
          disabled
        />
      </div>

      <div className="d-flex flex-column h-100">
        <button
          type="button"
          className="p-0 h-50 d-flex align-items-end"
          onClick={handleIncreaseAmount}
        >
          <CaretUpFill size={10} color="#4a4b65" />
        </button>
        <button
          type="button"
          className="p-0 h-50 d-flex align-items-start mt-1"
          onClick={handleDecreaseAmount}
        >
          <CaretDownFill size={10} color="#4a4b65" />
        </button>
      </div>
    </div>
  );
};

AmountBox.propTypes = {
  amount: number,
  size_id: number,
  color_id: number,
  updateAmount: func,
  removeBtnRef :object,
};

export default connect(null, { updateAmount })(AmountBox);
