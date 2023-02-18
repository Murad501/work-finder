import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaLocationArrow, FaMoneyBill, FaSuitcase } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../Context/LoadingContext";
import { usePosts } from "../../Context/PostContext";
import { authContext } from "../../Context/UserContext";
import { APPLY_POST } from "../../State/PostState/actionTypes";

const PostDetails = () => {
  const {
    state: { posts, loading, error, appliedPost },
    dispatch,
  } = usePosts();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const { user } = useContext(authContext);
  const { setIsLoading } = useContext(LoadingContext);

  if (loading) {
    return setIsLoading(true);
  }
  if (error) {
    return <p>something went wrong</p>;
  }
  if (!loading && !error && posts.length) {
    setIsLoading(false);
    const post = posts.find((post) => post._id === id);
    console.log(posts);
    const { companyName, location, logo, salary, title, _id, description } =
      post;

    const applied = appliedPost.find((post) => post.postId === _id);

    const handleApplyPost = (data) => {
      const post = {
        postId: _id,
        appliedBy: user?.email,
        coverLetter: data.cover_letter,
        location,
        salary,
        title,
      };
      fetch("https://find-work-server.vercel.app/applying", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const currentPost = { ...post, _id: data.insertedId };
            toast.success("job applied successful");
            dispatch({ type: APPLY_POST, payload: currentPost });
          }
        });
    };

    return (
      <div className="min-h-screen grid grid-cols-1 justify-center">
        <div>
          <h1 className="text-5xl font-bold">
            <span className="text-sky-500 hover:text-green-500">{title}</span>{" "}
            at{" "}
            <span className="text-sky-500 hover:text-green-500">
              {companyName}
            </span>
          </h1>
          <div className="m-5 mt-10 lg:m-10 pt-10">
            <div className="w-full mx-auto gap-5 flex-row md:flex items-center justify-center">
              <div className="w-24 md:w-40 lg:w-60 h-auto mx-auto mb-5 md:mb-0">
                <img className="w-full" src={logo} alt="Movie" />
              </div>
              <div className="card-body w-full px-2 py-0">
                <h2 className="card-title text-2xl font-bold mb-3">{title}</h2>
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
            </div>
            <p className="my-5 text-left">{description}</p>

            {applied ? (
              <button
                disabled={applied}
                className={`my-20 block w-40 mx-auto font-semibold text-white px-5 py-3 rounded-sm bg-sky-500`}
              >
                Applied
              </button>
            ) : (
              <form
                onSubmit={handleSubmit(handleApplyPost)}
                className="form-control"
              >
                <label className="label">
                  <span className="text-xl text-black font-semibold">
                    Cover letter
                  </span>
                </label>
                <textarea
                  {...register("cover_letter", { required: true })}
                  required
                  className="textarea outline-none focus:outline-none textarea-bordered text-gray-500 font-semibold rounded-sm w-full h-60"
                  placeholder="Why should you be hired for this role?"
                ></textarea>
                <button
                  className={`my-10 block w-40 mx-auto font-semibold text-white px-5 py-3 rounded-sm bg-sky-500 hover:bg-green-500 `}
                >
                  Apply
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default PostDetails;
