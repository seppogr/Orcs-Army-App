import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArmyOneUnits from '../data/armyOneUnits';
import ArmyTwoUnits from '../data/armyTwoUnits';

function NavBar({setUnits}) {
    const navigate = useNavigate();
    const showView = (army) => {
    setUnits(army);
    navigate("/units");
}

    return (
        <div className="navbar">
            <nav>
                <button type="button" className="navbtn" onClick={() => showView(ArmyOneUnits)}>Army 1</button>
                <button type="button" className="navbtn" onClick={() => showView(ArmyTwoUnits)}>Army 2</button>

            </nav>
        </div>
    );
}

export default NavBar
