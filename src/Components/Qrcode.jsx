import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [qrData, setQrData] = useState("");
  const [fileName, setFileName] = useState("qr_code");

  const handleChange = (event) => {
    setQrData(event.target.value);
  };

  const handleDownload = () => {
    if (!qrData.trim()) {
      alert("Please enter data for the QR code.");
      return;
    }

    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${fileName}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>QR Code Generator</h2>
      <input
        type="text"
        value={qrData}
        onChange={handleChange}
        placeholder="Enter data for QR code"
        style={styles.input}
      />
      <br />
      <QRCode
        id="qrcode"
        value={qrData}
        size={256}
        level={"H"}
        includeMargin={true}
        style={styles.qrCode}
      />
      <br />

      <br />
      <button
        onClick={handleDownload}
        style={styles.button}
        disabled={!qrData.trim()}
      >
        Download QR Code
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",

    borderRadius: "5px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
  qrCode: {
    margin: "20px auto",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default QRCodeGenerator;
