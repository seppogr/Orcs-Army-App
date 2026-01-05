
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useParams } from 'react';
import VeteranOrcs from './data/veteranOrcs';
import NavBar from './components/NavBar';
import Home from './pages/home';
import VeteranOrcsView from './pages/veteranOrcsView';

import './App.css'
import Unruly from './pages/rules/unruly';


function App() {
const [veteranOrcs, setVeteranOrcs] = useState(VeteranOrcs);





  return (
    <>


        <Router>
        < NavBar />
        <div>


          </div>
          <Routes>

          <Route path="/veteranOrcsView" element={<VeteranOrcsView />} />
          <Route path="/" element={<Home />} />
          <Route path="/unruly" element={<Unruly />} />
          </Routes>

        </Router>

    </>
  )
}

export default App
