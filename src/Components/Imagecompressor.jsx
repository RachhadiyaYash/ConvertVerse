import React, { useState } from "react";
import "./Imageoperation.css";

const Imagecompressor = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressionSize, setCompressionSize] = useState(1024); // Default size in kilobytes (1 MB)
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setErrorMessage("");
  };

  const handleCompressionSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setCompressionSize(newSize);
    setErrorMessage("");
  };

  const compressImage = async () => {
    if (!selectedFile) {
      setErrorMessage("No file selected");
      return;
    }

    const imageFile = selectedFile;
    const fileSize = imageFile.size / 1024; // Size in kilobytes

    if (fileSize <= compressionSize) {
      setErrorMessage("Image is already smaller than the specified size.");
      return;
    }

    const compressedImageBlob = await compressImageFile(
      imageFile,
      compressionSize,
      fileSize
    );
    setCompressedImage(URL.createObjectURL(compressedImageBlob));
  };

  const compressImageFile = (file, maxSize, originalSize) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const maxWidth = img.width;
          const maxHeight = img.height;

          let width = maxWidth;
          let height = maxHeight;

          if (maxSize > 0) {
            const scaleFactor = Math.min(1, maxSize / originalSize);
            width = maxWidth * scaleFactor;
            height = maxHeight * scaleFactor;
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob((blob) => {
            resolve(blob);
          }, file.type);
        };
      };

      reader.readAsDataURL(file);
    });
  };

  const downloadCompressedImage = () => {
    if (compressedImage) {
      const link = document.createElement("a");
      link.href = compressedImage;
      link.download = "compressed_image.jpg"; // Change the filename if needed
      link.click();
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
        <div className="px-5 py-3 my-5 text-center">
          <br />
          <br />
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
            Image Compressor
          </h1>
          <br />
          <br />
          <div className="col-lg-6 mx-auto  text-center">
            <div className="mb-3">
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Compression Size (KB):
                <input
                  type="number"
                  value={compressionSize}
                  onChange={handleCompressionSizeChange}
                  className="form-control"
                />
              </label>
            </div>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {compressedImage && (
              <div className="mt-4">
                <h3>Compressed Image:</h3>
                <img
                  src={compressedImage}
                  alt="Compressed"
                  style={{ maxWidth: "100%" }}
                  className="img-fluid"
                />
              </div>
            )}
            <br />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button onClick={compressImage} className="btn btn-primary me-2">
                Compress Image
              </button>
              <button
                onClick={downloadCompressedImage}
                disabled={!compressedImage}
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Download Compressed Image
              </button>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Imagecompressor;
