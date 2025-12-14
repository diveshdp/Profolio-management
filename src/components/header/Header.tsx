import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigation = (path: string, tab: string) => {
    navigate(path);
    setActiveTab?.(tab);
  };

  const isActive = (path: string) => location.pathname === path;
  
  const isDashboardActive = () => location.pathname === "/" || location.pathname === "/portfolio";

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

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => handleNavigation("/portfolio", "dashboard")}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                backgroundColor: isDashboardActive() ? "#0d6efd" : "#fff",
                color: isDashboardActive() ? "#fff" : "#212529",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
            >
              Dashboard
            </button>

            <button
              onClick={() => handleNavigation("/holdings", "holdings")}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                backgroundColor: isActive("/holdings") ? "#0d6efd" : "#fff",
                color: isActive("/holdings") ? "#fff" : "#212529",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
            >
              Holdings
            </button>

            <button
              onClick={() => handleNavigation("/performance", "analytics")}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid #ddd",
                backgroundColor: isActive("/performance") ? "#0d6efd" : "#fff",
                color: isActive("/performance") ? "#fff" : "#212529",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease"
              }}
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
