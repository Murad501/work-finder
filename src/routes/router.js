import Page404 from "../Components/Page404";
import Blog from "../Pages/Blog/Blog";
import ExperiencedJobs from "../Pages/ExperiencedJobs/ExperiencedJobs";
import FreshersJob from "../Pages/FreshersJob/FreshersJob";
import PostDetails from "../Pages/PostDetails/PostDetails";
import PostJob from "../Pages/PostJob/PostJob";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Page404></Page404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/post-job',
                element: <PrivateRoutes><PostJob></PostJob></PrivateRoutes>
            },
            {
                path: '/post/:id',
                element: <PrivateRoutes><PostDetails></PostDetails></PrivateRoutes>
            },
            {
                path: '/freshers-job',
                element: <FreshersJob></FreshersJob>
            },
            {
                path: '/experienced-job',
                element: <ExperiencedJobs></ExperiencedJobs>
            }
        ]
    }
])

export default router