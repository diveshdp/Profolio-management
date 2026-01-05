import { Routes, Route } from "react-router-dom";
import PerformanceAnalyticsPage from "./pages/PerformanceAnalyticsPage";
import HoldingsPage from "./pages/holdingspage/HoldingsPage";
import PortfolioDashboardPage from "./pages/PortfolioDashboardPage";
import Header from "./components/header/Header";
import { totalValue, totalCost, totalGainLoss, totalReturn } from "./constants/portfolio.constants";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./styles/ag-grid-custom.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/performance" element={<PerformanceAnalyticsPage />} />
        <Route path="/portfolio" element={<PortfolioDashboardPage totalValue={totalValue} totalCost={totalCost} totalGainLoss={totalGainLoss} totalReturn={totalReturn} />} />
        <Route path="/holdings" element={<HoldingsPage />} />
        <Route path="/" element={<PortfolioDashboardPage totalValue={totalValue} totalCost={totalCost} totalGainLoss={totalGainLoss} totalReturn={totalReturn} />} />
      </Routes>
    </>
  );
}

export default App;
