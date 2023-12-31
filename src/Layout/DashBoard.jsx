import { Link, Outlet } from "react-router-dom";
import useUsers from "../hooks/useUsers";

import { FaDollarSign, FaFileUpload, FaHouseUser, FaSave, FaSchool, FaUser, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet";



const DashBoard = () => {
  const [userDetails] = useUsers();

  return (
    <div>
      <Helmet>
        <title>Dashboard - Elevate Your Game with Expert Coaching and Training</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-10 items-center justify-center">
          {/* Page content here */}

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content text-lg font-semibold">
            {/* Sidebar content here */}

            {userDetails?.admin ? (
              <>
                <li>
                  <Link to="/"> <FaHouseUser></FaHouseUser> Back to Home</Link>
                </li>
                <div className="divider"></div> 
                <li>
                  <Link to="/dashboard"> <FaUser></FaUser> Admin Home</Link>
                </li>
                <li>
                  <Link to="manage-classes"> <FaSchool></FaSchool> Manage Classes</Link>
                </li>
                <li>
                  <Link to="manage-users"> <FaUsers></FaUsers> Manage Users</Link>
                </li>
              </>
            ) : (
              <>
                {userDetails?.instructor ? (
                  <>
                    <li>
                      <Link to="/"> <FaHouseUser></FaHouseUser>Back to Home</Link>
                    </li>
                    <div className="divider"></div> 
                    <li>
                  <Link to="/dashboard"> <FaUser></FaUser> Instructor Home</Link>
                </li>
                    <li>
                      <Link to="add-class"><FaFileUpload></FaFileUpload>  Add a Class</Link>
                    </li>
                    <li>
                      <Link to="my-classes"> <FaSchool></FaSchool> My Classes</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/"><FaHouseUser></FaHouseUser>Back to Home</Link>
                    </li>
                    <div className="divider"></div> 
                    <li>
                  <Link to="/dashboard"> <FaUser></FaUser> User Home</Link>
                </li>
                    <li>
                      <Link to="selected-classes"> <FaSchool></FaSchool> My Selected Classes</Link>
                    </li>
                    <li>
                      <Link to="enrolled-classes"> <FaSave></FaSave> My Enrolled Classes</Link>
                    </li>
                    <li>
                      <Link to="payment-history"> <FaDollarSign></FaDollarSign> Payment History</Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
