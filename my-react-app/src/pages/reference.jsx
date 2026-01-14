function Reference(specialRules) {
    return (
        <div>
            {specialRules.specialRules.map((specialRule) => (
                <div key={specialRule.rule}>
                    <ul className="green-list">
                        <li>
                            <span style={{fontWeight: "bold"}}>{specialRule.rule}:</span>
                           {specialRule.effect}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Reference;
