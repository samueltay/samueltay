import React, { useState, useContext } from "react";
import { ScreenSizeContext } from "../screen_size/ScreenSizeContext";
import PDFViewer from "./PDFViewer";
import "./PDFComponent.css";

interface PDFFile {
  name: string;
  file: string;
}

interface PDFSelectorProps {
  files: PDFFile[]; // Array of PDF files with name and file location
}

const PDFSelector: React.FC<PDFSelectorProps> = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const { windowWidth } = useContext(ScreenSizeContext);

  const hidePDFWidth = 850;

  const handleFileSelect = (index: number) => {
    setSelectedFile(index);
    setPageNumber(1); // Reset the page number to 1 when selecting a new file
  };

  const handleDownload = () => {
    const selectedFileName = files[selectedFile].name;
    const selectedFileUrl = files[selectedFile].file;
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = selectedFileUrl;
    link.download = selectedFileName;
    // Append the link to the body and click it programmatically
    document.body.appendChild(link);
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    const selectedFileUrl = files[selectedFile].file;
    window.open(selectedFileUrl, "_blank");
  };

  const selectionButtons = (buttonWidth: number = 300) => {
    const isVertical = windowWidth < hidePDFWidth;
    return (
      <div>
        {files.map((pdf, index) => (
          <button
            className="pdf-selector-button"
            key={index}
            onClick={() => handleFileSelect(index)}
            disabled={selectedFile === index}
            style={{
              width: buttonWidth,
            }}
          >
            {pdf.name}
          </button>
        ))}
        <div
          className="pdf-selector-external"
          style={{
            flexDirection: isVertical ? "row" : "column",
          }}
        >
          <button
            className="new-tab-button"
            onClick={handleOpenInNewTab}
            style={{
              width: isVertical ? (windowWidth - 60) / 2 : buttonWidth,
            }}
          >
            Open in New Tab
          </button>
          <button
            className="download-button"
            onClick={handleDownload}
            style={{
              width: isVertical ? (windowWidth - 60) / 2 : buttonWidth,
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
    );
  };

  const calculateViewerWidth = () => {
    const roundedWidth = Math.floor(windowWidth / 50) * 50;
    return Math.min(roundedWidth - 445, 800);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {windowWidth < hidePDFWidth ? (
        <div>{selectionButtons(windowWidth - 60)}</div>
      ) : (
        <div style={{ display: "flex" }}>
          {selectionButtons()}
          <div>
            <PDFViewer
              pdfWidth={calculateViewerWidth()}
              file={files[selectedFile].file}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFSelector;
