import { useState, useEffect } from "react";
import Image from "next/image";

const GenerateButton = ({ isGenerating }: GenerateButtonProps) => {
    const [buttonImage, setButtonImage] = useState("/imgs/generate.png");
    const [clickSound, setClickSound] = useState<HTMLAudioElement>({} as HTMLAudioElement);

    useEffect(() => {
        const sound = new Audio("/sounds/generate.ogg");
        sound.volume = 0.75;
        sound.playbackRate = 1.25;

        setClickSound(sound);
    }, []);

    useEffect(() => {
        setButtonImage(`/imgs/${isGenerating ? "generate-disabled" : "generate"}.png`);
    }, [isGenerating]);

    return (
        <button
            type="submit"
            aria-label="Generate Random Build"
            className={isGenerating ? "hover:cursor-not-allowed" : ""}
            onClick={() => {
                if (!isGenerating) {
                    clickSound.currentTime = 0;
                    clickSound.play();
                }
            }}
            onMouseEnter={() => !isGenerating && setButtonImage("/imgs/generate-hover.png")}
            onMouseLeave={() => !isGenerating && setButtonImage("/imgs/generate.png")}
        >
            <Image
                alt={`Generate ${isGenerating ? "disabled" : ""}`}
                src={buttonImage}
                width="175px"
                height="48px"
                priority
            />
        </button>
    );
};

export default GenerateButton;
