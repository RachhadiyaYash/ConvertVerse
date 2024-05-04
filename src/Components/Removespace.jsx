// RemoveSpaces.js

import React, { useState } from "react";

const RemoveSpaces = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const removeSpaces = () => {
    const textWithoutExtraSpaces = inputText.replace(/\s{2,}/g, " ").trim();
    setOutputText(textWithoutExtraSpaces);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  return (
    <>
      <br />
      <br />
      <div
        className="container mt-5 mb-5"
        style={{ backgroundColor: "rgb(240, 236, 236)" }}
      >
        <div className="px-4 py-5 my-2 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis text-center">
            Remove Unnecessary Spaces
          </h1>
          <br />
          <div className="col-lg-6 mx-auto  text-center">
            <textarea
              id="casetextarea"
              rows={10}
              cols={100}
              placeholder="Enter your text here..."
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "10px",
              }}
              value={inputText}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <button className="btn btn-primary me-2" onClick={removeSpaces}>
              Remove Extra Spaces
            </button>
            <br />
            <br />
            {outputText && (
              <div>
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
            {outputText && (
              <button
                className="btn btn-outline-secondary  px-4"
                onClick={copyToClipboard}
              >
                Copy to Clipboard
              </button>
            )}
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default RemoveSpaces;
