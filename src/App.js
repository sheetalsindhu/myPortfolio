// import logo from './logo.svg';
import "./App.css";
import HeroPage from "./components/dashboard/HeroPage";
import Quote from "./components/quote/quote";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

const cultfit = {
  title: "Cult Fit",
  description: "Website for fitness gear",
  tagOne: "Front-end development",
  tagTwo: "Website",
};

const movieApp = {
  title: "Movie Mini app",
  description: "Mini app for movie search",
  tagOne: "Front-end development",
  tagTwo: "Mini project",
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <HeroPage />
        <br />
        <Quote />
        <br />
        <h1 className="featured">Featured Projects</h1>
        <Projects data={cultfit} />
        <Projects data={movieApp} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
