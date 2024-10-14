
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import Header from "./components/Header";
import SalesPage from "./components/Sales";
import OrderPage from "./components/Orders";
import ProductPage from "./components/Product";
import CustomerPage from "./components/Customer";
import ProfilePage from "./components/Profile.jsx";
import SettingsPage from "./components/Settings.jsx";
import Notifications from "./components/Notification"; 

function App() {

  return (
    <Router>
      <div className="app">
            <Header />
            <div className="app-content">
              <Routes>
                <Route exact path="/sales" element={<SalesPage />} />
                <Route exact path="/order" element={<OrderPage />} />
                <Route exact path="/product" element={<ProductPage />} />
                <Route exact path="/customer" element={<CustomerPage />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/settings" element={<SettingsPage />} />
                <Route exact path="/notification" element={<Notifications />} />{" "}
                {/* Add this line */}
                <Route exact path="/" element={<Navigate to="/sales" />} />
              </Routes>
            </div>
      </div>
    </Router>
  );
}

export default App;
