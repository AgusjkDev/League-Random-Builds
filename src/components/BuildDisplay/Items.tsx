import Image from "next/image";

const Items = ({ items }: ItemsProps) => {
    return (
        <div className="grid grid-cols-3">
            {items.map(({ id, name, alias }) => (
                <div key={id} className="relative w-12 h-12 md:w-14 md:h-14">
                    <Image
                        alt={name}
                        src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/${alias}.png`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default Items;
