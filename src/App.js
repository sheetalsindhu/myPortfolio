// import logo from './logo.svg';
import "./App.css";
import HeroPage from "./components/dashboard/HeroPage";
import Quote from "./components/quote/quote";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <HeroPage />
        <br />
        <Quote />
        <br />
        <Projects />
        <Projects />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
