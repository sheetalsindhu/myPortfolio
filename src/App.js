// import logo from './logo.svg';
import './App.css';
import HeroPage from './components/dashboard/HeroPage';
import Quote from './components/quote/quote';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <HeroPage />
      <br />
      <Quote />
      <br />
      <Projects />
      <Projects />
      <Projects />
    </div>
  );
}

export default App;
