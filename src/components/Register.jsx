import { useState } from "react";
import ErrorAlert from "./ErrorAlert.jsx";

const Register = ({ onRouteChange }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/])[A-Za-z\d~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let errorMessages = [];

    if (firstName.trim() === "") {
      setFirstNameError(true);
      hasError = true;
      errorMessages.push("First Name is required.");
    } else {
      setFirstNameError(false);
    }

    if (email.trim() === "" || !isEmailValid(email)) {
      setEmailError(true);
      hasError = true;
      errorMessages.push("Please enter a valid email address.");
    } else {
      setEmailError(false);
    }

    if (password.trim() === "" || !isPasswordValid(password)) {
      setPasswordError(true);
      hasError = true;
      errorMessages.push(
        "Password must be at least 8 characters long, contain numbers, lowercase and uppercase letters, and any of the following special characters: ~`! @#$%^&*()_-+={[}]|:;\"'<,>.?/."
      );
    } else {
      setPasswordError(false);
    }

    if (hasError) {
      setErrorMessage(errorMessages.join(" "));
      return;
    }

    // Your registration logic here

    onRouteChange("home");
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-violet-700">
          Register for an account
        </h2>
        <p className="mt-2 text-center text-md text-white">
          Or{" "}
          <a
            href="#"
            className="font-bold text-violet-500 hover:text-violet-600"
            onClick={() => onRouteChange("signin")}
          >
            sign in
          </a>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="input-bg-pattern py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className={`signin-form-input ${
                    firstNameError ? "border-red-500" : ""
                  }`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>

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
                  className={`signin-form-input ${
                    emailError ? "border-red-500" : ""
                  }`}
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
                  autoComplete="new-password"
                  required
                  className={`signin-form-input ${
                    passwordError ? "border-red-500" : ""
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {errorMessage && <ErrorAlert alertMessage={errorMessage} />}
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="signin-button"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
