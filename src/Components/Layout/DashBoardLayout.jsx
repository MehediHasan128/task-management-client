import { Avatar, Box, Divider, Typography } from "@mui/material";
import { useContext } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { AuthContext } from "../Provider/AuthProvider";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DashBoard from "../Pages/DashBoard/DashBoard";

const DashBoardLayout = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handelLogout = () =>{
    userLogout();
  }

  return (
    <div>
      <Box className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        <Box>
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-2" className="lg:hidden">
                <Typography variant="h3">
                  <HiOutlineBars3BottomLeft className="m-2" />
                </Typography>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-3">
                {/* Sidebar content here */}
                <div className="mb-10 space-y-3">
                  <Avatar
                    sx={{ width: "120px", height: "120px", margin: "0 auto" }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                  <Typography variant="h4">
                    <p className="font-semibold text-center">
                      {user?.displayName}
                    </p>
                  </Typography>
                </div>

                <NavLink
                  to="/dashBoard"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-zinc-800 text-white rounded-md"
                      : ""
                  }
                >
                  <li>
                    <Typography
                      className="flex items-center gap-2"
                      variant="h6"
                    >
                      <LuLayoutDashboard />
                      <p>DashBoard</p>
                    </Typography>
                  </li>
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-zinc-800 text-white rounded-md"
                      : ""
                  }
                >
                  <li>
                    <Typography
                      className="flex items-center gap-2"
                      variant="h6"
                    >
                      <FaHome />
                      <p>Home</p>
                    </Typography>
                  </li>
                </NavLink>

                <Divider />

                <li>
                  <button onClick={handelLogout}>
                    <Typography
                      className="flex items-center gap-2"
                      variant="h6"
                    >
                      <LuLogOut />
                      <p>Logout</p>
                    </Typography>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Box>
        <Box className="py-10 pr-10 w-full">
          <DashBoard />
        </Box>
      </Box>
    </div>
  );
};

export default DashBoardLayout;
