// Patch Version: 12.14

const champs: Champ[] = [
    {
        id: 266,
        name: "Aatrox",
        type: "MELEE",
    },
    {
        id: 103,
        name: "Ahri",
        type: "RANGED",
    },
    {
        id: 84,
        name: "Akali",
        type: "MELEE",
    },
    {
        id: 166,
        name: "Akshan",
        type: "RANGED",
    },
    {
        id: 12,
        name: "Alistar",
        type: "MELEE",
    },
    {
        id: 32,
        name: "Amumu",
        type: "MELEE",
    },
    {
        id: 34,
        name: "Anivia",
        type: "RANGED",
    },
    {
        id: 1,
        name: "Annie",
        type: "RANGED",
    },
    {
        id: 523,
        name: "Aphelios",
        type: "RANGED",
    },
    {
        id: 22,
        name: "Ashe",
        type: "RANGED",
    },
    {
        id: 136,
        name: "Aurelion Sol",
        type: "RANGED",
    },
    {
        id: 268,
        name: "Azir",
        type: "RANGED",
    },
    {
        id: 432,
        name: "Bard",
        type: "RANGED",
    },
    {
        id: 200,
        name: "Bel'Veth",
        type: "MELEE",
    },
    {
        id: 53,
        name: "Blitzcrank",
        type: "MELEE",
    },
    {
        id: 63,
        name: "Brand",
        type: "RANGED",
    },
    {
        id: 201,
        name: "Braum",
        type: "MELEE",
    },
    {
        id: 51,
        name: "Caitlyn",
        type: "RANGED",
    },
    {
        id: 164,
        name: "Camille",
        type: "MELEE",
    },
    {
        id: 69,
        name: "Cassiopeia",
        type: "RANGED",
    },
    {
        id: 31,
        name: "Cho'Gath",
        type: "MELEE",
    },
    {
        id: 42,
        name: "Corki",
        type: "RANGED",
    },
    {
        id: 122,
        name: "Darius",
        type: "MELEE",
    },
    {
        id: 131,
        name: "Diana",
        type: "MELEE",
    },
    {
        id: 36,
        name: "Dr. Mundo",
        type: "MELEE",
    },
    {
        id: 119,
        name: "Draven",
        type: "RANGED",
    },
    {
        id: 245,
        name: "Ekko",
        type: "MELEE",
    },
    {
        id: 60,
        name: "Elise",
        type: "RANGED",
    },
    {
        id: 28,
        name: "Evelynn",
        type: "MELEE",
    },
    {
        id: 81,
        name: "Ezreal",
        type: "RANGED",
    },
    {
        id: 9,
        name: "Fiddlesticks",
        type: "RANGED",
    },
    {
        id: 114,
        name: "Fiora",
        type: "MELEE",
    },
    {
        id: 105,
        name: "Fizz",
        type: "MELEE",
    },
    {
        id: 3,
        name: "Galio",
        type: "MELEE",
    },
    {
        id: 41,
        name: "Gangplank",
        type: "MELEE",
    },
    {
        id: 86,
        name: "Garen",
        type: "MELEE",
    },
    {
        id: 150,
        name: "Gnar",
        type: "RANGED",
    },
    {
        id: 79,
        name: "Gragas",
        type: "MELEE",
    },
    {
        id: 104,
        name: "Graves",
        type: "RANGED",
    },
    {
        id: 887,
        name: "Gwen",
        type: "MELEE",
    },
    {
        id: 120,
        name: "Hecarim",
        type: "MELEE",
    },
    {
        id: 74,
        name: "Heimerdinger",
        type: "RANGED",
    },
    {
        id: 420,
        name: "Illaoi",
        type: "MELEE",
    },
    {
        id: 39,
        name: "Irelia",
        type: "MELEE",
    },
    {
        id: 427,
        name: "Ivern",
        type: "RANGED",
    },
    {
        id: 40,
        name: "Janna",
        type: "RANGED",
    },
    {
        id: 59,
        name: "Jarvan IV",
        type: "MELEE",
    },
    {
        id: 24,
        name: "Jax",
        type: "MELEE",
    },
    {
        id: 126,
        name: "Jayce",
        type: "MELEE",
    },
    {
        id: 202,
        name: "Jhin",
        type: "RANGED",
    },
    {
        id: 222,
        name: "Jinx",
        type: "RANGED",
    },
    {
        id: 145,
        name: "Kai'Sa",
        type: "RANGED",
    },
    {
        id: 429,
        name: "Kalista",
        type: "RANGED",
    },
    {
        id: 43,
        name: "Karma",
        type: "RANGED",
    },
    {
        id: 30,
        name: "Karthus",
        type: "RANGED",
    },
    {
        id: 38,
        name: "Kassadin",
        type: "MELEE",
    },
    {
        id: 55,
        name: "Katarina",
        type: "MELEE",
    },
    {
        id: 10,
        name: "Kayle",
        type: "MELEE",
    },
    {
        id: 141,
        name: "Kayn",
        type: "MELEE",
    },
    {
        id: 85,
        name: "Kennen",
        type: "RANGED",
    },
    {
        id: 121,
        name: "Kha'Zix",
        type: "MELEE",
    },
    {
        id: 203,
        name: "Kindred",
        type: "RANGED",
    },
    {
        id: 240,
        name: "Kled",
        type: "MELEE",
    },
    {
        id: 96,
        name: "Kog'Maw",
        type: "RANGED",
    },
    {
        id: 7,
        name: "LeBlanc",
        type: "RANGED",
    },
    {
        id: 64,
        name: "Lee Sin",
        type: "MELEE",
    },
    {
        id: 89,
        name: "Leona",
        type: "MELEE",
    },
    {
        id: 876,
        name: "Lillia",
        type: "RANGED",
    },
    {
        id: 127,
        name: "Lissandra",
        type: "RANGED",
    },
    {
        id: 236,
        name: "Lucian",
        type: "RANGED",
    },
    {
        id: 117,
        name: "Lulu",
        type: "RANGED",
    },
    {
        id: 99,
        name: "Lux",
        type: "RANGED",
    },
    {
        id: 54,
        name: "Malphite",
        type: "MELEE",
    },
    {
        id: 90,
        name: "Malzahar",
        type: "RANGED",
    },
    {
        id: 57,
        name: "Maokai",
        type: "MELEE",
    },
    {
        id: 11,
        name: "Master Yi",
        type: "MELEE",
    },
    {
        id: 21,
        name: "Miss Fortune",
        type: "RANGED",
    },
    {
        id: 82,
        name: "Mordekaiser",
        type: "MELEE",
    },
    {
        id: 25,
        name: "Morgana",
        type: "RANGED",
    },
    {
        id: 267,
        name: "Nami",
        type: "RANGED",
    },
    {
        id: 75,
        name: "Nasus",
        type: "MELEE",
    },
    {
        id: 111,
        name: "Nautilus",
        type: "MELEE",
    },
    {
        id: 518,
        name: "Neeko",
        type: "RANGED",
    },
    {
        id: 76,
        name: "Nidalee",
        type: "RANGED",
    },
    {
        id: 895,
        name: "Nilah",
        type: "MELEE",
    },
    {
        id: 56,
        name: "Nocturne",
        type: "MELEE",
    },
    {
        id: 20,
        name: "Nunu & Willump",
        type: "MELEE",
    },
    {
        id: 2,
        name: "Olaf",
        type: "MELEE",
    },
    {
        id: 61,
        name: "Orianna",
        type: "RANGED",
    },
    {
        id: 516,
        name: "Ornn",
        type: "MELEE",
    },
    {
        id: 80,
        name: "Pantheon",
        type: "MELEE",
    },
    {
        id: 78,
        name: "Poppy",
        type: "MELEE",
    },
    {
        id: 555,
        name: "Pyke",
        type: "MELEE",
    },
    {
        id: 246,
        name: "Qiyana",
        type: "MELEE",
    },
    {
        id: 133,
        name: "Quinn",
        type: "RANGED",
    },
    {
        id: 497,
        name: "Rakan",
        type: "RANGED",
    },
    {
        id: 33,
        name: "Rammus",
        type: "MELEE",
    },
    {
        id: 421,
        name: "Rek'Sai",
        type: "MELEE",
    },
    {
        id: 526,
        name: "Rell",
        type: "MELEE",
    },
    {
        id: 888,
        name: "Renata Glasc",
        type: "RANGED",
    },
    {
        id: 58,
        name: "Renekton",
        type: "MELEE",
    },
    {
        id: 107,
        name: "Rengar",
        type: "MELEE",
    },
    {
        id: 92,
        name: "Riven",
        type: "MELEE",
    },
    {
        id: 68,
        name: "Rumble",
        type: "MELEE",
    },
    {
        id: 13,
        name: "Ryze",
        type: "RANGED",
    },
    {
        id: 360,
        name: "Samira",
        type: "RANGED",
    },
    {
        id: 113,
        name: "Sejuani",
        type: "MELEE",
    },
    {
        id: 235,
        name: "Senna",
        type: "RANGED",
    },
    {
        id: 147,
        name: "Seraphine",
        type: "RANGED",
    },
    {
        id: 875,
        name: "Sett",
        type: "MELEE",
    },
    {
        id: 35,
        name: "Shaco",
        type: "MELEE",
    },
    {
        id: 98,
        name: "Shen",
        type: "MELEE",
    },
    {
        id: 102,
        name: "Shyvana",
        type: "MELEE",
    },
    {
        id: 27,
        name: "Singed",
        type: "MELEE",
    },
    {
        id: 14,
        name: "Sion",
        type: "MELEE",
    },
    {
        id: 15,
        name: "Sivir",
        type: "RANGED",
    },
    {
        id: 72,
        name: "Skarner",
        type: "MELEE",
    },
    {
        id: 37,
        name: "Sona",
        type: "RANGED",
    },
    {
        id: 16,
        name: "Soraka",
        type: "RANGED",
    },
    {
        id: 50,
        name: "Swain",
        type: "RANGED",
    },
    {
        id: 517,
        name: "Sylas",
        type: "MELEE",
    },
    {
        id: 134,
        name: "Syndra",
        type: "RANGED",
    },
    {
        id: 223,
        name: "Tahm Kench",
        type: "MELEE",
    },
    {
        id: 163,
        name: "Taliyah",
        type: "RANGED",
    },
    {
        id: 91,
        name: "Talon",
        type: "MELEE",
    },
    {
        id: 44,
        name: "Taric",
        type: "MELEE",
    },
    {
        id: 17,
        name: "Teemo",
        type: "RANGED",
    },
    {
        id: 412,
        name: "Thresh",
        type: "RANGED",
    },
    {
        id: 18,
        name: "Tristana",
        type: "RANGED",
    },
    {
        id: 48,
        name: "Trundle",
        type: "MELEE",
    },
    {
        id: 23,
        name: "Tryndamere",
        type: "MELEE",
    },
    {
        id: 4,
        name: "Twisted Fate",
        type: "RANGED",
    },
    {
        id: 29,
        name: "Twitch",
        type: "RANGED",
    },
    {
        id: 77,
        name: "Udyr",
        type: "MELEE",
    },
    {
        id: 6,
        name: "Urgot",
        type: "RANGED",
    },
    {
        id: 110,
        name: "Varus",
        type: "RANGED",
    },
    {
        id: 67,
        name: "Vayne",
        type: "RANGED",
    },
    {
        id: 45,
        name: "Veigar",
        type: "RANGED",
    },
    {
        id: 161,
        name: "Vel'Koz",
        type: "RANGED",
    },
    {
        id: 711,
        name: "Vex",
        type: "RANGED",
    },
    {
        id: 254,
        name: "Vi",
        type: "MELEE",
    },
    {
        id: 234,
        name: "Viego",
        type: "MELEE",
    },
    {
        id: 112,
        name: "Viktor",
        type: "RANGED",
    },
    {
        id: 8,
        name: "Vladimir",
        type: "RANGED",
    },
    {
        id: 106,
        name: "Volibear",
        type: "MELEE",
    },
    {
        id: 19,
        name: "Warwick",
        type: "MELEE",
    },
    {
        id: 62,
        name: "Wukong",
        type: "MELEE",
    },
    {
        id: 498,
        name: "Xayah",
        type: "RANGED",
    },
    {
        id: 101,
        name: "Xerath",
        type: "RANGED",
    },
    {
        id: 5,
        name: "Xin Zhao",
        type: "MELEE",
    },
    {
        id: 157,
        name: "Yasuo",
        type: "MELEE",
    },
    {
        id: 777,
        name: "Yone",
        type: "MELEE",
    },
    {
        id: 83,
        name: "Yorick",
        type: "MELEE",
    },
    {
        id: 350,
        name: "Yuumi",
        type: "RANGED",
    },
    {
        id: 154,
        name: "Zac",
        type: "MELEE",
    },
    {
        id: 238,
        name: "Zed",
        type: "MELEE",
    },
    {
        id: 221,
        name: "Zeri",
        type: "RANGED",
    },
    {
        id: 115,
        name: "Ziggs",
        type: "RANGED",
    },
    {
        id: 26,
        name: "Zilean",
        type: "RANGED",
    },
    {
        id: 142,
        name: "Zoe",
        type: "RANGED",
    },
    {
        id: 143,
        name: "Zyra",
        type: "RANGED",
    },
];

export default champs;
