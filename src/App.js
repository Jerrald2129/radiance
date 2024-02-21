import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './global.scss';
import './App.css';

import Home from './components/Home';
import Service from "./pages/Service/Service";
import Tracking from "./pages/Tracking/Tracking";
import PartnerRegistration from "./pages/PartnerRegistration/PartnerRegistration";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/service"
            element={
                <Service />
            }
          />
          <Route
            path="/partnerregistration"
            element={
                <PartnerRegistration />
            }
          />
          <Route
            path="/dashboard"
            element={
                <Dashboard />
            }
          />
          <Route
            path="/tracking"
            element={
                <Tracking />
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
          
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
