import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"


export default function App() {
  return (
  <>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </>
)};

