import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const CourseCard = ({ course }) => {
  console.log(course);
  const { id, title, details, img, teacher, rating } = course;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:grid grid-cols-4 lg:w-3/4 lg:h-72 lg:mx-auto m-10 my-12">
      <figure>
        <img src={img} alt="" className="h-full rounded-t-xl lg:rounded-l-xl" />
      </figure>
      <div className="card-body p-8 col-span-3">
        <h2 className="card-title text-3xl font-bold pb-3">
          Introduction With {title}
        </h2>
        <p className="pb-8">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link
                to={`/courses/${id}`}
                className="text-blue-700 hover:text-sky-400"
              >
                Learn More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
        <div className="card-actions justify-between flex flex-col lg:flex-row lg:items-center">
          <div className="flex items-center">
            <img
              src={teacher.photo}
              alt=""
              className="w-16 h-16 rounded-full border-2 border-white shadow-md mr-4"
            />
            <h3 className="font-bold text-xl">{teacher.name}</h3>
          </div>
          <div className="flex items-center">
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            <FaStar className="text-yellow-400"></FaStar>
            <FaStarHalfAlt className="text-yellow-400"></FaStarHalfAlt>
            <p className="font-semibold ml-2">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
