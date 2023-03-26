import { useState } from "react";
import ErrorAlert from "./ErrorAlert";

const ResetPasswordForm = ({ email, token, onRouteChange }) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          token,
          newPassword: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onRouteChange("signin");
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error("Error resetting password:", err);
      setErrorMessage(err.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </label>
        {errorMessage && <ErrorAlert alertMessage={errorMessage} />}
        <button className="signin-button" type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
