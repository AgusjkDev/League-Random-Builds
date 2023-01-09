// Patch Version: 12.14

const allItems: AllItems = {
    boots: [
        {
            id: 3006,
            name: "Berserker's Greaves",
            alias: "3006_class_t2_berserkersgreaves",
        },
        {
            id: 3009,
            name: "Boots of Swiftness",
            alias: "3009_class_t2_bootsofswiftness",
        },
        {
            id: 3020,
            name: "Sorcerer's Shoes",
            alias: "3020_class_t2_sorcerersshoes",
        },
        {
            id: 3047,
            name: "Plated Steelcaps",
            alias: "3047_class_t2_ninjatabi",
        },
        {
            id: 3111,
            name: "Mercury's Treads",
            alias: "3111_class_t2_mercurystreads",
        },
        {
            id: 3117,
            name: "Mobility Boots",
            alias: "3117_class_t2_bootsofmobility",
        },
        {
            id: 3158,
            name: "Ionian Boots of Lucidity",
            alias: "3158_class_t2_ionianbootsoflucidity",
        },
    ],
    legendaries: [
        {
            id: 3003,
            name: "Archangel's Staff",
            alias: "3003_mage_t3_archangelstaff",
        },
        { id: 3004, name: "Manamune", alias: "3004_marksman_t3_manamune" },
        {
            id: 3011,
            name: "Chemtech Putrifier",
            alias: "3011_enchanter_t3_chemtechfumigator",
        },
        {
            id: 3026,
            name: "Guardian Angel",
            alias: "3026_fighter_t3_guardianangel",
        },
        {
            id: 3031,
            name: "Infinity Edge",
            alias: "3031_marksman_t3_infinityedge",
        },
        {
            id: 3033,
            name: "Mortal Reminder",
            alias: "3033_marksman_t3_mortalreminder",
        },
        {
            id: 3036,
            name: "Lord Dominik's Regards",
            alias: "3036_marksman_t3_dominikregards",
        },
        {
            id: 3041,
            name: "Mejai's Soulstealer",
            alias: "3041_mage_t2_mejaissoulstealer",
        },
        {
            id: 3046,
            name: "Phantom Dancer",
            alias: "3046_marksman_t3_phantomdancer",
        },
        {
            id: 3050,
            name: "Zeke's Convergence",
            alias: "3050_enchanter_t3_zekesconvergence",
        },
        { id: 3053, name: "Sterak's Gage", alias: "3053_steraks_gage" },
        {
            id: 3065,
            name: "Spirit Visage",
            alias: "3065_tank_t3_spiritvisage",
        },
        {
            id: 3071,
            name: "Black Cleaver",
            alias: "3071_fighter_t3_blackcleaver",
        },
        {
            id: 3072,
            name: "Bloodthirster",
            alias: "3072_fighter_t3_bloodthirster",
        },
        {
            id: 3074,
            name: "Ravenous Hydra",
            alias: "3074_fighter_t3_ravenoushydra",
        },
        { id: 3075, name: "Thornmail", alias: "3075_tank_t3_thornmail" },
        { id: 3083, name: "Warmog's Armor", alias: "3083_tank_t3_warmogs" },
        {
            id: 3085,
            name: "Runaan's Hurricane",
            alias: "3085_marksman_t3_runaans",
        },
        {
            id: 3089,
            name: "Rabadon's Deathcap",
            alias: "3089_mage_t3_deathcap",
        },
        { id: 3091, name: "Wit's End", alias: "3091_fighter_t3_witsend" },
        {
            id: 3094,
            name: "Rapid Firecannon",
            alias: "3094_marksman_t3_rapidfirehandcannon",
        },
        { id: 3095, name: "Stormrazor", alias: "3095_windblade" },
        { id: 3100, name: "Lich Bane", alias: "3100_mage_t3_lichbane" },
        {
            id: 3102,
            name: "Banshee's Veil",
            alias: "3102_mage_t3_bansheesveil",
        },
        {
            id: 3107,
            name: "Redemption",
            alias: "3107_enchanter_t3_redemption.pie_c_12_23",
        },
        {
            id: 3109,
            name: "Knight's Vow",
            alias: "3109_tank_t3_knightsvow",
        },
        {
            id: 3110,
            name: "Frozen Heart",
            alias: "3110_tank_t3_frozenheart",
        },
        {
            id: 3115,
            name: "Nashor's Tooth",
            alias: "3115_mage_t3_nashorstooth",
        },
        {
            id: 3116,
            name: "Rylai's Crystal Scepter",
            alias: "3116_mage_t3_rylajscrystalscepter",
        },
        {
            id: 3119,
            name: "Winter's Approach",
            alias: "3119_wintersapproach",
        },
        {
            id: 3124,
            name: "Guinsoo's Rageblade",
            alias: "3124_marksman_t3_guinsoosrageblade",
        },
        { id: 3135, name: "Void Staff", alias: "3135_mage_t3_voidstaff" },
        {
            id: 3139,
            name: "Mercurial Scimitar",
            alias: "3139_marksman_t3_mercurialscimitar",
        },
        {
            id: 3142,
            name: "Youmuu's Ghostblade",
            alias: "3142_assassin_t3_youmuusghostblade.pie_c_12_23",
        },
        {
            id: 3143,
            name: "Randuin's Omen",
            alias: "3143_tank_t3_randuinsomen.pie_c_12_23",
        },
        {
            id: 3153,
            name: "Blade of the Ruined King",
            alias: "3153_fighter_t3_bladeoftheruinedking.pie_c_12_23",
        },
        {
            id: 3156,
            name: "Maw of Malmortius",
            alias: "3156_fighter_t3_mawofmalmortius",
        },
        {
            id: 3157,
            name: "Zhonya's Hourglass",
            alias: "3157_mage_t3_zhonyashourglass.pie_c_12_23",
        },
        {
            id: 3165,
            name: "Morellonomicon",
            alias: "3165_mage_t3_morellonomicon",
        },
        {
            id: 3179,
            name: "Umbral Glaive",
            alias: "3179_assassin_t3_umbralglaive",
        },
        { id: 3181, name: "Hullbreaker", alias: "3181_hullbreaker" },
        {
            id: 3193,
            name: "Gargoyle Stoneplate",
            alias: "3193_tank_t3_gargoylestoneplate",
        },
        {
            id: 3222,
            name: "Mikael's Blessing",
            alias: "3222_enchanter_t3_mikaelsblessing",
        },
        {
            id: 3504,
            name: "Ardent Censer",
            alias: "3504_enchanter_t3_ardentcenser",
        },
        {
            id: 3508,
            name: "Essence Reaver",
            alias: "3508_marksman_t3_essencereaver",
        },
        {
            id: 3742,
            name: "Dead Man's Plate",
            alias: "3742_tank_t3_deadmansplate",
        },
        {
            id: 3748,
            name: "Titanic Hydra",
            alias: "3748_fighter_t3_titanichydra",
        },
        {
            id: 3814,
            name: "Edge of Night",
            alias: "3814_assassin_t3_edgeofnight",
        },
        {
            id: 4401,
            name: "Force of Nature",
            alias: "4401_tank_t3_forceofnature",
        },
        {
            id: 4628,
            name: "Horizon Focus",
            alias: "4628_mage_t3_horizonfocus",
        },
        {
            id: 4629,
            name: "Cosmic Drive",
            alias: "4629_mage_t3_cosmicdrive",
        },
        {
            id: 4637,
            name: "Demonic Embrace",
            alias: "4637_mage_t3_demonicembrace",
        },
        { id: 4645, name: "Shadowflame", alias: "4645_shadowflame" },
        {
            id: 6035,
            name: "Silvermere Dawn",
            alias: "6035_fighter_t3_silvermeredawn",
        },
        {
            id: 6333,
            name: "Death's Dance",
            alias: "6333_fighter_t3_deathsdance",
        },
        {
            id: 6609,
            name: "Chempunk Chainsword",
            alias: "6609_fighter_t3_chempunkchainsword",
        },
        {
            id: 6616,
            name: "Staff of Flowing Water",
            alias: "3744_enchanter_t3_staffofflowingwater",
        },
        {
            id: 6675,
            name: "Navori Quickblades",
            alias: "6675_marksman_t3_navoriquickblades",
        },
        {
            id: 6676,
            name: "The Collector",
            alias: "6676_marksman_t3_thecollector",
        },
        {
            id: 6694,
            name: "Serylda's Grudge",
            alias: "6694_assasin_t3_seryldasgrudge",
        },
        {
            id: 6695,
            name: "Serpent's Fang",
            alias: "6695_assassin_t3_serpentsfang",
        },
        { id: 6696, name: "Axiom Arc", alias: "6696_axiomarc" },
        {
            id: 8001,
            name: "Anathema's Chains",
            alias: "8001_tank_t3_anathemaschains",
        },
        {
            id: 8020,
            name: "Abyssal Mask",
            alias: "8020_tank_t3_abyssalmask",
        },
    ],
    mythics: [
        {
            id: 2065,
            name: "Shurelya's Battlesong",
            alias: "2065_tank_t4_shurelyasbattlesong",
        },
        { id: 3001, name: "Evenshroud", alias: "3001_support_lunari" },
        {
            id: 3068,
            name: "Sunfire Aegis",
            alias: "3068_tank_t4_sunfireaegis",
        },
        {
            id: 3078,
            name: "Trinity Force",
            alias: "3078_fighter_t4_trinityforce",
        },
        {
            id: 3152,
            name: "Hextech Rocketbelt",
            alias: "3152_mage_t4_hextechrocketbelt.pie_c_12_23",
        },
        {
            id: 3190,
            name: "Locket of the Iron Solari",
            alias: "3190_enchanter_t4_locketofironsolari.pie_c_12_23",
        },
        {
            id: 4005,
            name: "Imperial Mandate",
            alias: "4005_enchanter_t4_imperialmandate",
        },
        { id: 4633, name: "Riftmaker", alias: "4633_mage_t4_riftmaker" },
        {
            id: 4636,
            name: "Night Harvester",
            alias: "4636_mage_t4_nightharvester",
        },
        {
            id: 4644,
            name: "Crown of the Shattered Queen",
            alias: "4644_crown",
        },
        {
            id: 6617,
            name: "Moonstone Renewer",
            alias: "6617_enchanter_t4_moonstonerenewer",
        },
        {
            id: 6630,
            name: "Goredrinker",
            alias: "6630_fighter_t4_goredrinker.pie_c_12_23",
        },
        {
            id: 6631,
            name: "Stridebreaker",
            alias: "6631_fighter_t4_stridebreaker.pie_c_12_23",
        },
        {
            id: 6632,
            name: "Divine Sunderer",
            alias: "6632_fighter_t4_divinedevourer",
        },
        {
            id: 6653,
            name: "Liandry's Anguish",
            alias: "6653_mage_t4_liandrysanguish",
        },
        {
            id: 6655,
            name: "Luden's Tempest",
            alias: "6655_mage_t4_ludenstempest",
        },
        { id: 6656, name: "Everfrost", alias: "6656_mage_t4_everfrost.pie_c_12_23" },
        {
            id: 6662,
            name: "Iceborn Gauntlet",
            alias: "6662_tank_t3_iceborngauntlet",
        },
        {
            id: 6664,
            name: "Turbo Chemtank",
            alias: "6664_tank_t4_acceleratedchemtank.pie_c_12_23",
        },
        {
            id: 6671,
            name: "Galeforce",
            alias: "6671_marksman_t4_galeforce.pie_c_12_23",
        },
        {
            id: 6672,
            name: "Kraken Slayer",
            alias: "6672_marksman_t4_behemothslayer",
        },
        {
            id: 6673,
            name: "Immortal Shieldbow",
            alias: "6673_marksman_t4_crimsonshieldbow",
        },
        {
            id: 6691,
            name: "Duskblade of Draktharr",
            alias: "6691_assassin_t4_duskbladeofdraktharr",
        },
        { id: 6692, name: "Eclipse", alias: "6692_assassin_t4_eclipse" },
        {
            id: 6693,
            name: "Prowler's Claw",
            alias: "6693_assassin_t4_prowlersclaw.pie_c_12_23",
        },
    ],
};

export default allItems;
