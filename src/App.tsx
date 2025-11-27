import { Routes, Route } from "react-router-dom";
import HoldingsPage from "./pages/HoldingsPage";
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
        <Route path="/holdings" element={<HoldingsPage />} />
        <Route path="/portfolio" element={<HoldingsPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
