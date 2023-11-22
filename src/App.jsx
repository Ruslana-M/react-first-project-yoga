import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import dataAsana from "./dataAsana.json";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Nav from "./layout/Nav";
import AsanasCollection from "./pages/AsanasCollection";
import Asana from "./pages/Asana";
import Errorpage from "./pages/Errorpage";
import { useState } from "react";

function App() {
  const [selectedAsana, setSelectedAsana] = useState();

  const navigate = useNavigate();

  function onClickAsana(item) {
    setSelectedAsana((i) => item);
    navigate("/asana");
  }

  return (
    <div className="App" data-theme="cupcake">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/asanasCollection"
          element={
            <AsanasCollection data={dataAsana} onClickAsana={onClickAsana} />
          }
        />
        <Route
          path="/asana"
          element={<Asana selectedAsana={selectedAsana} />}
        />
        <Route
          path="/*"
          element={
            <div className='flex flex-col items-center h-5/6 justify-center'>
              <p className="text-6xl">404</p>
              <p className="text-3xl">Page not found</p>
              <Link to="/" className="text-2xl underline decoration-solid decoration-sky-500">Go back to home</Link>
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
