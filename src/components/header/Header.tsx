import React from "react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
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
              className={activeTab === "home" ? "nav-btn active" : "nav-btn"}
              onClick={() => setActiveTab("home")}
            >
              Dashboard
            </button>

            <button
              className={activeTab === "portfolio" ? "nav-btn active" : "nav-btn"}
              onClick={() => setActiveTab("portfolio")}
            >
              Holdings
            </button>

            <button
              className={activeTab === "analytics" ? "nav-btn active" : "nav-btn"}
              onClick={() => setActiveTab("analytics")}
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
