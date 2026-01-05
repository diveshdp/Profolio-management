import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;
  
  const isDashboardActive = () => location.pathname === "/" || location.pathname === "/portfolio";

  return (
    <nav className="bg-white border-bottom header-nav">
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="header-title">
            💼 Wealth Management Pro
          </h1>

          <div className="header-buttons">
            <button
              className={`nav-button ${isDashboardActive() ? "active" : ""}`}
              onClick={() => handleNavigation("/portfolio")}
            >
              Dashboard
            </button>

            <button
              className={`nav-button ${isActive("/holdings") ? "active" : ""}`}
              onClick={() => handleNavigation("/holdings")}
            >
              Holdings
            </button>

            <button
              className={`nav-button ${isActive("/performance") ? "active" : ""}`}
              onClick={() => handleNavigation("/performance")}
            >
              Analytics
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
