import React from "react";

const FAQ = () => {
  return (
    <div className="pt-24 p-8  mx-auto">
      <h1 className="text-center text-2xl md:text-4xl font-bold py-12">
        Here are the frequently Asked Questions of the learners
      </h1>

      <div>
        <div className="w-full px-8 mx-auto mt-10 space-y-2 shadow-lg rounded-xl border-4 lg:w-2/3">
          <details className="md:p-6 p-2  pb-12 rounded-lg border-b-2">
            <summary className="font-bold text-xl">
              What is the difference between Compiler and Interpreter ?
            </summary>
            <div className="mt-3">
              <p className="text-lg text-justify leading-6 text-gray-600">
                A compiler translates the entire source code in a single run. An
                interpreter translates the entire source code line by line. It
                consumes less time i.e., it is faster than an interpreter. It
                consumes much more time than the compiler i.e., it is slower
                than the compiler.
              </p>
            </div>
          </details>
          <details className="md:p-6 p-2  pb-12 rounded-lg border-b-2">
            <summary className="font-bold text-xl">
              What is the difference between Web Development and Software
              Development ?
            </summary>
            <div className="mt-3">
              <p className="text-lg text-justify leading-6 text-gray-600">
                The main difference is the type of projects you might get to
                work on. A web developer specializes in web-based applications
                such as websites, e-commerce, and mobile development. Whereas a
                software developer will concentrate on creating software for the
                underlying operating system, network, or platform.
              </p>
            </div>
          </details>
          <details className="md:p-6 p-2  pb-12 rounded-lg border-b-2">
            <summary className="font-bold text-xl">
              Can I learn programming in 1 month ?
            </summary>
            <div className="mt-3">
              <p className="text-lg text-justify leading-6 text-gray-600">
                Most coders agree that it takes three to six months to be
                comfortable with the basics of coding. But you can learn coding
                faster or slower depending on your preferred pace.but that said,
                learning to code is truly a life-long process. One Month was
                perfect to accelerate my growth to the point where I felt I
                could learn more complex coding skills on my own.
              </p>
            </div>
          </details>
          <details className="md:p-6 p-2  pb-12 rounded-lg border-b-2">
            <summary className="font-bold text-xl">
              How much can a web developer earn ?
            </summary>
            <div className="mt-3">
              <p className="text-lg text-justify leading-6 text-gray-600">
                The money of a freelancing web developer may be affected by a
                number of things. Freelance web developer pay may vary greatly
                depending on factors such as location, years of experience, and
                specialty. However, a mountain of information has been amassed
                through the efforts of thousands of independent contractors. As
                a result, we may provide some of the estimations compiled by
                developer groups, job boards, and freelancing markets. Glassdoor
                found that the median annual salary for web engineers working
                for themselves was a little over $75,000 (as of May 2021).
              </p>
            </div>
          </details>
          <details className="md:p-6 p-2  pb-12 rounded-lg border-b-2">
            <summary className="font-bold text-xl">
              What is Web Development ?
            </summary>
            <div className="mt-3">
              <p className="text-lg text-justify leading-6 text-gray-600">
                Web development is the building and maintenance of websites;
                it's the work that happens behind the scenes to make a website
                look great, work fast and perform well with a seamless user
                experience. Web developers, or 'devs', do this by using a
                variety of coding languages.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
