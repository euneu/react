// import Button from "./Button";
// import styles from "./App.module.css";
import { number } from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollor, setDollor] = useState(0);
  const [coinCost, setCoinCost] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);
  //dollor
  const dollorHandle = (event) => {
    event.preventDefault();
    setDollor(event.target.value);
  };
  //코인가격
  const coinHandle = (event) => {
    setCoinCost(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loding ? "" : `${coins.length}`}</h1>
      {loding ? <strong>Loading...</strong> : null}

      <form>
        <h3>Please enter dollor</h3>
        <input
          onChange={dollorHandle}
          value={dollor}
          input="number"
          placeholder="Please enter dollor"
        />
      </form>

      <select onChange={coinHandle}>
        {coins.map((coin, index) => (
          <option key={index} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}){coin.quotes.USD.price} USD
          </option>
        ))}
      </select>

      <h3>You can get {Math.floor(dollor / coinCost)}</h3>
    </div>
  );
}

export default App;
