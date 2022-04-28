import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TradingViewWidget from 'react-tradingview-widget';
import { SingleTicker } from 'react-ts-tradingview-widgets';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import CryptoMarket from './market';
function App() {
  const [count, setCount] = useState(0);
  const [symbols, setSymbols] = useState('BINANCE:BTCUSDT');
  return (
    <div className="mainApp">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<CryptoMarket />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
