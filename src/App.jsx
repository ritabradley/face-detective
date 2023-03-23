import { useState } from "react";
import Particles from "particles-bg";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageForm from "./components/ImageForm";
import Entries from "./components/Entries";

const App = () => {
  const [imgUrl, setImgUrl] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setImgUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(imgUrl);
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
      <Navigation />
      <Logo />
      <div className="grid place-content-center w-full m-auto mt-4 text-center">
        <Entries />
        <ImageForm
          onInputChange={handleInputChange}
          onButtonSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
