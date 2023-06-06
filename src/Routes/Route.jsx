import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
const Route =  createBrowserRouter([
            {
                path: '/',
                element: <Main></Main>,
                children: [
                    {
                        path: '/',
                        element: <Home></Home>
                    }
                ]
            }
])

export default Route;