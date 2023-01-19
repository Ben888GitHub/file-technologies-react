import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

const FileUploadValidate = () => {
	const [files, setFiles] = useState([]);

	return (
		<div
			className="container"
			style={{
				width: 500,
				margin: 'auto',
				marginTop: 100
			}}
		>
			<FilePond
				files={files}
				allowFileTypeValidation={true}
				allowFileSizeValidation={true}
				// acceptedFileTypes={['image/png', 'image/jpeg']}
				allowMultiple={true}
				maxFileSize={1000000}
				labelMaxFileSizeExceeded={'File is too large'}
				onupdatefiles={(files) => {
					console.log(files);
					console.log(files[0].file.name);
					// const fileItems = files.map((value) => value.file);
					setFiles(files);
				}}
			/>
			<br />
			{files?.map((file, idx) => (
				<h2 key={idx}>{file.file.name}</h2>
			))}
			{/* <h2>{files[0]?.file?.name}</h2> */}
		</div>
	);
};

export default FileUploadValidate;

//* Reference:
// * https://www.npmjs.com/package/react-filepond
// * https://www.positronx.io/react-file-type-validation-using-filepond-module-tutorial/
// * https://www.positronx.io/how-to-add-file-size-validation-in-react-with-filepond/
