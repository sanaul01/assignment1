import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Componenets/Home/Navbar/Navbar';
import Features from './Componenets/Features/Features';
import Details from './Componenets/Details/Details';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Details/>
      <Features/>
      <Routes>
      
    </Routes>
      
    </div>
  );
}

export default App;
