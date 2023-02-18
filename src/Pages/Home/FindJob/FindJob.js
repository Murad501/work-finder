import React, { useState } from "react";
import image from "../../../Assets/jobSeekerBg.jpg";

const FindJob = () => {
  const [isFindingJobs, setIsFindingJobs] = useState(true)
  const myStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${image})`,
    minHeight: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className="text-white flex justify-center items-center"
      style={myStyle}
    >
      <div className="xl:mx-40 text-left py-20 md:py-0">
        <div>
          <p className="text-xl">We have 850,000 great job offers you deserve!</p>
          <h1 className="text-3xl md:text-7xl mb-10 mt-5 md:mt-10 md:mb-20 leading-relaxed"><span className='font-bold'>Your Dream</span> <br /> Job is Waiting</h1>
        </div>
        <div className="flex justify-start gap-2 mb-2">
          <button onClick={()=> setIsFindingJobs(true)} className={`w-36 ${isFindingJobs ? 'bg-green-500 text-white' : 'bg-white text-black'} h-16 text-base mx-auto md:m-0 rounded-sm font-semibold`}>
            Find a Job
          </button>
          <button onClick={()=> setIsFindingJobs(false)} className={`w-36 ${!isFindingJobs ? 'bg-green-500 text-white' : 'bg-white text-black'} h-16 text-base mx-auto md:m-0 rounded-sm font-semibold`}>
            Find a Candidate
          </button>
        </div>
        <div className="border border-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 lg:p-10 p-5 text-black">
          <input
            type="text"
            placeholder="Title"
            className="input w-full max-w-xs h-16 font-semibold text-gray-700 mx-auto rounded-sm"
          />
          <input
            type="text"
            placeholder="Category"
            className="input w-full max-w-xs h-16 font-semibold text-gray-700 mx-auto rounded-sm"
          />
          <input
            type="text"
            placeholder="Location"
            className="input w-full max-w-xs h-16 font-semibold text-gray-700 mx-auto rounded-sm"
          />

          <button className="w-full bg-green-500 text-white h-16 text-base max-w-xs mx-auto rounded-sm font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
