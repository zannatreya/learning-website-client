import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import SideBar from "../SideBar/SideBar";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="flex flex-col md:flex-row pt-24">
      <div className="">
        <SideBar courses={courses}></SideBar>
      </div>
      <div className="lg:grid grid-cols-2 lg:grid-cols-1 w-full ">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
