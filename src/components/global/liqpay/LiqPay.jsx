import React from "react";
import PropTypes from "prop-types";
import { GetBase64, GetEncyptedSHA1Base64 } from "../../../utils/Utils";
import APIConfigs from "../../../constants/APIConfigs";
import classes from "./LiqPay.module.css";

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
  const jsonString = {
    public_key: APIConfigs.LiqPay.publicKey,
    version: "3",
    action: "pay",
    amount: amount,
    currency: currency,
    description: description,
    order_id: orderId,
  };

  const data = GetBase64(JSON.stringify(jsonString));
  const signString =
    APIConfigs.LiqPay.privateKey + data + APIConfigs.LiqPay.privateKey;
  const signature = GetEncyptedSHA1Base64(signString);

  return (
    <form
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
      style={{ ...style }}
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
