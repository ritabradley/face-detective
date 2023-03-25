// TODO: We're going to use some OAuth magic to make the sign in process easier as well
// TODO: Have a 'Sign In with Google' button
// TODO: Have a 'Sign In with Facebook' button
// TODO: Have a 'Sign In with Twitter' button

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-violet-700">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-md text-white">
          Or{" "}
          <a
            href="#"
            className="font-bold text-violet-500 hover:text-violet-600"
          >
            register for an account
          </a>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="input-bg-pattern py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-violet-300 text-violet-500 focus:ring-violet-500"
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
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={() => onRouteChange("home")}
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
