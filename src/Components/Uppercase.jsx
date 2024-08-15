// Uppercase.jsx
import React, { useState } from "react";

const Uppercase = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setIsResultVisible(false); // Hide result when input changes
  };

  const convertToUppercase = () => {
    const textInUppercase = inputText.toUpperCase();
    setOutputText(textInUppercase);
    setIsResultVisible(!!textInUppercase); // Show result only if there is text in uppercase
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
            Convert to Uppercase
          </h1>
          <br />
          <div className="col-lg-6 mx-auto  text-center">
            <textarea
              id="casetextarea"
              rows={10}
              cols={50}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "10px",
              }}
              placeholder="Enter your text here..."
              value={inputText}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <button
              className="btn btn-primary me-2"
              onClick={convertToUppercase}
            >
              Convert to Uppercase
            </button>

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
                className="btn btn-outline-secondary  px-4"
                onClick={copyToClipboard}
              >
                Copy to clipboard
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

export default Uppercase;
