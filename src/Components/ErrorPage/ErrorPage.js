import React from "react";
import { Link } from "react-router-dom";
import error1 from "../../Images/img/error1.webp";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-2/4  mb-12" src={error1} alt="" />
      <Link
        to="/"
        className="bg-emerald-500 text-slate-200 py-3 px-12 rounded-lg font-semibold text-xl"
      >
        Back To Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
