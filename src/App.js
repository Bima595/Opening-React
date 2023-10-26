import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
