import React, { useState } from "react";

const AgeCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [dateDifference, setDateDifference] = useState(null);
  const [error, setError] = useState("");

  const calculateDateDifference = () => {
    if (!startDate) {
      setError("Please enter a valid start date.");
      return;
    }
    const startDateTime = new Date(startDate).getTime();
    const currentDateTime = new Date().getTime();

    const timeDifference = currentDateTime - startDateTime;

    const totalYears = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const totalMonths = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
        (1000 * 60 * 60 * 24 * 30)
    );
    const totalDays = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    const totalHours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const totalMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    setDateDifference({
      years: totalYears,
      months: totalMonths,
      days: totalDays,
      hours: totalHours,
      minutes: totalMinutes,
    });
    setError("");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Age Calculator</h2>
        <br />
        <label style={styles.label}>
          Start Date:
          <br />
          <br />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={styles.input}
          />
        </label>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <br />
        <button onClick={calculateDateDifference} style={styles.button}>
          Calculate Age
        </button>
        {dateDifference !== null && (
          <div style={styles.resultContainer}>
            <p style={styles.result}>Total Years: {dateDifference.years}</p>
            <p style={styles.result}>Total Months: {dateDifference.months}</p>
            <p style={styles.result}>Total Days: {dateDifference.days}</p>
            <p style={styles.result}>Total Hours: {dateDifference.hours}</p>
            <p style={styles.result}>Total Minutes: {dateDifference.minutes}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  container: {
    backgroundColor: "rgb(240, 236, 236)",

    width: "70%",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    color: "#333",
  },
  label: {
    display: "block",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    boxSizing: "border-box",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  resultContainer: {
    marginTop: "20px",
  },
  result: {
    margin: "8px 0",
    color: "#333",
  },
};

export default AgeCalculator;
