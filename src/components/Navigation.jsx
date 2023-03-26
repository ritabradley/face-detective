const Navigation = ({onRouteChange, isSignedIn}) => {
	return isSignedIn ? (
		<nav className="flex justify-end">
			<a
				onClick={() => onRouteChange("signout")}
				className="cursor-pointer p-3 text-xl text-violet-700 underline hover:text-violet-500"
			>
				Sign Out
			</a>
		</nav>
	) : (
		<nav className="flex justify-end">
			<a
				onClick={() => onRouteChange("signin")}
				className="cursor-pointer p-3 text-xl text-violet-700 underline hover:text-violet-500"
			>
				Sign In
			</a>
			<a
				onClick={() => onRouteChange("register")}
				className="cursor-pointer p-3 text-xl text-violet-700 underline hover:text-violet-500"
			>
				Register
			</a>
		</nav>
	);
};

export default Navigation;
