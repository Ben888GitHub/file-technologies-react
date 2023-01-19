import { CSVLink, CSVDownload } from 'react-csv';

const headers = [
	{ label: 'First Name', key: 'firstname' },
	{ label: 'Last Name', key: 'lastname' },
	{ label: 'Email', key: 'email' }
];

const data = [
	{ firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
	{ firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
	{ firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' }
];

const ReactCsv = () => {
	return (
		<CSVLink data={data} headers={headers}>
			<button style={{ cursor: 'pointer' }}>Download me</button>
		</CSVLink>
	);
};

export default ReactCsv;

//* Reference: https://www.npmjs.com/package/react-csv
//* CSV Link: https://onedrive.live.com/Edit.aspx?resid=CE8C5C41143F8855!2086&wd=cpe
