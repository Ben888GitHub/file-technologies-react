import './App.css';
import FileSaverReact from './component/FileSaverReact';
import FileUploadValidate from './component/FileUploadValidate';
import MikeCousinPDF from './component/MikeCousinPDF';
import OpenPDFNewPage from './component/OpenPDFNewPage';
import ReactCsv from './component/ReactCsv';
import ReactDropzone from './component/ReactDropzone';
import ReactDropzone2 from './component/ReactDropzone2';
import ReactPDFRenderer from './component/ReactPDFRenderer';

function App() {
	return (
		<div className="App">
			<h1>React File Technologies</h1>
			{/* <input type="file" onChange={getFileInformation} /> */}
			<FileUploadValidate />
			<br />
			<ReactCsv />
			<br />
			<br />
			<br />
			<br />
			<FileSaverReact />
			<br />
			<br />
			<OpenPDFNewPage />
			<br />
			<br />
			<MikeCousinPDF />
			<br />
			<br />
			<ReactPDFRenderer />
			<br />
			<br />
			<ReactDropzone />
			<br />
			<br />
			<ReactDropzone2 />
		</div>
	);
}

export default App;

// const getFileInformation = (e) => {
// 	let files = e.target.files;
// 	let filesArray = [].slice.call(files);
// 	console.log(filesArray);
// 	filesArray.forEach((e) => {
// 		console.log(e.name);
// 		console.log(e.size);
// 		console.log(parseFloat(e.size));
// 		console.log(e.type);
// 		console.log(e.lastModifiedDate);
// 	});
// };
