function Mounts() {
    const mounts = [{
        id: 0,
        name: "Horse",
        height: 0,
        base: "125x125mm",
        cha_mob: 0,
        dis: 0,
        hp: 0,
        def: 0,
        res: 0,
        arm: 0,
        att: 0,
        off: 0,
        str: 0,
        ap: 0,
        agi: 0,
        specialRules: ["HorseRule1", "HorseRule2"],
    },
    {
        id: 1,
        name: "Wyvern",
        height: 1,
        base: "125x125mm",
        cha_mob: 1,
        dis: 1,
        hp: 1,
        def: 1,
        res: 1,
        arm: 1,
        att: 1,
        off: 1,
        str: 1,
        ap: 1,
        agi: 1,
        specialRules: ["WyvernRule1", "WyvernRule2"],

    },
    {
        id: 2,
        name: "Boar",
        height: 2,
        base: "125x125mm",
        cha_mob: 2,
        dis: 2,
        hp: 2,
        def: 2,
        res: 2,
        arm: 2,
        att: 2,
        off: 2,
        str: 2,
        ap: 2,
        agi: 2,
        specialRules: ["BoarRule1", "BoarRule2"],

    }];

    return mounts;
}

export default Mounts
