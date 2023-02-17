import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authContext } from "../Context/UserContext";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import ImageUpload from "../Components/ImageUpload";
import { LoadingContext } from "../Context/LoadingContext";

const SignUp = () => {
  const [imgFile, setImgFile] = useState(null);
  const imgbbApi = "27f61216e1a719be5f702a9a5764c05f";
  const { register, handleSubmit } = useForm();
  const { setIsLoading } = useContext(LoadingContext);
  const { user, googleLogin, facebookLogin, createUser } = useContext(authContext);

  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    setIsLoading(true);
    if (imgFile) {
      const image = imgFile.file;
      const formData = new FormData();
      formData.append("image", image);
      fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.data.url) {
            const imgUrl = result.data.url;
            createUser(data.email, data.password)
              .then((result) => {
                toast.success("user sign up successful");
                const currentUser = result.user;
                updateProfile(currentUser, {
                  displayName: data.name,
                  photoURL: imgUrl,
                })
                  .then(() => {
                    toast.success("user name updated");
                    setIsLoading(false);
                    navigate(from, { replace: true });
                  })
                  .catch((error) => {
                    console.error(error);
                    setIsLoading(false);
                  });
              })
              .catch((error) => {
                console.error(error);
                setIsLoading(false);
              });
          }
        });
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    googleLogin()
      .then((result) => {
        toast.success("user login successful");
        setIsLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleFacebookLogin = () => {
    facebookLogin()
      .then(() => {
        toast.success("user login successful");
        setIsLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  console.log(user);

  return (
    <div className="min-h-screen lg:my-10">
      <div className="max-w-lg mx-auto my-3">
        <div>
          <div className="text-left mb-5">
            <h1 className="text-3xl font-bold mb-2">Get Started Now</h1>
            <h3 className="text-lg font-semibold">
              Enter your credentials to access your account
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button
              onClick={handleGoogleLogin}
              className="flex justify-center items-center sm:mb-5 gap-2 border py-3 font-bold text-green-500 border-green-500"
            >
              <FaGoogle></FaGoogle> Google
            </button>
            <button
              onClick={handleFacebookLogin}
              className="flex justify-center items-center sm:mb-5 gap-2 border py-3 font-bold text-sky-500 border-sky-500"
            >
              <FaFacebookF></FaFacebookF> Facebook
            </button>
          </div>
        </div>
        <div className="divider my-50 max-w-sm mx-auto divide-sky-500">OR</div>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-500 font-semibold">
                Name
              </span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="John Doe"
              className="input input-bordered rounded-sm w-full mb-5 outline-none focus:outline-none text-gray-500 font-semibold"
            />
          </div>
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
          </div>
          <div>
            <ImageUpload setImgFile={setImgFile}></ImageUpload>
          </div>
          <div className="form-control mt-6">
            <button className="font-semibold hover:bg-green-500 bg-sky-500 text-white px-5 py-3 rounded-sm">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-left my-5">
          Have an account?{" "}
          <Link className="text-sky-500" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
