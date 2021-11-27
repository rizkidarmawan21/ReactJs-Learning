import React from 'react';
import './App.css';
import { Fotoproduk, ProdukInfo, Reviews } from './src/components';

function App() {
  return (
    <div className="Parentbox">
      <Fotoproduk />
      <ProdukInfo isDiscount="yes" discount={80} category="SPORT" title="STAN SMITH SHOES" price="100000" />
      <Reviews />
    </div>
  );
}



export default App;

