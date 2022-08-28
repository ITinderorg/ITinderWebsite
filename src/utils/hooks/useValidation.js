import { useEffect } from "react";
import { useState } from "react";

const useValidation = (value, validators) => {
  const [isEmpty, setEmpty] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [greaterError, setGreaterError] = useState(false);
  const [linkedInError, setLinkedInError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (let validator in validators) {
      switch (validator) {
        case "minLength":
          value.Length < validators[validator]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isEmail":
          String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case "greaterThan":
          value > validators[validator]
            ? setGreaterError(false)
            : setGreaterError(true);
          break;
        case "isLinkedIn":
          String(value)
            .toLowerCase()
            .match(
              /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))/
            )
            ? setLinkedInError(false)
            : setLinkedInError(true);
          break;
        case "isNumber":
          String(value)
            .toLowerCase()
            .match(/^[0-9]+$/)
            ? setNumberError(false)
            : setNumberError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (
      isEmpty ||
      minLengthError ||
      emailError ||
      greaterError ||
      linkedInError ||
      numberError
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [
    isEmpty,
    minLengthError,
    emailError,
    greaterError,
    linkedInError,
    numberError,
  ]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    greaterError,
    linkedInError,
    numberError,
    inputValid,
  };
};

export default useValidation;
