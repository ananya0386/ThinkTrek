import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KPIs from "./pages/KPIs";
import Logs from "./pages/Logs";
import Simulation from "./pages/Simulation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kpis" element={<KPIs />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/simulation" element={<Simulation />} />
      </Routes>
    </Router>
  );
}

export default App;
