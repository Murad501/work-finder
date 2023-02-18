import React, { useState } from "react";
import { FaLocationArrow, FaMoneyBill, FaSuitcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usePosts } from "../Context/PostContext";

const JobPostCard = ({ post, isExperienced }) => {
  const {
    state: { appliedPost },
  } = usePosts();
  const { companyName, location, logo, salary, title, _id } = post;

  const applied = appliedPost.find((post) => post.postId === _id);

  console.log(applied);
  return (
    <div className="w-full lg:w-9/12 mx-auto p-2 md:p-7 gap-5 flex-row md:flex items-center shadow-sm rounded-sm hover:shadow-md py-10">
      <figure className="w-24 border h-24 mx-auto mb-5 md:mb-0">
        <img className="w-full" src={logo} alt="Movie" />
      </figure>
      <div className="card-body text-left p-2 mb-5 md:mb-0">
        <h2 className="card-title">{title}</h2>
        <div className="flex flex-wrap font-semibold gap-2 md:gap-5">
          <p className="text-gray-500 flex items-center gap-2">
            <FaSuitcase></FaSuitcase> {companyName}
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <FaLocationArrow></FaLocationArrow> {location}
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <FaMoneyBill></FaMoneyBill> ${salary}
          </p>
        </div>
      </div>
      {applied ? (
        <button
          disabled={applied}
          className={`font-semibold text-white px-5 py-3 rounded-sm disable-link ${
            isExperienced
              ? `hover:bg-sky-500 ${applied ? "bg-sky-500" : "bg-green-500"}`
              : `hover:bg-green-500 ${applied ? "bg-green-500" : "bg-sky-500"}`
          }`}
        >
          Applied
        </button>
      ) : (
        <Link
          to={`./post/${_id}`}
          className={`font-semibold text-white px-5 py-3 rounded-sm disable-link ${
            isExperienced
              ? `hover:bg-sky-500 ${applied ? "bg-sky-500" : "bg-green-500"}`
              : `hover:bg-green-500 ${applied ? "bg-green-500" : "bg-sky-500"}`
          }`}
        >
          Apply
        </Link>
      )}
    </div>
  );
};

export default JobPostCard;
