import { Outlet } from "react-router-dom";
import NavBar from "../page/Shared/NavBar/NavBar";
import Footer from "../page/Shared/Footer/Footer";
import { useState } from "react";

const Main = () => {
    const [theme, setTheme] = useState('')
  return (
    <div data-theme={`${theme}`}>
      <NavBar></NavBar>
      <div className=" fixed top-96 z-10">
        <div className="btn-group btn-group-vertical">
        <button onClick={() => setTheme("light")} className="btn">
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="btn bg-black hover:bg-black text-white"
          >
            Dark
          </button>
          
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
