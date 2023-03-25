const Navigation = ({ onRouteChange }) => {
  return (
    <div className="flex justify-end">
      <a
        onClick={() => onRouteChange("signin")}
        className="cursor-pointer p-3 text-xl text-violet-700 underline hover:text-violet-500"
      >
        Sign Out
      </a>
    </div>
  );
};

export default Navigation;
