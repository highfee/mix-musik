import { navLinks } from "../assets/navLinks";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_heading">
        <img src="./images/logo.png" alt="" />
        <h1>
          <Link to="/">MIX MUSIC</Link>
        </h1>
      </div>
      <div className="nav_links">
        {navLinks.map((item) => {
          return (
            <div className="group">
              <p className="title">{item.name}</p>
              <div className="links">
                {item.links.map((data) => {
                  return (
                    <div className="link">
                      <data.icon size={20} fill="#ccc" />
                      <p className="subtitle">{data.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
