import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string, tab: string) => {
    navigate(path);
    setActiveTab?.(tab);
  };

  return (
    <nav
      className="bg-white border-bottom"
      style={{ padding: "20px 0", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
    >
      <div className="container-fluid px-4">
        <div className="d-flex justify-content-between align-items-center">
          <h1
            className="mb-0 fw-bold"
            style={{ color: "#212529", fontSize: "28px" }}
          >
            💼 Wealth Management Pro
          </h1>

          <div>
            <button
              className={activeTab === "dashboard" ? "nav-btn active" : "nav-btn"}
              onClick={() => handleNavigation("/portfolio", "dashboard")}
            >
              Dashboard
            </button>

            <button
              className={activeTab === "holdings" ? "nav-btn active" : "nav-btn"}
              onClick={() => handleNavigation("/holdings", "holdings")}
            >
              Holdings
            </button>

            <button
              className={activeTab === "analytics" ? "nav-btn active" : "nav-btn"}
              onClick={() => handleNavigation("/performance", "analytics")}
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
