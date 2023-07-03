import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Indonesia from "./pages/page/Indonesia";
import Provinces from "./pages/page/Provinces";
import About from "./pages/page/About";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page/indonesia" element={<Indonesia />}></Route>
          <Route path="/page/provinsi" element={<Provinces />}></Route>
          <Route path="/page/about" element={<About />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
