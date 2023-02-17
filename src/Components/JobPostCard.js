import React from "react";
import logo from "../Assets/company logo/intel.png";
import { FaLocationArrow, FaMoneyBill, FaSuitcase } from "react-icons/fa";

const JobPostCard = ({ isExperienced }) => {
  return (
    <div className="w-full lg:w-9/12 mx-auto p-2 md:p-7 gap-5 flex-row md:flex items-center shadow-sm rounded-sm hover:shadow-md py-10">
      <figure className="w-24 border h-24 mx-auto mb-5 md:mb-0">
        <img className="w-full" src={logo} alt="Movie" />
      </figure>
      <div className="card-body text-left p-2 mb-5 md:mb-0">
        <h2 className="card-title">Web Developer</h2>
        <div className="flex flex-wrap font-semibold gap-2 md:gap-5">
          <p className="text-gray-500 flex items-center gap-2">
            <FaSuitcase></FaSuitcase> Google, Inc
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <FaLocationArrow></FaLocationArrow> California, USA
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <FaMoneyBill></FaMoneyBill> $2400
          </p>
        </div>
      </div>
      <button
        className={`font-semibold text-white px-5 py-3 rounded-sm ${
          isExperienced
            ? " hover:bg-sky-500 bg-green-500"
            : " hover:bg-green-500 bg-sky-500"
        }`}
      >
        Apply
      </button>
    </div>
  );
};

export default JobPostCard;
