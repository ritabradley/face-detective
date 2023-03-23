import Particles from "particles-bg";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div>
      <Particles color="#ffffff" num={250} type="cobweb" bg={true} />
      <h1>Face Detective</h1>
      <Navigation />
      <Logo />
    </div>
  );
};

export default App;
