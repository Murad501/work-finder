import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { authContext } from "../../Context/UserContext";

const PostJob = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(authContext);

  const handleAddPost = (data) => {
    const post = {
      companyName: user.displayName,
      email: user.email,
      logo: user.photoURL,
      title: data.title,
      location: data.location,
      type: data.type,
      salary: data.salary,
      description: data.description,
    };
    fetch("https://find-work-server.vercel.app/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("post added successful");
        }
      });
  };
  return (
    <div className="min-h-screen lg:py-20">
      <div className="max-w-3xl mx-auto my-3">
        <div>
          <div className="text-left mb-5">
            <h1 className="text-3xl font-bold mb-2 text-center">Add Post</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleAddPost)}>
          <div className="grid gird-cols-1 sm:grid-cols-2 gap-5 items-center justify-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-semibold">
                  Title
                </span>
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Web Developer"
                className="input input-bordered rounded-sm w-full mb-5 outline-none focus:outline-none text-gray-500 font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-semibold">
                  Job Type
                </span>
              </label>
              <select
                {...register("type", { required: true })}
                className="select select-bordered w-full mb-5 outline-none focus:outline-none text-gray-500 font-semibold rounded-sm"
              >
                <option>Freshers</option>
                <option>Experienced</option>
                <option>Both</option>
              </select>
            </div>
          </div>
          <div className="grid gird-cols-1 sm:grid-cols-2 gap-5 items-center justify-center">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-semibold">
                  Location
                </span>
              </label>
              <input
                {...register("location", { required: true })}
                type="text"
                placeholder="California, USA"
                className="input input-bordered rounded-sm w-full mb-5 outline-none focus:outline-none text-gray-500 font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-500 font-semibold">
                  Salary
                </span>
              </label>
              <input
                {...register("salary", { required: true })}
                type="number"
                placeholder="$1200"
                className="input input-bordered rounded-sm w-full mb-5 outline-none focus:outline-none text-gray-500 font-semibold"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-500 font-semibold">
                Post Description
              </span>
            </label>
            <textarea
              {...register("description", { required: true })}
              className="textarea outline-none focus:outline-none textarea-bordered text-gray-500 font-semibold rounded-sm w-full h-32"
              placeholder=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, minima."
            ></textarea>
          </div>
          <div className="form-control mt-6 items-end">
            <button className="font-semibold hover:bg-green-500 bg-sky-500 text-white px-5 py-3 rounded-sm w-32">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
