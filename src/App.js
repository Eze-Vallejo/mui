import "./App.css";
import SearchAppBar from "./components/AppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
