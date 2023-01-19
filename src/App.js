import './App.css';
import FileUploadValidate from './component/FileUploadValidate';
import ReactCsv from './component/ReactCsv';

function App() {
	const getFileInformation = (e) => {
		let files = e.target.files;
		let filesArray = [].slice.call(files);
		console.log(filesArray);
		filesArray.forEach((e) => {
			console.log(e.name);
			console.log(e.size);
			console.log(parseFloat(e.size));
			console.log(e.type);
			console.log(e.lastModifiedDate);
		});
	};

	return (
		<div className="App">
			<h1>React File Technologies</h1>
			{/* <input type="file" onChange={getFileInformation} /> */}
			<FileUploadValidate />
			<br />
			<ReactCsv />
		</div>
	);
}

export default App;
