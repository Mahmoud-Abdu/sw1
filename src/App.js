
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from './pages/auth';
import Home from './pages/Home';
function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
