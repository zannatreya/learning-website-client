import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const {
    createUser,
    googleSignIn,
    createGitHubUser,
    verifyEmail,
    updateUserProfile,
  } = useContext(AuthContext);
  const [error, setError] = useState("");

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
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        handleUpdateUser(name, photoURL);
        handleVerifyEmail();
        toast.success("Please verify your email address.");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateUser = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className="pt-24 md:w-1/2 md:p-12 p-8  pb-8 justify-center items-center mx-auto shadow-lg rounded-2xl">
      <h1 className="text-center text-4xl md:text-3xl font-bold md:mt-20 mb-8">
        Please Register
      </h1>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="photoURL"
              className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
            >
              Your photoURL
            </label>
            <input
              type="text"
              name="photoURL"
              id=""
              placeholder="your photoURL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="your name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
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
          <p className="text-xl text-yellow-400 py-3">{error}</p>

          <button
            type="submit"
            className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>

          <div className="flex flex-col items-center mt-6">
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
          <p className="my-2 text-center ">
            <span>Already Have An Account ?</span>
            <Link to="/login" className="text-orange-400">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
