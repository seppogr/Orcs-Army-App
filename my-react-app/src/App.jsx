import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import ArmyOneUnits from './data/armyOneUnits';
import ArmyTwoUnits from './data/armyTwoUnits';
import UnitList from './pages/unitList';
import SpecialRules from './data/specialRules';
import MagicItems from './data/magicItems';
import Mounts from './data/mounts';
import Spells from './data/spells';
import "./styles/basic.css";
import './App.css';
import UnitView from './pages/unitView';
import Home from './pages/home';
import Reference from './pages/reference';

function App() {
  const [units, setUnits ] = useState(ArmyOneUnits);
  const [specialRules, setspecialRules] = useState(SpecialRules);
  const [ magicItems, setMagicItems] = useState(MagicItems);
  const [mounts, setMounts] = useState(Mounts);
  const [spells, setSpells] = useState(Spells);


  return (

    <div className='container'>
      <div className='panel'>
          <Router>
            <NavBar setUnits={setUnits} />
            <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/reference" element={<Reference specialRules={specialRules} />} />
              <Route path="/units" element={<UnitList units={units} />} />
              <Route path="/units/:id" element={<UnitView units={units} specialRules={specialRules} magicItems={magicItems} mounts={mounts} spells={spells} />} />
            </Routes>
          </Router>
      </div>
    </div>
  )
}

export default App
