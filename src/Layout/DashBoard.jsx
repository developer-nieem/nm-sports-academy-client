import { Link, Outlet } from "react-router-dom";
import useUsers from "../hooks/useUsers";

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
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {userDetails?.admin ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="selected-classes">Manage Classes</Link>
                </li>
                <li>
                  <Link to="enrolled-classes">Manage Users</Link>
                </li>
              </>
            ) : (
              <>
                {userDetails?.instructor ? (
                  <>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="selected-classes">Add a Class</Link>
                    </li>
                    <li>
                      <Link to="enrolled-classes">My Classes</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="selected-classes">My Selected Classes</Link>
                    </li>
                    <li>
                      <Link to="enrolled-classes">My Enrolled Classes</Link>
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
