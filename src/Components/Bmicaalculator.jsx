import React, { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [bmi, setBMI] = useState("");
  const [bmiCategory, setBMICategory] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setError("Please enter both weight and height.");
      return;
    }

    let heightMeters;
    let weightKg;

    if (heightUnit === "cm") {
      heightMeters = height / 100; // Convert height from cm to meters
    } else {
      heightMeters = height * 0.3048; // Convert height from feet to meters
    }

    if (weightUnit === "kg") {
      weightKg = weight;
    } else {
      weightKg = weight * 0.453592; // Convert weight from pounds to kgs
    }

    const bmiValue = (weightKg / (heightMeters * heightMeters)).toFixed(1);
    setBMI(bmiValue);

    // Determine BMI category
    if (bmiValue < 18.5) {
      setBMICategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setBMICategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBMICategory("Overweight");
    } else {
      setBMICategory("Obese");
    }
  };

  const getBMIColor = () => {
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) {
      return "orange"; // Underweight
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return "green"; // Normal weight
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return "Brown"; // Overweight
    } else {
      return "red"; // Obese
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="container text-center p-5 d-flex justify-content-center align-items-center">
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "rgb(240, 236, 236)",
          }}
        >
          <h2 className="p-3">BMI Calculator</h2>
          <label className="p-2">
            Weight ({weightUnit}):{" "}
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>{" "}
          <select
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}
            style={{ marginLeft: "5px" }}
          >
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>{" "}
          <br />
          <br />
          <label className="p-2">
            Height ({heightUnit}):{" "}
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>{" "}
          <select
            value={heightUnit}
            onChange={(e) => setHeightUnit(e.target.value)}
            style={{ marginLeft: "5px" }}
          >
            <option value="cm">cm</option>
            <option value="ft">ft</option>
          </select>{" "}
          <br />
          <br />
          <button
            onClick={calculateBMI}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Calculate BMI
          </button>{" "}
          <br />
          {error && <p style={{ marginTop: "10px", color: "red" }}>{error}</p>}
          <p style={{ marginTop: "10px", color: getBMIColor() }}>
            <strong>BMI:</strong> {bmi}
            {bmiCategory && (
              <span style={{ marginLeft: "10px" }}>
                {bmiCategory === "Normal weight"
                  ? "Perfect weight!"
                  : `You are ${bmiCategory}`}
              </span>
            )}
          </p>{" "}
          <p style={{ marginTop: "10px" }}>
            <strong>BMI Categories:</strong>
            <br />
            Underweight: less than 18.5
            <br />
            Normal weight: 18.5–24.9
            <br />
            Overweight: 25–29.9
            <br />
            Obesity: 30 or greater
          </p>
        </div>
      </div>
    </>
  );
};

export default BMICalculator;
