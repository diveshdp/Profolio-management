import { Routes, Route } from "react-router-dom";
import PerformanceAnalyticsPage from "./pages/PerformanceAnalyticsPage";
import Header from "./components/header/Header";
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
        {/* <Route path="/portfolio" element={<HoldingsPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
