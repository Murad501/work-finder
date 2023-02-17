import { useContext } from "react";
import { FaRadiation } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Context/UserContext";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);

  if (loading) {
    return (
      <div className="h-screen w-screen flex fixed top-18 bg-black bg-opacity-80 justify-center items-center z-20">
        <button
          type="button"
          className="bg-indigo-500 flex items-center justify-center mx-auto my-5 text-white px-4 py-2 rounded-sm cursor-wait"
          disabled
        >
          <FaRadiation className="animate-spin h-5 w-5 mr-3"></FaRadiation>
          Loading...
        </button>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
