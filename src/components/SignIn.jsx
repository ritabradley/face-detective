import {useEffect, useState} from "react";
import ErrorAlert from "./ErrorAlert";

// TODO: We're going to use some OAuth magic to make the sign in process easier as well
// TODO: Have a 'Sign In with Google' button
// TODO: Have a 'Sign In with Facebook' button
// TODO: Have a 'Sign In with Twitter' button

const SignIn = ({onRouteChange}) => {
	const [email, setEmail] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const isEmailValid = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	useEffect(() => {
		// Retrieve saved email and timestamp from localStorage
		const savedEmail = localStorage.getItem("email");
		const savedTimestamp = localStorage.getItem("emailTimestamp");

		// Check if saved email and timestamp exist
		if (savedEmail && savedTimestamp) {
			const currentDate = new Date();
			const savedDate = new Date(Number(savedTimestamp));
			const daysPassed = (currentDate - savedDate) / (1000 * 60 * 60 * 24);

			// Check if saved email is within the 14-day limit
			if (daysPassed <= 14) {
				setEmail(savedEmail);
				setRememberMe(true);
			} else {
				// Clear saved email and timestamp if the 14-day limit has passed
				localStorage.removeItem("email");
				localStorage.removeItem("emailTimestamp");
			}
		}
	}, []);

	const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    onRouteChange("forgotpassword"); // Change the route to forgotpassword
  };

	const handleRememberMeChange = (e) => {
		setRememberMe(e.target.checked);
	};

	const handleSignIn = async (email, password) => {
		try {
			const response = await fetch("http://localhost:3000/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				return data;
			} else {
				throw new Error(data);
			}
		} catch (err) {
			console.error("Error signing in:", err);
			return null;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let hasError = false;
		let errorMessages = [];

		if (email.trim() === "" || !isEmailValid(email)) {
			setEmailError(true);
			hasError = true;
			errorMessages.push("Please enter a valid email address.");
		} else {
			setEmailError(false);
		}

		if (password.trim() === "") {
			setPasswordError(true);
			hasError = true;
			errorMessages.push("Password is required.");
		} else {
			setPasswordError(false);
		}

		if (hasError) {
			setErrorMessage(errorMessages.join(" "));
			return;
		}

		const signInResult = await handleSignIn(email, password);

		if (signInResult) {
			if (rememberMe) {
				localStorage.setItem("email", email);
				localStorage.setItem("emailTimestamp", new Date().getTime());
			} else {
				localStorage.removeItem("email");
				localStorage.removeItem("emailTimestamp");
			}
			onRouteChange("home");
		} else {
			setErrorMessage("Invalid email or password. Please try again.");
		}
	};


	return (
		<div
			className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-violet-700">
					Sign in to your account
				</h2>
				<p className="mt-2 text-center text-md text-white">
					Or{" "}
					<a
						onClick={() => onRouteChange("register")}
						href="#"
						className="font-bold text-violet-500 hover:text-violet-600"
					>
						register for an account
					</a>
				</p>
			</div>
			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div
					className="input-bg-pattern py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label htmlFor="email" className="form-label">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="signin-form-input"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>

						<div>
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="signin-form-input"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						{errorMessage &&
							<ErrorAlert alertMessage={errorMessage}/>}
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 rounded border-violet-300 text-violet-500 focus:ring-violet-500"
									checked={rememberMe}
									onChange={handleRememberMeChange}
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-violet-700"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-violet-500 hover:text-violet-600"
									onClick={handleForgotPasswordClick}
								>
									Forgot your password?
								</a>
							</div>
						</div>

						<div>
							<button
								onClick={handleSubmit}
								type="submit"
								className="signin-button"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
