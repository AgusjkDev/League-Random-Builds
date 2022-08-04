import { FormEvent, useState } from "react";

import { champs } from "../../data";
import SelectChamp from "./SelectChamp";
import SelectGamemode from "./SelectGamemode";
import GenerateButton from "./GenerateButton";

const BuildForm = ({ isGenerating, setBuildConfig }: BuildFormProps) => {
    const [champ, setChamp] = useState<Champ | null>(null);
    const [gamemode, setGamemode] = useState<Gamemode | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isGenerating) {
            setBuildConfig({ champ, gamemode, ...(!champ && { champs }) });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center justify-center gap-8"
        >
            <SelectChamp champs={champs} setChamp={setChamp} />

            <SelectGamemode gamemode={gamemode} setGamemode={setGamemode} />

            <GenerateButton isGenerating={isGenerating} />
        </form>
    );
};

export default BuildForm;
