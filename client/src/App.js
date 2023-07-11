import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import StudentDetails from "./pages/StudentDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Navabar from "./components/Navabar";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#F7F7F8", height: "100vh" }}
    >
      <BrowserRouter>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/students" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
