import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Ryan from '../Ryan.pdf';
import { sampleBase64pdf } from '../sampleBase64pdf';

const ReactPDFViewer = () => {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	function changePage(offset) {
		setPageNumber((prevPageNumber) => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}

	return (
		<div>
			<Document
				file={sampleBase64pdf}
				options={{ workerSrc: '/pdf.worker.js' }}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={pageNumber} />
			</Document>
			<div>
				<p>
					Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
				</p>
				<button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
					Previous
				</button>
				<button
					type="button"
					disabled={pageNumber >= numPages}
					onClick={nextPage}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ReactPDFViewer;
