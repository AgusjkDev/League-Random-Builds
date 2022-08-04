import { memo, useState, useEffect } from "react";

import Label from "./Label";

const SelectChamp = ({ champs, setChamp }: SelectChampProps) => {
    const [selectSound, setSelectSound] = useState<HTMLAudioElement>({} as HTMLAudioElement);

    const handleChange = (e: any) => {
        selectSound.currentTime = 0;
        selectSound.play();

        setChamp(champs.find(champ => champ.id === Number(e.target.value)) ?? null);
    };

    useEffect(() => {
        setSelectSound(new Audio("/sounds/select.ogg"));
    }, []);

    return (
        <div className="w-3/4 sm:w-3/5 md:w-2/5 xl:w-[35%] 2xl:w-1/4 flex flex-col items-center gap-2">
            <Label>Select your champion</Label>

            <select
                defaultValue="0"
                onChange={handleChange}
                className="p-3 w-full rounded-full font-bold text-black outline-none"
            >
                <option value="0">-- Random --</option>

                {champs.map(({ id, name }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default memo(SelectChamp);
