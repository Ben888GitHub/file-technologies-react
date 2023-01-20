import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ReactDropzone = () => {
	const onDrop = useCallback((acceptedFiles) => {
		// Do something with the files
		console.log(acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop
		// disabled: true (this can be used as a certain condition)
	});

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<br />
			{isDragActive ? (
				<p>Drop the files here ...</p>
			) : (
				<p>Drag 'n' drop some files here, or click to select files</p>
			)}
			<br />
		</div>
	);
};

export default ReactDropzone;
