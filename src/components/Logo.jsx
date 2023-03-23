import Tilt from "react-parallax-tilt";
import logo from "../assets/face-detective-icon.png";

const Logo = () => {
  return (
    <Tilt
      className="flex items-center justify-center rounded-md shadow-lg bg-reverse-gradient"
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
