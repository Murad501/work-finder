import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleSignIn = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-lg mx-auto my-3 lg:my-20">
        <div>
          <div className="text-left mb-5">
            <h1 className="text-3xl font-bold mb-2">Get Started Now</h1>
            <h3 className="text-lg font-semibold">
              Enter your credentials to access your account
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button className="flex justify-center items-center sm:mb-5 gap-2 border py-3 font-bold text-green-500 border-green-500">
              <FaGoogle></FaGoogle> Google
            </button>
            <button className="flex justify-center items-center sm:mb-5 gap-2 border py-3 font-bold text-sky-500 border-sky-500">
              <FaFacebookF></FaFacebookF> Facebook
            </button>
          </div>
        </div>
        <div className="divider my-50 max-w-sm mx-auto divide-sky-500">OR</div>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-500 font-semibold">
                Email
              </span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              placeholder="example@gmail.com"
              className="input input-bordered rounded-sm w-full mb-5 outline-none focus:outline-none text-gray-500 font-semibold"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-500 font-semibold">
                Password
              </span>
            </label>
            <input
              {...register("password", { required: true })}
              type="text"
              placeholder="********"
              className="input input-bordered rounded-sm w-full mb-5 outline-none focus:outline-none text-gray-500 font-semibold"
            />

            <Link className="hover:text-sky-500 text-left">
              Forgot password?
            </Link>
          </div>
          <div className="form-control mt-6">
            <button className="font-semibold hover:bg-green-500 bg-sky-500 text-white px-5 py-3 rounded-sm">
              Login
            </button>
          </div>
        </form>
        <p className="text-left my-5">New here? <Link className="text-sky-500" to='/signup'>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
