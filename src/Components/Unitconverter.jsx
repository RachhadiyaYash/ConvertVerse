import React, { useState } from "react";

const UnitConverter = () => {
  const [value, setValue] = useState("");
  const [unitFrom, setUnitFrom] = useState("cm");
  const [unitTo, setUnitTo] = useState("in");
  const [convertedValue, setConvertedValue] = useState("");
  const [error, setError] = useState("");

  const conversionFactors = {
    cm: { in: 0.393701, ft: 0.0328084, m: 0.01, km: 0.00001 },
    in: { cm: 2.54, ft: 0.0833333, m: 0.0254, km: 0.0000254 },
    ft: { cm: 30.48, in: 12, m: 0.3048, km: 0.0003048 },
    m: { cm: 100, in: 39.3701, ft: 3.28084, km: 0.001 },
    km: { cm: 100000, in: 39370.1, ft: 3280.84, m: 1000 },
  };

  const convertUnits = () => {
    if (!value || isNaN(value)) {
      setError("Please enter a valid number.");
      setConvertedValue("");
      return;
    }

    const result = (value * conversionFactors[unitFrom][unitTo]).toFixed(2);
    setConvertedValue(result);
    setError("");
  };

  return (
    <div
      className="container text-center p-3 d-flex justify-content-center align-items-center"
      style={{
        minHeight: "80vh",
      }}
    >
      <div
        className="px-4 py-5 my-5 text-center"
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "rgb(240, 236, 236)",
        }}
      >
        <h2 className="p-3">Unit Converter</h2>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <select
          value={unitFrom}
          onChange={(e) => setUnitFrom(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="cm">Centimeter (cm)</option>
          <option value="in">Inch (in)</option>
          <option value="ft">Foot (ft)</option>
          <option value="m">Meter (m)</option>
          <option value="km">Kilometer (km)</option>
        </select>
        <select
          value={unitTo}
          onChange={(e) => setUnitTo(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="cm">Centimeter (cm)</option>
          <option value="in">Inch (in)</option>
          <option value="ft">Foot (ft)</option>
          <option value="m">Meter (m)</option>
          <option value="km">Kilometer (km)</option>
        </select>
        <br />
        <br />
        <button
          onClick={convertUnits}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Convert
        </button>
        <br />
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {convertedValue && !error && (
          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            Converted Value: {convertedValue}
          </p>
        )}
      </div>
    </div>
  );
};

export default UnitConverter;
