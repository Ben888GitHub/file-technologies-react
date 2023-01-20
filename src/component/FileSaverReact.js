import { saveAs } from 'file-saver';

const FileSaverReact = () => {
	return (
		<div>
			<button
				onClick={() =>
					saveAs(
						'https://afar.brightspotcdn.com/dims4/default/1e3e731/2147483647/strip/false/crop/1440x720+0+0/resize/1440x720!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2Fcf%2F8a%2F20b4a2c544a58be93512ad67084c%2Fbohler-japankk-4006.jpg',
						'japan.jpg'
					)
				}
			>
				Download Image
			</button>
			<br />
			<br />
			<img
				src="https://afar.brightspotcdn.com/dims4/default/1e3e731/2147483647/strip/false/crop/1440x720+0+0/resize/1440x720!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2Fcf%2F8a%2F20b4a2c544a58be93512ad67084c%2Fbohler-japankk-4006.jpg"
				alt=""
				width="1046px"
				height="570px"
			/>
		</div>
	);
};

export default FileSaverReact;

//* Reference: https://www.npmjs.com/package/file-saver
