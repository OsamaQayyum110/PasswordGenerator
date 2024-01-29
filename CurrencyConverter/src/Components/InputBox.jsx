import React from "react";

const InputBox = ({
  label,
  amount,
  OnAmountChange,
  OnCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
}) => {
  return (
    <div className=" bg-white w-96 h-56 rounded-2xl ">
      <div className=" h-full p-4 flex justify-between">
        <div className=" w-1/2 flex flex-col justify-between">
          <label className=" my-8 mx-4 text-xl text-black/40 " htmlFor="">
            {label}
          </label>
          <input
            className=" my-8 mx-4 text-2xl outline-none bg-transparent "
            type="number"
            step={"any"}
            min={0}
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              OnAmountChange && OnAmountChange(Number(e.target.value));
            }}
            disabled={amountDisable}
          />
        </div>
        <div className="w-1/2 flex flex-col items-start ">
          <p className="  my-8 mx-6 text-xl text-black/40 " htmlFor="">
            Currency Type
          </p>
          <select
            className=" w-24 mx-10 text-xl bg-gray-100 outline-none p-1 rounded-lg "
            onChange={(e) =>
              OnCurrencyChange && OnCurrencyChange(e.target.value)
            }
            value={selectCurrency}
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
