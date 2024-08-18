import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <div className='container my-3'>
   <Routes>
   <Route exact path = "/about" element = {<About />} />
   <Route exact path = "/home" element = {<TextForm title="Enter Text Here"/>} />
          </Routes>
   </div> 
   </Router>
    </>
  );
}

export default App;
