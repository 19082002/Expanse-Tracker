import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import {
  Home,
  LineChart,
  PieChart,
  CircleUser,
  CirclePlus,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="main">
        <div className="icon">
          <span>TRACKER</span>
        </div>
        <div className="profile">
          <img
            src="./images/profilepic.png"
            alt="user photo"
            className="userphoto"
          />
          <p className="username">Hey ssd</p>
        </div>
        <div className="container">
          <div className="routelink">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(166, 12, 166)" : "",
                background: isActive ? "rgba(144, 226, 43, 0.423)" : "  ",
              })}
              className="link"
            >
              <Home className="luiicon" />
              <span className="spanname">Home</span>
            </NavLink>
            <NavLink
              to="/stats"
              style={({ isActive }) => ({
                color: isActive ? "rgb(166, 12, 166)" : "",
                background: isActive ? "rgba(144, 226, 43, 0.423)" : "  ",
              })}
              className="link"
            >
              <LineChart className="luiicon" />
              <span className="spanname">Stats</span>
            </NavLink>
            <NavLink
              to="/add"
              style={({ isActive }) => ({
                color: isActive ? "rgb(166, 12, 166)" : "",
                background: isActive ? "rgba(144, 226, 43, 0.423)" : "  ",
              })}
              className="btmadd link"
            >
              <CirclePlus className="luiicon" />
            </NavLink>
            <NavLink
              to="/analytics"
              style={({ isActive }) => ({
                color: isActive ? "rgb(166, 12, 166)" : "",
                background: isActive ? "rgba(144, 226, 43, 0.423)" : "  ",
              })}
              className="link"
            >
              <PieChart className="luiicon" />
              <span className="spanname">Analytics</span>
            </NavLink>
            <NavLink to="/" className="link">
              <CircleUser className="luiicon" />
              <span className="spanname">Account</span>
            </NavLink>
          </div>
        </div>
        <div className="foot">
          <NavLink to="/add" className="add link">
            <CirclePlus className="luiicon" />
            <span className="spanname">Add New</span>
          </NavLink>
          <NavLink to="/" className="acnt link">
            <LogOut className="luiicon" />
            <span className="spanname">log out</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
