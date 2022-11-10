import React from 'react';
import Navbar from './navbar';
import Home from '../paginas/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Marcos from '../paginas/marcos';
import Cis from '../paginas/cis';
import Cobit from '../paginas/cobit';
import Iso from '../paginas/iso';
import Itil from '../paginas/itil';
import Nist from '../paginas/nist';
import Nist2 from '../paginas/nist2';
import Pci from '../paginas/pci';
import Recomendaciones from '../paginas/recomendaciones';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path='/marcos' element={<Marcos/>} />
        <Route path='/cis' element={<Cis/>} />
        <Route path='/cobit' element={<Cobit/>} />
        <Route path='/iso' element={<Iso/>} />
        <Route path='/itil' element={<Itil/>} />
        <Route path='/nist' element={<Nist/>} />
        <Route path='/nist2' element={<Nist2/>} />
        <Route path='/pci' element={<Pci/>} />
        <Route path='/recomendaciones' element={<Recomendaciones/>} />
      </Routes>
    </Router>
  );
}

export default App;