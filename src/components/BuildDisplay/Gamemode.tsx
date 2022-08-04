import Image from "next/image";

const Gamemode = ({ gamemode }: GamemodeProps) => {
    const { name, imagePath } = gamemode;

    return (
        <div className="flex flex-col items-center md:gap-2">
            <p className="font-bold text-xl text-center">{name}</p>

            <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image alt={name} src={imagePath} layout="fill" objectFit="cover" />
            </div>
        </div>
    );
};

export default Gamemode;
