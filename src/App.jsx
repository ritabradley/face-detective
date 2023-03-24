import {useState} from "react";
import Particles from "particles-bg";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageForm from "./components/ImageForm";
import Entries from "./components/Entries";
import FaceDetection from "./components/FaceDetection";


const App = () => {
	const [input, setInput] = useState("");
	const [imgUrl, setImgUrl] = useState("");

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setImgUrl(input);
		const PAT = "d04f663f574948a890d313e514794d6f";
		const USER_ID = "ritalbradley";
		const APP_ID = "face-detective";
		const MODEL_ID = "face-detection";
		const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";

		const raw = JSON.stringify({
			"user_app_id": {
				"user_id": USER_ID,
				"app_id": APP_ID
			},
			"inputs": [
				{
					"data": {
						"image": {
							"url": input
						}
					}
				}
			]
		});

		const requestOptions = {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Authorization": "Key " + PAT
			},
			body: raw
		};
		fetch("https://api.clarifai.com/v2/users/" + USER_ID + "/apps/" + APP_ID + "/models/" + MODEL_ID + "/outputs", requestOptions)
			.then(response => response.json())
			.then(result => console.log(result))
			.catch(error => console.log("error", error));
	};

	return (
		<div>
			<Particles
				className="min-h-screen"
				color="#ffffff"
				num={250}
				type="cobweb"
				bg={true}
			/>
			<h1>Face Detective</h1>
			<Navigation/>
			<Logo/>
			<div
				className="grid place-content-center w-full m-auto mt-4 text-center">
				<Entries/>
				<ImageForm
					onInputChange={handleInputChange}
					onButtonSubmit={handleSubmit}
				/>
				<FaceDetection imgUrl={imgUrl}/>
			</div>
		</div>
	);
};

export default App;
