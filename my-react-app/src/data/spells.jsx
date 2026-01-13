function Spells () {
    const spells = [
        {
            school: "Pyromancy",
            spell_number: 1,
            name: "Fireball",
            level: "Apprentice",
            cv: "6+",
            d_or_a: "Damage",
            missile: "Missile",
            range: 36,
            replicable: "Replicable",
            duration: "Instant",
            effect: "The target suffers 2D3+1 hits with Str 4, AP 0, Flaming Attacks and Magical Attacks."
        },
        {
            school: "Pyromancy",
            spell_number: 2,
            name: "Flaming Swords",
            level: "Adept",
            cv: "8+",
            d_or_a: "Augment",
            missile: "",
            range: 18,
            replicable: "",
            duration: "One Turn",
            effect: "The target gains +1 to wound, Flaming Attacks(Melee & Shooting) and Magical Attacks(Melee & Shooting)."
        }
    ];

    return spells;
}

export default Spells
