import React from "react";
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
  FaDownload,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

import jsPDF from "jspdf";

const CourseCardDetails = () => {
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

  const jsPdfGenerator = () => {
    var doc = new jsPDF("p", "pt");

    doc.text(20, 20, `Course Name : ${title}`);

    doc.setFont("bold");
    doc.text(20, 40, `rating :${rating}`);
    doc.text(20, 60, `teacher: ${teacher.name}`);
    doc.text(20, 80, `course fee : ${cost.general}`);
    doc.text(20, 100, `course offer : ${cost.off}%`);
    doc.text(20, 120, `students : ${students}`);
    doc.text(20, 140, `lecture : ${tutorials}`);
    doc.text(20, 180, `details :${details.slice(0, 70)}`);

    doc.save("generated.pdf");
  };

  return (
    <div className="lg:p-64 p-6 pt-36  flex flex-col lg:flex-row justify-between ">
      <div className="w-full lg:w-3/5 mb-20 lg:mb-0">
        <h1 className="text-5xl mb-12 text-slate-600 font-bold">
          Welcome to our {title} course!{" "}
          <button className="text-lg " onClick={jsPdfGenerator}>
            Download PDF<FaDownload className="inline ml-2"></FaDownload>
          </button>{" "}
        </h1>

        <div className="flex flex-col md:flex-row  justify-between">
          <div className="flex mb-6  items-center">
            <img
              className="w-16 border-2 border-white mr-3 shadow-md h-16 rounded-full"
              src={teacher.photo}
              alt=""
            />
            <div>
              <h3 className="font-bold text-base text-gray-600 ">Teacher</h3>
              <h3 className="font-bold text-lg">{teacher.name}</h3>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-bold  text-base text-gray-600 lg:ml-20">
              Last Published Date
            </h3>
            <h3 className="font-bold text-lg lg:ml-20">{teacher.lastUpdate}</h3>
          </div>

          <div className="mb-6 ml-4">
            <h3 className="font-bold text-base text-gray-600">Ratings</h3>
            <div className="flex items-center">
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStarHalfAlt className="text-yellow-400"></FaStarHalfAlt>
              <p className="ml-2 font-semibold">{rating}</p>
            </div>
          </div>
        </div>

        <div className="py-24">
          <img className="rounded-2xl my-10" src={img} alt="" />
          <h2 className="text-3xl font-semibold my-5">Course Overview</h2>
          <p className="text-lg text-justify">{details}</p>
        </div>

        <div>
          <Link
            to={`/courses/checkout/${id}`}
            className="bg-sky-800 py-3 px-2 md:px-12  rounded-xl text-white font-medium text-xl"
          >
            Get The Premium Access
            <FaArrowRight className="inline ml-2"></FaArrowRight>
          </Link>
        </div>
      </div>

      <div className="shadow-xl p-6 lg:p-16 rounded-2xl h-fit lg:mt-56">
        <h3 className="md:text-3xl text-center text-xl font-semibold mb-12 text-cyan-800">
          More About The Course
        </h3>
        <p className="font-medium">
          <span className="font-bold text-sky-600">
            <FaComment className="inline mr-2"></FaComment> Course Name :
          </span>{" "}
          {title}
        </p>
        <div className="divider"></div>
        <p className="font-medium">
          <span className="font-bold text-sky-600">
            <FaMoneyCheckAlt className="inline mr-2"></FaMoneyCheckAlt> Course
            Purchases :
          </span>{" "}
          {cost.offer}{" "}
          <small className="bg-sky-500 rounded-2xl p-2 text-white font-semibold">
            {cost.off}%off{" "}
          </small>
          <span className="line-through ml-2">{cost.general}</span>
        </p>
        <div className="divider"></div>
        <p className="font-medium">
          <span className="font-bold text-sky-600">
            <FaUserTie className="inline mr-2"></FaUserTie> Instructor :
          </span>{" "}
          {teacher.name}
        </p>
        <div className="divider"></div>
        <p className="font-medium">
          <span className="font-bold text-sky-600">
            <FaBook className="inline mr-2"></FaBook> Lectures:
          </span>{" "}
          {tutorials}
        </p>
        <div className="divider"></div>
        <p className="font-medium">
          <span className="font-bold text-sky-600">
            <FaUserEdit className="inline mr-2"></FaUserEdit> Enrolled:
          </span>{" "}
          {students}
        </p>
        <div className="divider"></div>
        <p className="font-medium">
          <span className="font-bold text-sky-600">
            <FaSmile className="inline mr-2"></FaSmile> Total View:
          </span>{" "}
          {view}
        </p>
        <div className="divider"></div>
        <p className="font-medium">
          <span className="font-bold text-sky-600">
            <FaStackExchange className="inline mr-2"></FaStackExchange> Last
            Updated:
          </span>{" "}
          {teacher.lastUpdate}
        </p>
      </div>
    </div>
  );
};

export default CourseCardDetails;
