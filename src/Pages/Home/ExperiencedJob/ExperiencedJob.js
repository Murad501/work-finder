import React from "react";
import { Link } from "react-router-dom";
import JobPostCard from "../../../Components/JobPostCard";
import { usePosts } from "../../../Context/PostContext";

const ExperiencedJob = () => {
  const { state } = usePosts();
  const { posts } = state;
  const experiencedJobs = posts
    .filter((post) => post.type.toLowerCase() === "experienced")
    .sort((a, b) => b.salary - a.salary)
    .slice(0, 6);
  return (
    <div className="mx-auto my-20 grid grid-cols-1 items-center">
      <h1 className="font-bold text-4xl text-green-500 mb-10">
        Jobs for Experienced
      </h1>
      <div className="grid grid-cols-1 gap-10">
        {experiencedJobs?.map((post) => (
          <JobPostCard
            isExperienced={true}
            post={post}
            key={post._id}
          ></JobPostCard>
        ))}
      </div>
      <Link to='/experienced-job' className="w-40 mx-auto mt-16 font-semibold hover:bg-sky-500 bg-green-500 text-white px-5 py-3 rounded-sm">
        See All
      </Link>
    </div>
  );
};

export default ExperiencedJob;
