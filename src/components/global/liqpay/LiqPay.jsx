import React from "react";
import PropTypes from "prop-types";
import { GetBase64, GetEncyptedSHA1Base64 } from "../../../utils/Utils";
import APIConfigs from "../../../constants/APIConfigs";
import classes from "./LiqPay.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import LiqPayAPI from "../../../utils/apis/LiqPayAPI";

const LiqPay = ({
  amount,
  currency,
  description = "test",
  orderId = Math.floor(1 + Math.random() * 900000000),
  title = "Payment",
  style,
  disabled,
  extra,
  ...props
}) => {
  const { data, signature } = LiqPayAPI.FormRequest(
    "pay",
    amount,
    currency,
    description,
    orderId
  );

  const [isLoading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
  };

  useEffect(() => {
    //console.log(orderId);
    //LiqPayAPI.GetPaymentStatus(orderId);
    //setInterval(() => {}, 3000);
  }, [isLoading]);

  return (
    <>
      <form
        method="POST"
        action="https://www.liqpay.ua/api/3/checkout"
        acceptCharset="utf-8"
        style={{ ...style }}
        target="_blank"
        onSubmit={onSubmit}
      >
        <input type="hidden" name="data" value={data} />
        <input type="hidden" name="signature" value={signature} />
        {extra || (
          <button
            disabled={disabled}
            className={classes.buttonSubmit}
            variant="success"
          >
            <img
              src="https://static.liqpay.ua/buttons/logo-small.png"
              name="btn_text"
            />
            <span>
              {title} {amount} {currency}
            </span>
          </button>
        )}
      </form>
      {isLoading && (
        <div className={classes.loaderWrapper}>
          <Spinner
            animation="border"
            variant="primary"
            className={classes.spinner}
          />
        </div>
      )}
    </>
  );
};

LiqPay.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  orderId: PropTypes.any.isRequired,
  title: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  extra: PropTypes.object,
};

export default LiqPay;
