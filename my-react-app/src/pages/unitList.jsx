import { Link } from "react-router-dom";


function UnitList({units}) {
    return (
    <>
        <div className="entry-list">
            <div><h2>Your Units:</h2></div>
            <ul>
                {units.map((singleUnit) => (
                    <li className="entry" key={singleUnit.id}>
                        <Link className="btnlike" to={`/units/${singleUnit.id}`}>
                            {singleUnit.name} <br />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </>
    )
}

export default UnitList
