import { MouseEvent, useState, useEffect } from "react";
import Image from "next/image";

import { gamemodes } from "../../data";
import Label from "./Label";

const SelectGamemode = ({ gamemode, setGamemode }: SelectGamemodeProps) => {
    const [clickSound, setClickSound] = useState<HTMLAudioElement>({} as HTMLAudioElement);

    const isSrActive = !gamemode || gamemode.id === "sr";
    const isAramActive = !gamemode || gamemode.id === "aram";

    const handleClick = (e: MouseEvent<HTMLButtonElement> & { target: HTMLButtonElement }) => {
        clickSound.currentTime = 0;
        clickSound.play();

        if (e.target.id === "sr") {
            setGamemode((isSrActive && isAramActive) || !isAramActive ? gamemodes.aram : null);
        } else {
            setGamemode((isAramActive && isSrActive) || !isSrActive ? gamemodes.sr : null);
        }
    };

    useEffect(() => {
        setClickSound(new Audio("/sounds/gamemode.ogg"));
    }, []);

    return (
        <div className="w-3/5 sm:w-1/2 md:w-[35%] lg:w-[27.5%] xl:w-1/4 2xl:w-[17.5%] flex flex-col items-center gap-2">
            <Label>Select gamemode</Label>

            <div className="w-full flex flex-wrap justify-around gap-2">
                <button
                    type="button"
                    aria-label="Summoner's Rift Button"
                    onClick={handleClick}
                    className="relative w-24 h-24 md:w-28 md:h-28"
                >
                    <Image
                        id="sr"
                        alt={`Summoner's Rift ${isSrActive ? "Active" : "Inactive"}`}
                        src={`/imgs/maps/${isSrActive ? "sr-on" : "sr-off"}.png`}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </button>

                <button
                    type="button"
                    aria-label="ARAM Button"
                    onClick={handleClick}
                    className="relative w-24 h-24 md:w-28 md:h-28"
                >
                    <Image
                        id="aram"
                        alt={`ARAM ${isAramActive ? "Active" : "Inactive"}`}
                        src={`/imgs/maps/${isAramActive ? "aram-on" : "aram-off"}.png`}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </button>
            </div>
        </div>
    );
};

export default SelectGamemode;
