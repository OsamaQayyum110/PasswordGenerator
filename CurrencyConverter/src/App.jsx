import { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import InputBox from "./Components/InputBox";
import CurrrncyInfo from "./Hooks/CurrrncyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = CurrrncyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setAmount(convertedAmount);
    setFrom(to)
    setTo(from)
  }

  useEffect(() => {
    convert()
  },[amount,to,from])

  return (
    <>
      <div
        className="h-screen w-full flex flex-col flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full h-[29rem] flex flex-col justify-center items-center border border-gray-60 rounded-2xl p-5 backdrop-blur-sm bg-white/20">
            <div className=" flex flex-wrap justify-center items-center">
              <div className="input">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={currencyOptions}
                  OnAmountChange={(amount) => setAmount(amount)}
                  OnCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                />
              </div>
              <button onClick={swap} className="bg-[#FB8B24] text-3xl px-16 py-2 mx-[-1.5rem] rounded-lg border-4 border-white text-white z-50 ">
                <FaArrowRightArrowLeft />
              </button>
              <div className="input z-0">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  OnCurrencyChange={(currency) => setTo(currency)}
                  currencyOptions={currencyOptions}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
            </div>
            <button
              type="submit"
              className=" bg-[#5F0F40] text-white text-xl px-24 py-3 m-10 rounded-lg "
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
