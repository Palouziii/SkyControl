import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import PrivateRoute from "../components/PrivateRoute";
import Home from "../pages/Home";
import Avion from "../pages/Avion";
import Billet from "../pages/Billet";
import Passager from "../pages/Passager";
import Personnel from "../pages/Personnel";
import Vol from "../pages/Vol";
import User from "../pages/User";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route publique — pas de Layout */}
        <Route path="/login" element={<User />} />

        {/* Routes protégées — avec Layout */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/vol" element={<Vol />} />
                  <Route path="/billet" element={<Billet />} />
                  <Route path="/avion" element={<Avion />} />
                  <Route path="/passager" element={<Passager />} />
                  <Route path="/personnel" element={<Personnel />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
