import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

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