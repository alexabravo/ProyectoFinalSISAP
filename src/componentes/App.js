import React from 'react';
import Navbar from './navbar';
import home from '../paginas/home';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
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
        <Route path='/' exact component={home} />
        <Route path='/marcos' component={Marcos} />
        <Route path='/cis' component={Cis} />
        <Route path='/cobit' component={Cobit} />
        <Route path='/iso' component={Iso} />
        <Route path='/itil' component={Itil} />
        <Route path='/nist' component={Nist} />
        <Route path='/nist2' component={Nist2} />
        <Route path='/pci' component={Pci} />
        <Route path='/recomendaciones' component={Recomendaciones} />
      </Routes>
    </Router>
  );
}

export default App;