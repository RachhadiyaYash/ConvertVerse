import React, { useState } from "react";

const Firstlettercapital = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setIsResultVisible(false); // Hide result when input changes
  };

  const capitalizeFirstLetter = () => {
    const words = inputText.split(/\s+/);
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const result = capitalizedWords.join(" ");
    setOutputText(result);
    setIsResultVisible(!!result); // Show result only if there is text after capitalization
  };

  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.value = outputText;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
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
            Convert to AlphaCapcase
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
              onClick={capitalizeFirstLetter}
            >
              Convert to Alphacaps
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
                  {" "}
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
                Copy to Clipboard
              </button>
            )}
            <br />
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
};

export default Firstlettercapital;
