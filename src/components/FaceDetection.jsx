const FaceDetection = ({imgUrl}) => {
	return (
		<div className="flex justify-center">
			{imgUrl ?
				<img src={imgUrl} alt="face" width="100%" height="auto"/> :
				<p>No image to display</p>
			}

		</div>
	);
};

export default FaceDetection;
