import React from "react";
import { Link } from "react-router-dom";
import JobPostCard from "../../Components/JobPostCard";
import { usePosts } from "../../Context/PostContext";

const FreshersJob = () => {
  const { state } = usePosts();
  const { posts } = state;
  const fresherJobs = posts
    .filter((post) => post.type.toLowerCase() === "freshers")
    .sort((a, b) => b.salary - a.salary);
  return (
    <div className="mx-auto my-10 grid grid-cols-1 items-center">
      <h1 className="font-bold text-4xl text-sky-500 mb-10">
        Jobs for Freshers
      </h1>
      <div className="grid grid-cols-1 gap-10">
        {fresherJobs?.map((post) => (
          <JobPostCard
            post={post}
            isExperienced={false}
            key={post._id}
          ></JobPostCard>
        ))}
      </div>
      <Link to='/' className="w-40 mx-auto mt-16 font-semibold hover:bg-green-500 bg-sky-500 text-white px-5 py-3 rounded-sm">
        Back to Home
      </Link>
    </div>
  );
};

export default FreshersJob;
