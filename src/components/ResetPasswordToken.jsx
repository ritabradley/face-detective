import { useState, useEffect } from "react";
import ResetPasswordForm from './ResetPasswordForm'
import ErrorAlert from "./ErrorAlert";

const ResetPasswordToken = ({ match, onRouteChange }) => {
  const [validToken, setValidToken] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/resetpassword/${match.params.token}`
        );
        const data = await response.json();

        if (response.ok) {
          setEmail(data.email);
          setValidToken(true);
        } else {
          setError(data.message);
        }
      } catch (err) {
        console.error("Error checking token:", err);
      }
    };

    checkToken();
  }, [match.params.token]);

  if (error) {
    return <ErrorAlert alertMessage={error} />;
  }

  if (validToken) {
    return (
      // Render the ResetPasswordForm component and pass email and token as props
      <ResetPasswordForm
        email={email}
        token={match.params.token}
        onRouteChange={onRouteChange}
      />
    );
  }

  return <p>Checking token...</p>;
};

export default ResetPasswordToken;
