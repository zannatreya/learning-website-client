import React from "react";

const Background = ({ children }) => {
  return (
    <body className="bg-white dark:bg-black dark:text-white ">{children}</body>
  );
};

export default Background;
