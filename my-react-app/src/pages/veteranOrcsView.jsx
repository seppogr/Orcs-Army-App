import { useState } from "react";
import { Link } from 'react-router-dom';
import VeteranOrcs from "../data/veteranOrcs";

function VeteranOrcsView() {
    const [veteranOrcs, setVeteranOrcs] = useState(VeteranOrcs);
    const rules = Object.entries(veteranOrcs.rules);
    console.log(veteranOrcs.rules);
    const rulesAlert = (ruleData) => {
        console.log(ruleData.rule);
        alert(JSON.stringify(ruleData.effect));
    }

    return (
    <>
    <div>
        <table >
                    <thead >
                        <th>Global:</th>
                        <th>Cha/Mob</th>
                        <th>Dis</th>
                    </thead>

                <tbody>
                    <td></td>
                    <td>{veteranOrcs.cha_mob}"</td>
                    <td>{veteranOrcs.dis}</td>
                </tbody>
                </table>
                <br />
                <table>
                    <thead>
                        <th>Defensive:</th>
                        <th>HP</th>
                        <th>Def</th>
                        <th>Res</th>
                        <th>Arm</th>
                    </thead>
                    <tbody>
                        <td></td>
                        <td>{veteranOrcs.hp}</td>
                        <td>{veteranOrcs.def}</td>
                        <td>{veteranOrcs.res}</td>
                        <td>{veteranOrcs.arm}</td>
                    </tbody>
                </table>
                <br />
            <table>
                    <thead>
                        <th>Offensive:</th>
                        <th>Att</th>
                        <th>Off</th>
                        <th>Str</th>
                        <th>AP</th>
                        <th>Agi</th>
                    </thead>
                    <tbody>
                        <td></td>
                        <td>{veteranOrcs.att}</td>
                        <td>{veteranOrcs.off}</td>
                        <td>{veteranOrcs.str}</td>
                        <td>{veteranOrcs.ap}</td>
                        <td>{veteranOrcs.agi}</td>
                    </tbody>
            </table>
                <br />
    </div>

        <div >
            Special rules:
            <br />
                {rules.map(([name, data]) => (
                    <button key={name} onClick={() => rulesAlert(data) } style={{ marginRight: "10px", color: "white", background: "blue" }} >{JSON.stringify(data.rule)}
                    </button>
                ))}

        </div>
        </>
    )
}

export default VeteranOrcsView;

{/* <Link style={{ marginRight: "10px", color: "green" }} key={p} to={`/${p}`}>{p}
</Link> */}