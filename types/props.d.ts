/// <reference types="react" />
/// <reference path="./build.d.ts" />

type ContainerProps = {
    children: React.ReactNode;
};

type BuildFormProps = {
    isGenerating: boolean;
    setBuildConfig: (buildConfig: BuildConfig) => void;
};

type LabelProps = {
    children: React.ReactNode;
};

type SelectChampProps = {
    champs: Champ[];
    setChamp: (champ: Champ | null) => void;
};

type SelectGamemodeProps = {
    gamemode: Gamemode | null;
    setGamemode: (gamemode: Gamemode | null) => void;
};

type GenerateButtonProps = {
    isGenerating: boolean;
};

type BuildDisplayProps = {
    randomBuild: RandomBuild | null;
    isGenerating: boolean;
};

type ChampProps = {
    champ: Champ;
};

type GamemodeProps = {
    gamemode: Gamemode;
};

type ItemsProps = {
    items: Item[];
};

type RoleAndSpellsProps = {
    role: Role;
    spells: Spell[];
};
