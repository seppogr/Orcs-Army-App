function Spells () {
    const spells = [
        {
            school: "Pyromancy",
            spell_number: 1,
            name: "Fireball",
            level: "Apprentice",
            cv: "5+",
            d_or_a: "Damage",
            missile: "Missile",
            range: 36,
            replicable: "Replicable",
            duration: "Instant",
            effect: "The target suffers 2D3 hits with Str 4, AP 0, Flaming Attacks and Magical Attacks."
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
            effect: "The target gains +1 to wound, Flaming Attacks (Melee & Shooting) and Magical Attacks (Melee & Shooting)."
        },
        {
            school: "Pyromancy",
            spell_number: 3,
            name: "Dragon's Roar",
            level: "Adept",
            cv: "9+",
            d_or_a: "Augment",
            missile: "",
            range: 18,
            replicable: "",
            duration: "One Turn",
            effect: "Choose a single model part in the target unit when casting the spell. This model part gains Breath Attack (Str 4, AP 0, Flaming Attacks and Magical Attacks) and Grind Attack (2D6 hits, Str 4, AP 0, Flaming Attacks, Magical Attacks, Unmodifiable)."
        },
        {
            school: "Pyromancy",
            spell_number: 4,
            name: "Pyroclastic Flow",
            level: "Adept",
            cv: "9+",
            d_or_a: "Damage",
            missile: "Missile",
            range: 24,
            replicable: "",
            duration: "Instant",
            effect: "The target suffers 5D3 hits with Str 4, AP 0, Flaming Attacks and Magical Attacks."
        },
        {
            school: "Hereditary",
            spell_number: 5,
            name: "Favour of Meladys",
            level: "Apprentice",
            cv: "10+",
            d_or_a: "Augment",
            missile: "",
            range: 36,
            replicable: "Replicable",
            duration: "1 Turn",
            effect: "The target gains two Protection Tokens, which are removed when the spell ends. When a friendly unit within 18\" of the target suffers a wound, after Armour Saves have been taken, but before any Special Saves are taken, the target may discard a Protection Token and ignore the wound applying the following rules: Rank-and-File models of Height 1 ignore up to two wounds per token, provided they are suffered simultaneously. Characters, and models of Height 4 or 5, can each only ignore a single wound per phase. Wounds from attacks with Multiple Wounds are not ignored: they inflict one less wound instead."
        },
        // {
        //     school: "Pyromancy",
        //     spell_number: 5,
        //     name: "Pillars of Fire",
        //     level: "Master",
        //     cv: "11+",
        //     d_or_a: "Augment",
        //     missile: "",
        //     range: 18,
        //     replicable: "",
        //     duration: "One Turn",
        //     effect: "Standard Melee Attacks from Rank-and-File models in the target are always Str 4 and AP 0, and gain Automatic Hits, Fight in Extra Rank, Flaming Attacks, and Magical Attacks."
        // },
        // {
        //     school: "Pyromancy",
        //     spell_number: 6,
        //     name: "Tidal Flame",
        //     level: "Master",
        //     cv: "10+",
        //     d_or_a: "Damage",
        //     missile: "Missile",
        //     range: 24,
        //     replicable: "",
        //     duration: "Instant",
        //     effect: "The target suffers 1 hit with Str 3, AP 0, Area Attack (5x5), Direct Hit (Str 6, AP 2, Multiple Wounds (2)), Flaming Attacks, and Magical Attacks."
        // }
    ];
    return spells;
}

export default Spells
