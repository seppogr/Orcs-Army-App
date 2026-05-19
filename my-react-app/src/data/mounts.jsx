function Mounts() {
    const mounts = [{
        "id": 0,
        "name": "Sky Sloop",
        "height": 4,
        "base": "50x100mm",
        "cha_mob": 9,
        "dis": 9,
        "hp": 4,
        "def": 7,
        "res": 4,
        "arm": 2,
        "att": 3,
        "off": 5,
        "str": 5,
        "ap": 1,
        "agi": 4,
        "specialRules": [
            "Fly",
            "Light Troops",
            "Solitary",
            "Swiftstride",
            "Hard Target (1)",
            "Beast",
            "Mount",
            "Impact Hits (Chassis: Str: 2, AP: 2, D6 hits)",
            "Sky Reaper (1+)",
            "Construct",
        ]
    }];

    return mounts;
}

export default Mounts
