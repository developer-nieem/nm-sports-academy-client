import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import Login from "../page/Profile/Login";
import Register from "../page/Profile/Register";
import InstructorsPage from "../page/InstructorsPage/InstructorsPage";
import ClassesPage from "../page/ClassesPage/ClassesPage";
import DashBoard from "../Layout/DashBoard";
import SelectedClasses from "../page/Dashboard/Students/SelectedClasses/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import StudentsUser from "../page/Dashboard/Students/StudentsUser/StudentsUser";
import Payment from "../page/Dashboard/Students/Payment/Payment";
import EnrolledClasses from "../page/Dashboard/Students/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../page/Dashboard/Students/PaymentHistory/PaymentHistory";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import AddClass from "../page/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../page/Dashboard/Instructor/MyClasses/MyClasses";
import ManageClasses from "../page/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../page/Dashboard/Admin/ManageUsers/ManageUsers";
import FeedBack from "../page/Dashboard/Admin/FeedBack/FeedBack";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import UsersRoute from "./UsersRoute";
import ProfileRoute from "./ProfileRoute";
import Shop from "../page/shop/Shop";

const Route =  createBrowserRouter([
            {
                path: '/',
                element: <Main></Main>,
                errorElement: <ErrorPage></ErrorPage>,
                children: [
                    {
                        path: '/',
                        element: <Home></Home>
                    },
                    {
                        path: '/login',
                        element: <ProfileRoute><Login></Login></ProfileRoute>
                    },
                    {
                        path: '/register',
                        element: <ProfileRoute> <Register></Register></ProfileRoute>
                    },
                    {
                        path: '/instructors',
                        element:<InstructorsPage></InstructorsPage>
                    },
                    {
                        path: '/classes',
                        element:<ClassesPage></ClassesPage>
                    },
                    {
                        path: '/shop',
                        element:<Shop></Shop>
                    }
                ]
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>,
                children: [
                    {
                        path:'/dashboard',
                        element: <StudentsUser></StudentsUser>
                    },
                    {
                        path:'selected-classes',
                        element: <UsersRoute><SelectedClasses></SelectedClasses></UsersRoute>
                    },
                    {
                        path:'enrolled-classes',
                        element: <UsersRoute><EnrolledClasses></EnrolledClasses></UsersRoute>
                    },
                    {
                        path:'payment',
                        element: <UsersRoute><Payment></Payment></UsersRoute>
                    },
                    {
                        path:'payment-history',
                        element: <UsersRoute><PaymentHistory></PaymentHistory></UsersRoute>
                    },
                    // instructor 
                    {
                        path:'add-class',
                        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
                    },
                    {
                        path:'my-classes',
                        element: <InstructorRoute> <MyClasses></MyClasses></InstructorRoute>
                    },
                    // admin
                    {
                        path:'manage-classes',
                        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
                    },
                    {
                        path:'manage-users',
                        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute> 
                    },
                    {
                        path:'feedback/:id',
                        element: <AdminRoute><FeedBack></FeedBack></AdminRoute>
                    }
                ]
            }
])

export default Route;