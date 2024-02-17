/* eslint-disable react/prop-types */
import React from "react";

const Button = (props) => {
  return (
    <button className="bg-orange-500 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:text-black hover:bg-white hover:border-2 border-orange-500 duration-500">
      {props.children}
    </button>
  );
};

export default Button;
