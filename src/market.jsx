import { useState } from 'react';
import logo from './logo.svg';
import './home.css';
import TradingViewWidget from 'react-tradingview-widget';
import { CryptoCurrencyMarket } from 'react-ts-tradingview-widgets';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function CryptoMarket() {
  const [count, setCount] = useState(0);
  const [symbols, setSymbols] = useState('BINANCE:BTCUSDT');
  return (
    <div className="App">
      <div className="part1">
        <Link to="/">
          <span>HOME</span>
        </Link>
        <Link to="/market">
          <span>FULL MARKET</span>
        </Link>
        <span>ABOUT</span>
      </div>
      <CryptoCurrencyMarket height="100%" width="100%" colorTheme="dark" displayCurrency="usd"/>
    </div>
  );
}

export default CryptoMarket;
