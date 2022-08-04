import { useState, useCallback, useEffect } from "react";

const useRandomBuild = (buildConfig: BuildConfig | null) => {
    const [randomBuild, setRandomBuild] = useState<RandomBuild | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const getRandomBuild = useCallback(async () => {
        const request = await fetch("/api/getRandomBuild", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ buildConfig }),
        });
        const response = await request.json();

        return response.randomBuild;
    }, [buildConfig]);

    useEffect(() => {
        if (!buildConfig) return;

        setIsGenerating(true);

        getRandomBuild().then(build => {
            setRandomBuild(build);

            setTimeout(() => {
                setIsGenerating(false);
            }, 1000);
        });
    }, [buildConfig, getRandomBuild]);

    return { randomBuild, isGenerating };
};

export default useRandomBuild;
