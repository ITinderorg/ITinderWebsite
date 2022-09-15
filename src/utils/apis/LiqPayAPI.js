import { GetBase64, GetEncyptedSHA1Base64 } from "../Utils";
import APIConfigs from "../../constants/APIConfigs";
import axios from "axios";

export default class LiqPayAPI {
  static FormRequest(action, amount, currency, description, orderId) {
    const jsonString = {
      public_key: APIConfigs.LiqPay.publicKey,
      version: "3",
      action: action,
      amount: amount,
      currency: currency,
      description: description,
      order_id: orderId,
    };

    const data = GetBase64(JSON.stringify(jsonString));
    const signString =
      APIConfigs.LiqPay.privateKey + data + APIConfigs.LiqPay.privateKey;
    const signature = GetEncyptedSHA1Base64(signString);

    return { data: data, signature: signature };
  }
  static async GetPaymentStatus(orderId) {
    const { data, signature } = this.FormRequest(
      "status",
      null,
      null,
      "status check",
      orderId
    );

    let search = new URLSearchParams();

    search.append("data", data);
    search.append("signature", signature);

    const res = await axios.post(
      "https://www.liqpay.ua/api/request",
      /*{
        data: data,
        signature: signature,
      },*/
      search,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    /*const res = await axios({
      baseURL: "https://www.liqpay.ua/api/request",
      params: { data: data, signature: signature },
    });
    */
    console.log(res);
    //return res;
  }

  static Test(orderId) {
    const { data, signature } = this.FormRequest(
      "status",
      null,
      null,
      "status check",
      orderId
    );
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        form: {
          data: data,
          signature: signature,
        },
      }),
    };
    fetch("https://www.liqpay.ua/api/request", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
