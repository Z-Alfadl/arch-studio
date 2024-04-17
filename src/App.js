import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { About } from "./pages/About/About";
import { useEffect } from "react";
import { useViewPort } from "./utils/Context";
import { Contact } from "./pages/Contact/Contact";
function App() {
  const {viewport, setViewport, setSource} = useViewPort();
  useEffect(() => {
    const handleWindowResize = () => setViewport(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    if (viewport >= 992) {
      setSource("desktop");
    } else if (viewport >= 576) {
      setSource("tablet");
    } else {
      setSource("mobile");
    }
  }, [viewport]);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
