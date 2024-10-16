import "./App.scss";
import Home from "./Components/pages/Home/Home";
import About from "./Components/pages/About/About";
import Footer from "./Components/Footer";
import Allprojects from "./Components/pages/projects/Allprojects";
import ProjectPage from "./Components/pages/projects/ProjectPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_bio" element={<About />} />
        <Route path="/projects" element={<Allprojects />} />
        <Route path="/projects/:id/:name" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
