import React, { useState } from "react";
import { FaBars, FaHome, FaUserAlt, FaPlus } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import "./SideBar.css"; // Ensure your styling is here

const LandLordSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    navigate("/landlord-profile");
  };

  const handleAddPropertyForm = () => {
    navigate("/add-property");
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Implement logout logic
  };

  return (
    <div className={`sidebarWrapper ${isOpen ? "open" : ""}`}>
      <div className="menuButton" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>

      <div className={`sidebarContainer ${isOpen ? "expanded" : ""}`}>
        <div className="sidebar">
          <div className="sidebarItem" onClick={() => navigate("/")}>
            <FaHome className="icon" />
            {isOpen && <span>Dashboard</span>}
          </div>
          <div className="sidebarItem" onClick={handleProfileClick}>
            <FaUserAlt className="icon" />
            {isOpen && <span>Profile</span>}
          </div>
          <div className="sidebarItem" onClick={handleAddPropertyForm}>
            <FaPlus className="icon" />
            {isOpen && <span>Add Property</span>}
          </div>
          <div className="sidebarItem" onClick={handleLogout}>
            <LuLogOut className="icon" />
            {isOpen && <span>Logout</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandLordSidebar;
