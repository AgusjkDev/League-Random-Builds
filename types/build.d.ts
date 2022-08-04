type Champ = {
    id: number;
    name: string;
    type: "MELEE" | "RANGED";
};

type Gamemode = {
    id: "sr" | "aram";
    name: "Summoner's Rift" | "ARAM";
    imagePath: string;
};

type Gamemodes = {
    sr: Gamemode;
    aram: Gamemode;
};

type Role = {
    id: string;
    name: string;
    imagePath: string;
};

type Roles = {
    top: Role;
    jungle: Role;
    mid: Role;
    bottom: Role;
    support: Role;
};

type Item = {
    id: number;
    name: string;
    alias: string;
};

type Spell = {
    id: string;
    name: string;
    imagePath: string;
};

type Spells = {
    global: Spell[];
    aram: Spell[];
    smite: Spell;
    teleport: Spell;
};

type BuildConfig = {
    champ: Champ | null;
    gamemode: Gamemode | null;
};

type RandomBuild = {
    champ: Champ;
    gamemode: Gamemode;
    role: Role;
    items: Item[];
    spells: Spell[];
};
