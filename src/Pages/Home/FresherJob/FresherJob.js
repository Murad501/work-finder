import React from "react";
import JobPostCard from "../../../Components/JobPostCard";

const FresherJob = () => {
  return (
    <div className="mx-auto my-20 grid grid-cols-1 items-center">
      <h1 className="font-bold text-4xl text-sky-500 mb-10">
        Jobs for Freshers
      </h1>
      <div className="grid grid-cols-1 gap-10">
        <JobPostCard isExperienced={false}></JobPostCard>
        <JobPostCard isExperienced={false}></JobPostCard>
        <JobPostCard isExperienced={false}></JobPostCard>
        <JobPostCard isExperienced={false}></JobPostCard>
        <JobPostCard isExperienced={false}></JobPostCard>
        <JobPostCard isExperienced={false}></JobPostCard>
      </div>
      <button className="w-40 mx-auto mt-16 font-semibold hover:bg-green-500 bg-sky-500 text-white px-5 py-3 rounded-sm">See All</button>
    </div>
  );
};

export default FresherJob;
