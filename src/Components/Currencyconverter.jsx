import React, { useState } from "react";
import axios from "axios";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [error, setError] = useState("");

  const convertCurrency = async () => {
    if (!amount || isNaN(amount)) {
      setError("Please enter a valid amount.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${currencyFrom}`
      );
      const data = response.data;
      const conversionRate = data.rates[currencyTo];
      const result = (amount * conversionRate).toFixed(2);
      setConvertedAmount(`Converted Amount: ${result} ${currencyTo}`);
      setError("");
    } catch (error) {
      console.error("Error fetching currency conversion:", error);
      setError("Failed to fetch conversion data. Please try again later.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div
        id="currencyConverter"
        className="text-center p-3 border rounded"
        style={{
          maxWidth: "600px",
          marginTop: "200px",
          backgroundColor: "rgb(240, 236, 236)",
        }}
      >
        <br />
        <h2>Currency Converter</h2>
        <br />
        <div className="d-flex flex-column align-items-center">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control mb-2"
            placeholder="Amount"
            style={{ maxWidth: "600px" }}
          />
          <div className="d-flex justify-content-center align-items-center mb-2">
            <select
              value={currencyFrom}
              onChange={(e) => setCurrencyFrom(e.target.value)}
              className="form-select me-2"
            >
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CHF">CHF - Swiss Franc</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="RUB">RUB - Russian Ruble</option>
            </select>
            <select
              value={currencyTo}
              onChange={(e) => setCurrencyTo(e.target.value)}
              className="form-select"
            >
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CHF">CHF - Swiss Franc</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="PKR">PKR - Pakistani Rupee</option>
              <option value="RUB">RUB - Russian Ruble</option>
            </select>
          </div>
          <br />

          <button onClick={convertCurrency} className="btn btn-primary">
            Convert
          </button>
          <br />
        </div>
        {error && <p className="text-danger mt-2">{error}</p>}
        <p id="convertedAmount">{convertedAmount}</p>
      </div>
    </div>
  );
}

export default CurrencyConverter;
