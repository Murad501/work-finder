import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { FaRadiation } from "react-icons/fa";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { LoadingContext } from "./Context/LoadingContext";
import router from "./routes/router";

function App() {
  const { isLoading } = useContext(LoadingContext);
  return (
    <div className="App container mx-auto bg-white z-0">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
      {isLoading && (
        <div className="h-screen w-screen flex fixed top-0 bg-black bg-opacity-80 justify-center items-center z-20">
          <button
            type="button"
            className="bg-indigo-500 flex items-center justify-center mx-auto my-5 text-white px-4 py-2 rounded-sm cursor-wait"
            disabled
          >
            <FaRadiation className="animate-spin h-5 w-5 mr-3"></FaRadiation>
            Loading...
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
