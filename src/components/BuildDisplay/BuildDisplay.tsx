import Generating from "./Generating";
import Champ from "./Champ";
import Gamemode from "./Gamemode";
import RoleAndSpells from "./RoleAndSpells";
import Items from "./Items";

const BuildDisplay = ({ randomBuild, isGenerating }: BuildDisplayProps) => {
    return (
        <div className="relative w-[90%] sm:w-3/4 md:w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-1/2 bg-black/75 rounded">
            {isGenerating && <Generating />}

            {randomBuild && (
                <div
                    className={`${
                        isGenerating ? "opacity-0" : ""
                    } h-full grid grid-cols-2 md:flex items-center justify-items-center md:justify-around`}
                >
                    <Champ champ={randomBuild.champ} />

                    <Gamemode gamemode={randomBuild.gamemode} />

                    <RoleAndSpells role={randomBuild.role} spells={randomBuild.spells} />

                    <Items items={randomBuild.items} />
                </div>
            )}
        </div>
    );
};

export default BuildDisplay;
