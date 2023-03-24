const FaceDetection = ({imgUrl, faceData}) => {
	const displayBoundingBoxes = () => {
		return faceData.map((face, index) => {
			const {topRow, rightCol, bottomRow, leftCol} = face;
			return (
				<div
					key={index}
					className="absolute border-2 border-pink-500"
					style={{
						top: topRow,
						right: rightCol,
						bottom: bottomRow,
						left: leftCol,
					}}
				></div>
			);
		});
	};

	return (
		<div className="flex justify-center">
			{imgUrl ?
				<div className="relative w-full">
					<img className="w-full h-full object-fit" id="input-image"
					     src={imgUrl} alt="face" width="100%"
					     height="auto"/>
					{displayBoundingBoxes()}
				</div> :
				<p>No image to display</p>
			}

		</div>
	);
};

export default FaceDetection;
