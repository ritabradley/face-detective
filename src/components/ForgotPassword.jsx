import React, { useState } from "react";

const ForgotPassword = ({ onRouteChange }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // Replace this with your API call to check the email in your database
    const checkEmailInDatabase = (email) => {
      // Return true if email exists in the database, false otherwise
    };

    if (checkEmailInDatabase(email)) {
      setEmailSent(true);
      setEmailNotFound(false);
    } else {
      setEmailNotFound(true);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-violet-700">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-md text-white">
          Enter your email address below and we'll send you instructions to
          reset your password.
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="input-bg-pattern py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                />
              </div>
            </div>

            {emailSent && (
              <div className="text-center text-violet-700">
                An email has been sent with instructions to reset your password.
              </div>
            )}

            {emailNotFound && (
              <div className="text-center text-violet-700">
                Email not found in our records.{" "}
                <span>
                  Please{" "}
                  <a
                    href="#"
                    className="font-bold text-violet-500 hover:text-violet-600"
                    onClick={() => onRouteChange("register")}
                  >
                    sign up
                  </a>{" "}
                  or try again.
                </span>
              </div>
            )}

            <div>
              <button type="submit" className="signin-button">
                Send password reset email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
