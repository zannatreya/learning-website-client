import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaArrowRight,
  FaUserTie,
  FaUserEdit,
  FaBook,
  FaComment,
  FaStackExchange,
  FaMoneyCheckAlt,
  FaSmile,
} from "react-icons/fa";

const Checkout = () => {
  const course = useLoaderData();
  const {
    id,
    title,
    details,
    img,
    teacher,
    rating,
    tutorials,
    students,
    view,
    cost,
  } = course;

  return (
    <div className="p-6 pt-36 lg:p-36 lg:grid grid-cols-5 gap-12">
      <div className="col-span-3 mb-12">
        <form className=" shadow-lg rounded-2xl p-4 md:p-20">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
            >
              Your E-mail
            </label>
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="E-mail"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required=""
            />
          </div>
          <button
            type="submit"
            className="text-white bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Pay Now
          </button>
          <div className="flex items-center flex-col"></div>

          <div className="flex justify-between items-center py-10">
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Credit Card
              </label>{" "}
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                PayPal
              </label>{" "}
            </div>
          </div>
        </form>
      </div>

      <div className="bg-sky-500 shadow-xl col-span-2 p-12 lg:w-4/5 bg rounded-2xl h-fit text-white">
        <h3 className="md:text-3xl text-center text-xl font-semibold mb-12 text-white ">
          More About the Course
        </h3>
        <p className="font-medium ">
          <span className="font-bold text-white">
            <FaComment className="inline mr-2"></FaComment>Course Name:{" "}
          </span>
          {title}
        </p>
        <div className="divider"></div>

        <p className="font-medium ">
          <span className="font-bold text-white">
            <FaMoneyCheckAlt className="inline mr-2"></FaMoneyCheckAlt> Course
            Purchases :
          </span>{" "}
          {cost.offer}{" "}
          <small className="bg-white rounded-2xl p-2 text-sky-400 font-bold ">
            {cost.off}% off{" "}
          </small>{" "}
          <span className="line-through ml-1"> {cost.general}</span>
        </p>
        <div className="divider"></div>
        <p className="font-medium ">
          <span className="font-bold text-white">
            <FaUserTie className="inline mr-2"></FaUserTie>Instructor:{" "}
          </span>
          {teacher.name}
        </p>

        <div className="divider"></div>

        <p className="font-medium ">
          <span className="font-bold text-white">
            <FaBook className="inline mr-2"></FaBook>Course Name:{" "}
          </span>
          {title}
        </p>

        <div className="divider"></div>

        <p className="font-medium">
          <span className="font-bold text-white">
            <FaUserEdit className="inline mr-2"></FaUserEdit> Enrolled :
          </span>{" "}
          {students}
        </p>

        <div className="divider"></div>

        <p className="font-medium ">
          <span className="font-bold text-white">
            <FaSmile className="inline mr-2"></FaSmile>Total View:{" "}
          </span>
          {view}
        </p>

        <div className="divider"></div>

        <p className="font-medium ">
          <span className="font-bold text-white">
            <FaStackExchange className="inline mr-2"></FaStackExchange>Last
            Updated:{" "}
          </span>
          {teacher.lastUpdate}
        </p>
      </div>
    </div>
  );
};

export default Checkout;
