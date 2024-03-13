import './App.css';
import NavBar from './components/navbar/NavBar';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home'
import About from './components/About/About';
import Enquire from './components/Contact/Contact'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Blog/>
      <Enquire/>
      <Footer/>
    </>
  );
}

export default App;
