import { sampleBase64pdf } from '../sampleBase64pdf';
import reactRoapmap from '../react_roadmap_2023.pdf';
import ryanStatus from '../Ryan.pdf';

const OpenPDFNewPage = () => {
	return (
		<>
			<center>
				<h3>Click on below link to open PDF file in new tab</h3>
				<a href={reactRoapmap} target="_blank" rel="noopener noreferrer">
					Open Roadmap PDF
				</a>
				<br />
				<br />
				<a href={ryanStatus} target="_blank" rel="noopener noreferrer">
					Download RStatus PDF
				</a>
			</center>
		</>
	);
};

export default OpenPDFNewPage;
