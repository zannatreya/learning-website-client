import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({courses}) => {
    const [open, setOpen] = useState(false);
    return (
        
        <div
            className={` ${open ? "w-full md:w-40" : "w-full md:w-60 "
                } flex flex-col h-screen p-3 pt-12 bg-white shadow duration-300`}
        >
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-black">
                        Dashboard
                    </h2>
                    <button onClick={() => setOpen(!open)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-black hidden md:block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                </div>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center py-4">
                        <button
                            type="submit"
                            className="p-2 focus:outline-none focus:ring"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </span>
                    <input
                        type="search"
                        name="Search"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                    />
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                       {
                        courses.map(course=> 
                             <li className="rounded-sm">
                        <Link
                            to={`/courses/${course.id}`}
                            className="flex items-center p-3 space-x-3 rounded-md"
                        >
                            <img className='w-10 rounded-full' src={course.icon} alt="" />
                            <span className="text-black text-base font-semibold">{course.title}</span>
                        </Link>
                    </li>)
                       }
                        
                    </ul>
                </div>
            </div>
        </div>

  
    );
};

export default SideBar;