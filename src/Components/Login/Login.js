import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { googleSignIn, signIn, createGitHubUser, setLoading } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "";

  const handleGoogleUser = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleGithubUser = () => {
    createGitHubUser()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="pt-24 md:w-1/2 md:p-12 p-8 pb-8 justify-center items-center mx-auto shadow-lg rounded-2xl">
      <h1 className="text-center text-4xl md:text-3xl font-bold mt-20 mb-8">
        Please Login
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="your email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
            >
              Your Password
            </label>
            <input
              type="text"
              name="password"
              id=""
              placeholder="your password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>

          <p className="text-xl text-yellow-400 py-3">{error}</p>

          <div className="flex flex-col items-center">
            <button
              type="submit"
              onClick={handleGoogleUser}
              className="text-slate-800 border-2 border-blue-400 mx-auto hover:bg-blue-400 block m-2 font-medium rounded-lg  px-5 lg:w-96 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in with Google
            </button>
            <button
              type="submit"
              onClick={handleGithubUser}
              className="text-slate-800 border-2 border-blue-400 mx-auto hover:bg-blue-400 block m-2 font-medium rounded-lg  px-5 lg:w-96 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in with Github
            </button>
          </div>
          <p className="text-center my-2">
            <span>New To Quick Learning ?</span>
            <Link className="text-orange-400" to="/register">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
