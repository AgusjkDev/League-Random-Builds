import { useState } from "react";

import { useRandomBuild } from "../hooks";
import { Header, Container, BuildForm, BuildDisplay, Footer } from "../components";

const Index = () => {
    const [buildConfig, setBuildConfig] = useState<BuildConfig | null>(null);
    const { randomBuild, isGenerating } = useRandomBuild(buildConfig);

    return (
        <>
            <Header />

            <Container>
                <BuildForm isGenerating={isGenerating} setBuildConfig={setBuildConfig} />

                <BuildDisplay randomBuild={randomBuild} isGenerating={isGenerating} />
            </Container>

            <Footer />
        </>
    );
};

export default Index;
