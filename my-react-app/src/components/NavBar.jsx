import { Link } from 'react-router-dom';
// import styles from '../styles/NavBar.module.css'

function Navbar() {
    return (
        <div >
            <nav>
                <Link to="/" style={{ color: 'red', margin: '10px' }}>Home</Link>
                <Link to="/veteranOrcsView" style={{ color: 'red', margin: '10px' }}>Veteran Orcs</Link>
                <Link to="/contactList" style={{ color: 'red', margin: '10px' }}>My Contacts</Link>
            </nav>
        </div>
    );
}

export default Navbar

