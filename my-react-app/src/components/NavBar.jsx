import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArmyOneUnits from '../data/armyOneUnits';


function NavBar({setUnits}) {
    const navigate = useNavigate();
    const showView = (army) => {
    setUnits(army);
    navigate("/units");
}

    return (
        <div className="navbar">
            <nav>
                <button type="button" className="navbtn" onClick={() => showView(ArmyOneUnits)}>Army</button>
                <Link to="/reference" className="btnlike">Reference</Link>
            </nav>
        </div>
    );
}

export default NavBar
