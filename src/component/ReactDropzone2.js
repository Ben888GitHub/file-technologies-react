import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props) => {
	if (props.isDragAccept) {
		return '#00e676';
	}
	if (props.isDragReject) {
		return '#ff1744';
	}
	if (props.isFocused) {
		return '#2196f3';
	}
	return '#eeeeee';
};

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border-width: 2px;
	border-radius: 2px;
	border-color: ${(props) => getColor(props)};
	border-style: dashed;
	background-color: #fafafa;
	color: #bdbdbd;
	outline: none;
	transition: border 0.24s ease-in-out;
`;

const ReactDropzone2 = () => {
	const [selectedFile, setSelectedFile] = useState([]);

	const onDrop = useCallback((acceptedFiles) => {
		// Do something with the files
		if (acceptedFiles.length > 0) {
			console.log(acceptedFiles);
			setSelectedFile(acceptedFiles);
		} else {
			console.log('Only image format is accepted');
		}
	}, []);

	const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
		useDropzone({ accept: { 'image/*': [] }, onDrop });

	return (
		<div className="container">
			<Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</Container>
			<br />
			<br />
			{selectedFile && <h2>{selectedFile[0]?.path}</h2>}
		</div>
	);
};

export default ReactDropzone2;
