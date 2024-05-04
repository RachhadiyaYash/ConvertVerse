// jpeg or jpg into png

import React, { useState } from "react";
import "./Imageoperation.css";

const ImageConverter = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedDataURL, setConvertedDataURL] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setConvertedDataURL(null); // Reset the preview when a new file is selected
    setErrorMessage("");
  };

  const convertToPNG = () => {
    if (!selectedFile) {
      setErrorMessage("No photo chosen");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          setConvertedDataURL(url);
        }, "image/png");
      };
    };
    reader.readAsDataURL(selectedFile);
  };

  const downloadPNG = () => {
    if (convertedDataURL) {
      const link = document.createElement("a");
      link.href = convertedDataURL;
      link.download = "converted_image.png"; // Change the filename if needed
      link.click();
    }
  };

  return (
    <>
      <br />
      <br />

      <div
        className="container mt-5 mb-5"
        style={{ backgroundColor: "rgb(240, 236, 236)" }}
      >
        <div className="px-4 py-5 my-5 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            fill="currentColor"
            color="red"
            className="bi bi-file-image"
            viewBox="0 0 16 16"
          >
            <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12z" />
          </svg>{" "}
          <h1 className="display-5 fw-bold text-body-emphasis text-center">
            Convert JPG or JPEG to PNG
          </h1>
          <br />
          <br />
          <div className="col-lg-6 mx-auto  text-center">
            <div className="mb-3">
              <input
                type="file"
                accept="image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
            </div>
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {selectedFile && (
            <div className="mt-3">
              <h3>Selected Image Preview:</h3>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                style={{
                  maxWidth: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                className="img-fluid"
              />
            </div>
          )}
          <br />
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
            <button onClick={convertToPNG} className="btn btn-primary me-2">
              Convert to PNG
            </button>
            <button
              onClick={downloadPNG}
              disabled={!convertedDataURL}
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Download PNG
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default ImageConverter;
