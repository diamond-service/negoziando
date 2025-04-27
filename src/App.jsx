import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VendorDashboard from "./pages/VendorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer"; // Importa Footer
import Categoria from "./pages/Categoria"; // aggiungi import
import Prodotto from "./pages/Prodotto";
import Carrello from "./pages/Carrello";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<TestError />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/venditore/dashboard" element={<VendorDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/categoria/:categoria" element={<Categoria />} />
            <Route path="/prodotto/:id" element={<Prodotto />} />
            <Route path="/carrello" element={<Carrello />} />
          </Routes>
        </main>
        {/* Footer aggiunto */}
        <Footer />
      </div>
    </Router>
  );
}
