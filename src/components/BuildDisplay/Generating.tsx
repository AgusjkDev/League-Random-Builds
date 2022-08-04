import Image from "next/image";

const Generating = () => {
    return (
        <div className="absolute w-full h-full flex items-center justify-center">
            <Image
                alt="Generating..."
                src="/imgs/loading.gif"
                width="96px"
                height="96px"
                priority
            />
        </div>
    );
};

export default Generating;
