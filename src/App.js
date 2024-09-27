import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';

function App() {
  return (
    <>
    <Presentation/>
      {/* <HashRouter>
        <Routes path="/" element={<Presentation/>}/>
        <Routes path="/navbar" element={<Navbar/>}/>
      </HashRouter> */}
    </>
  );
}

export default App;
