// Togglecase.js

import React, { useState } from "react";

const Togglecase = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const toggleCase = () => {
    const toggledText = inputText
      .split("")
      .map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
    setOutputText(toggledText);
    setIsResultVisible(true);
  };

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(outputText);
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = outputText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
  };

  return (
    <>
      <br />
      <br />

      <div
        className="container mt-5 mb-5 "
        style={{ backgroundColor: "rgb(240, 236, 236)" }}
      >
        <div className="px-4 py-3 my-2 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis text-center">
            Convert to Togglecase
          </h1>
          <br />
          <div className="col-lg-6 mx-auto  text-center">
            <textarea
              id="casetextarea"
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "10px",
              }}
              placeholder="Enter your text here..."
              rows={10}
              cols={100}
              value={inputText}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <button className="btn btn-primary me-2" onClick={toggleCase}>
              Toggle Case
            </button>
            <br />
            {isResultVisible && inputText && (
              <div>
                <br />
                <strong>Result:</strong>
                <p
                  style={{
                    padding: "20px",
                    border: "2px solid red",
                    borderRadius: "10px",
                    fontFamily: "Times New Roman",
                  }}
                >
                  {outputText}
                </p>
              </div>
            )}
            <br />
            {outputText && isResultVisible && (
              <button
                onClick={copyToClipboard}
                className="btn btn-outline-secondary  px-4"
              >
                Copy to Clipboard
              </button>
            )}
            <br />
          </div>
        </div>

        <br />
        <br />
      </div>

      <br />
      <br />
    </>
  );
};

export default Togglecase;
