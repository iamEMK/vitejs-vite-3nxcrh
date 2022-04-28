import { useState } from 'react';
import logo from './logo.svg';
import './home.css';
import TradingViewWidget from 'react-tradingview-widget';
import { SingleTicker } from 'react-ts-tradingview-widgets';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Home() {
  const [count, setCount] = useState(0);
  const [symbols, setSymbols] = useState('BINANCE:BTCUSDT');
  return (
    <div className="App">
      <div className="part1">
        <Link to="/">
          <span>HOME</span>
        </Link>
        <Link to="market">
          <span>FULL MARKET</span>
        </Link>
        <span>ABOUT</span>
      </div>
      {/* <div className="part1">
      <SingleTicker
        symbol="BTCUSDT"
        autosize="true"
        width="100%"
        colorTheme="dark"
      ></SingleTicker>
      <SingleTicker
        symbol="BTCUSDT"
        autosize="true"
        width="100%"
        colorTheme="dark"
      ></SingleTicker>
      </div> */}
      <TradingViewWidget
        symbol="BINANCE:BTCUSDT"
        theme="dark"
        autosize="true"
        interval="240"
        timezone="Asia/Kolkata"
        style="1"
        locale="en"
        toolbar_bg="#f1f3f6"
        hide_side_toolbar="false"
        allow_symbol_change="true"
      />
    </div>
  );
}

export default Home;
