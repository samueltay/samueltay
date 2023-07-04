import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./PDFComponent.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewerProps {
  pdfWidth?: number;
  file: string;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  pdfWidth = 600,
  file,
  pageNumber,
  setPageNumber,
}) => {
  const [numPages, setNumPages] = useState<number>(0);

  const handleLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setPageNumber(1);
  }, [file, setPageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div className="pdf-viewer-container">
      <button
        disabled={pageNumber <= 1}
        onClick={() => handlePageChange(pageNumber - 1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="pdf-viewer">
        <Document file={file} onLoadSuccess={handleLoadSuccess}>
          <Page pageNumber={pageNumber} width={pdfWidth} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <button
        disabled={pageNumber >= numPages}
        onClick={() => handlePageChange(pageNumber + 1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default PDFViewer;
