// import logo from './logo.svg';
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
        <h1 className="featured">Projects</h1>
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
