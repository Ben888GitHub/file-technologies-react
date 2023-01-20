import { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import ryanStatus from '../Ryan.pdf';

const MikeCousinPDF = () => {
	const [page, setPage] = useState(1);
	const canvasRef = useRef(null);

	const { pdfDocument, pdfPage } = usePdf({
		file: ryanStatus,
		page,
		canvasRef,
		willReadFrequently: true
	});

	return (
		<div>
			{!pdfDocument && <span>Loading...</span>}
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
