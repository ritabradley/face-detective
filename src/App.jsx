import { useState } from "react";
import Particles from "particles-bg";
import SignIn from "./components/SignIn";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageForm from "./components/ImageForm";
import Entries from "./components/Entries";
import FaceDetection from "./components/FaceDetection";

const App = () => {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [faceData, setFaceData] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFaceData = (data) => {
    setFaceData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setImgUrl(input);
    const PAT = "d04f663f574948a890d313e514794d6f";
    const USER_ID = "ritalbradley";
    const APP_ID = "face-detective";
    const MODEL_ID = "face-detection";

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };
    fetch(
      "https://api.clarifai.com/v2/users/" +
        USER_ID +
        "/apps/" +
        APP_ID +
        "/models/" +
        MODEL_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const faceRegions = result.outputs[0].data.regions;
        const imageElement = document.getElementById("input-image");
        const width = Number(imageElement.width);
        const height = Number(imageElement.height);
        const faceData = faceRegions.map((region) => {
          const boundingBox = region.region_info.bounding_box;
          return {
            topRow: boundingBox.top_row * height,
            rightCol: width - boundingBox.right_col * width,
            bottomRow: height - boundingBox.bottom_row * height,
            leftCol: boundingBox.left_col * width,
          };
        });
        handleFaceData(faceData);
      })
      .catch((error) => console.log("error", error));
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
      <SignIn />
      <Navigation />
      <Logo />
      <div className="grid place-content-center text-center w-full max-w-4xl mt-6 mx-auto">
        <Entries />
        <ImageForm
          onInputChange={handleInputChange}
          onButtonSubmit={handleSubmit}
        />
        <FaceDetection imgUrl={imgUrl} faceData={faceData} />
      </div>
    </div>
  );
};

export default App;
