function StatsTable(unit) {

    return (
        <>
            <div>
                <h2>{unit.name}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Global:</th>
                            <th>Cha/Mob</th>
                            <th>Dis</th>
                            <th>Height</th>
                            <th>Base</th>
                            <th>Scoring</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td>{unit.cha_mob}"</td>
                            <td>{unit.dis}</td>
                            <td>{unit.height}</td>
                            <td>{unit.base}</td>
                            <td>{unit.scoring}</td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table">
                    <thead>
                        <tr>
                            <th>Defense:</th>
                            <th>HP</th>
                            <th>Def</th>
                            <th>Res</th>
                            <th>Arm</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td>{unit.hp}</td>
                            <td>{unit.def}</td>
                            <td>{unit.res}</td>
                            <td>{unit.arm}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table">
                    <thead>
                        <tr>
                            <th>Offence:</th>
                            <th>Att</th>
                            <th>Off</th>
                            <th>Str</th>
                            <th>AP</th>
                            <th>Agi</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td>{unit.att}</td>
                            <td>{unit.off}</td>
                            <td>{unit.str}</td>
                            <td>{unit.ap}</td>
                            <td>{unit.agi}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        </>
    )
}

export default StatsTable
