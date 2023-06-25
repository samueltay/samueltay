import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocumentProxy } from "pdfjs-dist";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewerProps {
  file: string;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  file,
  pageNumber,
  setPageNumber,
}) => {
  const [numPages, setNumPages] = useState<number>(0);

  const handleLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    // Reset the page number when the file changes
    setPageNumber(1);
  }, [file, setPageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  return (
    <div>
      <Document file={file} onLoadSuccess={handleLoadSuccess}>
        <Page pageNumber={pageNumber} height={600} />
      </Document>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button
          disabled={pageNumber <= 1}
          onClick={() => handlePageChange(pageNumber - 1)}
        >
          Previous Page
        </button>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => handlePageChange(pageNumber + 1)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
