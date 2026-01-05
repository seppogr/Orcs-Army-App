function VeteranOrcs() {

    const veteranOrcs = {
        id: Date.now().toString(),
        name: "Veteran Orcs",
        height: 1,
        cha_mob: 4,
        dis: 8,
        hp: 1,
        def: 4,
        res: 4,
        arm: 1,
        att: 1,
        off: 4,
        str: 4,
        ap: 1,
        agi: 1,
        rules: [{ rule : "Unruly", effect:  "Command Tests taken by a unit containing this rule gain Maximised."},
                {rule: "Light Armour", effect: "Armour + 1" }]
    }


    return veteranOrcs;
}

export default VeteranOrcs
