import React from "react";
import { FallingLines } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <FallingLines visible={true} width="80" color="" />
      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
