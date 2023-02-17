import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import LogInPage from "./pages/LogIn";
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/LogIn" element={<LogInPage />} />
        <Route exact path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
