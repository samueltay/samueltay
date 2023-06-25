import React, { useState } from "react";
import PDFViewer from "./PDFViewer";

interface PDFFile {
  name: string;
  file: string;
}

interface PDFSelectorProps {
  files: PDFFile[]; // Array of PDF files with name and file location
}

const PDFSelector: React.FC<PDFSelectorProps> = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState(0);

  const handleFileSelect = (index: number) => {
    setSelectedFile(index);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingRight: "20px" }}>
        {files.map((pdf, index) => (
          <button
            key={index}
            onClick={() => handleFileSelect(index)}
            disabled={selectedFile === index}
            style={{ display: "block", marginBottom: "10px" }}
          >
            {pdf.name}
          </button>
        ))}
      </div>
      <div>
        <PDFViewer file={files[selectedFile].file} />
      </div>
    </div>
  );
};

export default PDFSelector;
