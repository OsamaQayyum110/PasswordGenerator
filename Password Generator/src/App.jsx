import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [copyColor, setCopyColor] = useState(false);
  const [numAllowed, setnumAllowed] = useState(false);
  const [symbolAllowed, setsymbolAllowed] = useState(false);

  const copyText = () => {
    window.navigator.clipboard.writeText(password);
    setCopyColor(true);
  };

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    {
      numAllowed ? (str += "0123456789") : "";
    }
    {
      symbolAllowed ? (str += "!@#$%^&*()_+-={}[]:;?><,./") : "";
    }

    for (let index = 0; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, symbolAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
    setCopyColor(false);
  }, [length, symbolAllowed, numAllowed, generatePassword]);

  return (
    <>
      <div className="w-full h-screen bg-[#092635]  text-white flex justify-center items-center ">
        <div className=" w-1/3 h-64 bg-[#1B4242] rounded-3xl flex flex-col justify-center items-center">
          <div className="relative">
            <input
              className=" outline-none p-3 mx-2 w-96 text-black "
              type="text"
              placeholder="Password"
              readOnly
              value={password}
            />
            <button
              className=" p-2 m-1 absolute right-3 rounded-lg"
              style={{ backgroundColor: `${copyColor ? "green" : "red"}` }}
              onClick={(e) => copyText(e)}
            >
              {copyColor ? "copied!" : "copy"}
            </button>
          </div>
          <div className=" flex m-4 justify-around">
            <div className="flex m-2 px-2">
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <p className="m-1">length : {length}</p>
            </div>
            <div className="flex m-2">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberinput"
                onChange={() => setnumAllowed(!numAllowed)}
              />
              <p className="m-1">Number</p>
            </div>
            <div className="flex m-2">
              <input
                type="checkbox"
                defaultChecked={symbolAllowed}
                id="symbolinput"
                onChange={() => setsymbolAllowed(!symbolAllowed)}
              />
              <p className="m-1">Symbol</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
