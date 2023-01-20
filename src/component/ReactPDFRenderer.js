import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	PDFViewer,
	PDFDownloadLink,
	Link
} from '@react-pdf/renderer';
import Ryan from '../Ryan.pdf';

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	},
	viewer: {
		width: window.innerWidth / 3, //the pdf viewer will take up all of the width and height
		height: window.innerHeight / 2
	}
});

const NewPDFDocument = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text>Section #1</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
			</View>
			<View style={styles.section}>
				{/* <Text>
					<Link src="https://www.medium.com">Go to Medium</Link>
				</Text> */}
				<Link src="https://www.medium.com">
					<Text>Go to Medium</Text>{' '}
				</Link>
			</View>
			{/* <View style={styles.section}></View> */}
		</Page>
	</Document>
);

const ReactPDFRenderer = () => {
	return (
		<div>
			<h1>React PDF Renderer</h1>
			<br />
			{/* <button
				onClick={() =>
					ReactPDF.render(<NewPDFDocument />, `example.pdf`)
				}
			>
				Generate new PDF
			</button> */}
			<PDFViewer style={styles.viewer}>
				<NewPDFDocument />
			</PDFViewer>
			<br />
			<PDFDownloadLink document={<NewPDFDocument />} filename="newdoc.pdf">
				<button>Download now</button>
			</PDFDownloadLink>
		</div>
	);
};

export default ReactPDFRenderer;

//* Reference:
/**
 * https://www.youtube.com/watch?v=HhLa-D0SXlI
 * https://blog.logrocket.com/generating-pdfs-react/
 * https://react-pdf.org/repl?code=3187b0760ce02e00408a057025803c450298c0bc300500943807cf805030c00f0022230080b6198531165d400a02180e619da74e5400c923001ac6000b004e18019b6004432a14000e10017007a3d7c9141908011803a508cf40132418f884608e4f3d0a7b028016936dc51521611800482a00150c143600014f6f3f008f165b0c05392a3d2898e0e12cf1293cea3d5e0160acba0666567602006e323200250c2f282e1a00310b053034b93c2a4454742c3d6206b2200000
 */
