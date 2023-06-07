import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Profile/Login";
import Register from "../page/Profile/Register";
import InstructorsPage from "../page/InstructorsPage/InstructorsPage";
import Classes from "../page/Home/Classes/Classes";
import ClassesPage from "../page/ClassesPage/ClassesPage";
import DashBoard from "../Layout/DashBoard";
import SelectedClasses from "../page/Dashboard/Students/SelectedClasses/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
const Route =  createBrowserRouter([
            {
                path: '/',
                element: <Main></Main>,
                children: [
                    {
                        path: '/',
                        element: <Home></Home>
                    },
                    {
                        path: '/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/register',
                        element: <Register></Register>
                    },
                    {
                        path: '/instructors',
                        element:<InstructorsPage></InstructorsPage>
                    },
                    {
                        path: '/classes',
                        element:<ClassesPage></ClassesPage>
                    }
                ]
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
                children: [
                    {
                        path:'selected-classes',
                        element: <SelectedClasses></SelectedClasses>
                    },
                    {
                        path:'enrolled-classes',
                        element: <SelectedClasses></SelectedClasses>
                    }
                ]
            }
])

export default Route;