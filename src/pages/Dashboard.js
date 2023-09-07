import React from "react";
import stocks from "../stock-data"; // Import the stocks array

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stock-list">
        {stocks.map(stock => (
          <div className="stock-item" key={stock.symbol}>
            <h2>{stock.name}</h2>
            <p>Symbol: {stock.symbol}</p>
            <p>Last Price: {stock.lastPrice}</p>
            <p>Change: {stock.change}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
            <p>Open: {stock.open}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
