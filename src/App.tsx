import { Routes, Route, Link } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Tims from "./pages/projects/tim-hortons/Tims";
import Solar from "./pages/projects/solar/Solar";
import Farm from "./pages/projects/farm/Farm";
import { useScrollTop } from "./hooks/useScrollTop";

function App() {
  useScrollTop();

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/tim-hortons-case-study" element={<Tims />} />
          <Route path="/solar-system" element={<Solar />} />
          <Route path="/stable-harvest-farm-redesign" element={<Farm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
