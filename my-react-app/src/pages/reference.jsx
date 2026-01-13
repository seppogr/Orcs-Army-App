function Reference(specialRules) {
    return (
        <div>
            {specialRules.specialRules.map((specialRule) => (
                <div key={specialRule.rule}>
                    <h3>{specialRule.rule}</h3 >
                    {specialRule.effect}
                </div>
            ))}
        </div>
    );
}

export default Reference;