import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
