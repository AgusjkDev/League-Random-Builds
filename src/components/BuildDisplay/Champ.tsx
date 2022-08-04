import Image from "next/image";

const Champ = ({ champ }: ChampProps) => {
    const { id, name } = champ;

    return (
        <div className="flex flex-col items-center md:gap-2">
            <p className="font-bold text-2xl text-center">{name}</p>

            <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image
                    alt={name}
                    src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        </div>
    );
};

export default Champ;
