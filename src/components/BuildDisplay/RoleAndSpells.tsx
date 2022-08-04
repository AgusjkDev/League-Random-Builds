import Image from "next/image";

const RoleAndSpells = ({ role, spells }: RoleAndSpellsProps) => {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
                <Image alt={role.name} src={role.imagePath} layout="fill" objectFit="cover" />
            </div>

            <div className="flex gap-3">
                {spells.map(({ id, name, imagePath }) => (
                    <div key={id} className="relative w-12 h-12 md:w-14 md:h-14">
                        <Image alt={name} src={imagePath} layout="fill" objectFit="cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoleAndSpells;
