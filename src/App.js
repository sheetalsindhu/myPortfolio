import "./App.css";
import HeroPage from "./components/heroSection/HeroPage";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <HeroPage />
        <About />

        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
