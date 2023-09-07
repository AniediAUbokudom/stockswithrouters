import React from "react";
import { useParams } from "react-router-dom";
import stocks from "../stock-data"; 

function StockDetail() {
  const { symbol } = useParams(); // accesses the symbol from the URL

  //   the find method (.find()) is used to search for a stock in the array that matches the symbol parameter from the URL (finds the matching stock)
  const stockDetail = stocks.find((stock) => stock.symbol === symbol);

  return (
    <div className="stock-detail">
      <h2>Stock Detail Page</h2>
      <p>Symbol: {stockDetail.symbol}</p>
      <ul>
        <li>Last Price: {stockDetail.lastPrice}</li>
        <li>Change: {stockDetail.change}</li>
        <li>High: {stockDetail.high}</li>
        <li>Low: {stockDetail.low}</li>
        <li>Open: {stockDetail.open}</li>
      </ul>
    </div>
  );
}
export default StockDetail;
