import Tilt from "react-parallax-tilt";
import logo from "../assets/face-detective-icon.png";

const Logo = () => {
  return (
    <Tilt
      className="rounded-md shadow-lg flex justify-center items-center bg-reverse-gradient"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      style={{ height: 150, width: 150 }}
    >
      <div className="m-4 mt-0">
        <img src={logo} alt="Face Detective logo" />
      </div>
    </Tilt>
  );
};

export default Logo;
