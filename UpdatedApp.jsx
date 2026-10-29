import { useState } from "react";

function App() {
  const btn = "bg-gray-400 rounded-lg py-3 text-xl font-bold hover:bg-gray-500 active:bg-gray-400";
  const oper = "bg-red-400 rounded-lg py-3 text-xl font-bold hover:bg-red-500 active:bg-red-400";
  const equal = "bg-blue-400 rounded-lg py-3 text-xl font-bold hover:bg-blue-500 active:bg-blue-400";
  const clear = "bg-orange-400 rounded-lg py-3 text-xl font-bold hover:bg-orange-500 active:bg-orange-400";

  const [firstNum, setFirstNum] = useState("");
  const [operBtn, setOper] = useState("");
  // const [equalBtn, setEqual] = useState("");
  // const [clearBtn, setBtn] = useState("0");
  const [disResult, setResult] = useState("0");

  const setDigiLimit = (len) => {
    if (len <= 6) return "text-3xl";
    if (len <= 9) return "text-2xl";
    if (len <= 12) return "text-xl";
    return "text-lg";
  };

  const handleNums = (e) => {
    const value = e.target.dataset.value;
    console.log("Utpal, you can do it");

    setResult(prev => {
      if (prev.length + value.length > 8) {
        return prev;
      }

      if (prev === "0") {
        return value;
      }
      else {
        return prev + value;
      }

    });

    console.log(disResult);

  };

  {/*Handle Clear*/ }
  const handleClear = (e) => {
    setResult("0");
    setOper("");
    console.log("Cleared");
  }

  {/*Handle Operations*/ }
  const handleOper = (e) => {
    const oper = e.target.dataset.oper;
    setFirstNum(disResult);
    setResult("0");
    setOper(`${oper}`);
  }

  {/*Handle Equal*/ }
  const handleEqual = (e) => {
    console.log("Equal Clicked");
    switch (operBtn) {

      case "+":
        setResult(String(Number(firstNum) + Number(disResult)));
        break;

      case "-":
        setResult(String(Number(firstNum) - Number(disResult)));
        break;

      case "x":
        setResult(String(Number(firstNum) * Number(disResult)));
        break;

      case "÷":
        setResult(String(Number(firstNum) / Number(disResult)));
        break;
    }
    setFirstNum("");
    setOper("");
  }

  return (
    <div className="min-h-screen bg-gray-500 flex justify-center items-center p-10">
      <div className="bg-gray-700 rounded-lg p-4 w-[320px]">

        {/* numsDisplay */}
        <div className={`bg-pink-200 rounded-lg py-2 px-4 text-right font-bold text-gray-900 mb-3 overflow-hidden ${setDigiLimit(disResult.length)} `}>
          {disResult}

          {/* operatorDisplay */}
          <h1 className="bg-pink-200 px-1 text-left text-lg font-bold text-gray-900">
            {operBtn}
          </h1>

        </div>

        {/* Row --- 1 */}
        <div className="grid grid-cols-4 gap-2 mb-2">
          <button className={oper} data-oper="=" onClick={handleEqual}>=</button>
          <button className={btn} data-value="0" onClick={handleNums}>0</button>
          <button className={btn} data-value="00" onClick={handleNums}>00</button>
          <button className={oper} data-oper="÷" onClick={handleOper}>÷</button>
        </div>
        {/* Row --- 2 */}
        <div className="grid grid-cols-4 gap-2 mb-2">
          <button className={btn} data-value="1" onClick={handleNums}>1</button>
          <button className={btn} data-value="2" onClick={handleNums}>2</button>
          <button className={btn} data-value="3" onClick={handleNums}>3</button>
          <button className={oper} data-oper="x" onClick={handleOper}>x</button>
        </div>
        {/* Row --- 3 */}
        <div className="grid grid-cols-4 gap-2 mb-2">
          <button className={btn} data-value="4" onClick={handleNums}>4</button>
          <button className={btn} data-value="5" onClick={handleNums}>5</button>
          <button className={btn} data-value="6" onClick={handleNums}>6</button>
          <button className={oper} data-oper="-" onClick={handleOper}>-</button>
        </div>
        {/* Row --- 4 */}
        <div className="grid grid-cols-4 gap-2 mb-2">
          <button className={btn} data-value="7" onClick={handleNums}>7</button>
          <button className={btn} data-value="8" onClick={handleNums}>8</button>
          <button className={btn} data-value="9" onClick={handleNums}>9</button>
          <button className={oper} data-oper="+" onClick={handleOper}>+</button>
        </div>
        <div className="grid grid-cols-1">
          <button className={`${clear}`} onDoubleClick={handleClear}>Clr</button>
        </div>

      </div>

    </div >
  );
}

export default App;
