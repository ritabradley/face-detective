import Particles from "particles-bg";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageForm from "./components/ImageForm";

const App = () => {
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
      <ImageForm />
    </div>
  );
};

export default App;
