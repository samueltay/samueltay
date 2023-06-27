import React, { useState, useContext } from "react";
import PDFViewer from "./PDFViewer";
import { MobileContext } from "../screen_size/MobileContext";

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
  const { isMobile } = useContext(MobileContext);

  const handleFileSelect = (index: number) => {
    setSelectedFile(index);
    setPageNumber(1); // Reset the page number to 1 when selecting a new file
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingRight: "20px" }}>
        {files.map((pdf, index) => (
          <button
            key={index}
            onClick={() => handleFileSelect(index)}
            disabled={selectedFile === index}
            style={{
              display: "block",
              marginBottom: "20px",
              width: "300px",
              padding: "20px",
              fontSize: "16px",
              borderRadius: "20px",
            }}
          >
            {pdf.name}
          </button>
        ))}
      </div>
      {isMobile ? (
        <div></div>
      ) : (
        <div>
          <PDFViewer
            file={files[selectedFile].file}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </div>
      )}
    </div>
  );
};

export default PDFSelector;
