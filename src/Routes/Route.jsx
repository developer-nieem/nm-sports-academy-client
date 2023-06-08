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
import StudentsUser from "../page/Dashboard/Students/StudentsUser/StudentsUser";
import Payment from "../page/Dashboard/Students/Payment/Payment";
import EnrolledClasses from "../page/Dashboard/Students/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../page/Dashboard/Students/PaymentHistory/PaymentHistory";
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
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
                children: [
                    {
                        path:'/dashboard',
                        element: <StudentsUser></StudentsUser>
                    },
                    {
                        path:'selected-classes',
                        element: <SelectedClasses></SelectedClasses>
                    },
                    {
                        path:'enrolled-classes',
                        element: <EnrolledClasses></EnrolledClasses>
                    },
                    {
                        path:'payment',
                        element: <Payment></Payment>
                    },
                    {
                        path:'payment-history',
                        element: <PaymentHistory></PaymentHistory>
                    }
                    
                ]
            }
])

export default Route;