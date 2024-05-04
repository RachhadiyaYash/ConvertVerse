import React, { useState } from "react";

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("years");
  const [interest, setInterest] = useState("");
  const [error, setError] = useState("");

  const calculateInterest = () => {
    // Validate inputs
    if (!principal || !rate || !time) {
      setError("Please enter all values for Principal, Rate, and Time.");
      setInterest(""); // Clear interest if there's an error
      return;
    }

    let timeInYears;
    if (period === "months") {
      timeInYears = time / 12;
    } else if (period === "days") {
      timeInYears = time / 365;
    } else {
      timeInYears = time;
    }
    const interestAmount = (principal * rate * timeInYears) / 100;
    setInterest(interestAmount.toFixed(2));
    setError(""); // Clear error if calculation succeeds
  };

  return (
    <div
      className="container text-center p-5"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "rgb(240, 236, 236)",
        }}
      >
        <h2 className="p-2">Interest Calculator</h2>
        <label>
          Principal:{" "}
          <input
            style={{
              padding: "8px",
              margin: "5px",
              width: "100px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </label>{" "}
        <label>
          Rate (%):{" "}
          <input
            style={{
              padding: "8px",
              margin: "5px",
              width: "100px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>{" "}
        <label>
          Time:{" "}
          <input
            style={{
              padding: "8px",
              margin: "5px",
              width: "100px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            style={{
              marginLeft: "5px",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="years">Years</option>
            <option value="months">Months</option>
            <option value="days">Days</option>
          </select>
        </label>{" "}
        <br />
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="my-5"
          onClick={calculateInterest}
        >
          Calculate Interest
        </button>{" "}
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {interest && !error && (
          <>
            <p style={{ fontSize: "20px" }}>Interest: {interest}</p>
          </>
        )}
        <br />
      </div>
    </div>
  );
};

export default InterestCalculator;
