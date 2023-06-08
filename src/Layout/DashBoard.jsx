import { Link, Outlet } from "react-router-dom";
import useUsers from "../hooks/useUsers";

import { FaFileUpload, FaHouseUser, FaSave, FaSchool, FaUsers } from "react-icons/fa";



const DashBoard = () => {
  const [userDetails] = useUsers();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
                  <Link to="/"> <FaHouseUser></FaHouseUser> Home</Link>
                </li>
                <div className="divider"></div> 
                <li>
                  <Link to="selected-classes"> <FaSchool></FaSchool> Manage Classes</Link>
                </li>
                <li>
                  <Link to="enrolled-classes"> <FaUsers></FaUsers> Manage Users</Link>
                </li>
              </>
            ) : (
              <>
                {userDetails?.instructor ? (
                  <>
                    <li>
                      <Link to="/"> <FaHouseUser></FaHouseUser>Home</Link>
                    </li>
                    <div className="divider"></div> 
                    <li>
                      <Link to="selected-classes"><FaFileUpload></FaFileUpload>  Add a Class</Link>
                    </li>
                    <li>
                      <Link to="enrolled-classes"> <FaSchool></FaSchool> My Classes</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/"><FaHouseUser></FaHouseUser>Home</Link>
                    </li>
                    <div className="divider"></div> 
                    <li>
                      <Link to="selected-classes"> <FaSchool></FaSchool> My Selected Classes</Link>
                    </li>
                    <li>
                      <Link to="enrolled-classes"> <FaSave></FaSave> My Enrolled Classes</Link>
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
