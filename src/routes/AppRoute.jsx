import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Avion from "../pages/Avion";
import Billet from "../pages/Billet";
import Passager from "../pages/Passager";
import Personnel from "../pages/Personnel";
import Vol from "../pages/Vol";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Avion" element={<Avion />}></Route>
          <Route path="/Billet" element={<Billet />}></Route>
          <Route path="/Passager" element={<Passager />}></Route>
          <Route path="/Personnel" element={<Personnel />}></Route>
          <Route path="/Vol" element={<Vol />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
