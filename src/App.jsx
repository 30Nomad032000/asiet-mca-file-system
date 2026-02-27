import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
      </Routes>
    </BrowserRouter>
  );
}
