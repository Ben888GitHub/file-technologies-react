import { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import ryanStatus from '../Ryan.pdf';
import { saveAs } from 'file-saver';

const MikeCousinPDF = () => {
	const [page, setPage] = useState(1);
	const canvasRef = useRef(null);

	const { pdfDocument } = usePdf({
		file: ryanStatus,
		page,
		canvasRef,
		willReadFrequently: true
	});

	const downloadPdf = () => {
		saveAs(ryanStatus, 'ryan_status.pdf');
	};

	return (
		<div>
			{!pdfDocument && <span>Loading...</span>}
			<button onClick={downloadPdf}>Download</button>
			<div>
				<canvas
					// willReadFrequently="true"
					style={{ border: '1px solid' }}
					ref={canvasRef}
				/>
			</div>
			{Boolean(pdfDocument && pdfDocument.numPages) && (
				<nav>
					<ul className="pager">
						<li className="previous">
							<button disabled={page === 1} onClick={() => setPage(page - 1)}>
								Previous
							</button>
						</li>
						<li className="next">
							<button
								disabled={page === pdfDocument.numPages}
								onClick={() => setPage(page + 1)}
							>
								Next
							</button>
						</li>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default MikeCousinPDF;
