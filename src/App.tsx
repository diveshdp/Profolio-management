import { Routes, Route } from "react-router-dom";
import PerformanceAnalyticsPage from "./pages/PerformanceAnalyticsPage";
import HoldingsPage from "./pages/holdingspage/HoldingsPage";
import PortfolioDashboardPage from "./pages/PortfolioDashboardPage";
import Header from "./components/header/Header";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./styles/ag-grid-custom.css";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/performance" element={<PerformanceAnalyticsPage />} />
        <Route path="/portfolio" element={<PortfolioDashboardPage />} />
        <Route path="/holdings" element={<HoldingsPage />} />
        <Route path="/" element={<PortfolioDashboardPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
