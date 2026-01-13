import { useParams } from "react-router-dom";
import StatsTable from "../components/statsTable";


function UnitView( {units, specialRules, magicItems, mounts, spells} ) {

    const { id } = useParams();
    let singleUnit = {};

    units.forEach(unit => {
        if (String(unit.id) === id) {
            singleUnit = unit;
            }
        });

    const singleUnitSpecialRules = singleUnit.specials;
    const unitRules = specialRules.filter(data => singleUnitSpecialRules.includes(data.rule));
    const rules = Object.entries(unitRules);

    let items = null;
    const singleUnitMagicItems = singleUnit.magicItems;

    if (singleUnitMagicItems.length > 0) {
        const unitItems = magicItems.filter(data => singleUnitMagicItems.includes(data.name));
        items = Object.entries(unitItems);
    }

    let characterSpells = null;
    const singleCharacterSpells = singleUnit.spells;

    if (singleCharacterSpells.length > 0) {
        const unitSpells = spells.filter(data => singleCharacterSpells.includes(data.name));
        characterSpells = Object.entries(unitSpells);
    }

    let unitMount = null;
    let mountRuleArray;
    const singleUnitMount = singleUnit.mount;

    if (mounts.length > 0 && singleUnitMount) {
        unitMount = mounts.find(data => singleUnitMount.includes(data.name));
        const mountSpecialRules = unitMount.specialRules;
        const mountRules = specialRules.filter(data => mountSpecialRules.includes(data.rule));
        mountRuleArray = Object.entries(mountRules);
    }

    const rulesAlert = (ruleData) => {
        alert(ruleData);
    }

    const spellAlert = (spellData) => {
        const compiledAlert =
        `Effect: ${spellData.effect}
CV: ${spellData.cv}
Duration: ${spellData.duration}
Range: ${spellData.range}"
Type: ${spellData.d_or_a}
        ${spellData.missile}
        ${spellData.replicable}
        `;

        alert(compiledAlert);

    }

    return (
        <>
            {StatsTable(singleUnit)}

            <div>
                <h3>Special Rules:</h3>
                 {rules.map(([name, data]) => (
                    <button className="btn-primary" key={name} onClick={() => rulesAlert(data.effect)} >{data.rule}
                    </button>
                ))}
            </div>

            {items && (
                <>
                    <div>
                        <h3>Magic Items:</h3>
                        {items.map(([name, data]) => (
                        <button className="btn-primary" key={name} onClick={() => rulesAlert(data.description)} >{data.name}</button>
                        ))}
                    </div>
                </>
            )}

            {characterSpells && (
                <>
                    <div>
                        <h3>Spells:</h3>
                        {characterSpells.map(([name, data]) => (
                        <button className="btn-primary" key={name} onClick={() => spellAlert(data)} >{data.name}</button>
                        ))}
                    </div>
                </>
            )}

            {unitMount && (
                <>
                    <div>
                        <h2>Mount</h2>
                        {StatsTable(unitMount)}
                    </div>

                    <div>
                        <h3>Mount Special Rules:</h3>
                        {mountRuleArray.map(([name, data]) => (
                            <button className="btn-primary" key={name} onClick={() => rulesAlert(data.effect)} >{data.rule}</button>
                        ))}
                    </div>
                </>
            )}

        </>
    )
}

export default UnitView;
